import { resolveNodeContent } from './content';
import Debug from './debugger';

import type { PresetNode, ProjectContext, Variables } from 'presetter-types';

/**
 * resolves all variables for a given preset node
 * @param node the preset node
 * @param context the context in which the node is being resolved
 * @returns a promise that resolves to the RESOLVED variables
 */
export async function resolveVariables(
  node: PresetNode,
  context: ProjectContext,
): Promise<Variables> {
  const name = 'VARIABLES';
  const debug = Debug.extend(name);

  debug('RESOLVING VARIABLES (INITIAL PASS)');

  // resolve the initial value of the variables
  const initial = await resolveNodeContent({
    name,
    node,
    context,
    select: ({ variables }) => variables,
  });

  debug('RESOLVED VARIABLES (INITIAL PASS)\n%O', initial);

  debug('RESOLVING VARIABLES (FINAL PASS)');

  // resolve the final value of the variables, considering overrides
  const final =
    (await resolveNodeContent({
      name,
      node,
      context,
      initial,
      select: ({ override }) => override?.variables,
    })) ?? {};

  debug('RESOLVED VARIABLES (FINAL PASS)\n%O', final);

  return final;
}
