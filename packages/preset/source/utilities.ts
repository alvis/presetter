/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of helpers
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { ensureFile, readFile, writeFile } from 'fs-extra';
import { resolve } from 'path';
import { safeLoad } from 'js-yaml';
import pupa from 'pupa';

// paths to directories
const ROOT = resolve(__dirname, '..');
const DISTRIBUTION = resolve(ROOT, 'dist');
const TEMPLATES = resolve(ROOT, 'templates');

// JSON format
const INDENT = 2;

/**
 * compile a JSON config template
 * @param template template name excluding the yaml extension
 * @param options additional information for config generation
 * @param options.extra additional config to be merged with the template
 * @param options.parameter variables to be substituted in the template
 * @returns path to the compiled template
 */
export async function buildJSONConfig(
  template: string,
  options: {
    extra?: Record<string, unknown>;
    parameter: Partial<Record<string, string>>;
  },
): Promise<string> {
  const { extra = {}, parameter } = { ...options };

  const source = await loadYAMLTemplate(template, parameter);
  const merged = merge(source, extra);

  const path = resolve(DISTRIBUTION, `${template}.json`);
  await ensureFile(path);
  await writeFile(path, JSON.stringify(merged, null, INDENT));

  return path;
}

/**
 * compile a list-based config template
 * @param template template name
 * @param options additional information for config generation
 * @param options.extra additional config to be merged with the template
 * @param options.parameter variables to be substituted in the template
 * @returns path to the compiled template
 */
export async function buildListConfig(
  template: string,
  options: {
    extra?: string[];
    parameter: Partial<Record<string, string>>;
  },
): Promise<string> {
  const { extra = [], parameter } = { ...options };

  const source = await loadTextTemplate(template, parameter);
  const ignores = source.split('\n');
  const merged: string[] = [...ignores, ...extra];

  const path = resolve(DISTRIBUTION, template);
  await ensureFile(path);
  await writeFile(path, merged.join('\n'));

  return path;
}

/**
 * load config from a yaml template
 * @param template name of the template
 * @param parameter variables to be substituted in the template
 * @returns template content
 */
export async function loadYAMLTemplate<T = unknown>(
  template: string,
  parameter: Partial<Record<string, string>> = {},
): Promise<Record<string, T>> {
  const content = await readFile(resolve(TEMPLATES, `${template}.yaml`));

  return safeLoad(pupa(content.toString(), parameter)) as Record<string, T>;
}

/**
 * load config from a text template
 * @param template name of the template
 * @param parameter variables to be substituted in the template
 * @returns template content
 */
export async function loadTextTemplate(
  template: string,
  parameter: Partial<Record<string, string>> = {},
): Promise<string> {
  const content = await readFile(resolve(TEMPLATES, template));

  return pupa(content.toString(), parameter);
}

/**
 * indicate whether the supplied value is a JSON object
 * @param subject the subject to be tested
 * @returns true if the subject is a JSON object
 */
function isJSON(subject: unknown): subject is Record<string, any> {
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
 * @returns merged object
 */
export function merge(
  source: Record<string, any>,
  replacement: Record<string, any>,
): Record<string, any> {
  const keys = [...Object.keys(source), ...Object.keys(replacement)];

  const entries: Array<[string, any]> = keys.map((key) => [
    key,
    replace(source[key], replacement[key]),
  ]);

  return Object.assign(
    {},
    ...entries.map(([key, value]) => ({
      [key]: value,
    })),
  );
}

/**
 * replace source according to the replacement instruction
 * @param source source value if there's no replacement
 * @param replacement value to be merged with the default
 * @returns merged value
 */
function replace(source: unknown, replacement: unknown): any {
  // LOGIC
  //       S\R | Array   | Object  | Primitive
  // Array     | EXTEND  | AMEND   | replace
  // Object    | replace | MERGE   | replace
  // Primitive | replace | replace | replace

  if (Array.isArray(source)) {
    return replaceArray(source, replacement);
  } else if (isJSON(source) && isJSON(replacement)) {
    // deep merge any objects
    return merge(source, replacement);
  }

  // primitive values
  return replacement ?? source;
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
    return source.map((value, index) => replacement[index] ?? value);
  } else if (Array.isArray(replacement)) {
    // extend a list
    return [...source, ...replacement];
  } else {
    // primitive values
    return replacement ?? source;
  }
}

/* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return */
