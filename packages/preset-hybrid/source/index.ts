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

/** detail of linked/created configuration files and script templates  */
import type { PresetAsset } from 'presetter';

// paths to the template directory
const CONFIGS = resolve(__dirname, '..', 'configs');
const TEMPLATES = resolve(__dirname, '..', 'templates');
export type {
  PresetAsset,
  PresetConfig,
  Variable,
} from 'presetter-preset-essentials';

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  return {
    extends: ['presetter-preset-essentials'],
    supplementaryScripts: resolve(CONFIGS, 'scripts.yaml'),
    template: {
      /* eslint-disable @typescript-eslint/naming-convention */
      'tsconfig.cjs.json': resolve(TEMPLATES, 'tsconfig.cjs.yaml'),
      'tsconfig.mjs.json': resolve(TEMPLATES, 'tsconfig.mjs.yaml'),
    },
    /* eslint-enable @typescript-eslint/naming-convention */
  };
}
