import { dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

import { resolveProjectContext } from './context';
import {
  resolveAsset,
  resolvePreset,
  resolvePresetterConfig,
  resolveVariables,
} from './preset';

/**
 * resolves a dynamic asset from a file URL
 * @param url the URL of the asset
 * @returns a promise that resolves to the RESOLVED asset
 */
export async function resolve(url: string): Promise<Record<string, unknown>> {
  const path = fileURLToPath(url);
  const context = await resolveProjectContext(dirname(path));

  // get the relative name of the asset
  const name = relative(context.projectRoot, path).split(sep).join('/'); // make the path OS agnostic

  // get the preset configuration
  const preset = await resolvePresetterConfig(context.projectRoot);

  // resolve the preset node
  const node = await resolvePreset(preset, context);

  // resolve variables for the node
  const variables = await resolveVariables(node, context);

  // resolve the asset
  const asset = await resolveAsset({ name, node, context, variables });

  if (!asset) {
    throw new Error(`asset ${name} not found in preset defined at ${path}`);
  }

  return asset as Record<string, unknown>;
}
