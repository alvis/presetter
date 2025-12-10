import { resolve } from 'node:path';

import { substitute } from '../../template';

import { resolveNodeContent } from './content';
import Debug from './debugger';
import { extractPresetRoots } from './roots';
import { resolveVariables } from './variable';

import type { PresetNode, ProjectContext, Scripts } from 'presetter-types';

/**
 * resolves all scripts for a given preset node
 * @param node the preset node
 * @param context the context in which the node is being resolved
 * @returns a promise that resolves to the RESOLVED scripts
 */
export async function resolveScripts(
  node: PresetNode,
  context: ProjectContext,
): Promise<{ paths: string[]; scripts: Scripts }> {
  const name = 'SCRIPTS';
  const debug = Debug.extend(name);

  // resolve variables for the node
  const variables = await resolveVariables(node, context);

  debug('RESOLVING SCRIPTS (INITIAL PASS)');

  // resolve the initial value of the scripts
  const initial = await resolveNodeContent({
    name,
    node,
    context,
    variables,
    select: ({ scripts }) => scripts,
  });

  debug('RESOLVED SCRIPTS (INITIAL PASS)\n%O', initial);

  debug('RESOLVING SCRIPTS (FINAL PASS)');

  // resolve the final value of the scripts, considering overrides
  const final =
    (await resolveNodeContent({
      name,
      node,
      context,
      initial,
      variables,
      select: ({ override }) => override?.scripts,
    })) ?? {};

  debug('RESOLVED SCRIPTS (FINAL PASS)\n%O', final);

  const presetRoots = extractPresetRoots(node);

  const paths = presetRoots.map((path) =>
    resolve(path, 'node_modules', '.bin'),
  );

  debug('RESOLVED PATHS\n%O', paths);

  return { paths, scripts: substitute(final, variables) };
}
