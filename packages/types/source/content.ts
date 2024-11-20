/* v8 ignore start */

import type { Promisable } from 'type-fest';

import type { Path } from './auxiliaries';
import type { PresetContentContext } from './context';

/**
 * generic type for preset content which can be a value, file path, null, or a generator function
 */
export type PresetContent<T> =
  | T
  | Path
  | null
  | undefined
  | PresetContentGenerator<T>;

/**
 * generator function for preset content which accepts the current content and context
 * @param current the current value of the content
 * @param context the current context of the preset generation
 * @returns the new or modified content or file path or null
 */
export type PresetContentGenerator<T> = (
  current: T | null | undefined,
  context: PresetContentContext,
) => Promisable<
  | T
  | null // signifies an ignore order
  | undefined // signifies no change
>;
