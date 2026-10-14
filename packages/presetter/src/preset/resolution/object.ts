import type {
  PresetContentContext,
  PresetObject,
  PresetObjectGenerator,
} from '@presetter/types';

/**
 * evaluate a static value or content factory
 * @param object the object to resolve
 * @param context the context in which the object is being resolved
 * @returns the resolved object
 */
export function resolveObject<T>(
  object: PresetObject<T>,
  context: PresetContentContext,
): T {
  return typeof object === 'function'
    ? (object as PresetObjectGenerator<T>)(context)
    : object;
}
