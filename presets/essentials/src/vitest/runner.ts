// generated wrappers load this module natively, outside Vite, so it must import only bare specifiers
import { isAbsolute, relative, resolve, sep } from 'node:path';

import { globby } from 'globby';
import { expect, inject, vi } from 'vitest';

import type { TestProject } from 'vitest/node';

import type { PROVIDE_KEY } from './provide';

/** cleanup returned by a global setup, run when the test run ends */
export type GlobalTeardown = () => void | Promise<void>;

/** global setup as accepted by Vitest, optionally returning its teardown */
export type GlobalSetup = (
  project: TestProject,
) => GlobalTeardown | void | Promise<GlobalTeardown | void>;

/** a setup file together with the specs it applies to */
export interface ScopeTarget {
  /** globs relative to the base directory, in POSIX form */
  globs: string[];
  /** module path, relative to the base directory unless absolute */
  file: string;
}

/** exports a global setup file may have, as Vitest reads them */
interface GlobalSetupModule {
  default?: GlobalSetup;
  setup?: GlobalSetup;
  teardown?: GlobalTeardown;
}

/**
 * runs a global setup file if a selected spec of the project matches one of its globs
 * @param project project whose global setup is running
 * @param target setup file and the globs scoping it
 * @param key provided context key holding the directory of `vitest.config.ts`
 * @returns the teardown of the setup file, only when it ran
 */
export async function runGlobalSetup(
  project: TestProject,
  target: ScopeTarget,
  key: typeof PROVIDE_KEY,
): Promise<GlobalTeardown | void> {
  const directory = project.config.provide[key] ?? project.config.root;

  // the state lists the specs of every project, so keep those of this project only
  const specs = project.vitest.state
    .getPaths()
    .filter((spec) => project.matchesTestGlob(spec));

  if (!(await isSelected(target, directory, specs))) {
    return;
  }

  const file = resolveFile(target, directory);
  const loaded = await project.import<GlobalSetupModule>(file);

  if (loaded.default) {
    return loaded.default(project);
  }

  if (loaded.setup || loaded.teardown) {
    const teardown = await loaded.setup?.(project);

    return loaded.teardown ?? teardown;
  }

  throw new Error(
    `invalid global setup file ${file}. Must export setup, teardown or have a default export`,
  );
}

/**
 * imports a setup file if the spec running in this worker matches one of its globs
 * @param target setup file and the globs scoping it
 * @param key provided context key holding the directory of `vitest.config.ts`
 */
export async function runSetupFile(
  target: ScopeTarget,
  key: typeof PROVIDE_KEY,
): Promise<void> {
  // vitest exposes no public root in a worker, and its default root is the working directory
  const base = inject(key) ?? process.cwd();
  const { testPath } = expect.getState();

  if (testPath !== undefined && (await isSelected(target, base, [testPath]))) {
    await vi.importActual(resolveFile(target, base));
  }
}

/**
 * tells whether any spec matches a glob of the target
 * @param target setup file and the globs scoping it
 * @param base directory the globs are relative to
 * @param specs absolute spec paths
 * @returns true when at least one spec matches
 */
async function isSelected(
  target: ScopeTarget,
  base: string,
  specs: string[],
): Promise<boolean> {
  // globby lists the files the globs match, as POSIX paths relative to the base
  const matched = new Set(
    await globby(target.globs, {
      cwd: base,
      dot: true,
      // vitest never collects specs from dependencies, so spare a `**` glob the walk through them
      ignore: ['**/node_modules/**'],
    }),
  );

  return specs.some((spec) =>
    matched.has(relative(base, spec).split(sep).join('/')),
  );
}

/**
 * resolves the setup file of a target
 * @param target setup file and the globs scoping it
 * @param base directory a relative file is resolved against
 * @returns absolute path of the setup file
 */
function resolveFile(target: ScopeTarget, base: string): string {
  return isAbsolute(target.file) ? target.file : resolve(base, target.file);
}
