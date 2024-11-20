import { dirname } from 'node:path';

import { getPackage } from '../package';

import type { PresetContext } from 'presetter-types';

/**
 * get context about the target project and any customization in .presetterrc
 * @param cwd the current working directory
 * @returns context about the target project and any customization in .presetterrc
 */
export async function getContext(cwd?: string): Promise<PresetContext> {
  const { json, path } = await getPackage(cwd);
  const root = dirname(path);

  return { root, package: json };
}
