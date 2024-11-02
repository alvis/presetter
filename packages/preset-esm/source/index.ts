/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of preset assets
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { PresetAsset } from 'presetter-types';

const DIR = dirname(fileURLToPath(import.meta.url));

// paths to the template directory
const TEMPLATES = resolve(DIR, '..', 'templates');

/** config for this preset */
export interface PresetConfig {
  /** configuration to be merged with .eslintrc */
  eslint?: Record<string, unknown>;
  /** patterns to be added to .gitignore */
  gitignore?: string[];
  /** configuration to be merged with .lintstagedrc */
  lintstaged?: Record<string, unknown>;
  /** patterns to be added to .npmignore */
  npmignore?: string[];
  /** configuration to be merged with .presetterrc */
  prettier?: Record<string, unknown>;
  /** configuration to be merged with tsconfig.json */
  tsconfig?: Record<string, unknown>;
}

/** list of configurable variables */
export interface Variable {
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

export const DEFAULT_VARIABLE = {
  root: '.',
  generated: 'generated',
  source: 'source',
  types: 'types',
  output: 'lib',
  test: 'spec',
} satisfies Variable;

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  return {
    template: ({ target }) => {
      const isGitRoot = existsSync(resolve(target.root, '.git'));

      return {
        ...(isGitRoot
          ? { '.husky/pre-commit': resolve(TEMPLATES, 'pre-commit') }
          : {}),
        '.gitignore': resolve(TEMPLATES, 'gitignore'),
        '.lintstagedrc.json': resolve(TEMPLATES, 'lintstagedrc.yaml'),
        '.npmignore': resolve(TEMPLATES, 'npmignore'),
        '.prettierrc.json': resolve(TEMPLATES, 'prettierrc.yaml'),
        'eslint.config.ts': resolve(TEMPLATES, 'eslint.config.ts'),
        'tsconfig.json': resolve(TEMPLATES, 'tsconfig.yaml'),
        'tsconfig.build.json': resolve(TEMPLATES, 'tsconfig.build.yaml'),
        'vitest.config.ts': resolve(TEMPLATES, 'vitest.config.ts'),
      };
    },
    scripts: resolve(TEMPLATES, 'scripts.yaml'),
    variable: DEFAULT_VARIABLE,
  };
}
