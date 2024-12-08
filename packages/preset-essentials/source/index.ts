import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preset } from 'presetter-types';

import eslintOverride from './eslint.override';
import eslintTemplate from './eslint.template';
import vitest from './vitest.template';

const DIR = dirname(fileURLToPath(import.meta.url));

// paths to the template directory
const TEMPLATES = resolve(DIR, '..', 'templates');

/** list of configurable variables */
export interface Variables {
  /** the directory containing the whole repository (default: .) */
  root: string;
  /** the directory containing all source code (default: generated) */
  generated: string;
  /** the directory containing all source code (default: source) */
  source: string;
  /** the directory containing all extra typing files (default: types) */
  types: string;
  /** the directory containing all the compiled files (default: lib) */
  output: string;
  /** the directory containing all test files (default: spec) */
  test: string;
}

export const DEFAULT_VARIABLES = {
  root: '.',
  generated: 'generated',
  source: 'source',
  types: 'types',
  output: 'lib',
  test: 'spec',
} satisfies Variables;

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default preset('presetter-preset-essentials', ({ root }) => {
  const isGitRoot = existsSync(resolve(root, '.git'));

  return {
    variables: DEFAULT_VARIABLES,
    scripts: resolve(TEMPLATES, 'scripts.yaml'),
    assets: {
      ...(isGitRoot
        ? { '.husky/pre-commit': resolve(TEMPLATES, 'pre-commit') }
        : {}),
      '.gitignore': resolve(TEMPLATES, 'gitignore'),
      '.lintstagedrc.json': resolve(TEMPLATES, 'lintstagedrc.yaml'),
      '.npmignore': resolve(TEMPLATES, 'npmignore'),
      '.prettierrc.json': resolve(TEMPLATES, 'prettierrc.yaml'),
      'eslint.config.ts': eslintTemplate,
      'tsconfig.json': resolve(TEMPLATES, 'tsconfig.yaml'),
      'tsconfig.build.json': resolve(TEMPLATES, 'tsconfig.build.yaml'),
      'vitest.config.ts': vitest,
    },
    override: {
      assets: {
        'eslint.config.ts': eslintOverride,
      },
    },
  };
});