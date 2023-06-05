/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Preset for a ESM project
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2022 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { resolve } from 'node:path';

import type { PresetAsset } from 'presetter-types';

// paths to the template directory
const CONFIGS = resolve(__dirname, '..', 'configs');
export type { PresetConfig, Variable } from 'presetter-preset-essentials';

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  return {
    extends: ['presetter-preset-essentials'],
    supplementaryConfig: {
      jest: resolve(CONFIGS, 'jest.yaml'),
      tsconfig: resolve(CONFIGS, 'tsconfig.yaml'),
    },
    supplementaryScripts: resolve(CONFIGS, 'scripts.yaml'),
  };
}
