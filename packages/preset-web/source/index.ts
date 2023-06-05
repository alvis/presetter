/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of preset assets for a web project
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { resolve } from 'node:path';

import type { PresetAsset } from 'presetter-types';

// paths to the template directory
const CONFIGS = resolve(__dirname, '..', 'configs');

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  return {
    supplementaryConfig: {
      eslint: resolve(CONFIGS, 'eslint.yaml'),
      tsconfig: resolve(CONFIGS, 'tsconfig.yaml'),
    },
  };
}
