import { resolveNodeContent } from './content';
import { resolveVariables } from './variable';

import type { PresetNode, ProjectContext, Scripts } from '@presetter/types';

import type { SetupPackages } from '../install';

/** fully resolved package.json declarations for preset adoption */
export type ResolvedSetup = SetupPackages & { scripts: Scripts };

/**
 * resolves package.json scripts and dependency sections for preset adoption
 * @param node the preset graph
 * @param context the target project context
 * @returns setup declarations after initial and override resolution
 */
export async function resolveSetup(
  node: PresetNode,
  context: ProjectContext,
): Promise<ResolvedSetup> {
  const variables = await resolveVariables(node, context);
  const setup = {
    scripts: {},
    dependencies: {},
    devDependencies: {},
    peerDependencies: {},
  };

  for (const field of [
    'scripts',
    'dependencies',
    'devDependencies',
    'peerDependencies',
  ] as const) {
    const name = `SETUP ${field}`;
    const initial = await resolveNodeContent({
      name,
      node,
      context,
      variables,
      select: ({ setup }) => setup?.[field],
    });

    setup[field] =
      (await resolveNodeContent({
        name,
        node,
        context,
        variables,
        initial,
        select: ({ override }) => override?.setup?.[field],
      })) ?? {};
  }

  return setup;
}
