import tailwind from 'eslint-plugin-better-tailwindcss';
import { getDefaultSelectors } from 'eslint-plugin-better-tailwindcss/api/defaults';

import storybook from 'eslint-plugin-storybook';

import type { Linter } from 'eslint';
import type {
  CalleeSelector,
  Selector,
  SelectorKind,
} from 'eslint-plugin-better-tailwindcss/types';

const selectors = [
  ...getDefaultSelectors(),
  {
    kind: 'callee' as SelectorKind.Callee,
    name: 'classnames',
  } satisfies CalleeSelector,
] satisfies Selector[];

export default [
  ...storybook.configs['flat/recommended'],
  {
    name: '@presetter/preset-web:override:storybook',
    files: ['**/*.stories.[jt]sx'],
    rules: {
      'compat/compat': 'off',
    },
  },
  {
    name: '@presetter/preset-web:override:tailwindcss',
    plugins: {
      'better-tailwindcss': tailwind,
    },
    settings: {
      'better-tailwindcss': {
        selectors,
      },
    },
    rules: {
      ...tailwind.configs['recommended-warn'].rules,
      'better-tailwindcss/no-conflicting-classes': 'warn',
      'better-tailwindcss/no-unregistered-classes': [
        'warn',
        { detectComponentClasses: true },
      ],
    },
  },
] as Linter.Config[];
