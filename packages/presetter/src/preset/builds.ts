import { info } from 'node:console';

import { execa, ExecaError } from 'execa';

import type { Options } from 'execa';

import type { InstallParams } from './install';
import type { PackageManager } from './use';

/** how a package manager gates and approves dependency install scripts */
interface BuildPolicy {
  /** error code of an install stopped by unapproved builds; without one, every install is checked */
  blockedCode?: string;
  /** whether a blocked install must be repeated without scripts to stage its dependencies */
  restage?: boolean;
  /** lists exact package identifiers whose builds still need approval */
  pending: (cwd: string, blocked: boolean) => Promise<string[]>;
  /** prints why each package is installed */
  explain: (cwd: string, names: string[]) => Promise<void>;
  /** manual steps that approve and run the deferred builds */
  hint: (names: string[]) => string;
  /** records the approvals and runs the approved builds */
  approve: (cwd: string, pending: string[], names: string[]) => Promise<void>;
}

/** how each package manager gates and approves dependency install scripts */
const BUILD_POLICIES: Record<PackageManager, BuildPolicy> = {
  npm: {
    blockedCode: 'ESTRICTALLOWSCRIPTS',
    // npm's strict policy fails before reification; stage without running scripts.
    restage: true,
    pending: pendingNpmBuilds,
    explain: async (cwd, names) => {
      await execa('npm', ['explain', ...names], commandOptions(cwd));
    },
    hint: (names) =>
      `npm approve-scripts ${names.join(' ')}, then npm rebuild ${names.join(' ')}`,
    approve: async (cwd, _pending, names) => {
      await execa('npm', ['approve-scripts', ...names], commandOptions(cwd));
      await execa('npm', ['rebuild', ...names], commandOptions(cwd));
    },
  },
  pnpm: {
    blockedCode: 'ERR_PNPM_IGNORED_BUILDS',
    pending: async (cwd, blocked) => {
      const { stdout } = await execa('pnpm', ['ignored-builds'], { cwd });

      return resolvePnpmBuilds(cwd, parseIgnoredBuilds(stdout, blocked));
    },
    explain: async (cwd, names) => {
      await execa('pnpm', ['why', ...names], commandOptions(cwd));
    },
    hint: (names) =>
      `pnpm approve-builds, then pnpm rebuild ${names.join(' ')}`,
    approve: async (cwd, pending, names) => {
      await recordPnpmApprovals(cwd, pending);
      await execa('pnpm', ['rebuild', ...names], commandOptions(cwd));
    },
  },
  bun: {
    // bun completes the install and only reports how many scripts it blocked
    pending: async (cwd) => {
      const { stdout } = await execa('bun', ['pm', 'untrusted'], { cwd });

      return [
        ...stdout.matchAll(
          /^\.\/(?:\S*\/)?node_modules\/((?:@[^/\s]+\/)?[^/\s]+) @(\S+)$/gm,
        ),
      ].map(([, name, version]) => `${name}@${version}`);
    },
    explain: async (cwd, names) => {
      // bun why explains one package per call
      for (const name of names) {
        await execa('bun', ['why', name], commandOptions(cwd));
      }
    },
    hint: (names) => `bun pm trust ${names.join(' ')}`,
    // bun pm trust records trustedDependencies and runs the scripts
    approve: async (cwd, _pending, names) => {
      await execa('bun', ['pm', 'trust', ...names], commandOptions(cwd));
    },
  },
};

/**
 * reports whether installs by this manager need a pending-build check even when they succeed
 * @param manager the selected package manager
 * @returns whether the manager installs without reporting blocked builds as a failure
 */
export function blocksSilently(manager: PackageManager): boolean {
  return BUILD_POLICIES[manager].blockedCode === undefined;
}

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
  const policy = BUILD_POLICIES[manager];
  const pending = await policy.pending(params.cwd, blocked !== undefined);
  if (pending.length === 0) {
    if (blocked) {
      throw blocked;
    }

    return true;
  }

  return approveBuilds(policy, pending, params);
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
    if (BUILD_POLICIES[manager].restage) {
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
 * asks npm for packages whose builds still need approval under its strict script policy
 * @param cwd the target project
 * @param blocked whether npm just rejected an install under its build policy
 * @returns exact package identifiers reported by npm
 */
async function pendingNpmBuilds(
  cwd: string,
  blocked: boolean,
): Promise<string[]> {
  if (!blocked) {
    // a declined strict install can leave every dependency installed on a rerun
    const { stdout } = await execa(
      'npm',
      ['config', 'get', 'strict-allow-scripts'],
      { cwd },
    );
    if (stdout.trim() !== 'true') {
      return [];
    }
  }
  const { stdout } = await execa(
    'npm',
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
 * @param policy the manager's build approval policy
 * @param pending exact pending package identifiers
 * @param options target project and answer reader
 * @param options.cwd the target directory
 * @param options.readAnswer reads the next approval answer
 * @returns whether the user approved and the manager completed the builds
 */
async function approveBuilds(
  policy: BuildPolicy,
  pending: string[],
  options: {
    cwd: string;
    readAnswer: () => Promise<string>;
  },
): Promise<boolean> {
  const names = [...new Set(pending.map(packageName))];
  info('Pending install scripts in this project (with dependency paths):');
  await policy.explain(options.cwd, names);
  info(`${pending.join(', ')} need to run install scripts. Allow? (y/N)`);
  const answer = await options.readAnswer();
  if (!/^y(?:es)?$/i.test(answer.trim())) {
    info(`Builds deferred. Run ${policy.hint(names)} and presetter bootstrap.`);

    return false;
  }
  await policy.approve(options.cwd, pending, names);

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
  const code = BUILD_POLICIES[manager].blockedCode;

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
