/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Procedures for setting up a preset
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { info } from 'console';
import {
  lstat,
  mkdir,
  pathExists,
  readFile,
  readlink,
  symlink,
  unlink,
  writeJSON,
} from 'fs-extra';
import { defaultsDeep } from 'lodash';
import { dirname, extname, relative, resolve } from 'path';
import resolvePackage from 'resolve-pkg';
import writePackage from 'write-pkg';

import {
  arePeerPackagesAutoInstalled,
  getPackage,
  reifyDependencies,
} from './package';

/** input for a preset configurator */

export interface PresetArgs<
  Config extends Record<string, unknown> = Record<string, unknown>,
> {
  /** information about the targeted project */
  target: {
    /** the package name defined in the targeted project's package.json */
    name: string;
    /** the root folder containing the targeted project's .presetterrc.json */
    root: string;
  };
  /** the config field in .presetterrc.json */
  config: Config;
}

/** expected return from the configuration function from the preset */
export interface PresetAsset {
  /** mapping of symlinks to configuration files provided by the preset */
  links: Record<string, string>;
  /** map of common scripts */
  scripts: Record<string, string>;
}

/** data structure for .presetterrc */
export interface PresetterConfig {
  /** preset name */
  preset: string;
  /** configuration for customisation to be passed to the preset */
  config?: Record<string, unknown>;
}

/** presetter configuration filename */
const PRESETTERRC = '.presetterrc';

const JSON_INDENT = 2;

/**
 * get the configuration file content
 * @param base the base directory in which a configuration file should be located
 * @returns content of the configuration file
 */
export async function getConfiguration(base: string): Promise<PresetterConfig> {
  const potentialConfigFiles = ['', '.json'].map((ext) =>
    resolve(base, `${PRESETTERRC}${ext}`),
  );

  for (const path of potentialConfigFiles) {
    if (await pathExists(path)) {
      return readConfiguration(path);
    }
  }

  // the default preset
  return { preset: 'presetter-preset' };
}

/**
 * convert the configuration file content based on the extension
 * @param path file path
 * @returns content of the configuration file
 */
async function readConfiguration(path: string): Promise<PresetterConfig> {
  const content = (await readFile(path)).toString();

  switch (extname(path)) {
    case '.json':
    default:
      return JSON.parse(content) as PresetterConfig;
  }
}

/**
 * get the preset package name from package.json
 * @returns name of the preset package
 */
export async function getPresetAsset(): Promise<PresetAsset> {
  const {
    json: { name },
    path,
  } = await getPackage();
  const root = dirname(path);

  // get the preset name
  const { preset, config = {} } = await getConfiguration(root);

  // get the preset
  const module = resolvePackage(preset, { cwd: root });

  const { default: configurator } = (await import(module!)) as {
    default: (args: PresetArgs) => Promise<PresetAsset>;
  };

  return configurator({ target: { name, root }, config });
}

/**
 *  adopt a preset to the project
 * @param uri name or git url of the preset
 */
export async function setupPreset(uri: string): Promise<void> {
  // install presetter & the preset
  const packages = await reifyDependencies({
    root: process.cwd(),
    add: ['presetter', uri],
    saveAs: 'dev',
    lockFile: true,
  });

  // extract the name of the preset in case the supplied is a git url
  const [{ name: preset }] = packages.filter(({ name, spec }) =>
    [name, spec, `${name}@${spec}`].includes(uri),
  );

  const { path, json } = await getPackage();

  // update .presetterrc.json
  await writeJSON(
    resolve(dirname(path), `${PRESETTERRC}.json`),
    { preset },
    {
      spaces: JSON_INDENT,
    },
  );

  // bootstrap the preset
  const asset = await getPresetAsset();
  await linkConfigurations(asset.links);

  // insert post install script if not preset
  await writePackage(
    dirname(path),
    defaultsDeep(json, {
      scripts: {
        prepare: 'presetter bootstrap',
      },
    }),
  );
}

/**
 * bootstrap the preset to the current project root
 * @param options options on how to bootstrap the preset
 * @param options.force do all steps despite potential step saving
 */
export async function bootstrapPreset(options?: {
  force?: boolean;
}): Promise<void> {
  const { force = false } = { ...options };

  // install all related packages first
  if (force || !arePeerPackagesAutoInstalled()) {
    const { path } = await getPackage();
    await reifyDependencies({ root: dirname(path) });
  }

  // then get the configuration assets from the preset
  const asset = await getPresetAsset();
  await linkConfigurations(asset.links);
}

/**
 * uninstall the preset from the current project root
 */
export async function unsetPreset(): Promise<void> {
  const preset = await getPresetAsset();

  await Promise.all([unlinkConfigurations(preset)]);
}

/**
 * link configuration files from the preset module to the project root
 * @param links list of symlinks to configuration files provided by the preset
 */
async function linkConfigurations(links: PresetAsset['links']): Promise<void> {
  const { path } = await getPackage();
  const root = dirname(path);

  for (const [file, destination] of Object.entries(links)) {
    const link = resolve(root, file);
    const to = relative(dirname(link), destination);

    // create links only if the path really doesn't exist
    if (!(await linkExists(link)) && !(await pathExists(link))) {
      info(`linking ${link} => ${to}`);
      await mkdir(dirname(link), { recursive: true });
      await symlink(to, link);
    }
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

/**
 * unlink configuration files from the preset module from the project root
 * @param preset package name of the preset
 */
async function unlinkConfigurations(preset: PresetAsset): Promise<void> {
  const { path } = await getPackage();
  const root = dirname(path);

  for (const [name, destination] of Object.entries(preset.links)) {
    try {
      const link = await readlink(name);
      const to = relative(root, destination);

      if (link === to) {
        info(`removing ${name}`);
        await unlink(resolve(root, name));
      }
    } catch (cause) {
      info(`skipping ${name}`);
    }
  }
}
