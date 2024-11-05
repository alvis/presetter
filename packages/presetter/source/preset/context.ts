import { dirname } from 'node:path';

import { getPackage } from '../package';

import { getPresetterRC } from './presetterRC';

import type { PresetContext } from 'presetter-types';

/**
 * get context about the target project and any customization in .presetterrc
 * @returns context about the target project and any customization in .presetterrc
 */
export async function getContext(): Promise<PresetContext> {
  const { json, path } = await getPackage();
  const root = dirname(path);
  const target = { name: json.name!, root, package: json };
  const custom = await getPresetterRC(root);

  return {
    target,
    custom,
  };
}
