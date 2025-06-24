import debug from '../debugger';

import { resolvePresetterConfig } from './config';
import { resolvePreset } from './resolution';

import type { PresetNode, ProjectContext } from 'presetter-types';

/**
 * resolve the project preset
 * @param context context about the target project and customization in .presetterrc
 * @returns assets from the preset
 */
export async function resolveProjectPreset(
  context: ProjectContext,
): Promise<PresetNode> {
  const { projectRoot } = context;

  try {
    debug(`resolving preset at ${projectRoot}`);

    // get the preset
    const preset = await resolvePresetterConfig(projectRoot);

    debug(`preset loaded, resolving nodes...`);

    return await resolvePreset(preset, context);
  } catch (cause) {
    debug(`failed to resolve preset at ${projectRoot}: ${cause}`);

    throw cause;
    /* v8 ignore start */
  } finally {
    debug(`all nodes resolved`);
  }
}
