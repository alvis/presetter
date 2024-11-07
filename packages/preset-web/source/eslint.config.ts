import globals from 'globals';

import presetESMConfig from 'presetter-preset-esm/eslint.config';

import tailwind from 'eslint-plugin-tailwindcss';
import testing from 'eslint-plugin-testing-library';

import type { Linter } from 'eslint';

export default [
  ...presetESMConfig,
  ...tailwind.configs['flat/recommended'],
  testing.configs['flat/dom'],
  {
    name: 'presetter-preset-web',
    languageOptions: {
      globals: globals.browser,
    },
  },
] satisfies Linter.Config[] as Linter.Config[];
