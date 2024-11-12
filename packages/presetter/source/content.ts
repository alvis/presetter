import debug from './debugger';
import { getConfigKey, loadDynamic, loadDynamicMap } from './resolution';
import { merge, mergeTemplate, substitute } from './template';
import { filter } from './utilities';

import type {
  Config,
  PresetContext,
  PresetGraph,
  PresetNode,
  PresetterConfig,
  ResolvedPresetContext,
  Template,
} from 'presetter-types';

/**
 * enrich the context with the resolved supplementary assets
 * @param _ collection of arguments
 * @param _.graph preset graph
 * @param _.context preset context
 * @returns enriched preset context
 */
export async function resolveContext(_: {
  graph: PresetGraph;
  context: PresetContext;
}): Promise<ResolvedPresetContext> {
  const { graph } = _;

  // compute a new context with variable resolved
  const context: ResolvedPresetContext<'variable'> = {
    ..._.context,
    custom: {
      ..._.context.custom,
      variable: resolveVariable({ graph, config: _.context.custom }),
    },
  };

  const config = await resolveSupplementaryConfig({ graph, context });
  const noSymlinks = await resolveNoSymlinks({ graph, context });
  const scripts = await resolveSupplementaryScripts({ graph, context });

  const custom = {
    ...context.custom,
    preset: context.custom.preset,
    config,
    noSymlinks,
    scripts,
  };

  debug('RESOLVED CONFIGURATION WITH PRESET\n%O', custom);

  // return a new context with everything resolved
  return {
    target: context.target,
    custom,
  };
}

/**
 * resolve no noSymlinks
 * @param _ collection of arguments
 * @param _.graph preset graph
 * @param _.context preset context
 * @returns list of noSymlinks
 */
export async function resolveNoSymlinks(_: {
  graph: PresetGraph;
  context: ResolvedPresetContext<'variable'>;
}): Promise<string[]> {
  const { graph, context } = _;

  const fromPreset = (
    await Promise.all(
      graph.map(async (node) => resolveNoSymlinksFromNode({ node, context })),
    )
  ).flat();
  const fromUser = context.custom.noSymlinks ?? [];

  return [...new Set([...fromPreset, ...fromUser])];
}

/**
 * resolve noSymlinks from a preset node
 * @param _ collection of arguments
 * @param _.node preset node
 * @param _.context resolved preset context
 * @returns list of noSymlinks
 */
async function resolveNoSymlinksFromNode(_: {
  node: PresetNode;
  context: ResolvedPresetContext<'variable'>;
}): Promise<string[]> {
  const { node, context } = _;
  const { asset, nodes } = node;

  // resolve noSymlink lists from preset's extensions
  const fromChildren = (
    await Promise.all(
      nodes.map(async (extension) =>
        resolveNoSymlinksFromNode({ node: extension, context }),
      ),
    )
  ).flat();

  // resolve preset's noSymlink list
  const fromPreset = await loadDynamic(asset.noSymlinks ?? [], context);

  return [...new Set([...fromChildren, ...fromPreset])];
}

/**
 * compute the final config map
 * @param _ collection of arguments
 * @param _.graph preset graph
 * @param _.context preset context
 * @returns map of config content
 */
export async function resolveSupplementaryConfig(_: {
  graph: PresetGraph;
  context: ResolvedPresetContext<'variable'>;
}): Promise<Record<string, Config>> {
  const { graph, context } = _;

  const fromPresets = (
    await Promise.all(
      graph.map(async (node) =>
        resolveSupplementaryConfigFromNode({ node, context }),
      ),
    )
  ).reduce((merged, next) => merge(merged, next), {});

  return merge(fromPresets, context.custom.config);
}

/**
 * compute the supplementary config map from a preset node
 * @param _ collection of arguments
 * @param _.node preset node
 * @param _.context preset context
 * @returns map of config content
 */
export async function resolveSupplementaryConfigFromNode(_: {
  node: PresetNode;
  context: ResolvedPresetContext<'variable'>;
}): Promise<Record<string, Config>> {
  const { node, context } = _;
  const { asset, nodes } = node;

  // resolve configs from the preset's extensions
  const fromChildren = (
    await Promise.all(
      nodes.map(async (node) =>
        resolveSupplementaryConfigFromNode({ node, context }),
      ),
    )
  ).reduce((merged, next) => merge(merged, next), {});

  // resolve preset's config
  const fromPreset = await loadDynamicMap<'supplementaryConfig'>(
    asset.supplementaryConfig,
    context,
  );

  // merge preset's config on top of the extensions
  return merge(fromChildren, fromPreset);
}

/**
 * compute script that will be merged with those provided by presets
 * @param _ collection of arguments
 * @param _.graph preset graph
 * @param _.context preset context
 * @returns map of config content
 */
export async function resolveSupplementaryScripts(_: {
  graph: PresetGraph;
  context: ResolvedPresetContext<'variable'>;
}): Promise<Record<string, string>> {
  const { graph, context } = _;

  const fromPresets = (
    await Promise.all(
      graph.map(async (node) =>
        resolveSupplementaryScriptsFromNode({ node, context }),
      ),
    )
  ).reduce((merged, next) => merge(merged, next), {});

  return merge(fromPresets, context.custom.scripts);
}

/**
 * compute the supplementary config map from a preset node
 * @param _ collection of arguments
 * @param _.node preset node
 * @param _.context preset context
 * @returns map of config content
 */
export async function resolveSupplementaryScriptsFromNode(_: {
  node: PresetNode;
  context: ResolvedPresetContext<'variable'>;
}): Promise<Record<string, string>> {
  const { node, context } = _;
  const { asset, nodes } = node;
  const { supplementaryScripts } = asset;

  // resolve configs from the preset's extensions
  const fromChildren = (
    await Promise.all(
      nodes.map(async (node) =>
        resolveSupplementaryScriptsFromNode({ node, context }),
      ),
    )
  ).reduce((merged, next) => merge(merged, next), {});

  // resolve preset's config
  const fromPreset = await loadDynamic(supplementaryScripts ?? {}, context);

  // merge preset's config on top of the extensions
  return merge(fromChildren, fromPreset);
}

/**
 * combine default variables from presets with custom variables
 * @param _ collection of arguments
 * @param _.graph preset graph
 * @param _.config user config
 * @returns combined variables
 */
export function resolveVariable(_: {
  graph: PresetGraph;
  config: PresetterConfig;
}): Record<string, string> {
  const { graph, config } = _;

  // get the default from presets
  const fromPresets = graph
    .map((node) => resolveVariableFromNode({ node }))
    .reduce((merged, next) => merge(merged, next), {});

  // merge with those from the config file
  return merge(fromPresets, config.variable);
}

/**
 * resolve variables from a preset node
 * @param _ collection of arguments
 * @param _.node preset node
 * @returns combined variables
 */
function resolveVariableFromNode(_: {
  node: PresetNode;
}): Record<string, string> {
  const { node } = _;
  const { asset, nodes } = node;

  // resolve variables from the preset's extensions
  const fromChildren = nodes
    .map((node) => resolveVariableFromNode({ node }))
    .reduce((merged, next) => merge(merged, next), {});

  // merge with the preset's default variables
  return merge(fromChildren, asset.variable);
}

/**
 * compute the final script map
 * @param _ collection of arguments
 * @param _.graph preset graph
 * @param _.context preset context
 * @returns map of script content
 */
export async function resolveScripts(_: {
  graph: PresetGraph;
  context: ResolvedPresetContext<'variable'>;
}): Promise<Record<string, string>> {
  const { graph, context } = _;

  // resolve scripts from all presets
  const fromPresets = (
    await Promise.all(
      graph.map(async (node) => resolveScriptsFromNode({ node, context })),
    )
  ).reduce((merged, next) => merge(merged, next), {});

  const fromConfig = context.custom.scripts;

  return substitute(merge(fromPresets, fromConfig), context.custom.variable);
}

/**
 * compute the final script map from a preset node
 * @param _ collection of arguments
 * @param _.node preset node
 * @param _.context preset context
 * @returns map of script content
 */
export async function resolveScriptsFromNode(_: {
  node: PresetNode;
  context: ResolvedPresetContext<'variable'>;
}): Promise<Record<string, string>> {
  const { node, context } = _;
  const { asset, nodes } = node;

  // resolve scripts from the preset's extensions
  const fromChildren = (
    await Promise.all(
      nodes.map(async (node) => resolveScriptsFromNode({ node, context })),
    )
  ).reduce((merged, next) => merge(merged, next), {});

  // resolve preset's scripts
  const fromPreset = await loadDynamic(asset.scripts ?? {}, context);

  // merge preset's scripts on top of the extensions
  return merge(fromChildren, fromPreset);
}

/**
 * compute the final template content
 * @param _ collection of arguments
 * @param _.graph preset graph
 * @param _.context preset context
 * @returns map of template content
 */
export async function resolveTemplate(_: {
  graph: PresetGraph;
  context: ResolvedPresetContext;
}): Promise<Record<string, Template>> {
  const { graph, context } = _;

  // deduce all the template contents and their paths from presets
  const fromPreset = (
    await Promise.all(
      graph.map(async (node) => resolveTemplateFromNode({ node, context })),
    )
  ).reduce((merged, next) => mergeTemplate(merged, next), {});

  // merge the template with the config supplied by user
  const customTemplate = Object.fromEntries(
    Object.entries(fromPreset).map(([path, current]) => {
      const config = context.custom.config[getConfigKey(path)] as Partial<
        typeof context.custom.config
      >[string];
      const candidate = Array.isArray(config) ? config.join('\n') : config;

      return [path, candidate ?? current];
    }),
  );
  const merged = mergeTemplate(fromPreset, customTemplate);

  const resolvedTemplate = filter(merged, ...(context.custom.ignores ?? []));

  return substitute(resolvedTemplate, context.custom.variable);
}

/**
 * compute the final template content from a preset node
 * @param _ collection of arguments
 * @param _.node preset node
 * @param _.context preset context
 * @returns map of template content
 */
export async function resolveTemplateFromNode(_: {
  node: PresetNode;
  context: ResolvedPresetContext;
}): Promise<Record<string, Template>> {
  const { node, context } = _;
  const { asset, nodes } = node;
  const { supplementaryIgnores } = asset;

  // resolve template from the preset's extensions
  const fromChildren = (
    await Promise.all(
      nodes.map(async (node) => resolveTemplateFromNode({ node, context })),
    )
  ).reduce((current, next) => mergeTemplate(current, next), {});

  const fromPreset = await loadDynamicMap<'template'>(asset.template, context);

  const merged = mergeTemplate(fromChildren, fromPreset);

  const ignoreRules =
    typeof supplementaryIgnores === 'function'
      ? await supplementaryIgnores(context)
      : supplementaryIgnores;

  return filter(merged, ...(ignoreRules ?? []));
}
