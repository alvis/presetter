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

import pupa from 'pupa';

import type { IgnorePath, IgnoreRule } from './types';

export type MergeMode = 'addition' | 'overwrite';

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
export function isJSON(subject: unknown): subject is Record<string, any> {
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
 * @param replacement properties to be merged with the default
 * @param options options for the merge operation
 * @param options.mode indicate how to merge the properties
 * @returns merged object
 */
export function merge<S extends string | Record<string, any> | unknown[]>(
  source: S,
  replacement?: string | Record<string, any> | unknown[],
  options?: {
    mode?: MergeMode;
  },
): S {
  const { mode = 'addition' } = options ?? {};

  if (Array.isArray(source)) {
    return replace(source, replacement, { mode });
  } else if (typeof source === 'string' || typeof replacement === 'string') {
    return mergeText(source, replacement, { mode });
  }

  const keys = [...Object.keys(source), ...Object.keys(replacement ?? {})];

  const entries: Array<[string, any]> = keys.map((key) => [
    key,
    replace(source[key], replacement?.[key], { mode }),
  ]);

  return Object.assign(
    {},
    ...entries.map(([key, value]) => ({
      [key]: value,
    })),
  );
}

/**
 * merge content of two templates
 * @param current current template
 * @param candidate new template content
 * @param options collection of options
 * @param options.mode merge mode
 * @returns merged template
 */
function mergeText<S extends string | Record<string, any>>(
  current: S,
  candidate: string | string[] | Record<string, any> | undefined,
  options: { mode: MergeMode },
): S {
  if (
    typeof current === 'string' &&
    typeof candidate === 'string' &&
    options.mode === 'addition'
  ) {
    return [...new Set(`${current}\n${candidate}`.split('\n'))].join('\n') as S;
  }

  // keep the current content since it cannot be merged
  return typeof current === typeof candidate ? (candidate as S) : current;
}

/**
 * replace source according to the replacement instruction
 * @param source source value if there's no replacement
 * @param replacement value to be merged with the default
 * @param options options for the merge operation
 * @param options.mode indicate how to merge the properties
 * @returns merged value
 */
function replace(
  source: unknown,
  replacement: unknown,
  options: {
    mode: MergeMode;
  },
): any {
  const { mode } = options;

  // LOGIC
  //       S\R | Array   | Object  | Primitive
  // Array     | EXTEND  | AMEND   | replace
  // Object    | replace | MERGE   | replace
  // Primitive | replace | replace | replace

  if (mode === 'addition' && Array.isArray(source)) {
    return replaceArray(source, replacement);
  } else if (isJSON(source) && isJSON(replacement)) {
    // deep merge any objects
    return merge(source, replacement, options);
  }

  // primitive values or mode === 'overwrite'
  return replacement === undefined ? source : replacement;
}

/**
 * replace an array source according to the replacement instruction
 * @param source source value if there's no replacement
 * @param replacement value to be merged with the default
 * @returns merged value
 */
function replaceArray(source: unknown[], replacement: unknown): any {
  if (isJSON(replacement)) {
    // overwrite a list
    return source.map((value, index) =>
      replace(value, replacement[index], { mode: 'addition' }),
    );
  } else if (Array.isArray(replacement)) {
    // extend a list uniquely
    return [...new Set([...source, ...replacement]).values()];
  } else {
    // primitive values
    return replacement ?? source;
  }
}

/**
 * replace parameters in the template
 * @param content template content
 * @param parameter variables to be substituted in the template
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
