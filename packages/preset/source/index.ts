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
  /** patterns to be added to .gitignore */
  gitignore?: string[];
  /** patterns to be added to .npmignore */
  npmignore?: string[];
  /** configuration to be merged with .presetterrc */
  prettier?: Record<string, unknown>;
  /** configuration to be merged with tsconfig.json */
  tsconfig?: Record<string, unknown>;
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
 * @param config.mode export mode
 * @returns preset list
 */
export default async function (config?: PresetConfig): Promise<Preset> {
  return {
    links: {
      '.babelrc': await buildJSONConfig('babelrc', config?.babel),
      '.eslintrc': await buildJSONConfig('eslintrc', config?.eslint),
      '.jestrc': await buildJSONConfig('jestrc', config?.jest),
      '.gitignore': await buildListConfig('gitignore', config?.gitignore),
      '.npmignore': await buildListConfig('npmignore', config?.npmignore),
      '.prettierrc': await buildJSONConfig('prettierrc', config?.prettier),
      'tsconfig.json': await buildJSONConfig('tsconfig', config?.tsconfig),
      'tsconfig.build.json': await buildJSONConfig('tsconfig.build'),
    },
    scripts: await loadYAMLTemplate<string>('scripts'),
  };
}
