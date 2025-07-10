/* v8 ignore start */

import eslint from '@eslint/js';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import prettier from 'eslint-config-prettier';
import compat from 'eslint-plugin-compat';
import imports from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import { asset } from 'presetter-types';
import tseslint from 'typescript-eslint';

import type { Linter } from 'eslint';

// NOTE: don't specify the files to be linted or ignored here as it will case ts eslint rules to fail

const DOUBLE_OR_HALVE = 2;

const commonWebDependencies = [
  'autoprefixer',
  'next',
  'parcel',
  'postcss',
  'react',
  'rollup',
  'storybook',
  'vite',
  'vue',
  'webpack',
  'tailwindcss',
];

export default asset<{ default: Linter.Config[] }>(
  (current, { packageJson, projectRoot, variables }) => ({
    default: tseslint.config(
      ...(current?.default ?? []),
      { files: [variables.source!, variables.test!] },
      eslint.configs.recommended, // eslint recommended rules
      ...tseslint.configs.recommendedTypeChecked, // typescript-specific rules
      ...tseslint.configs.stylisticTypeChecked, // typescript-specific rules
      comments.recommended, // comment formatting
      jsdoc.configs['flat/recommended'], // documentation
      prettier, // ignore formatting issue
      compat.configs['flat/recommended'], // compatibility with various environments
      {
        name: 'presetter-preset-essentials',
        languageOptions: {
          parserOptions: {
            projectService: true,
            tsconfigRootDir: projectRoot,
          },
        },
        plugins: { jsdoc, import: imports },
        settings: {
          'import/internal-regex': /^(#|@\/)/,
          'import/external-module-folders': ['node_modules', variables.types!],
          'import/resolver': {
            typescript: true,
            node: true,
          },
          'jsdoc': {
            mode: 'typescript',
          },
          'targets':
            (packageJson.browserslist as string[] | undefined) ??
            (Object.keys({
              ...packageJson.dependencies,
              ...packageJson.devDependencies,
              ...packageJson.peerDependencies,
            }).some((dependency) => commonWebDependencies.includes(dependency))
              ? ['>0.5%'] // assuming web API usage on browsers only if it has any common web dependencies
              : ['maintained node versions']), // otherwise, only check if web API usage are supported by the specified node js versions,
        },
        rules: {
          // Extension Rules //

          // rules for import statements
          ...imports.flatConfigs.recommended.rules,
          ...imports.flatConfigs.typescript.rules,

          // Documentation //

          'jsdoc/tag-lines': ['error', 'never'], // doesn't need a new line after each description
          'jsdoc/require-description': [
            // a description is a must
            'warn',
            {
              checkConstructors: false,
              checkGetters: false,
              checkSetters: false,
            },
          ],
          'jsdoc/require-jsdoc': [
            // all functions must be documented
            'warn',
            {
              require: {
                ClassDeclaration: true,
                ClassExpression: true,
                FunctionDeclaration: false,
                FunctionExpression: true,
                MethodDefinition: false,
              },
              exemptEmptyConstructors: true,
              contexts: [
                // for non-exported functions
                'Program > TSDeclareFunction:not(TSDeclareFunction + TSDeclareFunction)',
                'Program > FunctionDeclaration:not(TSDeclareFunction + FunctionDeclaration)',
                // for exported functions
                'ExportNamedDeclaration[declaration.type=TSDeclareFunction]:not(ExportNamedDeclaration[declaration.type=TSDeclareFunction] + ExportNamedDeclaration[declaration.type=TSDeclareFunction])',
                'ExportNamedDeclaration[declaration.type=FunctionDeclaration]:not(ExportNamedDeclaration[declaration.type=TSDeclareFunction] + ExportNamedDeclaration[declaration.type=FunctionDeclaration])',
                // for class methods
                'MethodDefinition[value.body=null]:not(MethodDefinition[value.body=null] + MethodDefinition[value.body=null])',
                'MethodDefinition[value.body]:not(MethodDefinition[value.body=null] + MethodDefinition)',
              ],
            },
          ],
          'jsdoc/require-param-type': 'off', // don't need type information as we use typescript
          'jsdoc/require-property-type': 'off', // don't need type information as we use typescript
          'jsdoc/require-returns': [
            // tell us what the function is expected to return
            'warn',
            {
              checkGetters: false,
            },
          ],
          'jsdoc/require-returns-type': 'off', // don't need type information as we use typescript

          // ECMAScript //
          '@typescript-eslint/prefer-for-of': 'warn', // use `for of` if possible
          '@typescript-eslint/prefer-optional-chain': 'warn', // simplify a logic by using the optional chain operator
          'object-shorthand': 'warn', // reduce {x:x} to {x}
          'prefer-const': [
            'warn',
            {
              destructuring: 'all', // enforce destructuring with const
            },
          ],
          'prefer-destructuring': [
            'warn',
            {
              AssignmentExpression: {
                array: false, // allow const foo = array[100];
              },
            },
          ],
          'prefer-rest-params': 'error', // use a rested variable instead of arguments
          'prefer-spread': 'error', // instead of using fn.apply(this, args), simply use fn(...args)
          'symbol-description': 'error', // describe a symbol

          // Stylistic Issues //
          '@typescript-eslint/consistent-type-definitions': 'off', // allow type and interface to be used for their intended purposes
          '@typescript-eslint/member-ordering': [
            // enforce member ordering within classes
            'error',
            {
              default: {
                memberTypes: [
                  // fields
                  'public-static-field',
                  'public-field',
                  'protected-static-field',
                  'protected-field',
                  'private-static-field',
                  'private-field',
                  // constructors
                  'public-constructor',
                  'protected-constructor',
                  'private-constructor',
                  // getters & setters
                  ['public-get', 'public-set'],
                  ['protected-get', 'protected-set'],
                  ['private-get', 'private-set'],
                  // index signatures
                  'signature',
                  // methods
                  'public-static-method',
                  'public-method',
                  'protected-static-method',
                  'protected-method',
                  'private-static-method',
                  'private-method',
                ],
              },
            },
          ],
          '@typescript-eslint/naming-convention': [
            'error',
            {
              selector: 'default',
              format: ['camelCase'], // default naming convention
              leadingUnderscore: 'allow',
              trailingUnderscore: 'allow',
            },
            {
              selector: 'import',
              format: ['camelCase', 'PascalCase'], // camelCase for functions and PascalCase for classes
            },
            {
              selector: 'objectLiteralMethod',
              format: null, // disable for third-party parameter assignment
            },
            {
              selector: 'objectLiteralProperty',
              format: null, // disable for third-party parameter assignment
            },
            {
              selector: 'variable',
              format: ['camelCase', 'UPPER_CASE'], // camelCase for variables, UPPER_CASE for constants
              leadingUnderscore: 'allow',
              trailingUnderscore: 'allow',
            },
            {
              selector: 'typeLike',
              format: ['PascalCase'], // PascalCase for types
            },
          ],
          'capitalized-comments': [
            'warn',
            'never',
            {
              ignorePattern: '\\*|\\/|/|\\s', // ignore specific characters in comments
            },
          ],
          'one-var': ['warn', 'never'], // enforce one declaration per line
          'spaced-comment': 'error', // enforce consistent spacing in comments

          // Best Practices //
          '@typescript-eslint/array-type': [
            'warn',
            {
              default: 'array-simple', // enforce T[] over Array<T> for simple types
            },
          ],
          '@typescript-eslint/consistent-type-imports': [
            'warn',
            { disallowTypeAnnotations: false }, // enforce type-only imports where possible
          ],
          '@typescript-eslint/explicit-function-return-type': [
            'warn',
            {
              allowExpressions: true, // allow function return type inference in expressions
            },
          ],
          '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
              overrides: {
                constructors: 'no-public', // no public access modifier for constructors
              },
            },
          ],
          '@typescript-eslint/no-empty-object-type': 'off', // type {} is often used to match an empty object that can't be simply replaced by Record<string, never>
          '@typescript-eslint/no-magic-numbers': [
            'warn',
            {
              ignore: [-1, 0, 1, DOUBLE_OR_HALVE], // ignore common literals
              ignoreArrayIndexes: true,
              ignoreNumericLiteralTypes: true,
              ignoreReadonlyClassProperties: true,
              ignoreEnums: true,
              ignoreTypeIndexes: true,
            },
          ],
          '@typescript-eslint/require-await': 'off', // allow async functions with no await
          'import/consistent-type-specifier-style': [
            'warn',
            'prefer-top-level', // enforce `import type` specifier style
          ],
          'import/first': 'warn', // ensure all imports are at the top
          'import/no-deprecated': 'warn', // avoid deprecated methods
          'import/no-duplicates': 'warn', // merge multiple imports from the same module
          'import/no-named-as-default-member': 'off',
          'import/newline-after-import': 'warn', // add newline after imports
          'import/order': [
            'warn',
            {
              'alphabetize': {
                order: 'asc', // alphabetical order for imports
                caseInsensitive: true,
              },
              'groups': [
                'builtin', // e.g. import fs from 'node:fs';
                'external', // e.g. import foo from 'foo';
                'internal', // e.g. import { foo } from '#foo';
                'parent', // e.g. import foo from '../foo';
                [
                  'index', // e.g. import foo from '.';
                  'sibling', // e.g. import foo from './foo';
                ],
                'object', // e.g. import bar = foo.bar;
                'unknown', // anything else
                'type', // e.g. import type { Foo } from 'foo';
              ],
              'distinctGroup': false, // do not split subgroups
              'newlines-between': 'always-and-inside-groups', // enable a newline within import groups
              'sortTypesGroup': true,
              'newlines-between-types': 'always-and-inside-groups',
            },
          ],
          'eqeqeq': 'error', // enforce type-safe equality operators
          'max-classes-per-file': 'error', // restrict files to a single class
          'no-async-promise-executor': 'off', // allow async executors in Promises
          'no-magic-numbers': 'off', // use @typescript-eslint/no-magic-numbers instead
          'no-return-await': 'off', // use @typescript-eslint/return-await instead
          'no-throw-literal': 'off', // use @typescript-eslint/no-throw-literal instead
          'no-var': 'error', // prefer const or let
          'padding-line-between-statements': [
            'warn',
            {
              blankLine: 'always',
              prev: '*',
              next: 'return', // enforce newline before return statements
            },
          ],
          'prefer-object-spread': 'warn', // prefer object spread syntax over Object.assign

          // Code Quality //
          '@typescript-eslint/no-explicit-any': 'off', // allow usage of any type
          '@typescript-eslint/no-unused-vars': [
            'warn',
            {
              varsIgnorePattern: '^_',
              argsIgnorePattern: '^_', // use underscore for unused variables
            },
          ],
          '@typescript-eslint/no-unsafe-return': 'off', // skip the hassle of casting return to its expected types all the time

          // Error Prevention //
          '@typescript-eslint/no-non-null-assertion': 'off', // allow non-null assertions
          '@typescript-eslint/restrict-template-expressions': [
            'error',
            {
              allowBoolean: true,
              allowNever: true,
              allowNullish: true,
              allowNumber: true,
              allowRegExp: true,
            },
          ], // allow certain auto-conversion of template literals to strings
          '@typescript-eslint/unbound-method': [
            'error', // invoking an unbound method is error-prone
            {
              ignoreStatic: true, // but static methods are fine
            },
          ],
          'import/export': 'off', // ignore as typescript already handles export duplication detection
          'import/no-unresolved': 'off', // off as it's handled by typescript
          'block-scoped-var': 'error', // prevent scoped variable usage outside its scope
          'no-param-reassign': 'error', // prevent parameter reassignment
          'no-sparse-arrays': 'warn', // avoid sparse arrays (e.g., [1,,2])
          'no-template-curly-in-string': 'warn', // warn if template literal syntax is misused
        },
      },
    ) as Linter.Config[],
  }),
);
