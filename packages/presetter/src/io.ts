import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, extname } from 'node:path';

import { CORE_SCHEMA, load, mergeTag } from 'js-yaml';

import { substitute } from './template';

import type { Variables } from '@presetter/types';
import type { JsonObject } from 'type-fest';

// NOTE: js-yaml 5 no longer merges `<<` keys by default, which templates written for js-yaml 4 rely on
const TEMPLATE_SCHEMA = CORE_SCHEMA.withTags(mergeTag);

/**
 * load the content of a file
 * @param path file path to be loaded
 * @param variables variables to be used during the resolution
 * @returns content of the file
 */
export function loadFile(
  path: string,
  variables: Variables = {},
): JsonObject | string[] | Buffer {
  if (!existsSync(path)) {
    throw new Error(`file not found: ${path}`);
  }

  const content = readFileSync(path);

  // parse the content depending on the extension
  switch (extname(path)) {
    case '.json':
      return JSON.parse(
        substitute(content.toString(), variables),
      ) as JsonObject;
    case '.yaml':
    case '.yml':
      return load(substitute(content.toString(), variables), {
        schema: TEMPLATE_SCHEMA,
      }) as JsonObject;
    default:
      return path.endsWith('ignore')
        ? substitute(content.toString(), variables)
            .split('\n')
            .map((line) => line.trim())
            .filter((line) => !line.startsWith('#'))
        : content;
  }
}

/**
 * ensure that there is a file at the given path with the given content
 * @param path path where the file should be created
 * @param content data that should be written to disk
 */
export function ensureFile(path: string, content: string | Buffer): void {
  // ensure that all parent folders exist to avoid errors from writeFile
  mkdirSync(dirname(path), { recursive: true });

  // write content to the destination path
  writeFileSync(path, content);
}
