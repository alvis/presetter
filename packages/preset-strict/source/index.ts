import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { PresetAsset } from 'presetter-types';

const DIR = dirname(fileURLToPath(import.meta.url));

// paths to the template directory
const TEMPLATES = resolve(DIR, '..', 'templates');

/** config for this preset */
export interface PresetConfig {
  /** configuration to be merged with .eslintrc */
  eslint?: Record<string, unknown>;
}

/** list of configurable variables */
export interface Variable {
  /** the directory containing all source code (default: source) */
  source: string;
}

export const DEFAULT_VARIABLE = {
  source: 'source',
} satisfies Variable;

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  return {
    extends: ['presetter-preset-esm'],
    template: {
      'eslint.config.ts': resolve(TEMPLATES, 'eslint.config.ts'),
      'vitest.config.ts': resolve(TEMPLATES, 'vitest.config.ts'),
    },
    scripts: resolve(TEMPLATES, 'scripts.yaml'),
    variable: DEFAULT_VARIABLE,
  };
}
