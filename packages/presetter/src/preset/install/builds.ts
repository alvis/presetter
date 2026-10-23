import { info } from 'node:console';

import { execa, ExecaError } from 'execa';

import type { Options } from 'execa';

import type { PackageManager } from '../use';

import type { InstallParams } from './packages';

/**
 * resolves pending dependency builds after a blocked install or an adoption rerun
 * @param manager the selected package manager
 * @param params the target project and approval policy
 * @param blocked the failure from a blocked install, if any
 * @returns whether bootstrap can proceed
 */
export async function resolveBuilds(
  manager: PackageManager,
  params: InstallParams,
  blocked?: ExecaError & Error,
): Promise<boolean> {
  const pending = await pendingBuilds(
    manager,
    params.cwd,
    blocked !== undefined,
  );
  if (pending.length === 0) {
    if (blocked) {
      throw blocked;
    }

    return true;
  }

  return approveBuilds(manager, pending, params);
}

/**
 * runs an install and stages npm dependencies safely when strict scripts block it
 * @param manager the selected manager
 * @param args the complete install arguments
 * @param options the project directory and prior build refusal
 * @param options.cwd the target directory
 * @param options.skipBuilds whether scripts were declined earlier
 * @returns a blocked-build failure to resolve, if installation reported one
 */
export async function runInstall(
  manager: PackageManager,
  args: string[],
  options: { cwd: string; skipBuilds: boolean },
): Promise<(ExecaError & Error) | undefined> {
  try {
    await execa(
      manager,
      [...args, ...(options.skipBuilds ? ['--ignore-scripts'] : [])],
      commandOptions(options.cwd),
    );
  } catch (error) {
    if (!isBlockedBuilds(error, manager)) {
      throw error;
    }
    // npm's strict policy fails before reification; stage without running scripts.
    if (manager === 'npm') {
      await execa(
        manager,
        [...args, '--ignore-scripts'],
        commandOptions(options.cwd),
      );
    }

    return error;
  }

  return undefined;
}

/**
 * asks the selected manager for packages whose builds still need approval
 * @param manager the selected package manager
 * @param cwd the target project
 * @param blocked whether the manager just rejected an install under its build policy
 * @returns exact package identifiers reported by the manager
 */
async function pendingBuilds(
  manager: PackageManager,
  cwd: string,
  blocked: boolean,
): Promise<string[]> {
  if (manager === 'pnpm') {
    const { stdout } = await execa(manager, ['ignored-builds'], { cwd });

    return resolvePnpmBuilds(cwd, parseIgnoredBuilds(stdout, blocked));
  }
  if (manager !== 'npm') {
    return [];
  }
  if (!blocked) {
    // a declined strict install can leave every dependency installed on a rerun
    const { stdout } = await execa(
      manager,
      ['config', 'get', 'strict-allow-scripts'],
      { cwd },
    );
    if (stdout.trim() !== 'true') {
      return [];
    }
  }
  const { stdout } = await execa(
    manager,
    ['approve-scripts', '--allow-scripts-pending', '--json'],
    { cwd },
  );
  const result = JSON.parse(stdout) as {
    allowScripts: Array<{ name: string; changes: Array<{ key: string }> }>;
  };

  return result.allowScripts.flatMap(({ changes }) =>
    changes.map(({ key }) => key),
  );
}

/** dependency tree entries returned by pnpm list --json */
interface PnpmDependency {
  version?: string;
  dependencies?: Record<string, PnpmDependency>;
  devDependencies?: Record<string, PnpmDependency>;
  optionalDependencies?: Record<string, PnpmDependency>;
}

/**
 * pins registry build names to installed versions without broadening approvals
 * @param cwd the target project
 * @param pending identifiers reported by pnpm ignored-builds
 * @returns exact installed package specifications for approval
 */
async function resolvePnpmBuilds(
  cwd: string,
  pending: string[],
): Promise<string[]> {
  const names = pending.filter((name) => packageName(name) === name);
  if (names.length === 0) {
    return pending;
  }
  const { stdout } = await execa(
    'pnpm',
    ['list', ...names, '--depth', 'Infinity', '--json'],
    { cwd },
  );
  const trees = JSON.parse(stdout) as PnpmDependency[];
  const versions = new Set(pending.filter((name) => !names.includes(name)));
  const found = new Set<string>();

  function visit(tree: PnpmDependency): void {
    for (const dependencies of [
      tree.dependencies,
      tree.devDependencies,
      tree.optionalDependencies,
    ]) {
      for (const [name, dependency] of Object.entries(dependencies ?? {})) {
        if (names.includes(name) && dependency.version) {
          versions.add(`${name}@${dependency.version}`);
          found.add(name);
        }
        visit(dependency);
      }
    }
  }
  trees.forEach(visit);
  if (names.some((name) => !found.has(name))) {
    throw new Error(
      `Cannot identify installed versions for pending pnpm builds: ${names.join(', ')}`,
    );
  }

  return [...versions];
}

/**
 * explains dependency paths and records only approvals explicitly given by stdin
 * @param manager the selected package manager
 * @param pending exact pending package identifiers
 * @param options target project and requested presets
 * @param options.cwd the target directory
 * @param options.presets the requested presets
 * @param options.readAnswer reads the next approval answer
 * @returns whether the user approved and the manager completed the builds
 */
async function approveBuilds(
  manager: PackageManager,
  pending: string[],
  options: {
    cwd: string;
    presets: string[];
    readAnswer: () => Promise<string>;
  },
): Promise<boolean> {
  const names = [...new Set(pending.map(packageName))];
  info('Pending install scripts in this project (with dependency paths):');
  await execa(
    manager,
    [manager === 'pnpm' ? 'why' : 'explain', ...names],
    commandOptions(options.cwd),
  );
  info(`${pending.join(', ')} need to run install scripts. Allow? (y/N)`);
  const answer = await options.readAnswer();
  if (!/^y(?:es)?$/i.test(answer.trim())) {
    const command =
      manager === 'pnpm'
        ? 'pnpm approve-builds'
        : `npm approve-scripts ${names.join(' ')}`;
    info(
      `Builds deferred. Run ${command}, then ${manager} rebuild ${names.join(' ')} and presetter bootstrap.`,
    );

    return false;
  }
  if (manager === 'pnpm') {
    await recordPnpmApprovals(options.cwd, pending);
  } else {
    await execa(
      manager,
      ['approve-scripts', ...names],
      commandOptions(options.cwd),
    );
  }
  await execa(manager, ['rebuild', ...names], commandOptions(options.cwd));

  return true;
}

/**
 * records exact approved builds through pnpm's project configuration command
 * @param cwd the target project
 * @param pending exact package specifications approved by the user
 */
async function recordPnpmApprovals(
  cwd: string,
  pending: string[],
): Promise<void> {
  const names = new Set(pending.map(packageName));
  const { stdout } = await execa(
    'pnpm',
    ['config', 'get', '--json', 'allowBuilds'],
    { cwd },
  );
  const existing = (
    !stdout.trim() || stdout.trim() === 'undefined' ? {} : JSON.parse(stdout)
  ) as Record<string, unknown> | null;
  const approvals = {
    ...Object.fromEntries(
      Object.entries(existing ?? {}).filter(
        ([name, value]) =>
          !names.has(name) || value !== 'set this to true or false',
      ),
    ),
    ...Object.fromEntries(pending.map((name) => [name, true])),
  };
  await execa(
    'pnpm',
    [
      'config',
      'set',
      '--location=project',
      '--json',
      'allowBuilds',
      JSON.stringify(approvals),
    ],
    commandOptions(cwd),
  );
}

/**
 * reads the automatic section of pnpm's human-readable ignored-builds output
 * @param output output from pnpm ignored-builds (which has no JSON option)
 * @param blocked whether an install failed because builds require approval
 * @returns pending package identifiers reported by pnpm
 */
function parseIgnoredBuilds(output: string, blocked: boolean): string[] {
  const section =
    /^Automatically ignored builds during installation:\r?\n((?: {2}[^\r\n]+(?:\r?\n|$))*)/m.exec(
      output,
    )?.[1];
  const packages = section?.trim().split(/\r?\n\s*/);

  if (
    !packages?.length ||
    packages.some(
      (name) =>
        !/^(?:@[a-z0-9._-]+\/)?[a-z0-9][a-z0-9._-]*(?:@.+)?$/.test(name) &&
        name !== 'None',
    )
  ) {
    if (!blocked) {
      return [];
    }
    throw new Error(
      `Cannot identify pending builds from pnpm ignored-builds:\n${output}`,
    );
  }

  return packages.filter((name) => name !== 'None');
}

/**
 * streams manager output while capturing failures and reserving stdin for approval
 * @param cwd the target project
 * @returns execa options for mutating manager commands
 */
function commandOptions(cwd: string): Options {
  return {
    cwd,
    stdin: 'ignore',
    stdout: ['inherit', 'pipe'],
    stderr: ['inherit', 'pipe'],
  } as const;
}

/**
 * recognizes the manager's blocked-build error without swallowing other failures
 * @param error the installation failure
 * @param manager the selected package manager
 * @returns whether the failure reports blocked dependency scripts
 */
function isBlockedBuilds(
  error: unknown,
  manager: PackageManager,
): error is ExecaError & Error {
  if (!(error instanceof ExecaError) || error.exitCode !== 1) {
    return false;
  }
  const code =
    manager === 'pnpm'
      ? 'ERR_PNPM_IGNORED_BUILDS'
      : manager === 'npm'
        ? 'ESTRICTALLOWSCRIPTS'
        : undefined;

  return (
    code !== undefined && `${error.stdout}\n${error.stderr}`.includes(code)
  );
}

/**
 * removes a version suffix from a scoped or unscoped package identifier
 * @param specification the package identifier reported by the manager
 * @returns the package name for dependency explanations and npm approvals
 */
function packageName(specification: string): string {
  const version = specification.indexOf('@', 1);

  return version < 0 ? specification : specification.slice(0, version);
}
