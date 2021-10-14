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
import { pathExists, writeJSON } from 'fs-extra';
import { defaultsDeep } from 'lodash';
import { dirname, resolve } from 'path';
import readPackage from 'read-pkg';
import resolvePackage from 'resolve-pkg';
import writePackage from 'write-pkg';

import { generateContent, getVariable, resolveContext } from './content';
import { linkFiles, loadFile, unlinkFiles, writeFiles } from './io';
import {
  arePeerPackagesAutoInstalled,
  getPackage,
  reifyDependencies,
} from './package';
import { filter, isJSON, merge, template } from './template';

import type {
  PresetAsset,
  PresetContext,
  PresetterConfig,
  ResolvedPresetContext,
  Template,
} from './types';

/** presetter configuration filename */
const PRESETTERRC = '.presetterrc';

const JSON_INDENT = 2;

/**
 * get the .presetterrc configuration file content
 * @param root the base directory in which the configuration file should be located
 * @returns content of the configuration file
 */
export async function getPresetterRC(root: string): Promise<PresetterConfig> {
  const potentialConfigFiles = ['', '.json'].map((ext) =>
    resolve(root, `${PRESETTERRC}${ext}`),
  );

  for (const path of potentialConfigFiles) {
    if (await pathExists(path)) {
      // return the first customisation file found
      const custom = await loadFile(path, 'json');
      assertPresetterRC(custom);

      return custom;
    }
  }

  throw new Error('Missing preset defined in .presetterrc');
}

/**
 * update .presetterrc configuration file content
 * @param root the base directory in which the configuration file should be located
 * @param config content to be merged with the existing configuration file
 */
export async function updatePresetterRC(
  root: string,
  config: PresetterConfig,
): Promise<void> {
  const existingPresetterRC = await getPresetterRC(root).catch(() => ({}));

  await writeJSON(
    resolve(root, `${PRESETTERRC}.json`),
    merge(existingPresetterRC, config),
    { spaces: JSON_INDENT },
  );
}

/**
 * check that the configuration is valid
 * @param value content from a configuration file
 */
export function assertPresetterRC(
  value: unknown,
): asserts value is PresetterConfig {
  if (
    !isJSON(value) ||
    (typeof value['preset'] !== 'string' && !Array.isArray(value['preset']))
  ) {
    throw new Error(`invalid presetter configuration file`);
  }
}

/**
 * get the preset package name from package.json
 * @param context context about the target project and any customisation in .presetterrc
 * @returns name of the preset package
 */
export async function getPresetAssets(
  context: PresetContext,
): Promise<PresetAsset[]> {
  // get the preset name
  const { preset } = context.custom;

  const presets = Array.isArray(preset) ? preset : [preset];

  const assets: PresetAsset[] = [];

  for (const preset of presets) {
    try {
      // get the preset
      const module = resolvePackage(preset, {
        cwd: context.target.root,
      });

      const { default: presetPresetAsset } = (await import(module!)) as {
        default: (args: PresetContext) => Promise<PresetAsset>;
      };

      const asset = await presetPresetAsset(context);

      // add extended assets first
      const extensions =
        asset.extends?.map(async (extension) =>
          getPresetAssets({
            ...context,
            custom: { ...context.custom, preset: extension },
          }),
        ) ?? [];
      assets.push(...(await Promise.all(extensions)).flat());

      // then asset from this preset so that this preset can override the extended ones
      assets.push(asset);
    } catch {
      throw new Error(`cannot resolve preset ${preset}`);
    }
  }

  return assets;
}

/**
 * merge all scripts templates
 * @param context context about the target project and any customisation in .presetterrc
 * @returns scripts template
 */
export async function getScripts(
  context: PresetContext,
): Promise<Record<string, string>> {
  const { custom } = context;

  // get  assets from all configured presets
  const assets = await getPresetAssets(context);

  // compute the final variable to be used in the scripts template
  const variable = getVariable(assets, context);

  // load templated scripts from presets
  const scripts = await Promise.all(
    assets
      .map((asset) => asset.scripts)
      .filter((path): path is string => typeof path === 'string')
      .map(
        async (path) =>
          (await loadFile(path, 'yaml')) as Record<string, string>,
      ),
  );

  // merge all template scripts from presets
  const scriptsFromPreset = scripts.reduce(
    (merged, scripts) => merge(merged, scripts),
    {},
  );

  // merge customised scripts with the preset scripts
  const scriptsWithCustomConfig = merge(scriptsFromPreset, custom.scripts);

  // replace the template variables
  return template(scriptsWithCustomConfig, variable);
}

/**
 *  adopt a preset to the project
 * @param uris list of name or git url of the preset
 */
export async function setupPreset(...uris: string[]): Promise<void> {
  // NOTE: comparing packages before and after installation is the only reliable way
  // to extract the name of the preset in case it's given as a git url or file path etc.
  const { path } = await getPackage();
  const root = dirname(path);
  const packageBefore = (await readPackage({ cwd: root })).devDependencies;

  // install presetter & the preset
  info(`Installing ${uris.join(' ')}... it may take a few moment...`);
  await reifyDependencies({
    root,
    add: ['presetter', ...uris],
    saveAs: 'dev',
    lockFile: true,
  });

  // extract the name of the installed preset
  const packageAfter = (await readPackage({ cwd: root })).devDependencies;
  const newPackages = getNewPackages({ ...packageBefore }, { ...packageAfter });
  const preset = newPackages.filter((name) => name !== 'presetter');

  info('Updating .presetterrc.json & package.json');
  // update .presetterrc.json
  await updatePresetterRC(root, { preset });

  // bootstrap configuration files with the new .presetterrc.json
  const context = await getContext();
  await bootstrapContent(context);

  // insert post install script if not preset
  await writePackage(
    root,
    defaultsDeep(context.target.package, {
      scripts: { prepare: 'presetter bootstrap' },
    }),
  );

  info('Done. Enjoy coding!');
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

  const context = await getContext();

  // install all related packages first
  if (force || !arePeerPackagesAutoInstalled()) {
    await reifyDependencies({ root: context.target.root });
  }

  // generate configurations
  await bootstrapContent(context);
}

/**
 * generate files from templates and link them to the target project root
 * @param context context about the target project and any customisation in .presetterrc
 */
export async function bootstrapContent(context: PresetContext): Promise<void> {
  const assets = await getPresetAssets(context);
  const content = await generateContent(assets, context);
  const resolvedContext = await resolveContext(assets, context);
  const filteredContent = filter(content, ...(context.custom.ignores ?? []));

  const destinationMap = await getDestinationMap(
    filteredContent,
    resolvedContext,
  );

  await writeFiles(context.target.root, filteredContent, destinationMap);
  await linkFiles(context.target.root, destinationMap);
}

/**
 * uninstall the preset from the current project root
 */
export async function unsetPreset(): Promise<void> {
  const context = await getContext();
  const assets = await getPresetAssets(context);
  const content = await generateContent(assets, context);
  const resolvedContext = await resolveContext(assets, context);
  const configurationLink = await getDestinationMap(content, resolvedContext);

  await unlinkFiles(context.target.root, configurationLink);
}

/**
 * get context about the target project and any customisation in .presetterrc
 * @returns context about the target project and any customisation in .presetterrc
 */
export async function getContext(): Promise<PresetContext> {
  const { json, path } = await getPackage();
  const root = dirname(path);
  const target = { name: json.name, root, package: json };
  const custom = await getPresetterRC(root);

  return {
    target,
    custom,
  };
}

/**
 * compute the output paths of all configuration files to be generated
 * @param template resolved template map
 * @param context resolved context about the target project and customisation
 * @returns mapping of configuration symlinks to its real path
 */
export async function getDestinationMap(
  template: Record<string, Template>,
  context: ResolvedPresetContext<'noSymlinks'>,
): Promise<Record<string, string>> {
  const {
    custom: { noSymlinks },
    target: { root },
  } = context;
  // make sure we use the path of presetter under the target project, not the one via npx
  const presetterDir = resolvePackage('presetter', { cwd: root });
  const outDir = resolve(presetterDir!, 'generated', context.target.name);

  const relativePaths = [...Object.keys(template)];

  return Object.fromEntries([
    ...relativePaths.map((relativePath): [string, string] => [
      relativePath,
      resolve(
        // output on the project root if it's specified as not a symlink
        noSymlinks.includes(relativePath) ? context.target.root : outDir,
        relativePath,
      ),
    ]),
  ]);
}

/**
 * get a list of new packages installed by comparing the before and after state of devDependencies in package.json
 * @param before before state of devDependencies in package.json
 * @param after after state of devDependencies in package.json
 * @returns list of new package names
 */
function getNewPackages(
  before: Record<string, string>,
  after: Record<string, string>,
): string[] {
  return Object.keys(after).filter((name): name is string => !before[name]);
}
