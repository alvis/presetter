import { createJiti } from 'jiti';

import debug from '../../debugger';

import { searchPresetterConfigs } from './search';

import type { Preset } from 'presetter-types';

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
  const jiti = createJiti(root, {
    debug: !!process.env.DEBUG?.includes('presetter'),
  });

  // get the preset
  return jiti.import<Preset>(closestConfigPath, {
    default: true,
  });
}
