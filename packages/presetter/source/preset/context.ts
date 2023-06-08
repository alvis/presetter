/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of helpers for concluding the target context
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { dirname } from 'node:path';

import { getPackage } from '../package';
import { getPresetterRC } from './presetterRC';

import type { PresetContext } from 'presetter-types';

/**
 * get context about the target project and any customization in .presetterrc
 * @returns context about the target project and any customization in .presetterrc
 */
export async function getContext(): Promise<PresetContext> {
  const { json, path } = await getPackage();
  const root = dirname(path);
  const target = { name: json.name!, root, package: json };
  const custom = await getPresetterRC(root);

  return {
    target,
    custom,
  };
}
