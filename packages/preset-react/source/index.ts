/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Preset for a React project
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { PresetAsset } from 'presetter-types';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directory
const TEMPLATES = resolve(DIR, '..', 'templates');
const CONFIGS = resolve(DIR, '..', 'configs');

/** config for this preset */
export type PresetConfig = {
  /** configuration to be merged with .eslintrc */
  eslint?: Record<string, unknown>;
  /** configuration to be merged with tsconfig.json */
  tsconfig?: Record<string, unknown>;
};

/** list of configurable variables */
export type Variable = {
  /** the directory containing all source code (default: source) */
  source?: string;
  /** the directory containing all extra typing files (default: types) */
  types?: string;
  /** the directory containing all the compiled files (default: lib) */
  output?: string;
};

export const DEFAULT_VARIABLE: Variable = {
  source: 'source',
  types: 'types',
  output: 'lib',
};

const IMAGE_TYPE = 'image.d.ts';
const STYLE_TYPE = 'style.d.ts';

const template: PresetAsset['template'] = ({
  custom: {
    variable: { types },
  },
}) => ({
  /* eslint-disable @typescript-eslint/naming-convention */
  '.eslintrc.json': resolve(TEMPLATES, 'eslintrc.yaml'),
  'tsconfig.json': resolve(TEMPLATES, 'tsconfig.yaml'),
  [join(types, IMAGE_TYPE)]: resolve(TEMPLATES, IMAGE_TYPE),
  [join(types, STYLE_TYPE)]: resolve(TEMPLATES, STYLE_TYPE),
  /* eslint-enable @typescript-eslint/naming-convention */
});

const noSymlinks: PresetAsset['noSymlinks'] = ({
  custom: {
    variable: { types },
  },
}) => [join(types, IMAGE_TYPE), join(types, STYLE_TYPE)];

const supplementaryConfig: PresetAsset['supplementaryConfig'] = {
  eslint: resolve(CONFIGS, 'eslint.yaml'),
  gitignore: ({
    custom: {
      variable: { types },
    },
  }) => [join('/', types, IMAGE_TYPE), join('/', types, STYLE_TYPE)],
  jest: resolve(CONFIGS, 'jest.yaml'),
  lintstaged: resolve(CONFIGS, 'lintstaged.yaml'),
};

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  return {
    scripts: resolve(TEMPLATES, 'scripts.yaml'),
    template,
    noSymlinks,
    supplementaryConfig,
    variable: DEFAULT_VARIABLE,
  };
}
