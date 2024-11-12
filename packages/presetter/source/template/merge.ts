import { basename, extname } from 'node:path';

import { isJsonObject } from '../utilities';

import type { JsonObject, UnknownRecord } from 'type-fest';

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

  if (Array.isArray(source)) {
    return mergeArray(source, target) as MergedType<S, T>;
  } else if (isJsonObject(source)) {
    return mergeObject(source, target) as MergedType<S, T>;
  }

  return (target ?? source) as MergedType<S, T>;
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
    isJsonObject(target) &&
    [...Object.keys(target)].every((key) => parseInt(key) >= 0)
  ) {
    return [...source].map((value, key) =>
      merge(value, target[key]),
    ) as MergedArray<S[], T>;
  }

  // if a merge isn't possible return the replacement or the original if no replacement is found
  return (target ?? source) as MergedArray<S[], T>;
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
  const isPrimitive =
    source.every((value) => !isJsonObject(value)) &&
    target.every((value) => !isJsonObject(value));

  // if there is no object in both list, perform an union
  // (['a'], ['a']) => ['a']
  // (['a'], ['b']) => ['a', 'b']
  // (['a'], ['a', 'b']) => ['a', 'b']

  if (isPrimitive) {
    return [...new Set([...source, ...target])] as MergedArray<S[], T[]>;
  }

  // if there is an object in any of the list, perform a replacement
  // (['a', 'b'], [{ c: 1 }]) => [{ c: 1 }]
  // ([{ a: 1 }], [{ b: 2 }]) => [{ b: 2 }]
  // ([{ a: 1 }, 'c'], [{ b: 2 }]) => [{ b: 2 }]
  // (['a'], ['b', { c: 1 }]) => ['b', { c: 1 }]
  // (['a', { c: 1 }], ['b', { d: 2 }]) => ['b', { d: 2 }]

  // if a merge isn't possible return the replacement
  return target as MergedArray<S[], T[]>;
}

/**
 * merge an object with any value
 * @param source the source object to be merged
 * @param target new replacement
 * @returns merged value
 */
export function mergeObject<S extends UnknownRecord, T>(
  source: S,
  target?: T,
): MergedType<S, T> {
  if (isJsonObject(target)) {
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
  return (target ?? source) as MergedType<S, T>;
}

/**
 * merge templates
 * @param source current template
 * @param target new template content
 * @returns customized configuration
 */
export function mergeTemplate(
  source: Record<string, JsonObject | string>,
  target: Record<string, JsonObject | string>,
): Record<string, JsonObject | string> {
  const mergedSource = Object.fromEntries(
    Object.entries(source).map(([path, template]) => {
      const replacement = target[path] as Partial<typeof target>[string];
      const isIgnoreFile =
        !extname(path) &&
        basename(path).startsWith('.') &&
        typeof template === 'string' &&
        typeof replacement === 'string';

      // NOTE
      // for JSON content, merge with the specified mode
      // for string content, there are two scenarios:
      // 1. if the content is a list such as an ignore file, merge as appendion
      // 2. for others such as a typescript file, merge as override

      if (isIgnoreFile) {
        const mergedSet = new Set([
          ...template.split('\n'),
          ...replacement.split('\n'),
        ]);

        return [path, [...mergedSet].join('\n')];
      } else if (typeof template === typeof replacement) {
        return [path, merge(template, replacement)];
      }

      return [path, template];
    }),
  );

  return { ...target, ...mergedSource };
}
