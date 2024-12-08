/* v8 ignore start */

import tailwind from 'eslint-plugin-tailwindcss';
import testing from 'eslint-plugin-testing-library';
import globals from 'globals';

import type { Linter } from 'eslint';

export default [
  ...tailwind.configs['flat/recommended'],
  testing.configs['flat/dom'],
  {
    name: 'presetter-preset-web',
    languageOptions: {
      globals: globals.browser,
    },
  },
] satisfies Linter.Config[] as Linter.Config[];
