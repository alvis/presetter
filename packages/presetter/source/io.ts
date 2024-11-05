import { info } from 'node:console';
import {
  linkSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readlinkSync,
  statSync,
  symlinkSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { basename, dirname, extname, relative, resolve } from 'node:path';

import { dump, load } from 'js-yaml';

import type { Template } from 'presetter-types';

/** collection of options for file ios */
export interface IOOptions {
  /** whether to overwrite existing files */
  force?: boolean;
}

// JSON format
const INDENT = 2;

/**
 * check if a path is either a link or a file with multiple hard links
 * @param path path to be checked
 * @returns true if the path is a link or a file with multiple hard links
 */
export function islink(path: string): boolean {
  const pathLinkStat = lstatSync(path, { throwIfNoEntry: false });
  const pathStat = statSync(path, { throwIfNoEntry: false });

  return (
    !!pathLinkStat?.isSymbolicLink() ||
    (!!pathStat?.nlink && pathStat.nlink > 1)
  );
}

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
 * @param options collection of options
 */
export function writeFiles(
  root: string,
  config: Record<string, Template>,
  pathMap: Record<string, string>,
  options?: IOOptions,
): void {
  const { force = false } = { ...options };

  for (const [key, content] of Object.entries(config)) {
    const destination = pathMap[key];

    // write content to the destination path
    if (
      // force overwrite
      force ||
      // file don't exist
      !lstatSync(destination, { throwIfNoEntry: false }) ||
      // content to be written under the configurations folder
      destination !== resolve(root, key)
    ) {
      info(`Generating ${key}`);

      ensureFile(destination, serializeContent(destination, content));
    } else {
      info(`Skipping ${key}`);
    }
  }
}

/**
 * link generated files to the project root
 * @param root path to the target project root
 * @param configurationLink map of symlinks to its real path
 * @param options collection of options
 */
export function linkFiles(
  root: string,
  configurationLink: Record<string, string>,
  options?: IOOptions,
): void {
  const { force = false } = { ...options };

  for (const [file, destination] of Object.entries(configurationLink)) {
    const path = resolve(root, file);
    const to = relative(dirname(path), destination);

    const pathStat = lstatSync(path, { throwIfNoEntry: false });
    const linkDoesNotExist = !pathStat;

    if (
      // for files that mean to be created directly on the target project root, not via symlink
      to !== basename(to) &&
      // do not replace any user created files unless overwrite is set
      (linkDoesNotExist || islink(path) || force)
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
 * @param options collection of options
 */
export function unlinkFiles(
  root: string,
  configurationLink: Record<string, string>,
  options?: IOOptions,
): void {
  const { force = false } = { ...options };

  for (const [name, destination] of Object.entries(configurationLink)) {
    const link = readLink(resolve(root, name));
    const to = relative(root, destination);

    if (link === to || force) {
      info(`Removing ${name}`);
      unlinkSync(resolve(root, name));
      continue;
    }

    info(`Skipping ${name}`);
  }
}

/**
 * resolve a path and follow any symlink
 * @param path path to be resolved
 * @returns the target of the symlink or a resolved path if the path is not a symlink
 */
function readLink(path: string): string | null {
  const pathStat = lstatSync(path, { throwIfNoEntry: false });

  return pathStat?.isSymbolicLink() ? readlinkSync(path) : null;
}

/**
 * ensure that there is a symlink at the given path pointing to the target
 * @param path path where the symlink should be created
 * @param to target of the symlink
 */
function ensureLink(path: string, to: string): void {
  // create the parent directory if it doesn't exist
  mkdirSync(dirname(path), { recursive: true });

  // remove any existing files or symlinks
  if (lstatSync(path, { throwIfNoEntry: false })) {
    unlinkSync(path);
  }

  // create a new link pointing to the target
  try {
    // try to create a hardlink
    linkSync(to, path);
  } catch {
    // if hard link creation failed (e.g. linking across disc boundary) create a symlink instead
    symlinkSync(to, path);
  }
}

/**
 * ensure that there is a file at the given path with the given content
 * @param path path where the file should be created
 * @param content content of the file
 */
function ensureFile(path: string, content: string): void {
  // ensure that all parent folders exist to avoid errors from writeFile
  mkdirSync(dirname(path), { recursive: true });

  // write content to the destination path
  writeFileSync(path, content);
}
