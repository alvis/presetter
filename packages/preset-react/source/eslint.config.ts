import sonarjs from 'eslint-plugin-sonarjs';
import presetESMConfig from 'presetter-preset-essentials/eslint.config';

import react from 'eslint-plugin-react';
import testing from 'eslint-plugin-testing-library';

import type { Linter } from 'eslint';

export default [
  ...presetESMConfig,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  sonarjs.configs.recommended,
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
    overrides: [
      {
        files: ['**/__tests__/**/*.[jt]sx', '**/?(*.)+(spec|test).[jt]sx'],
        ...testing.configs['flat/react'],
      },
      {
        'files': ['**/*.[jt]sx'],
        'rules': {
          'max-lines-per-function': [
            'warn',
            {
              max: 120, // extend the default to 120 lines for functional components
            },
          ],
          '@typescript-eslint/naming-convention': [
            'error', // add PascalCase to the list for functional components
            {
              selector: 'default',
              format: [
                'camelCase', // default
              ],
              leadingUnderscore: 'allow', // default
              trailingUnderscore: 'allow', // default
            },
            {
              selector: 'import',
              format: [
                'camelCase', // default, for functions and variables
                'PascalCase', // default, for classes
              ],
            },
            {
              selector: 'function',
              format: [
                'camelCase', // default
                'PascalCase', // for react components
              ],
            },
            {
              selector: 'objectLiteralMethod',
              format: null, // disable as an object literal is likely used for assigning parameters to a third-party library
            },
            {
              selector: 'objectLiteralProperty',
              format: null, // disable as an object literal is likely used for assigning parameters to a third-party library
            },
            {
              selector: 'parameter',
              format: [
                'camelCase', // default
                'PascalCase', // for react components
              ],
              leadingUnderscore: 'allow', // default
              trailingUnderscore: 'allow', // default
            },
            {
              selector: 'variable',
              format: [
                'PascalCase', // for react functional components
                'camelCase', // default, for variables
                'UPPER_CASE', // default, for constants
              ],
              leadingUnderscore: 'allow', // add _prefix to ignore the rule
              trailingUnderscore: 'allow', // add _suffix to ignore the rule
            },
            {
              selector: 'typeLike',
              format: [
                'PascalCase', // default
              ],
            },
          ],
        },
        'jsdoc/require-returns': [
          'error', // tell us what the function is expected to return unless it's a JSX element
          {
            checkGetters: false,
            contexts: [
              "FunctionDeclaration:has(BlockStatement > ReturnStatement:not([argument.type='JSXElement']))",
              "ArrowFunctionExpression:has(BlockStatement > ReturnStatement:not([argument.type='JSXElement']))",
            ],
          },
        ],
      },
    ],
  },
] as Linter.Config[];
