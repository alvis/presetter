import { prefixDisplay } from '../../utilities';

import { resolveNodeContent } from './content';
import Debug from './debugger';
import { resolveObject } from './object';
import { resolveVariables } from './variable';

import type {
  PresetContentContext,
  PresetNode,
  ProjectContext,
  ResolvedPresetAsset,
  ResolvedPresetAssets,
  Variables,
} from 'presetter-types';

/**
 * lists all asset names in a preset node
 * @param node the preset node
 * @param context the context in which the node is being resolved
 * @returns an array of asset names
 */
export function listAssetNames(
  node: PresetNode,
  context: PresetContentContext,
): string[] {
  const assetsResolver = node.definition.assets ?? {};
  const assets =
    assetsResolver instanceof Function
      ? assetsResolver(context)
      : assetsResolver;

  return [
    ...new Set([
      ...Object.keys(assets),
      ...node.nodes.flatMap((node) => listAssetNames(node, context)),
    ]),
  ];
}

/**
 * resolves all assets for a given preset node
 * @param node the preset node
 * @param context the context in which the node is being resolved
 * @returns a promise that resolves to the RESOLVED assets
 */
export async function resolveAssets(
  node: PresetNode,
  context: ProjectContext,
): Promise<ResolvedPresetAssets> {
  const debug = Debug.extend('ASSETS').extend(node.definition.id);

  // resolve variables for the node
  const variables = await resolveVariables(node, context);

  // list all asset names in the node
  const names = listAssetNames(node, { ...context, variables });
  debug('ASSET FILES\n%O', names);

  // resolve each asset and return as an object
  return Object.fromEntries(
    await Promise.all(
      names.map(async (name) => [
        name,
        await resolveAsset({ name, node, context, variables }),
      ]),
    ),
  ) as ResolvedPresetAssets;
}

/**
 * resolves a specific asset for a given preset node
 * @param _ collection of arguments
 * @param _.name the name of the asset
 * @param _.node the preset node
 * @param _.context the context in which the node is being resolved
 * @param _.variables the variables to use during resolution
 * @returns a promise that resolves to the RESOLVED asset
 */
export async function resolveAsset(_: {
  name: string;
  node: PresetNode;
  context: ProjectContext;
  variables: Variables;
}): Promise<ResolvedPresetAsset | null | undefined> {
  const { name, node, context, variables } = _;
  const debug = Debug.extend(name).extend(node.definition.id);

  debug(`RESOLVING ASSET ${name} (INITIAL PASS)`);

  // resolve the initial value of the asset
  const initial = await resolveNodeContent({
    name,
    node,
    context,
    variables,
    select: ({ assets }) =>
      resolveObject(assets, { ...context, variables })?.[name],
  });

  debug(
    `RESOLVED ASSET ${name} (INITIAL PASS)\n${prefixDisplay('└─ ', initial)}`,
  );

  debug(`RESOLVING ASSET ${name} (FINAL PASS)`);

  // resolve the final value of the asset, considering overrides
  const final = await resolveNodeContent<ResolvedPresetAsset>({
    name,
    node,
    context,
    initial,
    variables,
    select: ({ override }) =>
      resolveObject(override?.assets, { ...context, variables })?.[name],
  });

  debug(`RESOLVED ASSET ${name} (FINAL PASS)\n${prefixDisplay('└─ ', final)}`);

  return final;
}
