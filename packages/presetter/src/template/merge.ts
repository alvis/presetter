import { isPlainObject } from '../utilities';

import type { UnknownRecord } from 'type-fest';

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

/**
 * deep merge an object
 * @param source default object if no additional property is supplied
 * @param target properties to be merged with the default
 * @returns merged object
 */
export function merge<S, T>(source: S, target?: T): MergedType<S, T> {
  // LOGIC
  //       S\R | Array   | Object  | Primitive
  // Array     | EXTEND  | AMEND   | replace
  // Object    | replace | MERGE   | replace
  // Primitive | replace | replace | replace

  if (source === target) {
    // increase performance, especially for large objects, since no change is needed anyway
    return source as MergedType<S, T>;
  } else if (Array.isArray(source)) {
    return mergeArray(source, target) as MergedType<S, T>;
  } else if (isPlainObject(source)) {
    return mergeObject(source, target) as MergedType<S, T>;
  }

  // NOTE:
  // if target is undefined, return the source
  // otherwise, return the target, even it is null
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  return (target === undefined ? source : target) as MergedType<S, T>;
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
  return [...new Set([...source, ...target])] as MergedArray<S[], T[]>;
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
