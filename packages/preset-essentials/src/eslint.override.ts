/* v8 ignore start */
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import { asset } from 'presetter-types';

import type { Linter } from 'eslint';

export default asset<{ default: Linter.Config[] }>(
  (current, { projectRoot, variables }) => {
    const currentConfigs = current?.default ?? [];
    const gitignorePath = resolve(projectRoot, '.gitignore');

    return {
      default: [
        ...currentConfigs,
        ...(existsSync(gitignorePath)
          ? [includeIgnoreFile(gitignorePath)]
          : []),
        {
          name: 'presetter-preset-essentials:override:ignore-binary-files',
          ignores: [`bin`],
        },
        {
          name: 'presetter-preset-essentials:override:ignore-definition-files',
          ignores: [`**/*.d.ts`],
        },
        {
          name: 'presetter-preset-essentials:override:tooling-files',
          files: ['**/*.{config,spec}.ts'],
          rules: {
            'import/no-nodejs-modules': 'off', // tooling files are not part of the code and generally run under node.js
          },
        },
        {
          name: 'presetter-preset-essentials:override:test-files',
          files: [
            `${variables.test!}/**`,
            `${variables.types!}/**`,
            '**/*.e2e.ts',
            '**/*.integration.ts',
            '**/*.spec.ts',
            '**/*.spec-d.ts',
            '**/*.test.ts',
            '**/*.test-d.ts',
            '**/*.unit.ts',
            '**/*.unit-d.ts',
          ],
          // disable rules that are not suitable for test files
          rules: {
            'max-classes-per-file': 'off', // allows multiple classes in test files for flexibility with dummy classes
            'max-lines': 'off', // permits lengthy test files, which may include extensive setup or varied test cases
            'max-lines-per-function': 'off', // allows longer functions in tests, especially when handling complex expected values
            'no-unused-private-class-members': 'off', // allows unused private members in test files for flexibility with dummy classes
            '@typescript-eslint/explicit-function-return-type': 'off', // skips return type declarations for test functions to reduce verbosity
            '@typescript-eslint/naming-convention': 'off', // ignores strict naming conventions in tests for flexibility with expected values
            '@typescript-eslint/no-empty-function': 'off', // allows empty functions in test files for flexibility with dummy functions
            '@typescript-eslint/no-magic-numbers': 'off', // permits the use of arbitrary numbers as expected values in tests
            '@typescript-eslint/no-unsafe-argument': 'off', // allows passing arguments of any type in test cases
            '@typescript-eslint/no-unsafe-member-access': 'off', // allows access to members of any type in test scenarios
            '@typescript-eslint/no-unsafe-return': 'off', // permits returning values of any type in test functions
            '@typescript-eslint/unbound-method': 'off', // unbound methods are often used to check if the method has been called
            'jsdoc/require-description': 'off', // skips JSDoc descriptions for test functions, assuming test names are descriptive enough
            'jsdoc/require-jsdoc': 'off', // omits JSDoc comments for test functions to keep tests focused and concise
            'jsdoc/require-returns': 'off', // does not require return documentation for test functions
          },
        },
      ],
    };
  },
);
