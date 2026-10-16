import { asset } from '@presetter/types';
import noSecrets from 'eslint-plugin-no-secrets';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';

import type { Linter } from 'eslint';

const COGNITIVE_COMPLEXITY = 15;

export default asset<{ default: Linter.Config[] }>((current, context) => {
  const { packageJson } = context;

  const currentConfigs = current?.default ?? [];

  const hasTypescriptEslint = currentConfigs.some(
    (config) => !!config.plugins?.['@typescript-eslint'],
  );

  const isNodeOnly = !!packageJson.engines?.node;

  return {
    default: [
      ...currentConfigs,
      unicorn.configs.recommended,
      sonarjs.configs!.recommended as Linter.Config,
      {
        name: '@presetter/preset-strict:generic',
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
          'max-params': ['warn', { max: 3 }], // encourage object parameter instead
          'no-console': ['warn', { allow: ['warn', 'error'] }], // discourage console usage in production code, but allow it for debugging
          'no-eval': 'error', // disallow eval due to its security risks and performance concerns
        },
      },
      {
        name: '@presetter/preset-strict:import',
        rules: {
          'import-x/no-nodejs-modules': isNodeOnly ? 'off' : 'error',
        },
      },
      {
        name: '@presetter/preset-strict:unicorn',
        plugins: { unicorn },
        rules: {
          // TypeScript member ordering, JSDoc and Prettier own these policies.
          'unicorn/consistent-class-member-order': 'off',
          'unicorn/single-line-block-comment-style': 'off',
          'unicorn/no-asterisk-prefix-in-documentation-comments': 'off',
          'unicorn/no-useless-undefined': 'off',
          'unicorn/no-nested-ternary': 'off',
          'unicorn/empty-brace-spaces': 'off',
          'unicorn/number-literal-case': 'off',
          'unicorn/template-indent': 'off',

          // removing the catch binding would suppress sonarjs/no-ignored-exceptions
          'unicorn/prefer-optional-catch-binding': 'off',

          // existing TypeScript, core and ESLint-comments checks take priority
          'unicorn/no-for-loop': 'off',
          'unicorn/prefer-array-find': 'off',
          'unicorn/prefer-includes': 'off',
          'unicorn/prefer-string-starts-ends-with': 'off',
          'unicorn/no-this-assignment': 'off',
          'unicorn/no-abusive-eslint-disable': 'off',
          'unicorn/no-incorrect-template-string-interpolation': 'off',
          'unicorn/consistent-existence-index-check': 'off', // @typescript-eslint/prefer-includes owns index-based existence checks
          'unicorn/consistent-optional-chaining': 'off', // @typescript-eslint/no-unnecessary-condition owns redundant optional access
          'unicorn/no-unnecessary-await': 'off', // @typescript-eslint/await-thenable owns awaiting non-promises
          'unicorn/no-uncalled-method': 'off', // @typescript-eslint/unbound-method owns detached instance methods and its test exception
          'unicorn/no-undeclared-class-members': 'off', // TypeScript owns class member declarations
          'unicorn/no-optional-chaining-on-undeclared-variable': 'off', // core no-undef is off for TypeScript's ambient declarations
          'unicorn/prefer-regexp-test': 'off', // @typescript-eslint/prefer-regexp-exec and sonarjs/prefer-regexp-exec own match conversions
          'unicorn/prefer-reflect-apply': 'off', // core prefer-spread owns Function#apply conversions
          'unicorn/no-magic-array-flat-depth': 'off', // @typescript-eslint/no-magic-numbers owns numeric exceptions, including depth 2 and tests
          'unicorn/switch-case-braces': 'off', // core no-case-declarations owns lexical declarations in switch cases
          'unicorn/expiring-todo-comments': 'off', // no-warning-comments and SonarJS task-comment diagnostics own these comments

          // existing SonarJS checks take priority
          'unicorn/prefer-boolean-return': 'off',
          'unicorn/prefer-promise-static-methods': 'off',
          'unicorn/no-negated-comparison': 'off',
          'unicorn/no-duplicate-if-branches': 'off',
          'unicorn/no-useless-continue': 'off',
          'unicorn/no-duplicate-logical-operands': 'off',
          'unicorn/new-for-builtins': 'off',
          'unicorn/no-impossible-length-comparison': 'off',
          'unicorn/no-unused-builtin-method-return': 'off', // sonarjs/no-ignored-return owns discarded built-in results
          'unicorn/no-useless-logical-operand': 'off', // sonarjs/no-redundant-boolean and core no-constant-binary-expression own constant operands
          'unicorn/prefer-simplified-conditions': 'off', // sonarjs/no-identical-expressions and no-inverted-boolean-check own simplifications
          'unicorn/no-accidental-bitwise-operator': 'off', // sonarjs/bitwise-operators owns bitwise restrictions
          'unicorn/no-xor-as-exponentiation': 'off', // sonarjs/bitwise-operators owns XOR restrictions
          'unicorn/no-invalid-argument-count': 'off', // sonarjs/no-extra-arguments and TypeScript own call arity
          'unicorn/no-this-outside-of-class': 'off', // sonarjs/no-global-this owns top-level this
          'unicorn/throw-new-error': 'off', // sonarjs/new-operator-misuse owns built-in Error construction
          'unicorn/no-array-sort': 'off', // sonarjs/no-misleading-array-reverse owns sort results and suggests toSorted
          'unicorn/no-array-reverse': 'off', // sonarjs/no-misleading-array-reverse owns reverse results and suggests toReversed

          // preserve policies disabled in inherited configurations
          'unicorn/require-array-sort-compare': 'off',
          'unicorn/no-lonely-if': 'off', // sonarjs/no-collapsible-if is off
          'unicorn/no-global-object-property-assignment': 'off', // sonarjs/no-built-in-override is off
          'unicorn/max-nested-calls': 'off', // sonarjs/expression-complexity is off
          'unicorn/no-top-level-side-effects': 'off', // Presetter's asset/preset factories initialize declarative configuration at module scope

          // preserve current TypeScript libraries, runtimes and build formats
          'unicorn/prefer-promise-try': 'off',
          'unicorn/prefer-array-from-async': 'off',
          'unicorn/prefer-iterator-helpers': 'off',
          'unicorn/prefer-iterator-to-array': 'off', // Iterator helpers require libraries beyond ES2024
          'unicorn/prefer-iterator-to-array-at-end': 'off', // Iterator helpers require libraries beyond ES2024
          'unicorn/prefer-iterator-zip': 'off', // Iterator.zip is outside current libraries and Node 22
          'unicorn/prefer-get-or-insert-computed': 'off', // Map#getOrInsertComputed is outside ES2024 and Node 22
          'unicorn/prefer-set-methods': 'off', // Set composition methods require ES2025 libraries
          'unicorn/prefer-top-level-await': 'off', // CommonJS TypeScript builds cannot emit top-level await

          // explicit project preferences and additional style exclusions
          'unicorn/consistent-boolean-name': 'off', // preserve the existing identifier naming policy
          'unicorn/prefer-number-is-safe-integer': 'off', // preserve existing integer validation semantics
          'unicorn/prefer-await': 'off', // preserve promise chains and their rejection handling
          'unicorn/prefer-default-parameters': 'off', // preserve explicit nullish defaults
          'unicorn/no-unreadable-for-of-expression': 'off', // allow expressions in loop headers
          'unicorn/prefer-string-replace-all': 'off', // retain the existing String#replace convention
          'unicorn/no-negated-condition': 'off', // allow negative guards and existing branch ordering
          'unicorn/no-declarations-before-early-exit': 'off', // retain local declaration placement
          'unicorn/catch-error-name': 'off', // retain meaningful catch binding names, including cause
          'unicorn/no-array-callback-reference': 'off', // allow compatible functions as array callbacks
          'unicorn/no-null': 'off',
          'unicorn/filename-case': 'off',
          'unicorn/import-style': 'off',
          'unicorn/name-replacements': 'off',
          'unicorn/no-array-reduce': 'off',
          'unicorn/no-for-each': 'off',
          'unicorn/consistent-function-scoping': 'off',
          'unicorn/prefer-switch': 'off',
          'unicorn/no-unreadable-array-destructuring': 'off',
          'unicorn/prefer-module': 'off',
          'unicorn/prefer-spread': 'off',
          'unicorn/no-new-array': 'off',
          'unicorn/prefer-node-protocol': 'warn',
        },
      },
      {
        name: '@presetter/preset-strict:@typescript-eslint',
        rules: hasTypescriptEslint
          ? {
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
            }
          : {},
      },
      {
        name: '@presetter/preset-strict:no-secrets',
        plugins: { 'no-secrets': noSecrets },
        rules: {
          'no-secrets/no-secrets': [
            'error',
            {
              additionalDelimiters: [
                '(?=[A-Z][a-z])', // split camel case for improved analysis
                ':', // split key-value pairs
                '_', // split underscores in identifiers
                String.raw`\?`, // split URLs at query strings
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
        name: '@presetter/preset-strict:sonar',
        rules: {
          // Best Practices //
          'sonarjs/arguments-order': 'off', // handled by typescript natively
          'sonarjs/argument-type': 'off', // handled by typescript natively
          'sonarjs/different-types-comparison': 'off', // rely on TypeScript for type safety and comparison checks
          'sonarjs/function-return-type': 'off', // handled more effectively by @typescript-eslint/explicit-function-return-type
          'sonarjs/no-async-constructor': 'off', // allow async constructors when necessary
          'sonarjs/no-commented-code': 'off', // off due to extremely slow performance
          'sonarjs/no-control-regex': 'off', // disable in favor of a more targeted control-regex rule
          'sonarjs/no-empty-function': 'off', // handled by @typescript-eslint/no-empty-function
          'sonarjs/no-misused-promises': 'off', // handled by @typescript-eslint/no-misused-promises
          'sonarjs/no-nested-assignment': 'off', // permit nested assignments for improved clarity in specific cases
          'sonarjs/no-nested-conditional': 'off', // allow nested conditionals when readability isn't compromised
          'sonarjs/no-nested-functions': 'off', // use cognitive complexity rule instead
          'sonarjs/no-redundant-optional': 'off', // allow optional properties whose types include undefined
          'sonarjs/no-redeclare': 'off', // leverage TypeScript to detect redeclaration issues
          'sonarjs/no-throw-literal': 'off', // managed by @typescript-eslint/no-throw-literal
          'sonarjs/no-unused-expressions': 'off', // handled by @typescript-eslint/no-unused-expressions
          'sonarjs/no-redundant-type-constituents': 'off', // handled by @typescript-eslint/no-redundant-type-constituents
          'sonarjs/null-dereference': 'off', // handled by typescript natively
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
          'sonarjs/void-use': 'off', // handled by @typescript-eslint/no-floating-promises

          // Error Prevention //
          'sonarjs/assertions-in-tests': 'off', // disabled due to frequent false positives in test code
          'sonarjs/no-duplicate-test-title': 'off', // retain existing test organization
          'sonarjs/parameterized-tests': 'off', // permit individual test cases
          'sonarjs/prefer-specific-assertions': 'off', // permit existing assertion styles
        },
      },
    ],
  };
});
