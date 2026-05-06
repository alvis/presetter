import storybook from 'eslint-plugin-storybook';

import type { Linter } from 'eslint';

export default [
  ...storybook.configs['flat/recommended'],
  {
    name: '@presetter/preset-storybook:override:stories',
    files: ['**/*.stories.[jt]sx'],
    rules: {
      'compat/compat': 'off',
    },
  },
] as Linter.Config[];
