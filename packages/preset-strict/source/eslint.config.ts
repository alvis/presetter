import sonarjs from 'eslint-plugin-sonarjs';
import presetESMConfig from 'presetter-preset-esm/eslint.config';

import noSecrets from 'eslint-plugin-no-secrets';

import type { Linter } from 'eslint';

const COGNITIVE_COMPLEXITY = 15;

export default [
  ...presetESMConfig,
  sonarjs.configs.recommended,
  {
    name: 'presetter-preset-strict',
    plugins: { 'no-secrets': noSecrets },
    rules: {
      // ECMAScript //
      '@typescript-eslint/prefer-nullish-coalescing': 'warn', // simplify logic using nullish coalescing operator

      // Best Practices //
      '@typescript-eslint/no-base-to-string': 'error', // disallow Object.toString() to avoid meaningless [object Object]
      '@typescript-eslint/promise-function-async': 'warn', // ensure functions returning promises are marked async
      '@typescript-eslint/return-await': 'error', // return awaited promises in try/catch for better stack trace
      '@typescript-eslint/no-unnecessary-condition': 'error', // remove redundant logic for reduced complexity
      'curly': 'error', // require curly braces around control statements
      'default-case': 'error', // ensure a default case in switch statements
      'sonarjs/function-return-type': 'off', // use typescript-eslint/explicit-function-return-type instead
      'sonarjs/no-nested-conditional': 'off', // impractical
      'sonarjs/redundant-type-aliases': 'off', // off as it reduces readability

      // Code Quality //
      '@typescript-eslint/no-unused-expressions': [
        'warn',
        {
          allowShortCircuit: true, // allow short-circuit expressions
          allowTernary: true, // allow ternary expressions
        },
      ],
      '@typescript-eslint/prefer-function-type': 'warn', // prefer function types over interfaces for functions
      '@typescript-eslint/unified-signatures': 'warn', // simplify overloaded function signatures
      'no-secrets/no-secrets': [
        // no sensitive information
        'error',
        {
          additionalDelimiters: [
            '(?=[A-Z][a-z])', // split a camel case
            ':', // split a key from its value
            '_', // split a key from its value
            '\\?', // split an URL from its query string
            '&', // split a query string from its key - value pair
            '/', // split a URL from its path
            '#', // split a URL from its fragment
          ],
          ignoreContent: ['&amp;', '%20'], // ignore encoded URL space character
        },
      ],
      'sonarjs/cognitive-complexity': [
        'warn',
        COGNITIVE_COMPLEXITY, // limit cognitive complexity to improve readability
      ],
      'sonarjs/new-cap': 'off', // use typescript-eslint/naming-convention instead
      'sonarjs/no-small-switch': 'off', // allow small switch statements if beneficial for readability
      'sonarjs/sonar-no-unused-vars': 'off', // use typescript-eslint/no-unused-vars instead
      'complexity': 'warn', // limit cyclomatic complexity in functions
      'max-lines': [
        'warn',
        {
          max: 250, // limit file length for readability
          skipBlankLines: true, // skip blank lines in count
          skipComments: true, // skip comments in count
        },
      ],
      'max-lines-per-function': [
        'warn',
        {
          max: 60, // limit function length for readability
          skipBlankLines: true, // skip blank lines in count
          skipComments: true, // skip comments in count
          IIFEs: true, // allow longer length for IIFE functions
        },
      ],
      'no-console': 'warn', // warn on console usage, often for debugging purposes
      'no-eval': 'error', // disallow eval usage as it can introduce security risks

      // Error Prevention //
      '@typescript-eslint/no-misused-promises': [
        'warn',
        {
          checksVoidReturn: false, // ensure await is used correctly before promises
        },
      ],
      'sonarjs/assertions-in-tests': 'off', // off as it has too many false positives
    },
  },
] satisfies Linter.Config[] as Linter.Config[];
