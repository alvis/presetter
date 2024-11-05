import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { PresetAsset } from 'presetter-types';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directories
const CONFIGS = resolve(DIR, '..', 'configs');
const TEMPLATES = resolve(DIR, '..', 'templates');

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  return {
    extends: ['presetter-preset-esm'],
    supplementaryConfig: {
      tsconfig: resolve(CONFIGS, 'tsconfig.yaml'),
    },
    template: {
      'eslint.config.ts': resolve(TEMPLATES, 'eslint.config.ts'),
    },
  };
}
