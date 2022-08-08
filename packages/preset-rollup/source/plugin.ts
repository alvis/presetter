/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of plugin related helpers
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { isDirective } from 'presetter';

import type { ApplyDirective, ImportDirective } from 'presetter';
import type { JsonObject } from 'type-fest';

/** full configuration about a plugin */
export type PluginConfiguration =
  | [name: PluginHeader]
  | [name: PluginHeader, options: PluginOptions | null];

/** specification of a plugin name and its handling direction (e.g. by invoking the function or just simply specify the name) */
export type PluginHeader = string | ApplyDirective;

/** options for a plugin */
export type PluginOptions = JsonObject | ApplyDirective | ImportDirective;

/** plugin configuration as an object */
export type PluginObject = Record<PluginHeader, PluginOptions | null>;

/** plugin configuration as an array */
export type PluginList = PluginListItem[];

/** possible types for individual item in a PluginList */
type PluginListItem = PluginHeader | [name: PluginHeader] | PluginConfiguration;

/** all possible configuration form for a collection of plugins */
export type PluginManifest = PluginList | PluginObject;

/**
 * ensure that the given value is a valid PluginManifest
 * @param value value to be tested
 * @returns nothing if it's a pass
 */
export function assertPluginManifest(
  value: unknown,
): asserts value is PluginManifest {
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      return assertPluginList(value);
    } else if (value !== null) {
      return assertPluginObject(value as Record<string, unknown>);
    }
  }

  throw new TypeError('plugin manifest is not in a supported format');
}

/**
 * ensure that the given value is a valid PluginObject
 * @param value value to be tested
 */
export function assertPluginObject(
  value: Record<string, unknown>,
): asserts value is PluginObject {
  // all values must be an object
  if (
    [...Object.values(value)].some(
      (opt) => typeof opt !== 'object' && !isDirective(opt),
    )
  ) {
    throw new TypeError('all plugin options must be a object');
  }
}

/**
 * ensure that the given value is a valid PluginList
 * @param value value to be tested
 */
export function assertPluginList(
  value: unknown[],
): asserts value is PluginList {
  for (const plugin of value) {
    assertPluginListItem(plugin);
  }
}

const PLUGIN_LIST_MAX_ITEMS = 2;

/**
 * ensure that the given value is a valid PluginListItem
 * @param value value to be tested
 */
export function assertPluginListItem(
  value: unknown,
): asserts value is PluginListItem {
  if (
    typeof value !== 'string' &&
    !(
      Array.isArray(value) &&
      value.length <= PLUGIN_LIST_MAX_ITEMS &&
      typeof value[0] === 'string' &&
      (isDirective(value[1]) ||
        ['undefined', 'object'].includes(typeof value[1]))
    )
  ) {
    throw new TypeError(
      'a plugin manifest in an array form must be in either one of the following forms: string, [string], [string, object]',
    );
  }
}
