import storybook from 'eslint-plugin-storybook';

import type { Linter } from 'eslint';

export default [
  ...storybook.configs['flat/recommended'],
  {
    name: '@presetter/preset-storybook:override:line-limits',
    files: ['**/*.stories.[jt]s?(x)', '**/.stories.helpers.[jt]s'],
    rules: {
      'max-lines': [
        'warn',
        {
          max: 600,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
    },
  },
  {
    name: '@presetter/preset-storybook:override:stories',
    files: ['**/*.stories.[jt]sx'],
    rules: {
      'compat/compat': 'off',
    },
  },
] as Linter.Config[];
