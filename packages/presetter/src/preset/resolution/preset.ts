import debug from './debugger';

import type { Preset, PresetNode, ProjectContext } from 'presetter-types';

/**
 * resolve a preset
 * @param preset the preset to resolve
 * @param context the context in which the preset is being resolved
 * @returns the resolved preset node
 */
export async function resolvePreset(
  preset: Preset,
  context: ProjectContext,
): Promise<PresetNode> {
  debug(`resolving node ${preset.id}`);

  const definition =
    preset instanceof Function
      ? { id: preset.id, ...(await preset(context)) }
      : preset;

  const nodes = await Promise.all(
    (definition.extends ?? []).map(async (preset) =>
      resolvePreset(preset, context),
    ),
  );

  debug(`preset ${preset.id} resolved`);

  return { definition, nodes };
}
