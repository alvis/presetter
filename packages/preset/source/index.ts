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
  loadYAMLTemplate,
} from './utilities';

/** config for this preset */
interface PresetConfig {
  /** configuration to be merged with .babelrc */
  babel?: Record<string, unknown>;
  /** configuration to be merged with .eslintrc */
  eslint?: Record<string, unknown>;
  /** configuration to be merged with .jestrc */
  jest?: Record<string, unknown>;
  /** patterns to be added to .npmignore */
  npmignore?: string[];
  /** configuration to be merged with .presetterrc */
  prettier?: Record<string, unknown>;
  /** configuration to be merged with tsconfig.json */
  tsconfig?: Record<string, unknown>;
  /** a list of files not to be linked */
  ignores?: string[];
  /** relative path to root directories for different file types */
  directory?: {
    /** the directory containing the whole repository (default: .) */
    root?: string;
    /** the directory containing all source code (default: source) */
    source?: string;
    /** the directory containing all typing files (default: types) */
    types?: string;
    /** the directory containing all output tile (default: source) */
    output?: string;
    /** the directory containing all test files (default: spec) */
    test?: string;
  };
}

/** detail of linked configuration files and script templates  */
interface Preset {
  /** paths to the generated configuration files */
  links: Record<string, string>;
  /** npm script template */
  scripts: Record<string, string>;
}

/**
 * get a list of presets
 * @param config options for the configurator
 * @returns preset list
 */
export default async function (config?: PresetConfig): Promise<Preset> {
  const parameter = {
    root: '.',
    source: 'source',
    types: 'types',
    output: 'lib',
    test: 'spec',
    ...config?.directory,
  };

  const { json, list } = createLinker(parameter);

  return {
    links: Object.fromEntries(
      Object.entries({
        '.babelrc.json': await json('babelrc', config?.babel),
        '.eslintrc.json': await json('eslintrc', config?.eslint),
        '.jestrc.json': await json('jestrc', config?.jest),
        '.npmignore': await list('npmignore', config?.npmignore),
        '.prettierrc.json': await json('prettierrc', config?.prettier),
        'tsconfig.json': await json('tsconfig', config?.tsconfig),
        'tsconfig.build.json': await json('tsconfig.build'),
      }).filter(([file]) => !config?.ignores?.includes(file)),
    ),
    scripts: await loadYAMLTemplate<string>('scripts', parameter),
  };
}

/**
 * create configuration files generators
 * @param parameter variables to be substituted in the template
 * @returns generators that return the location of the generated configuration file
 */
function createLinker(
  parameter: Required<NonNullable<PresetConfig['directory']>>,
): {
  json: (name: string, extra?: Record<string, unknown>) => Promise<string>;
  list: (name: string, extra?: string[]) => Promise<string>;
} {
  const json = async (
    name: string,
    extra: Record<string, unknown> = {},
  ): Promise<string> => buildJSONConfig(name, { extra, parameter });

  const list = async (name: string, extra: string[] = []): Promise<string> =>
    buildListConfig(name, { extra, parameter });

  return { json, list };
}
