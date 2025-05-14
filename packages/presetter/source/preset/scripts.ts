import { resolveProjectContext } from '#context';

import { resolveProjectPreset } from './project';
import { resolveScripts } from './resolution';

/**
 * get the merged scripts templates
 * @returns scripts template
 */
export async function getScripts(): Promise<Record<string, string>> {
  const context = await resolveProjectContext();
  const node = await resolveProjectPreset(context);

  const script = await resolveScripts(node, context);

  return script;
}
