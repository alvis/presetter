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

/**
 * map the values of an object asynchronously to a new object with the same keys
 * @param obj the object to be mapped
 * @param fn the async mapping function
 * @returns a promise resolving to the mapped object
 */
export async function mapValuesAsync<T, U>(
  obj: Record<string, T>,
  fn: (value: T) => Promise<U>,
): Promise<Record<string, U>> {
  const entries = await Promise.all(
    Object.entries(obj).map(async ([key, value]) => [key, await fn(value)]),
  );

  return Object.fromEntries(entries);
}
