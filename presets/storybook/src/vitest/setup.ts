import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** detected conventional Vitest setup files in execution order */
export interface SetupFiles {
  /** setup files run before each test file */
  file: string[];
  /** global setup files run before the project starts */
  project: string[];
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
  const extensions = ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs'];
  const detectFiles = (name: string): string[] =>
    [`vitest.${name}`, `${testDir}/${name}`, `${testDir}/vitest.${name}`]
      .flatMap((base) =>
        suffixes.flatMap((suffix) =>
          extensions.map((extension) =>
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
