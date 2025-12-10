import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preset } from 'presetter-types';

import rollup from './rollup.template';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directory
const TEMPLATES = resolve(DIR, '..', 'templates');

/** list of configurable variables */
export interface Variables {
  /** the directory containing all source code (default: source) */
  source: string;
  /** the directory containing all the compiled files (default: lib) */
  output: string;
}

export const DEFAULT_VARIABLES = {
  source: 'src',
  output: 'lib',
} satisfies Variables;

export default preset('presetter-preset-rollup', {
  root: resolve(import.meta.dirname, '..'),
  variables: DEFAULT_VARIABLES,
  scripts: resolve(TEMPLATES, 'scripts.yaml'),
  assets: {
    'rollup.config.ts': rollup,
  },
  override: {
    assets: {
      '.gitignore': ['/rollup.config.ts'],
    },
  },
});
