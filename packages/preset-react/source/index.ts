import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import web from 'presetter-preset-web';
import { preset } from 'presetter-types';

import eslintOverride from './eslint.override';
import * as eslint from './eslint.template';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directory
const TEMPLATES = resolve(DIR, '..', 'templates');
const OVERRIDES = resolve(DIR, '..', 'overrides');

/** config for this preset */
export interface PresetConfig {
  /** configuration to be merged with .eslintrc */
  eslint?: Record<string, unknown>;
  /** configuration to be merged with tsconfig.json */
  tsconfig?: Record<string, unknown>;
}

/** list of configurable variables */
export interface Variables {
  /** the directory containing all source code (default: source) */
  source: string;
  /** the directory containing all extra typing files (default: types) */
  types: string;
  /** the directory containing all the compiled files (default: lib) */
  output: string;
}

export const DEFAULT_VARIABLES = {
  source: 'source',
  types: 'types',
  output: 'lib',
} satisfies Variables;

const IMAGE_TYPE = 'image.d.ts';
const STYLE_TYPE = 'style.d.ts';

export default preset('presetter-preset-react', {
  extends: [web],
  variables: DEFAULT_VARIABLES,
  scripts: resolve(TEMPLATES, 'scripts.yaml'),
  assets: ({ variables }) => ({
    '.gitignore': (current, { variables }) => [
      ...(current ?? []),
      `/${variables.types!}/${IMAGE_TYPE}`,
      `/${variables.types!}/${STYLE_TYPE}`,
    ],
    'eslint.config.ts': eslint,
    'tsconfig.json': resolve(TEMPLATES, 'tsconfig.yaml'),
    'tsconfig.build.json': resolve(TEMPLATES, 'tsconfig.build.yaml'),
    [`${variables.types!}/${IMAGE_TYPE}` as 'image.d.ts']: resolve(
      TEMPLATES,
      IMAGE_TYPE,
    ),
    [`${variables.types!}/${STYLE_TYPE}` as 'style.d.ts']: resolve(
      TEMPLATES,
      STYLE_TYPE,
    ),
  }),
  override: {
    assets: {
      '.lintstagedrc.json': resolve(OVERRIDES, 'lintstaged.yaml'),
      'eslint.config.ts': eslintOverride,
    },
  },
});
