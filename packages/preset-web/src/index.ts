import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preset } from 'presetter-types';

import * as eslintOverride from './eslint.override';
import eslintTemplate from './eslint.template';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directories
const TEMPLATES = resolve(DIR, '..', 'templates');
const OVERRIDES = resolve(DIR, '..', 'overrides');

/** list of configurable variables */
export interface Variables {
  /** the directory containing all extra typing files (default: types) */
  types: string;
}

export const DEFAULT_VARIABLES = {
  types: 'types',
} satisfies Variables;

const IMAGE_TYPE = 'image.d.ts';
const STYLE_TYPE = 'style.d.ts';

export default preset('presetter-preset-web', {
  variables: DEFAULT_VARIABLES,
  assets: ({ variables }) => ({
    '.gitignore': (current, { variables }) => [
      ...(current ?? []),
      `/${variables.types!}/${IMAGE_TYPE}`,
      `/${variables.types!}/${STYLE_TYPE}`,
    ],
    'eslint.config.ts': eslintTemplate,
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
      '.prettierrc.json': resolve(OVERRIDES, 'prettierrc.yaml'),
      '.tsconfig.json': resolve(OVERRIDES, 'tsconfig.yaml'),
      'eslint.config.ts': eslintOverride,
    },
  },
});
