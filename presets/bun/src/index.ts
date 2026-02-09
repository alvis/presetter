import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preset } from '@presetter/types';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directory
const OVERRIDES = resolve(DIR, '..', 'overrides');

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

export default preset('@presetter/preset-bun', {
  root: resolve(import.meta.dirname, '..'),
  variables: DEFAULT_VARIABLES,
  override: {
    assets: {
      'tsconfig.json': resolve(OVERRIDES, 'tsconfig.yaml'),
    },
    scripts: resolve(OVERRIDES, 'scripts.yaml'),
  },
});
