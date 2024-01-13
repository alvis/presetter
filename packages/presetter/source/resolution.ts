/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of helpers for resolving content
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2022 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { existsSync } from 'node:fs';
import { basename, extname } from 'node:path';

import { loadFile } from './io';

import type {
  DynamicAsset,
  DynamicAssetField,
  Generator,
  PresetAsset,
  PresetterConfig,
  RequiredResolution,
  ResolvedPresetContext,
  Template,
} from 'presetter-types';

/**
 * compute the corresponding field within the config field of .presetterrc
 * @param filename link name
 * @returns field name in config
 */
export function getConfigKey(filename: string): string {
  return basename(filename, extname(filename))
    .replace(/^\./, '')
    .replace(/rc$/, '')
    .replace(/\.config$/, '');
}

/**
 * resolve a dynamic asset content
 * @param map a dynamic map to be resolved
 * @param context arguments to be passed to the generator function
 * @returns content of the resolved field
 */
export async function loadDynamicMap<F extends DynamicAssetField>(
  map: PresetAsset[F],
  context: ResolvedPresetContext<RequiredResolution<F>>,
): Promise<Record<string, DynamicAsset<F>>> {
  // load templated configuration from presets
  return Object.fromEntries(
    await Promise.all(
      Object.entries(
        map instanceof Function
          ? await map(context as ResolvedPresetContext)
          : { ...map },
      ).map(
        async ([relativePath, value]): Promise<[string, any]> => [
          relativePath,
          await loadDynamic(value, context as ResolvedPresetContext),
        ],
      ),
    ),
  );
}

/**
 * load a potentially dynamic content
 * @param value content to be loaded
 * @param context context to be supplied to the generator
 * @returns resolved content
 */
export async function loadDynamic<
  R extends Template | string[],
  K extends keyof PresetterConfig,
>(
  value:
    | string // path to a template file
    | R // template content
    | Generator<R, K>,
  context: ResolvedPresetContext<K>,
): Promise<R> {
  if (typeof value === 'function') {
    return value(context);
  } else if (typeof value === 'string' && existsSync(value)) {
    return loadFile(value) as R;
  } else {
    return value as R;
  }
}
