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

import { resolve } from 'node:path';

import type { PresetAsset } from 'presetter-types';

// paths to the template directory
const TEMPLATES = resolve(__dirname, '..', 'templates');

/** config for this preset */
export type PresetConfig = {
  /** configuration to be merged with .eslintrc */
  eslint?: Record<string, unknown>;
  /** configuration to be merged with .jestrc */
  jest?: Record<string, unknown>;
};

export const DEFAULT_VARIABLE = {
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
      /* eslint-disable @typescript-eslint/naming-convention */
      '.eslintrc.json': resolve(TEMPLATES, 'eslintrc.yaml'),
      '.jestrc.json': resolve(TEMPLATES, 'jestrc.yaml'),
      /* eslint-enable @typescript-eslint/naming-convention */
    },
    scripts: resolve(TEMPLATES, 'scripts.yaml'),
    variable: DEFAULT_VARIABLE,
  };
}
