/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import {
  buildJSONConfig,
  buildListConfig,
  loadYAML,
  merge,
  template,
} from './utilities';

export * from './utilities';

/** config for this preset */
export interface PresetConfig {
  /** configuration to be merged with .babelrc */
  babel?: Record<string, unknown>;
  /** configuration to be merged with .eslintrc */
  eslint?: Record<string, unknown>;
  /** configuration to be merged with .jestrc */
  jest?: Record<string, unknown>;
  /** configuration to be merged with .lintstagedrc */
  lintstaged?: Record<string, unknown>;
  /** patterns to be added to .npmignore */
  npmignore?: string[];
  /** configuration to be merged with .presetterrc */
  prettier?: Record<string, unknown>;
  /** configuration to be merged with tsconfig.json */
  tsconfig?: Record<string, unknown>;
  /** a list of files not to be linked */
  ignores?: string[];
  /** extra scripts available */
  scripts?: Record<string, string>;
  /** relative path to root directories for different file types */
  directory?: {
    /** the directory containing the whole repository (default: .) */
    root?: string;
    /** the directory containing all source code (default: source) */
    source?: string;
    /** the directory containing all extra typing files (default: types) */
    types?: string;
    /** the directory containing all the compiled files (default: lib) */
    output?: string;
    /** the directory containing all test files (default: spec) */
    test?: string;
  };
}

/** input for a preset configurator */
export interface PresetArgs<Config extends PresetConfig = PresetConfig> {
  /** information about the targeted project */
  target: {
    /** the package name defined in the targeted project's package.json */
    name: string;
    /** the root folder containing the targeted project's .presetterrc.json */
    root: string;
  };
  /** the config field in .presetterrc.json */
  config?: Config;
}

/** detail of linked configuration files and script templates  */
export interface PresetAsset {
  /** mapping of symlinks to configuration files provided by the preset */
  links: Record<string, string>;
  /** map of common scripts */
  scripts: Record<string, string>;
}

export const DEFAULT_DIRECTORY = {
  root: '.',
  source: 'source',
  types: 'types',
  output: 'lib',
  test: 'spec',
};

/**
 * get a list of presets
 * @param args options for the configurator
 * @returns preset list
 */
export default async function (args: PresetArgs): Promise<PresetAsset> {
  const { config, target } = args;
  const parameter = { ...DEFAULT_DIRECTORY, ...config?.directory };

  const { json, list } = createLinker(parameter, target.name);
  const defaultScripts = await loadYAML<string>('scripts');
  const scripts = template(merge(defaultScripts, config?.scripts), parameter);

  return {
    links: Object.fromEntries(
      Object.entries({
        '.babelrc.json': await json('babelrc', config?.babel),
        '.eslintrc.json': await json('eslintrc', config?.eslint),
        '.jestrc.json': await json('jestrc', config?.jest),
        '.lintstagedrc.json': await json('lintstagedrc', config?.lintstaged),
        '.npmignore': await list('npmignore', config?.npmignore),
        '.prettierrc.json': await json('prettierrc', config?.prettier),
        'tsconfig.json': await json('tsconfig', config?.tsconfig),
        'tsconfig.build.json': await json('tsconfig.build'),
      }).filter(([file]) => !config?.ignores?.includes(file)),
    ),
    scripts,
  };
}

/**
 * create configuration files generators
 * @param parameter variables to be substituted in the template
 * @param outDir output directory for the assets created
 * @returns generators that return the location of the generated configuration file
 */
function createLinker(
  parameter: Required<NonNullable<PresetConfig['directory']>>,
  outDir: string,
): {
  json: (name: string, extra?: Record<string, unknown>) => Promise<string>;
  list: (name: string, extra?: string[]) => Promise<string>;
} {
  const json = async (
    name: string,
    extra: Record<string, unknown> = {},
  ): Promise<string> => buildJSONConfig(name, { outDir, extra, parameter });

  const list = async (name: string, extra: string[] = []): Promise<string> =>
    buildListConfig(name, { outDir, extra, parameter });

  return { json, list };
}
