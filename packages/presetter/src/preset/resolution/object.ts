import type { PresetContentContext, PresetObject } from 'presetter-types';

/**
 * resolve an object
 * @param object the object to resolve
 * @param context the context in which the object is being resolved
 * @returns the resolved object
 */
export function resolveObject<T>(
  object: PresetObject<T>,
  context: PresetContentContext,
): T {
  return object instanceof Function ? object(context) : object;
}
