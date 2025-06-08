import tailwind from 'eslint-plugin-better-tailwindcss';
import { getDefaultCallees } from 'eslint-plugin-better-tailwindcss/api/defaults';

import storybook from 'eslint-plugin-storybook';

import type { Linter } from 'eslint';
import type { Callees } from 'eslint-plugin-better-tailwindcss/api/types';

const callees = [...getDefaultCallees(), 'classnames'] satisfies Callees;

export default [
  ...storybook.configs['flat/recommended'],
  {
    name: '',
    files: ['**/*.tsx'],
    plugins: {
      'better-tailwindcss': tailwind,
    },
    settings: {
      'better-tailwindcss': {
        callees,
      },
    },
    rules: {
      ...tailwind.configs['recommended-error'].rules,
      'better-tailwindcss/no-conflicting-classes': 'error',
    },
  },
] satisfies Linter.Config[];
