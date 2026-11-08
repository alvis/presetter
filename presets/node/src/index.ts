import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preset } from '@presetter/types';

import manifest from '../package.json' with { type: 'json' };

/** list of configurable variables */
export interface Variables {}

export const DEFAULT_VARIABLES = {} satisfies Variables;

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directory
const OVERRIDES = resolve(DIR, '..', 'overrides');

export default preset(manifest.name, {
  root: resolve(import.meta.dirname, '..'),
  override: {
    assets: {
      'tsconfig.json': resolve(OVERRIDES, 'tsconfig.yaml'),
    },
  },
});
