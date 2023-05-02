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
import { existsSync, writeFileSync } from 'fs';
import { defaultsDeep } from 'lodash';
import { dirname, resolve } from 'path';
import readPackage from 'read-pkg';
import readPackageUp from 'read-pkg-up';
import resolvePackage from 'resolve-pkg';
import writePackage from 'write-pkg';

import { resolveContext, resolveScripts, resolveTemplate } from './content';
import { linkFiles, loadFile, unlinkFiles, writeFiles } from './io';
import {
  arePeerPackagesAutoInstalled,
  getPackage,
  reifyDependencies,
} from './package';
import { isJSON, merge } from './template';

import type {
  PresetAsset,
  PresetContext,
  PresetGraph,
  PresetNode,
  PresetterConfig,
  ResolvedPresetContext,
  Template,
} from './types';
import type { PackageJson } from 'read-pkg';
import type { JsonValue } from 'type-fest';

/** presetter configuration filename */
const PRESETTERRC = '.presetterrc';

const JSON_INDENT = 2;

// NOTE on resolution steps
// STEP 1 build a dependency tree of presets
// STEP 2 resolve variables from the tree
//
// for template resolution
// STEP 3 resolve template content from resolved variables
// STEP 4 resolve noSimlinks from resolved variables
//
// for script resolution
// STEP 3 resolve script content from resolved variables

/**
 * get presetter configuration files recursively from the current base up to the monorepo root, if there is one
 * @param base the base directory to start searching for the configuration file
 * @returns list of presetter configuration files
 */
export async function getPresetterRCPaths(base: string): Promise<string[]> {
  const filesFromBase = ['', '.json']
    .map((ext) => resolve(base, `${PRESETTERRC}${ext}`))
    .filter(existsSync);

  const parent = await readPackageUp({ cwd: dirname(base) });

  // if the base is the root of a monorepo, stop searching
  const filesFromParent = parent?.path
    ? await getPresetterRCPaths(dirname(base))
    : [];

  return [...filesFromParent, ...filesFromBase];
}

/**
 * get the .presetterrc configuration file content
 * @param root the base directory in which the configuration file should be located
 * @returns content of the configuration file
 */
export async function getPresetterRC(root: string): Promise<PresetterConfig> {
  // locate all possible configuration files
  const paths = await getPresetterRCPaths(root);

  if (!paths.length) {
    throw new Error('missing presetter configuration file');
  }

  const configs = paths.map((path) => loadFile(path, 'json') as JsonValue);

  const mergedConfig = configs.reduce(
    (mergedConfig, config) => merge(mergedConfig, config),
    {},
  );

  assertPresetterRC(mergedConfig);

  return mergedConfig;
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

  writeFileSync(
    resolve(root, `${PRESETTERRC}.json`),
    JSON.stringify(merge(existingPresetterRC, config), null, JSON_INDENT),
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
 * get assets from a preset
 * @param name name of the preset
 * @param context context about the target project and customization in .presetterrc
 */
export async function getPresetAsset(
  name: string,
  context: PresetContext,
): Promise<PresetAsset> {
  try {
    // get the preset
    const module = resolvePackage(name, {
      cwd: context.target.root,
    });

    const { default: getPresetAsset } = (await import(module!)) as {
      default: (args: PresetContext) => Promise<PresetAsset>;
    };

    return await getPresetAsset(context);
  } catch {
    throw new Error(`cannot resolve preset ${name}`);
  }
}

/**
 * resolve a preset as a node
 * @param name name of the preset
 * @param context context about the target project and customization in .presetterrc
 * @returns resolved preset node
 */
export async function getPresetNode(
  name: string,
  context: PresetContext,
): Promise<PresetNode> {
  const asset = await getPresetAsset(name, context);
  const nodes = await Promise.all(
    (asset.extends ?? []).map(async (extension) =>
      getPresetNode(extension, context),
    ),
  );

  return { name, asset, nodes };
}

/**
 * compute a graph of presets
 * @param context context about the target project and customization in .presetterrc
 * @returns resolved preset graph
 */
export async function getPresetGraph(
  context: PresetContext,
): Promise<PresetGraph> {
  // get the preset name
  const { preset } = context.custom;

  const presets = Array.isArray(preset) ? preset : [preset];

  return Promise.all(presets.map(async (name) => getPresetNode(name, context)));
}

/**
 * get the merged scripts templates
 * @returns scripts template
 */
export async function getScripts(): Promise<Record<string, string>> {
  const context = await getContext();
  const graph = await getPresetGraph(context);
  const resolvedContext = await resolveContext({ graph, context });

  return resolveScripts({ graph, context: resolvedContext });
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
    }) as PackageJson & Record<string, string>,
  );

  info('Done. Enjoy coding!');
}

/**
 * bootstrap the preset to the current project root
 */
export async function bootstrapPreset(): Promise<void> {
  const context = await getContext();

  // install all related packages first
  if (!arePeerPackagesAutoInstalled()) {
    await reifyDependencies({ root: context.target.root });
  }

  // generate configurations
  await bootstrapContent(context);
}

/**
 * generate files from templates and link them to the target project root
 * @param context context about the target project and any customization in .presetterrc
 */
export async function bootstrapContent(context: PresetContext): Promise<void> {
  const graph = await getPresetGraph(context);
  const resolvedContext = await resolveContext({ graph, context });
  const content = await resolveTemplate({ graph, context: resolvedContext });

  const destinationMap = await getDestinationMap(content, resolvedContext);

  writeFiles(context.target.root, content, destinationMap);
  linkFiles(context.target.root, destinationMap);
}

/**
 * uninstall the preset from the current project root
 */
export async function unsetPreset(): Promise<void> {
  const context = await getContext();
  const graph = await getPresetGraph(context);
  const resolvedContext = await resolveContext({ graph, context });
  const content = await resolveTemplate({ graph, context: resolvedContext });
  const configurationLink = await getDestinationMap(content, resolvedContext);

  unlinkFiles(context.target.root, configurationLink);
}

/**
 * get context about the target project and any customization in .presetterrc
 * @returns context about the target project and any customization in .presetterrc
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
 * @param context resolved context about the target project and customization
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
