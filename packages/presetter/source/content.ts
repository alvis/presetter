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

import { basename, extname } from 'path';

import { loadFile } from './io';
import { merge, template } from './template';

import type { PresetAsset, PresetContext, Template } from './types';

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
  // load templated configuration from presets
  const templates = await Promise.all(
    assets.map(async (asset) => {
      return Object.fromEntries(
        await Promise.all(
          Object.entries({ ...asset.template }).map(
            async ([relativePath, templatePath]): Promise<
              [string, Template]
            > => [relativePath, await loadFile(templatePath)],
          ),
        ),
      );
    }),
  );

  // merge all maps
  const merged = templates.reduce((merged, map) => merge(merged, map), {});

  // merge templates with custom configuration
  const custom = Object.fromEntries(
    Object.entries(merged).map(
      ([relativePath, templateConfig]): [string, Template] => {
        const customConfig =
          context.custom.config?.[getConfigKey(relativePath)];

        return [relativePath, customise(templateConfig, customConfig)];
      },
    ),
  );

  return template(custom, getVariable(assets, context));
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
