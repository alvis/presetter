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
  /** configuration to be merged with .eslintrc */
  eslint?: Record<string, unknown>;
  /** configuration to be merged with .jestrc */
  jest?: Record<string, unknown>;
  /** configuration to be merged with .lintstagedrc */
  lintstaged?: Record<string, unknown>;
};

/** List of configurable variables */
export type Variable = {
  /** the directory containing all source code (default: source) */
  source: string;
};

/** detail of linked/created configuration files and script templates  */
export interface PresetAsset {
  /** list of presets to extend from */
  extends?: string[];
  /** mapping of files to be generated to its configuration template files (key: file path relative to the target project's root, value: template path) */
  template?: Record<string, string>;
  /** path to the scripts template */
  scripts?: string;
  /** default variables */
  variable?: Variable;
  /** supplementary configuration applied to .presetterrc for enriching other presets */
  supplementaryConfig?: Record<string, string[] | Record<string, unknown>>;
}

export const DEFAULT_VARIABLE: Variable = {
  source: 'source',
};

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  return {
    extends: ['presetter-preset-essentials'],
    template: {
      '.eslintrc.json': resolve(TEMPLATES, 'eslintrc.yaml'),
      '.jestrc.json': resolve(TEMPLATES, 'jestrc.yaml'),
      '.lintstagedrc.json': resolve(TEMPLATES, 'lintstagedrc.yaml'),
    },
    scripts: resolve(TEMPLATES, 'scripts.yaml'),
    variable: DEFAULT_VARIABLE,
    supplementaryConfig: {
      gitignore: ['/.husky', '/.lintstagedrc.json'],
    },
  };
}
