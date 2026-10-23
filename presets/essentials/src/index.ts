import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { preset } from '@presetter/types';

import eslintOverride from './eslint/override';
import eslintTemplate from './eslint/template';
import tsconfigOverride from './tsconfig/override';
import vitest from './vitest/template';

const DIR = dirname(fileURLToPath(import.meta.url));

// paths to the template directory
const TEMPLATES = resolve(DIR, '..', 'templates');

/** list of configurable variables */
export interface Variables {
  /** the directory containing the whole repository (default: .) */
  root: string;
  /** the directory containing all source code (default: generated) */
  generated: string;
  /** the directory containing all source code (default: src) */
  source: string;
  /** the directory containing all extra typing files (default: types) */
  types: string;
  /** the directory containing all the compiled files (default: lib) */
  output: string;
  /** the directory containing all test files (default: spec) */
  test: string;
  /** the typescript build target */
  target: string;
}

export const DEFAULT_VARIABLES = {
  root: '.',
  generated: 'generated',
  source: 'src',
  types: 'types',
  output: 'lib',
  test: 'spec',
  target: 'ES2024',
} satisfies Variables;

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default preset('@presetter/preset-essentials', (context) => ({
  root: resolve(import.meta.dirname, '..'),
  variables: {
    ...DEFAULT_VARIABLES,
    // compute the repository root relative to the project root
    root: context.relativeRepoRoot,
  },
  scripts: resolve(TEMPLATES, 'scripts.yaml'),
  setup: {
    devDependencies: {
      '@typescript/native': 'npm:typescript@^7.0.0',
      'typescript': 'npm:@typescript/typescript6@^6.0.0',
      '@types/node': '^24.0.0',
      'vitest': '^5.0.0',
      '@vitest/coverage-v8': '^5.0.0',
    },
    scripts: {
      'prepare': 'run prepare',
      'build': 'run build',
      'lint': 'run lint --',
      'pretest': 'run pretest',
      'test': 'run test --',
      'test:coverage': 'run test:coverage --',
      'test:watch': 'run test:watch --',
      'typecheck': 'run typecheck --',
    },
  },
  assets: {
    ...(context.isRepoRoot && {
      '.husky/pre-commit': resolve(TEMPLATES, 'pre-commit'),
      '.husky/pre-push': resolve(TEMPLATES, 'pre-push'),
      'cliff.yaml': resolve(TEMPLATES, 'cliff.yaml'),
    }),
    '.gitignore': resolve(TEMPLATES, 'gitignore'),
    '.lintstagedrc.json': resolve(TEMPLATES, 'lintstagedrc.yaml'),
    '.npmignore': resolve(TEMPLATES, 'npmignore'),
    '.prettierrc.json': resolve(TEMPLATES, 'prettierrc.yaml'),
    'eslint.config.ts': eslintTemplate,
    'tsconfig.json': resolve(TEMPLATES, 'tsconfig.yaml'),
    'tsconfig.build.json': resolve(TEMPLATES, 'tsconfig.build.yaml'),
    'vitest.config.ts': vitest,
  },
  override: {
    assets: {
      'eslint.config.ts': eslintOverride,
      'tsconfig.json': tsconfigOverride,
    },
  },
}));
