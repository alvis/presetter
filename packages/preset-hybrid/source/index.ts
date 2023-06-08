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

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { PresetAsset } from 'presetter-types';

export type { PresetConfig, Variable } from 'presetter-preset-esm';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directory
const CONFIGS = resolve(DIR, '..', 'configs');
const TEMPLATES = resolve(DIR, '..', 'templates');

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  return {
    extends: ['presetter-preset-esm'],
    supplementaryScripts: resolve(CONFIGS, 'scripts.yaml'),
    template: {
      /* eslint-disable @typescript-eslint/naming-convention */
      'tsconfig.cjs.json': resolve(TEMPLATES, 'tsconfig.cjs.yaml'),
      'tsconfig.mjs.json': resolve(TEMPLATES, 'tsconfig.mjs.yaml'),
    },
    /* eslint-enable @typescript-eslint/naming-convention */
  };
}
