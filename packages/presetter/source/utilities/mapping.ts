/**
 * map the values of an object to a new object with the same keys
 * @param obj the object to be mapped
 * @param fn the mapping function
 * @returns the mapped object
 */
export function mapValues<T, U>(
  obj: Record<string, T>,
  fn: (value: T) => U,
): Record<string, U> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, fn(value)]),
  );
}
