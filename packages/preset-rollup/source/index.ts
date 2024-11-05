import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { loadFile, template } from 'presetter';

import { getRollupParameter } from './rollup';

import type { PresetAsset } from 'presetter-types';

import type { RollupConfig } from './rollup';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directory
const TEMPLATES = resolve(DIR, '..', 'templates');
const CONFIGS = resolve(DIR, '..', 'configs');

/** config for this preset */
export interface PresetConfig {
  rollup?: RollupConfig;
}

/** list of configurable variables */
export interface Variable {
  /** the directory containing all source code (default: source) */
  source: string;
  /** the directory containing all the compiled files (default: lib) */
  output: string;
}

export const DEFAULT_VARIABLE = {
  source: 'source',
  output: 'lib',
} satisfies Variable;

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default function (): PresetAsset {
  return {
    template: {
      'rollup.config.ts': (context) => {
        const content = loadFile(
          resolve(TEMPLATES, 'rollup.config.ts'),
          'text',
        );
        const variable = getRollupParameter(context);

        return template(content, variable);
      },
    },
    scripts: resolve(TEMPLATES, 'scripts.yaml'),
    noSymlinks: ['rollup.config.ts'],
    supplementaryConfig: {
      gitignore: ['/rollup.config.ts'],
      rollup: resolve(CONFIGS, 'rollup.yaml'),
    },
    variable: DEFAULT_VARIABLE,
  };
}
