import { resolveProjectContext } from '#context';

import { resolveProjectPreset } from './project';
import { resolveScripts } from './resolution';

import type { Script } from '#scripts';

/**
 * get the merged scripts templates (pure function)
 * @returns scripts template
 */
export const getScripts = async (): Promise<{
  paths: string[];
  scripts: Script;
}> => {
  const context = await resolveProjectContext();
  const node = await resolveProjectPreset(context);

  return resolveScripts(node, context);
};
