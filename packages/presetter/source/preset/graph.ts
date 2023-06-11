/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of helpers for prepare the preset graph
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import type {
  PresetAsset,
  PresetContext,
  PresetGraph,
  PresetNode,
} from 'presetter-types';

/**
 * get assets from a preset
 * @param name name of the preset
 * @param context context about the target project and customization in .presetterrc
 * @returns assets from the preset
 */
export async function getPresetAsset(
  name: string,
  context: PresetContext,
): Promise<PresetAsset> {
  try {
    // get the preset
    const { default: getPresetAsset } = (await import(name)) as {
      default: (args: PresetContext) => Promise<PresetAsset>;
    };

    return await getPresetAsset(context);
  } catch {
    throw new Error(`cannot resolve preset ${name}`);
  }
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
