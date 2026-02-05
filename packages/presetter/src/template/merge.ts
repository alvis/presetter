import { isPlainObject } from '../utilities';

import type { Paths, UnknownRecord } from 'type-fest';

type MergedType<A, B> = A extends UnknownRecord
  ? B extends UnknownRecord
    ? A & B
    : MergedArray<A, B>
  : MergedArray<A, B>;

type MergedArray<A, B> = A extends any[]
  ? B extends any[]
    ? Array<A[number] | B[number]> // A and B are arrays
    : keyof B extends `${number}` // B is an object with numeric keys
      ? Array<A[number] | B[keyof B]>
      : B
  : B;

const MERGE_KEY = Symbol.for('presetter.mergeKey');

/**
 * deep merge an object
 * @param source default object if no additional property is supplied
 * @param target properties to be merged with the default
 * @returns merged object
 */
export function merge<S, T, R = MergedType<S, T>>(source: S, target?: T): R {
  // LOGIC
  //       S\R | Array   | Object  | Primitive
  // Array     | EXTEND  | AMEND   | replace
  // Object    | replace | MERGE   | replace
  // Primitive | replace | replace | replace

  if (source === target) {
    // increase performance, especially for large objects, since no change is needed anyway
    return source as MergedType<S, T> as R;
  } else if (Array.isArray(source)) {
    return mergeArray(source, target) as MergedType<S, T> as R;
  } else if (isPlainObject(source)) {
    return mergeObject(source, target) as MergedType<S, T> as R;
  }

  // NOTE:
  // if target is undefined, return the source
  // otherwise, return the target, even it is null
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  return (target === undefined ? source : target) as MergedType<S, T> as R;
}

/**
 * merge an array with any value
 * @param source the source array to be merged
 * @param target new replacement
 * @returns merged value
 */
export function mergeArray<S, T>(source: S[], target?: T): MergedArray<S[], T> {
  // NOTE
  // merging can only be done in two ways:
  // 1. the target is also an array, then merge the two arrays
  // 2. the target is an object with numeric keys representing the index of the value to be merged

  if (Array.isArray(target)) {
    return mergeArrays(source, target) as MergedArray<S[], T>;
  } else if (
    isPlainObject(target) &&
    [...Object.keys(target)].every((key) => parseInt(key) >= 0)
  ) {
    return [...source].map((value, key) =>
      merge(value, target[key]),
    ) as MergedArray<S[], T>;
  }

  // if a merge isn't possible return the replacement or the original if no replacement is found
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  return (target === undefined ? source : target) as MergedArray<S[], T>;
}

/**
 * merge two arrays
 * @param source the source array to be merged
 * @param target new replacement
 * @returns merged array
 */
export function mergeArrays<S, T>(
  source: S[],
  target: T[],
): MergedArray<S[], T[]> {
  const mergeKey = getMergeKey(target) ?? getMergeKey(source);

  if (mergeKey) {
    return mergeArraysByKey(source, target, mergeKey);
  }

  return [...new Set([...source, ...target])] as MergedArray<S[], T[]>;
}

/**
 * annotate an array for key-based merging during preset resolution
 * @param key the property name used to identify matching elements across arrays
 * @param items the array of objects to annotate
 * @returns a shallow copy of the array with a non-enumerable merge key annotation
 */
export function mergeByKey<
  T extends Record<string, unknown>,
  K extends string & Paths<T, { bracketNotation: true; leavesOnly: true }>,
>(key: K, items: T[]): T[] {
  const result = [...items];

  Object.defineProperty(result, Symbol.for('presetter.mergeKey'), {
    value: key,
    enumerable: false,
    writable: false,
    configurable: false,
  });

  return result;
}

/**
 * retrieve the merge key annotation from an array, if present
 * @param subject the array to inspect
 * @returns the merge key string, or undefined if not annotated
 */
function getMergeKey(subject: unknown[]): string | undefined {
  // the merge key is stored as a non-enumerable symbol property via Object.defineProperty
  const descriptor = Object.getOwnPropertyDescriptor(subject, MERGE_KEY);

  return descriptor?.value as string | undefined;
}

/**
 * parse a bracket-notation path like `a.b[0].c` into segments
 * @param path the path string with optional dot and bracket notation
 * @returns an ordered list of path segments
 */
function parsePath(path: string): string[] {
  // we accept a permissive superset of type-fest's bracket-notation grammar
  // (both 'a.0' and 'a[0]' resolve), since the type system already constrains
  // callers to the canonical form
  // normalize `[n]` to `.n` then split on dots and discard empties; the
  // character class with the explicit `]` boundary keeps matching linear
  // and immune to catastrophic backtracking
  return path
    .replaceAll(/\[([^[\]]*)\]/g, '.$1')
    .split('.')
    .filter((segment) => segment.length > 0);
}

/**
 * read a value at a bracket-notation path within an item
 * @param item the value to traverse
 * @param path the bracket-notation path identifying the leaf
 * @returns a result describing whether the path resolved and the leaf value
 */
function getAtPath(
  item: unknown,
  path: string,
): { found: boolean; value: unknown } {
  const segments = parsePath(path);

  // an empty path is meaningless at runtime: with no segments to walk, the
  // loop would short-circuit and return the item itself, treating any
  // value as keyed. the type signature already forbids '' but dynamic
  // preset configs can bypass it, so guard explicitly here.
  if (segments.length === 0) {
    return { found: false, value: undefined };
  }

  let cursor: unknown = item;

  for (const segment of segments) {
    if (isPlainObject(cursor)) {
      if (!(segment in cursor)) {
        return { found: false, value: undefined };
      }
      cursor = cursor[segment];
    } else if (Array.isArray(cursor)) {
      const index = Number(segment);
      if (!Number.isInteger(index) || index < 0 || index >= cursor.length) {
        return { found: false, value: undefined };
      }
      cursor = cursor[index];
    } else {
      return { found: false, value: undefined };
    }
  }

  return { found: true, value: cursor };
}

/**
 * check whether an item is a plain object that resolves the specified key path
 * @param item the item to inspect
 * @param key the property name or bracket-notation path to look for
 * @returns true if the item is a record and the path can be walked to completion
 */
function hasKey(item: unknown, key: string): item is Record<string, unknown> {
  if (!isPlainObject(item)) {
    return false;
  }

  return getAtPath(item, key).found;
}

/**
 * index an array by a key property, separating keyed items from non-keyed ones
 * @param items the array to partition
 * @param key the property name to index by
 * @returns a map of key values to items, and an array of non-keyed items
 */
function indexByKey<T>(
  items: T[],
  key: string,
): { keyed: Map<unknown, T>; rest: T[] } {
  const keyed = new Map<unknown, T>();
  const rest: T[] = [];

  for (const item of items) {
    if (hasKey(item, key)) {
      const { value } = getAtPath(item, key);
      keyed.set(value, item);
    } else {
      rest.push(item);
    }
  }

  return { keyed, rest };
}

/**
 * attach the merge key annotation to an array
 * @param array the array to annotate
 * @param key the merge key value
 * @returns the annotated array (same reference)
 */
function attachMergeKey<T>(array: T[], key: string): T[] {
  Object.defineProperty(array, MERGE_KEY, {
    value: key,
    enumerable: false,
    writable: false,
    configurable: false,
  });

  return array;
}

/**
 * merge two arrays by matching elements on a shared key property
 * @param source the source array whose elements serve as base values
 * @param target the target array whose elements override or extend source matches
 * @param key the property name used to identify matching elements
 * @returns a merged array with the merge key annotation preserved
 */
function mergeArraysByKey<S, T>(
  source: S[],
  target: T[],
  key: string,
): Array<S | T> {
  const { keyed: targetMap, rest: unmatchedTarget } = indexByKey(target, key);
  const matchedKeys = new Set<unknown>();

  const merged: Array<S | T> = source.map((item) => {
    if (!hasKey(item, key)) {
      return item;
    }

    const keyValue = getAtPath(item, key).value;
    const match = targetMap.get(keyValue);

    if (match === undefined) {
      return item;
    }

    matchedKeys.add(keyValue);

    return merge(item, match);
  });

  // append target items that were not matched by any source item
  const unmatchedKeyed = [...targetMap.entries()]
    .filter(([keyValue]) => !matchedKeys.has(keyValue))
    .map(([, item]) => item);

  const result = [...merged, ...unmatchedKeyed, ...unmatchedTarget];

  return attachMergeKey(result, key);
}

/**
 * merge an object with any value
 * @param source the source object to be merged
 * @param target new replacement
 * @returns merged value
 */
export function mergeObject<S extends {}, T>(
  source: S,
  target?: T,
): MergedType<S, T> {
  if (isPlainObject(target)) {
    // merge two objects together
    const mergedSource = Object.fromEntries(
      Object.entries(source).map(([key, value]) => [
        key,
        merge(value, target[key]),
      ]),
    );

    return {
      ...mergedSource,
      ...(target as object),
      ...mergedSource,
    } as MergedType<S, T>;
  }

  // otherwise replace the source with target
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  return (target === undefined ? source : target) as MergedType<S, T>;
}
