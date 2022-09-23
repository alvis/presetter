/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of preset assets for bundling a project with rollup
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { resolve } from 'path';
import { loadFile, template } from 'presetter';

import { getRollupParameter } from './rollup';

import type { RollupConfig } from './rollup';
import type { PresetAsset } from 'presetter';

// paths to the template directory
const TEMPLATES = resolve(__dirname, '..', 'templates');
const CONFIGS = resolve(__dirname, '..', 'configs');

/** config for this preset */
export type PresetConfig = {
  rollup?: RollupConfig;
};

/** List of configurable variables */
export type Variable = {
  /** the directory containing all source code (default: source) */
  source: string;
  /** the directory containing all the compiled files (default: lib) */
  output: string;
};

export const DEFAULT_VARIABLE: Variable = {
  source: 'source',
  output: 'lib',
};

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default function (): PresetAsset {
  return {
    template: {
      /* eslint-disable @typescript-eslint/naming-convention */
      'rollup.config.ts': (context) => {
        const content = loadFile(
          resolve(TEMPLATES, 'rollup.config.ts'),
          'text',
        );
        const variable = getRollupParameter(context);

        return template(content, variable);
        /* eslint-enable @typescript-eslint/naming-convention */
      },
    },
    scripts: resolve(TEMPLATES, 'scripts.yaml'),
    noSymlinks: ['rollup.config.ts'],
    supplementaryConfig: {
      gitignore: ['/rollup.config.ts'],
      rollup: resolve(CONFIGS, 'rollup.yaml'),
    },
    variable: DEFAULT_VARIABLE,
  };
}
