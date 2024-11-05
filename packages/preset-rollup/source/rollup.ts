import {
  isDirective,
  isJSON,
  merge,
  resolveDirective,
  template,
} from 'presetter';

import { assertPluginManifest } from './plugin';

import type { ApplyDirective, ImportDirective } from 'presetter';
import type { ResolvedPresetContext } from 'presetter-types';

import type {
  PluginConfiguration,
  PluginList,
  PluginManifest,
  PluginObject,
} from './plugin';

/** preset configuration for rollup */
export interface RollupConfig {
  [index: string]: unknown;
  /** list of plugin and its options */
  plugins?: PluginManifest | ApplyDirective | ImportDirective;
}

/** genuine configuration that rollup would take, making sure all plugins are a list */
interface TrueRollupConfig {
  [index: string]: unknown;
  /** list of plugin and its options */
  plugins?: PluginConfiguration[];
}

/** transformed configuration for rollup, with all plugins represented by an object */
interface IntermediateRollupConfig {
  [index: string]: unknown;
  /** list of plugin and its options */
  plugins?: PluginObject;
}

/**
 * get template parameters for rollup
 * @param context context about the build environment
 * @returns template parameter related to rollup
 */
export function getRollupParameter(
  context: ResolvedPresetContext,
): Record<'rollupImport' | 'rollupExport', string> {
  const { config, variable } = context.custom;

  const normalizedConfig = template(
    normalizeConfig(transformConfig({ ...config.rollup })),
    variable,
  );

  return generateRollupParameter(normalizedConfig, context);
}

/**
 * generate template parameters for rollup
 * @param config normalized rollup config
 * @param context context about the build environment
 * @returns template parameter related to rollup
 */
function generateRollupParameter(
  config: TrueRollupConfig,
  context: ResolvedPresetContext,
): Record<'rollupImport' | 'rollupExport', string> {
  const { importMap, stringifiedConfig } = resolveDirective(config, context);

  // generate import statements
  const rollupImport = Object.entries(importMap)
    .map(([name, resolved]) => `import * as ${resolved} from '${name}';`)
    .join('\n');

  // generate export statements
  const rollupExport = `export default ${stringifiedConfig}`;

  return { rollupImport, rollupExport };
}

/**
 * normalize rollup config with all plugins represented as a list
 * @param config transformed config
 * @returns config that rollup would take
 */
function normalizeConfig(config: IntermediateRollupConfig): TrueRollupConfig {
  return Object.fromEntries(
    Object.entries(config).map(([key, value]): [string, unknown] => {
      return [
        key,
        isDirective(value) ? value : normalizeConfigValue(key, value),
      ];
    }),
  );
}

/**
 * try to normalize any nested configuration
 * @param key field name
 * @param value value of a field
 * @returns normalized value
 */
function normalizeConfigValue(key: string, value: unknown): unknown {
  switch (key) {
    case 'plugins':
      return [
        ...Object.entries(value as PluginObject)
          .filter(([_, options]) => options !== null)
          .map(([plugin, options]) =>
            [plugin, normalizeConfigValue(plugin, options)].filter(
              (element) => element !== undefined,
            ),
          ),
      ];
    default:
      return isJSON(value)
        ? normalizeConfig(value as IntermediateRollupConfig)
        : value;
  }
}

/**
 * transform rollup config with plugins represented by an object for better merging
 * @param config rollup config in .presetterrc
 * @returns transformed config
 */
function transformConfig(
  config: Record<string, any>,
): IntermediateRollupConfig {
  return Object.fromEntries(
    Object.entries(config).map(([key, value]): [string, unknown] => {
      return [
        key,
        isDirective(value) ? value : transformConfigValue(key, value),
      ];
    }),
  );
}

/**
 * try to transform any nested configuration
 * @param key field name
 * @param value value of a field
 * @returns transformed value
 */
function transformConfigValue(key: string, value: unknown): unknown {
  switch (key) {
    case 'plugins':
      assertPluginManifest(value);

      return objectifyPlugins(value);

    default:
      return isJSON(value) ? transformConfig(value) : value;
  }
}

/**
 * objectify rollup plugins
 * @param plugins rollup plugin config
 * @returns normalized plugin config
 */
function objectifyPlugins(
  plugins: PluginManifest,
): IntermediateRollupConfig['plugins'] {
  const pluginList: PluginConfiguration[] = Array.isArray(plugins)
    ? arrayToPluginConfiguration(plugins)
    : objectToPluginConfiguration(plugins);

  return pluginList.reduce(
    (normalizedPlugin, [name, options]) =>
      merge(normalizedPlugin, { [name]: options }),
    {},
  );
}

/**
 * normalize rollup plugin config in array form
 * @param plugins rollup plugin config in array form
 * @returns normalized plugin config
 */
function arrayToPluginConfiguration(
  plugins: PluginList,
): PluginConfiguration[] {
  return plugins.map((plugin) =>
    typeof plugin === 'string' ? [plugin] : plugin,
  );
}

/**
 * normalize rollup plugin config in object form
 * @param plugins rollup plugin config in object form
 * @returns normalized plugin config
 */
function objectToPluginConfiguration(
  plugins: PluginObject,
): PluginConfiguration[] {
  return [...Object.entries(plugins)];
}
