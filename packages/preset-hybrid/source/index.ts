import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { PresetAsset } from 'presetter-types';

export type { PresetConfig, Variable } from 'presetter-preset-essentials';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directory
const CONFIGS = resolve(DIR, '..', 'configs');
const TEMPLATES = resolve(DIR, '..', 'templates');

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  return {
    extends: ['presetter-preset-essentials'],
    supplementaryScripts: resolve(CONFIGS, 'scripts.yaml'),
    supplementaryConfig: {
      gitignore: ['tsconfig.cjs.json', 'tsconfig.mjs.json'],
    },
    template: {
      'tsconfig.cjs.json': resolve(TEMPLATES, 'tsconfig.cjs.yaml'),
      'tsconfig.mjs.json': resolve(TEMPLATES, 'tsconfig.mjs.yaml'),
    },
  };
}
