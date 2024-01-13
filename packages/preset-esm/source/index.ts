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

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { PresetAsset } from 'presetter-types';

const DIR = dirname(fileURLToPath(import.meta.url));

// paths to the template directory
const TEMPLATES = resolve(DIR, '..', 'templates');

/** config for this preset */
export type PresetConfig = {
  /** configuration to be merged with .eslintrc */
  eslint?: Record<string, unknown>;
  /** configuration to be merged with .jestrc */
  jest?: Record<string, unknown>;
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
};

/** List of configurable variables */
export type Variable = {
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
};

export const DEFAULT_VARIABLE: Variable = {
  root: '.',
  generated: 'generated',
  source: 'source',
  types: 'types',
  output: 'lib',
  test: 'spec',
};

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  return {
    template: {
      /* eslint-disable @typescript-eslint/naming-convention */
      '.eslintrc.json': resolve(TEMPLATES, 'eslintrc.yaml'),
      '.gitignore': resolve(TEMPLATES, 'gitignore'),
      '.jestrc.json': resolve(TEMPLATES, 'jestrc.yaml'),
      '.lintstagedrc.json': resolve(TEMPLATES, 'lintstagedrc.yaml'),
      '.npmignore': resolve(TEMPLATES, 'npmignore'),
      '.prettierrc.json': resolve(TEMPLATES, 'prettierrc.yaml'),
      'tsconfig.json': resolve(TEMPLATES, 'tsconfig.yaml'),
      'tsconfig.build.json': resolve(TEMPLATES, 'tsconfig.build.yaml'),
      /* eslint-enable @typescript-eslint/naming-convention */
    },
    scripts: resolve(TEMPLATES, 'scripts.yaml'),
    variable: DEFAULT_VARIABLE,
  };
}
