import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preset } from 'presetter';
import esm from 'presetter-preset-esm';
import react from 'presetter-preset-react';
import strict from 'presetter-preset-strict';

import { name } from '../package.json';

import * as eslintTemplate from './eslint.template';

export { DEFAULT_VARIABLES } from 'presetter-preset-react';

export type { Variables } from 'presetter-preset-react';

const DIR = fileURLToPath(dirname(import.meta.url));

// paths to the template directory
const TEMPLATES = resolve(DIR, '..', 'templates');

export default preset(name, {
  extends: [esm, strict, react],
  assets: ({ variables }) => ({
    '.gitignore': resolve(TEMPLATES, 'gitignore'),
    '.npmignore': resolve(TEMPLATES, 'npmignore'),
    '.postcssrc.json': resolve(TEMPLATES, 'postcss.yaml'),
    'eslint.config.ts': eslintTemplate,
    'next-env.d.ts': resolve(TEMPLATES, 'next-env.d.ts'),
    'tsconfig.json': resolve(TEMPLATES, 'tsconfig.yaml'),
    'tsconfig.build.json': resolve(TEMPLATES, 'tsconfig.build.yaml'),
    [`${variables.types}/image.d.ts` as 'image.d.ts']: null,
    [`${variables.types}/style.d.ts` as 'style.d.ts']: null,
  }),
});
