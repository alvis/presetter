/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of template related helpers
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { basename, extname } from 'node:path';

import pupa from 'pupa';

import type { IgnorePath, IgnoreRule, PrimitiveEntity } from 'presetter-types';
import type { JsonObject, JsonValue } from 'type-fest';

type MergedType<A, B> = A extends JsonObject
  ? B extends JsonObject
    ? A & B
    : MergedArray<A, B>
  : MergedArray<A, B>;

type MergedArray<A, B> = A extends JsonValue[]
  ? B extends JsonValue[]
    ? Array<A[number] | B[number]>
    : keyof B extends `${number}`
    ? JsonValue[]
    : B
  : B;

/**
 * remove part of the template content according to the given rules
 * @param subject an object to be filtered
 * @param ignores a list of ignore rules
 * @returns filtered content
 */
export function filter<C extends Record<string, unknown>>(
  subject: C,
  ...ignores: IgnoreRule[]
): C;
export function filter(subject: unknown[], ...ignores: IgnoreRule[]): unknown[];
export function filter(
  subject: Record<string, unknown> | unknown[],
  ...ignores: IgnoreRule[]
): Record<string, unknown> | unknown[] {
  // compute the list of fields in config to be ignored
  const fieldsToIgnore = ignores.filter(
    (ignore): ignore is string | number => typeof ignore !== 'object',
  );

  // filter the unwanted item in an array
  if (Array.isArray(subject)) {
    return subject.filter((_, key) => !fieldsToIgnore.includes(key));
  }

  // filter the unwanted fields below
  const distilled = Object.fromEntries(
    Object.entries(subject).filter(([key, _]) => !fieldsToIgnore.includes(key)),
  );

  // compute the left over and process them further below
  const moreRules = ignores.filter(
    (ignore): ignore is Record<string, IgnorePath> =>
      typeof ignore !== 'string',
  );

  // continue filtering the left over
  return moreRules.reduce(
    (furtherDistilled, ignoreTree) =>
      Object.fromEntries(
        Object.entries(furtherDistilled).map(
          ([key, value]): [string, unknown] => [
            key,
            filterByPath(value, ignoreTree[key]),
          ],
        ),
      ),
    distilled,
  );
}

/**
 * filter a value according to the supplied ignore rules
 * @param value value to be filtered
 * @param path ignore rule to be applied
 * @returns filtered value
 */
function filterByPath(value: unknown, path?: IgnorePath): unknown {
  return path && typeof value === 'object'
    ? filter(
        value as Record<string, unknown>,
        // NOTE
        // if rule is an array, it means that it contains a list of fields to be ignored
        // otherwise, it contains rules in a tree form
        ...(Array.isArray(path) ? path : [path]),
      )
    : value;
}

/**
 * indicate whether the supplied value is a JSON object
 * @param subject the subject to be tested
 * @returns true if the subject is a JSON object
 */
export function isJSON(subject: unknown): subject is JsonObject {
  return [
    typeof subject === 'object',
    !Array.isArray(subject),
    subject !== null,
  ].every((value) => value);
}

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return */

/**
 * deep merge an object
 * @param source default object if no additional property is supplied
 * @param target properties to be merged with the default
 * @returns merged object
 */
export function merge<S extends JsonValue, T extends PrimitiveEntity>(
  source: S,
  target?: T,
): MergedType<S, T> {
  // LOGIC
  //       S\R | Array   | Object  | Primitive
  // Array     | EXTEND  | AMEND   | replace
  // Object    | replace | MERGE   | replace
  // Primitive | replace | replace | replace

  if (Array.isArray(source)) {
    return mergeArray(source, target) as MergedType<S, T>;
  } else if (isJSON(source)) {
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
export function mergeArray<S extends JsonValue, T extends PrimitiveEntity>(
  source: S[],
  target?: T,
): MergedArray<S[], T> {
  // NOTE
  // merging can only be done in two ways:
  // 1. the target is also an array, then merge the two arrays
  // 2. the target is an object with numeric keys representing the index of the value to be merged

  if (Array.isArray(target)) {
    return mergeArrays(source, target) as MergedArray<S[], T>;
  } else if (
    isJSON(target) &&
    [...Object.keys(target)].every((key) => parseInt(key) >= 0)
  ) {
    return [...source].map((value, key) =>
      merge(value, target[key]),
    ) as MergedArray<S[], any>;
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
export function mergeArrays<S extends JsonValue, T extends JsonValue>(
  source: S[],
  target: T[],
): MergedArray<S[], T[]> {
  const isPrimitive =
    source.every((value) => !isJSON(value)) &&
    target.every((value) => !isJSON(value));

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
export function mergeObject<S extends JsonObject, T extends PrimitiveEntity>(
  source: S,
  target?: T,
): MergedType<S, T> {
  if (isJSON(target)) {
    // merge two objects together
    const mergedSource = Object.fromEntries(
      Object.entries(source).map(([key, value]) => [
        key,
        merge(value!, target[key]),
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

/**
 * replace parameters in the template
 * @param content template content
 * @param parameter variables to be substituted in the template
 * @returns customized configuration
 */
export function template(
  content: string,
  parameter: Record<string, string>,
): string;
export function template<Content extends Record<string, unknown> | unknown[]>(
  content: Content,
  parameter: Record<string, string>,
): Content;
export function template(
  content: unknown,
  parameter: Record<string, string>,
): unknown;
export function template(
  content: string | Record<string, unknown> | unknown | unknown[],
  parameter: Record<string, string>,
): string | Record<string, unknown> | unknown | unknown[] {
  if (typeof content === 'string') {
    return pupa(content, parameter);
  } else if (Array.isArray(content)) {
    return content.map((value) => template(value, parameter));
  } else if (isJSON(content)) {
    return Object.fromEntries(
      Object.entries(content).map(([key, value]) => {
        return [template(key, parameter), template(value, parameter)];
      }),
    );
  } else {
    return content;
  }
}

/* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return */
