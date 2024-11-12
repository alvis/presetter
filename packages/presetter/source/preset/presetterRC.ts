import { existsSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

import { readPackageUp } from 'read-pkg-up';

import debug from '../debugger';
import { loadFile } from '../io';
import { merge } from '../template';
import { isJsonObject } from '../utilities';

import type { PresetterConfig } from 'presetter-types';
import type { JsonValue } from 'type-fest';

/** presetter configuration filename */
const PRESETTERRC = '.presetterrc';

const JSON_INDENT = 2;

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

  debug('MERGED CONFIGURATION PROVIDED BY PROJECT\n%O', mergedConfig);

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
    JSON.stringify(
      merge(existingPresetterRC as JsonValue, config as unknown as JsonValue),
      null,
      JSON_INDENT,
    ),
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
    !isJsonObject(value) ||
    (typeof value.preset !== 'string' && !Array.isArray(value.preset))
  ) {
    throw new Error(`invalid presetter configuration file`);
  }
}
