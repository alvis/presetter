/* v8 ignore start */

import type { PresetContentContext } from './context';

/**
 * generic type for representing an object in a preset
 */
export type PresetObject<T> = T | PresetObjectGenerator<T>;

/**
 * generator function for generating an object in a preset with the resolved variables and package information as input
 * @param context the current context of the preset generation
 * @returns the object to be included in the preset
 */
export type PresetObjectGenerator<T> = (context: PresetContentContext) => T;
