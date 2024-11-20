import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

import { readPackageUp } from 'read-pkg-up';

import debug from '../../debugger';

/** presetter configuration filename */
const PRESETTER_CONFIG = 'presetter.config';

/**
 * get all potential presetter configuration files by searching from the current base up to the monorepo root, if there is one
 * @param base the base directory to start searching for the configuration file
 * @returns list of presetter configuration files
 */
export async function searchPresetterConfigs(base: string): Promise<string[]> {
  debug(`searching for presetter configuration files from ${base}`);

  const filesFromBase = ['.mts', '.ts', '.mjs', '.js']
    .map((ext) => resolve(base, `${PRESETTER_CONFIG}${ext}`))
    .filter(existsSync);

  debug(`found ${filesFromBase.length} configuration files from ${base}`);

  const parent = await readPackageUp({ cwd: dirname(base) });

  // if the base is the root of a monorepo, stop searching
  const filesFromParent = parent?.path
    ? await searchPresetterConfigs(dirname(base))
    : [];

  return [...filesFromBase, ...filesFromParent];
}
