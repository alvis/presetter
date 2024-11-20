import { xception } from 'xception';

import debug from '../debugger';

import { resolvePresetterConfig } from './config';
import { resolvePreset } from './resolution';

import type { PresetContext, PresetNode } from 'presetter-types';

/**
 * resolve the project preset
 * @param context context about the target project and customization in .presetterrc
 * @returns assets from the preset
 */
export async function resolveProjectPreset(
  context: PresetContext,
): Promise<PresetNode> {
  try {
    debug(`resolving preset at ${context.root}`);

    // get the preset
    const preset = await resolvePresetterConfig(context.root);

    debug(`preset loaded, resolving nodes...`);

    return await resolvePreset(preset, context);
  } catch (cause) {
    throw xception(cause, {
      meta: { project: context.package.name, root: context.root },
    });
    /* v8 ignore start */
  } finally {
    debug(`all nodes resolved`);
  }
}
