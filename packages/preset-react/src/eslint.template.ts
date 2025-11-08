import react from 'eslint-plugin-react';

import type { Linter } from 'eslint';

export default [
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    name: 'presetter-preset-react',
    plugins: { react },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/boolean-prop-naming': 'warn', // enforce consistent naming for boolean props
      'react/button-has-type': 'warn', // enforce button elements to contain a type attribute
      'react/destructuring-assignment': 'warn', // enforce usage of destructuring assignment in component
      'react/prop-types': 'off', // we use TypeScript for prop types
      'react/sort-comp': 'warn', // enforce component methods order
      'react/jsx-sort-props': [
        'warn', // enforce props order
        {
          callbacksLast: true,
          shorthandFirst: true,
        },
      ],
    },
  },
] as Linter.Config[];
