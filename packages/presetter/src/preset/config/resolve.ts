import { createJiti } from 'jiti';

import debug from '../../debugger';

import { searchPresetterConfigs } from './search';

import type { Preset } from 'presetter-types';

const jiti = createJiti(import.meta.url, {
  moduleCache: false, // NOTE: disable module cache to fix a bug in jiti that importing the same file multiple times simtaneously would result in some of the imports resolved as undefined
  /* v8 ignore start */
  debug: !!process.env.DEBUG?.includes('presetter'),
  /* v8 ignore end */
});

const configs: Record<string, Promise<Preset>> = {};

/**
 * resolve the presetter configuration from the project root
 * @param root the root directory containing the project's package.json
 * @returns the resolved presetter configuration
 */
export async function resolvePresetterConfig(root: string): Promise<Preset> {
  const configPaths = await searchPresetterConfigs(root);

  if (configPaths.length === 0) {
    throw new Error('no presetter configuration file found');
  }

  // NOTE: the priority is given to the configuration file closest to the project root, from mts, ts, mjs then js
  const closestConfigPath = configPaths[0];

  debug(`loading presetter configuration from ${closestConfigPath}`);

  // NOTE: load the preset with import cache as a fix to a bug in jiti that importing the same file multiple times simtaneously would result in some of the imports resolved as undefined
  return (configs[closestConfigPath] ??= jiti.import<Preset>(
    closestConfigPath,
    { default: true },
  ));
}
