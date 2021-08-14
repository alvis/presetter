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
import { load } from 'js-yaml';
import { resolve } from 'path';
import pupa from 'pupa';

// paths to directories
const ROOT = resolve(__dirname, '..');
const DISTRIBUTION = resolve(ROOT, 'dist');
const TEMPLATES = resolve(ROOT, 'templates');

// JSON format
const INDENT = 2;

/**
 * compile a JSON config template
 * @param name template name excluding the yaml extension
 * @param options additional information for config generation
 * @param options.base root directory of the template directory
 * @param options.outDir output directory for the asset created
 * @param options.extra additional config to be merged with the template
 * @param options.parameter variables to be substituted in the template
 * @returns path to the compiled template
 */
export async function buildJSONConfig(
  name: string,
  options?: {
    base?: string;
    outDir?: string;
    extra?: Record<string, any>;
    parameter?: Record<string, string>;
  },
): Promise<string> {
  const {
    base = TEMPLATES,
    outDir = '',
    extra = {},
    parameter = {},
  } = { ...options };

  const source = await loadYAML(name, base);
  const merged = merge(source, extra);
  const normalised = JSON.stringify(template(merged, parameter), null, INDENT);

  const path = resolve(DISTRIBUTION, outDir, `${name}.json`);
  await ensureFile(path);
  await writeFile(path, normalised);

  return path;
}

/**
 * compile a list-based config template
 * @param name template name
 * @param options additional information for config generation
 * @param options.base root directory of the template directory
 * @param options.outDir output directory for the assets created
 * @param options.extra additional config to be merged with the template
 * @param options.parameter variables to be substituted in the template
 * @returns path to the compiled template
 */
export async function buildListConfig(
  name: string,
  options: {
    base?: string;
    outDir?: string;
    extra?: string[];
    parameter?: Record<string, string>;
  },
): Promise<string> {
  const {
    base = TEMPLATES,
    outDir = '',
    extra = [],
    parameter = {},
  } = { ...options };

  const source = await loadText(name, base);
  const ignores = source.split('\n');
  const merged: string[] = [...ignores, ...extra];
  const normalised = template(merged.join('\n'), parameter);

  const path = resolve(DISTRIBUTION, outDir, name);
  await ensureFile(path);
  await writeFile(path, normalised);

  return path;
}

/**
 * load config from a yaml template
 * @param template name of the template
 * @param base root directory of the template directory
 * @returns template content
 */
export async function loadYAML<T = unknown>(
  template: string,
  base: string = TEMPLATES,
): Promise<Record<string, T>> {
  const content = await readFile(resolve(base, `${template}.yaml`));

  return load(content.toString()) as Record<string, T>;
}

/**
 * load config from a text template
 * @param template name of the template
 * @param base root directory of the template directory
 * @returns template content
 */
export async function loadText(
  template: string,
  base: string = TEMPLATES,
): Promise<string> {
  const content = await readFile(resolve(base, template));

  return content.toString();
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
 * @returns merged object
 */
export function merge<Source extends Record<string, any>>(
  source: Source,
  replacement?: Record<string, any>,
): Source {
  const keys = [...Object.keys(source), ...Object.keys(replacement ?? {})];

  const entries: Array<[string, any]> = keys.map((key) => [
    key,
    replace(source[key], replacement?.[key]),
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
    return source.map((value, index) => replacement[index] ?? value);
  } else if (Array.isArray(replacement)) {
    // extend a list
    return [...source, ...replacement];
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
export function template<Content extends Record<string, any> | any[]>(
  content: Content,
  parameter: Record<string, string>,
): Content;
export function template(
  content: string | Record<string, any> | any[],
  parameter: Record<string, string>,
): string | Record<string, any> | any[] {
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
