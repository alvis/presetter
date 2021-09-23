/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of config related helpers
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { basename, extname, isAbsolute } from 'path';

import { loadDynamic, loadFile } from './io';
import { merge, template } from './template';

import type {
  DynamicAsset,
  DynamicAssetField,
  PresetAsset,
  PresetContext,
  RequiredResolution,
  ResolvedPresetContext,
  Template,
} from './types';

/**
 * customise the template with customisation from .presetterrc
 * @param template template configuration
 * @param custom content to be merged with the template configuration
 * @returns customised configuration
 */
export function customise(
  template: Template,
  custom?: string[] | Record<string, unknown>,
): Template {
  if (typeof template === 'string' && Array.isArray(custom)) {
    return merge(template.split('\n'), custom).join('\n');
  } else if (typeof template === 'object' && !Array.isArray(custom)) {
    return merge(template, custom);
  } else {
    return template;
  }
}
/**
 * generate configuration content from preset with user customisation
 * @param assets list of preset assets
 * @param context context about the target project and any customisation in .presetterrc
 * @returns a map of configuration content
 */
export async function generateContent(
  assets: PresetAsset[],
  context: PresetContext,
): Promise<Record<string, Template>> {
  const resolvedContext = await resolveContext(assets, context);

  const resolvedTemplate = await resolveDynamicMap(
    assets,
    resolvedContext,
    'template',
  );

  // merge templates with custom configuration
  const custom = Object.fromEntries(
    await Promise.all(
      Object.entries(resolvedTemplate).map(
        async ([relativePath, templateConfig]): Promise<[string, Template]> => {
          const customConfig =
            resolvedContext.custom.config[getConfigKey(relativePath)];

          return [relativePath, customise(templateConfig, customConfig)];
        },
      ),
    ),
  );

  return template(custom, resolvedContext.custom.variable);
}

/**
 * compute the corresponding field within the config field of .presetterrc
 * @param filename symlink name
 * @returns field name in config
 */
export function getConfigKey(filename: string): string {
  return basename(filename, extname(filename))
    .replace(/^\./, '')
    .replace(/rc$/, '')
    .replace(/\.config$/, '');
}

/**
 * combine the default variables from presets with custom variables
 * @param assets list of preset assets
 * @param context context about the target project and any customisation in .presetterrc
 * @returns combined variables
 */
export function getVariable(
  assets: PresetAsset[],
  context: PresetContext,
): Record<string, string> {
  const variables = assets
    .map((asset) => asset.variable)
    .filter((variable): variable is Record<string, string> => !!variable);

  const variableFromPresets = variables.reduce(
    (merged, variable) => merge(merged, variable),
    {},
  );

  const variableWithCustomConfig = merge(
    variableFromPresets,
    context.custom.variable,
  );

  return { ...variableWithCustomConfig };
}

/**
 * resolve context values which may be dynamic
 * @param assets list of preset assets
 * @param context context about the target project and any customisation in .presetterrc
 * @returns a context with no further dynamic content
 */
export async function resolveContext(
  assets: PresetAsset[],
  context: PresetContext,
): Promise<ResolvedPresetContext> {
  const variableContext: ResolvedPresetContext<'variable'> = {
    ...context,
    custom: {
      ...context.custom,
      variable: getVariable(assets, context),
    },
  };

  return {
    ...variableContext,
    custom: {
      ...variableContext.custom,
      config: { ...context.custom.config },
      noSymlinks: context.custom.noSymlinks ?? [],
    },
  };
}

/**
 * resolve a dynamic asset content
 * @param assets list of preset assets
 * @param context arguments to be passed to the generator function
 * @param field field name of PresetAsset to be resolved
 * @returns content of the resolved field
 */
export async function resolveDynamicMap<F extends DynamicAssetField>(
  assets: PresetAsset[],
  context: ResolvedPresetContext<RequiredResolution<F>>,
  field: F,
): Promise<Record<string, DynamicAsset<F>>> {
  // load templated configuration from presets
  const templates = await Promise.all(
    assets.map(async (asset) => {
      const content = asset[field];

      return Object.fromEntries(
        await Promise.all(
          Object.entries(
            content instanceof Function
              ? await content(context as ResolvedPresetContext)
              : { ...content },
          ).map(
            async ([relativePath, value]): Promise<[string, any]> => [
              relativePath,
              // load a file if it's a valid path only
              typeof value === 'string' && isAbsolute(value)
                ? await loadFile(value)
                : await loadDynamic(value, context as ResolvedPresetContext),
            ],
          ),
        ),
      );
    }),
  );

  // merge all maps
  return templates.reduce((merged, map) => merge(merged, map), {});
}
