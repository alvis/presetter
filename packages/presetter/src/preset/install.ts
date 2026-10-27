import { info, warn } from 'node:console';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { blocksSilently, resolveBuilds, runInstall } from './builds';
import { writePackageJson } from './manifest';

import type { PackageJson } from 'type-fest';

import type { PackageManager } from './use';

/** package.json dependency section used by an installation */
type DependencyType = 'dependencies' | 'devDependencies' | 'peerDependencies';

/** resolved dependency maps from preset setup */
export type SetupPackages = Partial<
  Record<DependencyType, Record<string, string>>
>;

/** installation context and declaration-preservation policy */
export interface InstallParams {
  /** target project directory */
  cwd: string;
  /** reads the next build approval answer */
  readAnswer: () => Promise<string>;
  /** whether scripts were declined earlier */
  skipBuilds?: boolean;
  /** whether to replace entries the project declares with another specification */
  force?: boolean;
}

/** outcome shared across the preset and setup installation stages */
export interface InstallResult {
  /** whether bootstrap can proceed after blocked-build handling */
  build: boolean;
  /** whether a package-manager install ran */
  installed: boolean;
}

/** package-manager commands for each saved dependency section */
const INSTALL_ARGS = {
  npm: {
    dependencies: ['install', '--save-prod'],
    devDependencies: ['install', '-D'],
    peerDependencies: ['install', '--save-peer'],
  },
  pnpm: {
    dependencies: ['add'],
    devDependencies: ['add', '-D'],
    peerDependencies: ['add', '--save-peer'],
  },
  bun: {
    dependencies: ['add'],
    devDependencies: ['add', '-d'],
    peerDependencies: ['add', '--peer'],
  },
} satisfies Record<PackageManager, Record<DependencyType, string[]>>;

/**
 * installs missing setup packages and adds peers directly for existing runtime or dev entries
 * preserves existing sections and versions while carrying build refusals across groups
 * @param manager the selected package manager
 * @param packages dependency maps with requested version specifications
 * @param params the target project and approval policy
 * @returns the build decision and whether any manager install ran
 */
export async function installPackages(
  manager: PackageManager,
  packages: SetupPackages,
  params: InstallParams,
): Promise<InstallResult> {
  let build = !params.skipBuilds;
  let installed = false;
  for (const dependencyType of [
    'dependencies',
    'devDependencies',
    'peerDependencies',
  ] as const) {
    const specifications = await resolveMissingPackages(
      dependencyType,
      packages[dependencyType] ?? {},
      params,
    );
    if (specifications.length === 0) {
      continue;
    }
    info(`Installing ${specifications.join(', ')} with ${manager}`);
    installed = true;
    const blocked = await runInstall(
      manager,
      [...INSTALL_ARGS[manager][dependencyType], ...specifications],
      {
        cwd: params.cwd,
        skipBuilds: !build,
      },
    );
    if (build && (blocked !== undefined || blocksSilently(manager))) {
      build = await resolveBuilds(manager, params, blocked);
    }
  }

  return { build, installed };
}

/**
 * decides whether a requested package needs installing, warning about a differing declaration unless forced
 * @param request the requested package and specification, empty to accept any
 * @param declared the specification the project declares, if any
 * @param force whether to replace a differing declaration
 * @returns whether the package should be installed
 */
function requiresInstall(
  request: [string, string],
  declared: string | undefined,
  force?: boolean,
): boolean {
  const [name, version] = request;
  if (declared === undefined) {
    return true;
  }
  // NOTE: an unversioned request accepts whatever the project declares
  if (!version || declared === version) {
    return false;
  }
  if (!force) {
    warn(
      `Skipping ${name}@${version}: package.json declares ${name}@${declared}; use --force to replace it`,
    );
  }

  return !!force;
}

/**
 * adds peers for development dependencies and selects packages safe for a manager install
 * @param dependencyType the requested dependency section
 * @param packages the requested names and version specifications
 * @param params the target project and conflict policy
 * @param params.cwd the target project directory
 * @param params.force whether to replace entries declared with another specification
 * @returns package specifications requiring installation
 */
async function resolveMissingPackages(
  dependencyType: DependencyType,
  packages: Record<string, string>,
  { cwd, force }: Pick<InstallParams, 'cwd' | 'force'>,
): Promise<string[]> {
  const entries = Object.entries(packages);
  if (entries.length === 0) {
    return [];
  }
  const path = join(cwd, 'package.json');
  const original = await readFile(path, 'utf8');
  const packageJson = JSON.parse(original) as PackageJson;
  // NOTE: npm keeps a runtime dependency only in dependencies, so it never gains a peer or dev entry beside it
  const existing =
    dependencyType === 'peerDependencies'
      ? { ...packageJson.dependencies, ...packageJson.peerDependencies }
      : {
          ...packageJson.dependencies,
          ...packageJson.devDependencies,
          ...(dependencyType === 'dependencies' &&
            packageJson.peerDependencies),
        };
  const missing = entries.filter((entry) =>
    requiresInstall(entry, existing[entry[0]], force),
  );
  if (missing.length === 0) {
    info(
      `Skipping ${dependencyType} install: ${entries.map(([name]) => name).join(', ')} already declared`,
    );

    return [];
  }
  const development = packageJson.devDependencies ?? {};
  const peers =
    dependencyType === 'peerDependencies'
      ? missing.filter(([name]) => Object.hasOwn(development, name))
      : [];
  if (peers.length > 0) {
    // NOTE: sort like the package managers do, so the next install leaves the order unchanged
    packageJson.peerDependencies = Object.fromEntries(
      Object.entries({
        ...packageJson.peerDependencies,
        ...Object.fromEntries(peers),
      }).sort(([a], [b]) => a.localeCompare(b, 'en')),
    );
    await writePackageJson(path, packageJson, original);
    info(
      `Adding peerDependencies ${peers.map(([name]) => name).join(', ')} to package.json`,
    );
  }

  const written = new Set(peers.map(([name]) => name));

  return missing
    .filter(([name]) => !written.has(name))
    .map(([name, version]) => (version ? `${name}@${version}` : name));
}
