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

import { resolve } from 'path';

// paths to the template directory
const TEMPLATES = resolve(__dirname, '..', 'templates');

/** config for this preset */
export type PresetConfig = {
  /** configuration to be merged with .babelrc */
  babel?: Record<string, unknown>;
  /** configuration to be merged with .eslintrc */
  eslint?: Record<string, unknown>;
  /** configuration to be merged with .jestrc */
  jest?: Record<string, unknown>;
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
  /** the directory containing all source code (default: source) */
  source: string;
  /** the directory containing all extra typing files (default: types) */
  types: string;
  /** the directory containing all the compiled files (default: lib) */
  output: string;
  /** the directory containing all test files (default: spec) */
  test: string;
};

/** detail of linked/created configuration files and script templates  */
export interface PresetAsset {
  /** mapping of files to be generated to its configuration template files (key: file path relative to the target project's root, value: template path) */
  template?: Record<string, string>;
  /** path to the scripts template */
  scripts?: string;
  /** default variables */
  variable?: Variable;
}

export const DEFAULT_VARIABLE: Variable = {
  root: '.',
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
      '.babelrc.json': resolve(TEMPLATES, 'babelrc.yaml'),
      '.eslintrc.json': resolve(TEMPLATES, 'eslintrc.yaml'),
      '.jestrc.json': resolve(TEMPLATES, 'jestrc.yaml'),
      '.lintstagedrc.json': resolve(TEMPLATES, 'lintstagedrc.yaml'),
      '.npmignore': resolve(TEMPLATES, 'npmignore'),
      '.prettierrc.json': resolve(TEMPLATES, 'prettierrc.yaml'),
      'tsconfig.json': resolve(TEMPLATES, 'tsconfig.yaml'),
      'tsconfig.build.json': resolve(TEMPLATES, 'tsconfig.build.yaml'),
    },
    scripts: resolve(TEMPLATES, 'scripts.yaml'),
    variable: DEFAULT_VARIABLE,
  };
}
