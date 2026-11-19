import { existsSync, readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

import type { ScopeTarget } from './runner';

/** extensions of setup files in precedence order */
const EXTENSIONS = ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs'];

/** detected conventional Vitest setup files in execution order */
export interface SetupFiles {
  /** setup files run before each test file */
  file: string[];
  /** global setup files run before the project starts */
  project: string[];
}

/** detected setup files scoped to the folder that holds them */
export interface ScopedSetupFiles {
  /** setup files run before each matching test file */
  file: ScopeTarget[];
  /** global setup files run when a selected spec matches */
  project: ScopeTarget[];
}

/**
 * detects conventional setup files for a Vitest project
 * @param projectRoot absolute project directory
 * @param testDir directory containing tests
 * @param suffixes filename suffixes in execution order
 * @returns absolute setup and global setup paths in execution order
 */
export function detectSetupFiles(
  projectRoot: string,
  testDir: string,
  suffixes: string[],
): SetupFiles {
  const detectFiles = (name: string): string[] =>
    [`vitest.${name}`, `${testDir}/${name}`, `${testDir}/vitest.${name}`]
      .flatMap((base) =>
        suffixes.flatMap((suffix) =>
          EXTENSIONS.map((extension) =>
            join(projectRoot, `${base}${suffix}.${extension}`),
          ),
        ),
      )
      .filter((path) => existsSync(path));

  return {
    file: detectFiles('setup'),
    project: detectFiles('global-setup'),
  };
}

/**
 * detects setup files in the nested folders of the test directory, each
 * scoped to the specs of its own folder subtree
 * @param projectRoot absolute project directory
 * @param testDir directory containing tests
 * @param suffixes filename suffixes in execution order
 * @returns scoped setup and global setup files, outer folders before inner ones and sibling folders alphabetically
 */
export function detectScopedSetupFiles(
  projectRoot: string,
  testDir: string,
  suffixes: string[],
): ScopedSetupFiles {
  const detected: ScopedSetupFiles = { file: [], project: [] };

  for (const folder of listFolders(join(projectRoot, testDir))) {
    const globs = [`${escapeGlob(toPosix(relative(projectRoot, folder)))}/**`];
    const detectFiles = (name: string): ScopeTarget[] =>
      [name, `vitest.${name}`]
        .flatMap((base) =>
          suffixes.flatMap((suffix) =>
            EXTENSIONS.map((extension) =>
              join(folder, `${base}${suffix}.${extension}`),
            ),
          ),
        )
        .filter((path) => existsSync(path))
        .map((file) => ({ globs, file }));

    detected.file.push(...detectFiles('setup'));
    detected.project.push(...detectFiles('global-setup'));
  }

  return detected;
}

/**
 * lists the folders below a directory, each before its own subfolders and
 * siblings alphabetically, skipping dot-folders, `node_modules` and symbolic links
 * @param directory absolute directory to scan
 * @returns absolute paths of the nested folders, never the directory itself
 */
function listFolders(directory: string): string[] {
  if (!existsSync(directory)) {
    return [];
  }

  return readdirSync(directory, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        entry.name !== 'node_modules' &&
        !entry.name.startsWith('.'),
    )
    .map(({ name }) => name)
    .sort()
    .flatMap((name) => {
      const folder = join(directory, name);

      return [folder, ...listFolders(folder)];
    });
}

/**
 * converts a relative path to POSIX form
 * @param path relative path in the form of the current platform
 * @returns path separated by forward slashes
 */
export function toPosix(path: string): string {
  return path.split(sep).join('/');
}

/**
 * escapes the characters of a path that a glob would read as syntax
 * @param path POSIX path of a file or folder
 * @returns glob matching only that path
 */
export function escapeGlob(path: string): string {
  // `+` and `@` are syntax only before `(`, which is escaped, and globby would look for a folder named `\+` or `\@`
  // literally; it also reads an escaped backslash as two, so a backslash goes into a class
  return path.replace(/[\\*?[\]{}()!|]/g, (character) =>
    character === '\\' ? String.raw`[\\]` : `\\${character}`,
  );
}
