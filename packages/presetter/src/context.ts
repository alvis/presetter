import { readFile } from 'node:fs/promises';
import { dirname, relative } from 'node:path';

import { findUp } from 'find-up-simple';

import type { ProjectContext } from 'presetter-types';
import type { PackageJson } from 'type-fest';

/**
 * get scripts from the targeted project's package.json
 * @param cwd path to the project's root folder
 * @returns package detail
 */
export async function resolveProjectContext(
  cwd?: string,
): Promise<ProjectContext> {
  // try to find the target project's package.json
  const packageJsonPath = await findUp('package.json', {
    cwd,
    type: 'file',
  });

  // throw an error if there's no package.json found
  if (!packageJsonPath) {
    throw new Error("failed to find target's package.json");
  }

  // read the content of the project's package.json
  const packageJson = JSON.parse(
    await readFile(packageJsonPath, { encoding: 'utf8' }),
  ) as PackageJson;

  // compute the rest of metadata
  const projectRoot = dirname(packageJsonPath);
  const repoRoot = (await resolveRepoRoot(cwd)) ?? projectRoot;
  const relativeProjectRoot = relative(repoRoot, projectRoot) || '.';
  const relativeRepoRoot = relative(projectRoot, repoRoot) || '.';
  const isRepoRoot = repoRoot === projectRoot;

  return {
    isRepoRoot,
    relativeProjectRoot,
    relativeRepoRoot,
    repoRoot,
    projectRoot,
    packageJson,
  };
}

/**
 * resolve the root of the repository holding the project based on the presence of .git .hg etc meta directories or a parent package.json
 * @param cwd currnet working directory
 * @returns path to the repository root, if found
 */
export async function resolveRepoRoot(
  cwd?: string,
): Promise<string | undefined> {
  for (const name of ['.git', '.hg', '.svn']) {
    const metaPath = await findUp(name, { cwd, type: 'directory' });

    if (metaPath) {
      return dirname(metaPath);
    }
  }

  const parentPackagePath = await findUp('package.json', {
    cwd: dirname(cwd ?? process.cwd()),
    type: 'file',
  });

  return parentPackagePath ? dirname(parentPackagePath) : undefined;
}
