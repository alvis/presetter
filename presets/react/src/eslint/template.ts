import react from '@eslint-react/eslint-plugin';

import type { Linter } from 'eslint';

export default [
  react.configs.recommended,
  {
    name: '@presetter/preset-react',
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      '@eslint-react/jsx-no-comment-textnodes': 'error',
      '@eslint-react/jsx-no-duplicate-props': 'error',
      '@eslint-react/jsx-no-undef': 'error',
      '@eslint-react/jsx-uses-react': 'off',
      '@eslint-react/jsx-uses-vars': 'error',
      '@eslint-react/no-children-prop': 'error',
      '@eslint-react/no-missing-component-display-name': 'error',
      '@eslint-react/no-prop-types': 'off',
      '@eslint-react/prefer-destructuring-assignment': 'warn',
      '@eslint-react/dom/no-missing-button-type': 'warn',
      '@eslint-react/dom/no-unknown-property': 'error',
      '@eslint-react/dom/no-unsafe-target-blank': 'error',
    },
  },
] as Linter.Config[];
