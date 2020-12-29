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
  installPackages,
  getPackage,
} from './package';

/**
 * expected return from the configuration function from the preset
 */
export interface Preset {
  /** name of the preset */
  name: string;
  /** mapping of symlinks to configuration files provided by the preset */
  links: Record<string, string>;
  /** path to a JSON containing common scripts */
  scripts: Record<string, string>;
}

/** data structure for .presetterrc */
export interface PresetterConfiguration {
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
export async function getConfiguration(
  base: string,
): Promise<PresetterConfiguration> {
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
async function readConfiguration(
  path: string,
): Promise<PresetterConfiguration> {
  const content = (await readFile(path)).toString();

  switch (extname(path)) {
    case '.json':
    default:
      return JSON.parse(content) as PresetterConfiguration;
  }
}

/**
 * get the preset package name from package.json
 * @returns name of the preset package
 */
export async function getPreset(): Promise<Preset> {
  const { path } = await getPackage();
  const base = dirname(path);

  // get the preset name
  const { preset, config } = await getConfiguration(base);

  // get the preset
  const module = resolvePackage(preset, { cwd: base });

  const { default: configurator } = (await import(module!)) as {
    default: (
      config: PresetterConfiguration['config'],
    ) => Promise<Omit<Preset, 'name'>>;
  };

  return { name: preset, ...(await configurator(config)) };
}

/**
 *  adopt a preset to the project
 * @param uri name or git url of the preset
 */
export async function setupPreset(uri: string): Promise<void> {
  // install presetter & the preset
  const installedPackages = await installPackages({
    packages: ['presetter', uri],
    save: 'development',
    lock: true,
  });

  // extract the name of the preset in case the supplied is a git url
  const [{ name: preset }] = installedPackages.filter(
    ({ name }) => name !== 'presetter',
  );

  const { path, json } = await getPackage();

  // update .presetterrc
  await writeJSON(
    resolve(dirname(path), PRESETTERRC),
    { preset },
    {
      spaces: JSON_INDENT,
    },
  );

  // bootstrap the preset
  await bootstrapPreset();

  // insert post install script if not preset
  await writePackage(
    dirname(path),
    defaultsDeep(json, {
      scripts: {
        prepublish: 'presetter bootstrap',
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

  const preset = await getPreset();

  await Promise.all([
    force || !arePeerPackagesAutoInstalled()
      ? installPresetPeerDependencies(preset)
      : null,
    linkConfigurations(preset),
  ]);
}

/**
 * uninstall the preset from the current project root
 */
export async function unsetPreset(): Promise<void> {
  const preset = await getPreset();

  await Promise.all([unlinkConfigurations(preset)]);
}

/**
 * install peer packages according to the preset
 * @param preset package name of the preset
 */
async function installPresetPeerDependencies(preset: Preset): Promise<void> {
  // get the path of the preset package
  const path = resolvePackage(preset.name);

  // get packages to be installed from the preset's package.json
  const {
    json: { peerDependencies },
  } = await getPackage(path);

  // install the packages
  const packages = Object.entries({ ...peerDependencies }).map(
    ([name, version]) => `${name}@${version}`,
  );

  await installPackages({ packages });
}

/**
 * link configuration files from the preset module to the project root
 * @param preset package name of the preset
 */
async function linkConfigurations(preset: Preset): Promise<void> {
  const { path } = await getPackage();
  const root = dirname(path);

  for (const [file, destination] of Object.entries(preset.links)) {
    // create links only if the path really doesn't exist
    if (!(await linkExists(file)) && !(await pathExists(file))) {
      const link = resolve(root, file);
      const to = relative(root, destination);
      info(`linking ${link} => ${to}`);
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
async function unlinkConfigurations(preset: Preset): Promise<void> {
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
