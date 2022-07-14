/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of io helpers
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { info } from 'console';
import {
  ensureFile,
  lstat,
  mkdir,
  pathExists,
  readFile,
  readlink,
  symlink,
  unlink,
  writeFile,
} from 'fs-extra';
import { dump, load } from 'js-yaml';
import { basename, dirname, extname, relative, resolve } from 'path';

import type { Template } from './types';

// JSON format
const INDENT = 2;

/**
 * load the content of a file
 * @param path file path to be loaded
 * @param defaultFormat default format of the file
 * @returns content of the file
 */
export async function loadFile(
  path: string,
  defaultFormat?: 'json' | 'yaml',
): Promise<Record<string, unknown>>;
export async function loadFile(
  path: string,
  defaultFormat?: 'text',
): Promise<string>;
export async function loadFile(
  path: string,
  defaultFormat: 'json' | 'yaml' | 'text' = 'text',
): Promise<string | Record<string, unknown>> {
  const content = (await readFile(path)).toString();

  // parse the content depending on the extension
  switch (extname(path) || `.${defaultFormat}`) {
    case '.json':
      return JSON.parse(content) as Record<string, unknown>;
    case '.yaml':
    case '.yml':
      return load(content) as Record<string, unknown>;
    default:
      return content;
  }
}

/**
 * serialize a configuration content to the right format according to its destination
 * @param destination the path to which the content will be written
 * @param content configuration content
 * @returns serialized content
 */
export function serializeContent(
  destination: string,
  content: Template,
): string {
  if (typeof content === 'string') {
    return content;
  }

  switch (extname(destination)) {
    case '.yaml':
    case '.yml':
      return dump(content);
    case '.json':
    default:
      return JSON.stringify(content, null, INDENT);
  }
}

/**
 * write all generated configuration to their destination
 * @param root path to the target project root
 * @param config a map of configuration content and its path to be written
 * @param pathMap a map of keys in the config map and their destination path
 */
export async function writeFiles(
  root: string,
  config: Record<string, Template>,
  pathMap: Record<string, string>,
): Promise<void> {
  for (const [key, content] of Object.entries(config)) {
    const destination = pathMap[key];

    // write content to the destination path
    if (
      // file don't exist
      !(await pathExists(destination)) ||
      // content to be written under the configurations folder
      destination !== resolve(root, key)
    ) {
      info(`Generating ${key}`);

      // ensure that all parent folders exist to avoid errors from writeFile
      await ensureFile(destination);

      // write content to the destination path
      await writeFile(destination, serializeContent(destination, content));
    } else {
      info(`Skipping ${key}`);
    }
  }
}

/**
 * link generated files to the project root
 * @param root path to the target project root
 * @param configurationLink map of symlinks to its real path
 */
export async function linkFiles(
  root: string,
  configurationLink: Record<string, string>,
): Promise<void> {
  for (const [file, destination] of Object.entries(configurationLink)) {
    const link = resolve(root, file);
    const to = relative(dirname(link), destination);

    // create links only if the path really doesn't exist
    if (
      !(await linkExists(link)) &&
      !(await pathExists(link)) &&
      // for files that mean to be created directly on the target project root, not via symlink
      to !== basename(to)
    ) {
      info(`Linking ${relative(root, link)} => ${to}`);
      await mkdir(dirname(link), { recursive: true });
      await symlink(to, link);
    } else if (to !== basename(to)) {
      info(`Skipping ${relative(root, link)} => ${to}`);
    }
  }
}

/**
 * unlink generated files from the project root
 * @param root path to the target project root
 * @param configurationLink map of symlinks to its real path
 */
export async function unlinkFiles(
  root: string,
  configurationLink: Record<string, string>,
): Promise<void> {
  for (const [name, destination] of Object.entries(configurationLink)) {
    try {
      const link = await readlink(resolve(root, name));
      const to = relative(root, destination);

      if (link === to) {
        info(`Removing ${name}`);
        await unlink(resolve(root, name));
        continue;
      }
    } catch {
      // do nothing
    }

    info(`Skipping ${name}`);
  }
}

/**
 * check if path is a symlink
 * @param path file path to be checked
 * @returns true if it is a symlink
 */
async function linkExists(path: string): Promise<boolean> {
  try {
    // NOTE use lstat instead of pathExists as it checks the link not the linked path
    await lstat(path);

    return true;
  } catch {
    return false;
  }
}
