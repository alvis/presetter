/* v8 ignore start */

import noSecrets from 'eslint-plugin-no-secrets';
import sonarjs from 'eslint-plugin-sonarjs';
import { asset } from 'presetter-types';

import type { Linter } from 'eslint';

const COGNITIVE_COMPLEXITY = 15;

export default asset<{ default: Linter.Config[] }>((current) => {
  const currentConfigs = current?.default ?? [];

  const hasTypescriptEslint = currentConfigs.some(
    (config) => !!config.plugins?.['@typescript-eslint'],
  );

  return {
    default: [
      ...currentConfigs,
      sonarjs.configs.recommended,
      {
        name: 'presetter-preset-strict:generic',
        rules: {
          'curly': 'error', // enforce curly braces around control statements for clarity and maintainability
          'default-case': 'error', // require a default case in switch statements to prevent unhandled cases
          'complexity': ['warn', { variant: 'modified' }], // warn on high cyclomatic complexity to encourage simpler, more readable code
          'max-lines': [
            'warn',
            {
              max: 300, // set a file length limit to improve maintainability
              skipBlankLines: true, // exclude blank lines to focus on meaningful content
              skipComments: true, // exclude comments to avoid penalizing well-documented files
            },
          ],
          'max-lines-per-function': [
            'warn',
            {
              max: 60, // enforce shorter functions for better readability and modularity
              skipBlankLines: true, // ignore blank lines for cleaner metrics
              skipComments: true, // ignore comments to avoid penalizing documentation
              IIFEs: true, // allow longer lengths for IIFEs due to their self-contained nature
            },
          ],
          'no-console': 'warn', // discourage console usage in production code, but allow it for debugging
          'no-eval': 'error', // disallow eval due to its security risks and performance concerns
        },
      },
      {
        name: 'presetter-preset-strict:@typescript-eslint',
        rules: hasTypescriptEslint && {
          // ECMAScript //
          '@typescript-eslint/prefer-nullish-coalescing': 'warn', // prefer nullish coalescing operator for cleaner and safer defaulting logic

          // Best Practices //
          '@typescript-eslint/no-base-to-string': 'error', // prevent unintended string conversions of objects
          '@typescript-eslint/promise-function-async': 'warn', // ensure promise-returning functions are properly marked as async
          '@typescript-eslint/return-await': 'error', // improve stack traces in try/catch by enforcing `return await`
          '@typescript-eslint/no-unnecessary-condition': 'error', // detect and remove redundant conditional checks

          // Code Quality //
          '@typescript-eslint/no-unused-expressions': [
            'warn',
            {
              allowShortCircuit: true, // permit short-circuit expressions for practical use
              allowTernary: true, // permit ternary expressions for concise logic
            },
          ],
          '@typescript-eslint/prefer-function-type': 'warn', // prefer function types over interfaces for function declarations
          '@typescript-eslint/unified-signatures': 'warn', // enforce simplified function overloads for better readability

          // Error Prevention //
          '@typescript-eslint/no-misused-promises': [
            'warn',
            {
              checksVoidReturn: false, // allow void-returning promises where appropriate
            },
          ],
        },
      },
      {
        name: 'presetter-preset-strict:no-secrets',
        plugins: { 'no-secrets': noSecrets },
        rules: {
          'no-secrets/no-secrets': [
            'error',
            {
              additionalDelimiters: [
                '(?=[A-Z][a-z])', // split camel case for improved analysis
                ':', // split key-value pairs
                '_', // split underscores in identifiers
                '\\?', // split URLs at query strings
                '&', // split query string pairs
                '/', // split paths in URLs
                '#', // split fragments in URLs
              ],
              ignoreContent: ['&amp;', '%20'], // allow common URL-encoded entities
            },
          ],
        },
      },
      {
        name: 'presetter-preset-strict:sonar',
        rules: {
          // Best Practices //
          'sonarjs/no-control-regex': 'off', // disable in favor of a more targeted control-regex rule
          'sonarjs/different-types-comparison': 'off', // rely on TypeScript for type safety and comparison checks
          'sonarjs/function-return-type': 'off', // handled more effectively by @typescript-eslint/explicit-function-return-type
          'sonarjs/no-async-constructor': 'off', // allow async constructors when necessary
          'sonarjs/no-empty-function': 'off', // handled by @typescript-eslint/no-empty-function
          'sonarjs/no-misused-promises': 'off', // handled by @typescript-eslint/no-misused-promises
          'sonarjs/no-nested-assignment': 'off', // permit nested assignments for improved clarity in specific cases
          'sonarjs/no-nested-conditional': 'off', // allow nested conditionals when readability isn't compromised
          'sonarjs/no-nested-functions': 'off', // use cognitive complexity rule instead
          'sonarjs/no-redeclare': 'off', // leverage TypeScript to detect redeclaration issues
          'sonarjs/no-throw-literal': 'off', // managed by @typescript-eslint/no-throw-literal
          'sonarjs/no-unused-expressions': 'off', // handled by @typescript-eslint/no-unused-expressions
          'sonarjs/no-redundant-type-constituents': 'off', // handled by @typescript-eslint/no-redundant-type-constituents
          'sonarjs/pseudo-random': 'off', // unnecessary unless dealing with cryptography
          'sonarjs/prefer-nullish-coalescing': 'off', // defer to @typescript-eslint/prefer-nullish-coalescing
          'sonarjs/redundant-type-aliases': 'off', // allow for improved readability
          'sonarjs/default-param-last': 'off', // handled by @typescript-eslint/default-param-last
          'sonarjs/max-params': 'off', // handled by @typescript-eslint/max-params
          'sonarjs/no-array-delete': 'off', // handled by @typescript-eslint/no-array-delete
          'sonarjs/deprecation': 'off', // handled by @typescript-eslint/no-deprecated
          'sonarjs/no-alphabetical-sort': 'off', // while localized sorting is needed sometimes, it is not always necessary
          'sonarjs/no-empty-interface': 'off', // handled by @typescript-eslint/no-empty-interface
          'sonarjs/no-for-in-array': 'off', // handled by @typescript-eslint/no-for-in-array
          'sonarjs/no-this-alias': 'off', // handled by @typescript-eslint/no-this-alias
          'sonarjs/no-useless-constructor': 'off', // handled by @typescript-eslint/no-useless-constructor
          'sonarjs/prefer-for-of': 'off', // handled by @typescript-eslint/prefer-for-of
          'sonarjs/prefer-function-type': 'off', // handled by @typescript-eslint/prefer-function-type
          'sonarjs/prefer-namespace-keyword': 'off', // handled by @typescript-eslint/prefer-namespace-keyword
          'sonarjs/prefer-string-starts-ends-with': 'off', // handled by @typescript-eslint/prefer-string-starts-ends-with

          // Code Quality //
          'sonarjs/cognitive-complexity': [
            'warn',
            COGNITIVE_COMPLEXITY, // enforce cognitive complexity limits for better readability
          ],
          'sonarjs/new-cap': 'off', // handled by @typescript-eslint/naming-convention
          'sonarjs/no-small-switch': 'off', // permit small switch cases for concise logic
          'sonarjs/no-undefined-argument': 'off', // allow undefined arguments for intentional behavior
          'sonarjs/no-unused-private-class-members': 'off', // use no-unused-private-class-members instead
          'sonarjs/no-unused-vars': 'off', // defer to @typescript-eslint/no-unused-vars

          // Error Prevention //
          'sonarjs/assertions-in-tests': 'off', // disabled due to frequent false positives in test code
        },
      },
    ] satisfies Linter.Config[] as Linter.Config[],
  };
});
