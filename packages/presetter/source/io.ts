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

import { info } from 'node:console';
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readlinkSync,
  symlinkSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { basename, dirname, extname, relative, resolve } from 'node:path';

import { dump, load } from 'js-yaml';

import type { Template } from './types';

// JSON format
const INDENT = 2;

/**
 * load the content of a file
 * @param path file path to be loaded
 * @param defaultFormat default format of the file
 * @returns content of the file
 */
export function loadFile(
  path: string,
  defaultFormat?: 'json' | 'yaml',
): Record<string, unknown>;
export function loadFile(path: string, defaultFormat?: 'text'): string;
export function loadFile(
  path: string,
  defaultFormat: 'json' | 'yaml' | 'text' = 'text',
): string | Record<string, unknown> {
  const content = readFileSync(path).toString();

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
export function writeFiles(
  root: string,
  config: Record<string, Template>,
  pathMap: Record<string, string>,
): void {
  for (const [key, content] of Object.entries(config)) {
    const destination = pathMap[key];

    // write content to the destination path
    if (
      // file don't exist
      !existsSync(destination) ||
      // content to be written under the configurations folder
      destination !== resolve(root, key)
    ) {
      info(`Generating ${key}`);

      // ensure that all parent folders exist to avoid errors from writeFile
      mkdirSync(dirname(destination), { recursive: true });

      // write content to the destination path
      writeFileSync(destination, serializeContent(destination, content));
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
export function linkFiles(
  root: string,
  configurationLink: Record<string, string>,
): void {
  for (const [file, destination] of Object.entries(configurationLink)) {
    const path = resolve(root, file);
    const to = relative(dirname(path), destination);

    if (
      // for files that mean to be created directly on the target project root, not via symlink
      to !== basename(to) &&
      // do not replace any user created files
      (!existsSync(path) || linkExists(path))
    ) {
      info(`Linking ${relative(root, path)} => ${to}`);
      ensureLink(path, to);
    }
  }
}

/**
 * unlink generated files from the project root
 * @param root path to the target project root
 * @param configurationLink map of symlinks to its real path
 */
export function unlinkFiles(
  root: string,
  configurationLink: Record<string, string>,
): void {
  for (const [name, destination] of Object.entries(configurationLink)) {
    try {
      const link = readlinkSync(resolve(root, name));
      const to = relative(root, destination);

      if (link === to) {
        info(`Removing ${name}`);
        unlinkSync(resolve(root, name));
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
function linkExists(path: string): boolean {
  try {
    // NOTE use lstat instead of pathExists as it checks the link not the linked path
    lstatSync(path);

    return true;
  } catch {
    return false;
  }
}

/**
 * ensures that there is a symlink at the given path pointing to the target.
 * @param path path where the symlink should be created
 * @param to target of the symlink
 */
function ensureLink(path: string, to: string): void {
  // create the parent directory if it doesn't exist
  mkdirSync(dirname(path), { recursive: true });

  // remove the existing symlink if it exists
  if (existsSync(path)) {
    unlinkSync(path);
  }

  // create a new symlink pointing to the target
  symlinkSync(to, path);
}
