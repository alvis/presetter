import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preset } from 'presetter-types';

import eslintOverride from './eslint.override';
import * as eslint from './eslint.template';
import vitest from './vitest.template';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directory
const TEMPLATES = resolve(DIR, '..', 'templates');
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

export default preset('presetter-preset-react', {
  variables: DEFAULT_VARIABLES,
  scripts: resolve(TEMPLATES, 'scripts.yaml'),
  assets: {
    'eslint.config.ts': eslint,
    'tsconfig.json': resolve(TEMPLATES, 'tsconfig.yaml'),
    'tsconfig.build.json': resolve(TEMPLATES, 'tsconfig.build.yaml'),
    'vitest.config.ts': vitest,
  },
  override: {
    assets: {
      '.lintstagedrc.json': resolve(OVERRIDES, 'lintstaged.yaml'),
      'eslint.config.ts': eslintOverride,
    },
  },
});
