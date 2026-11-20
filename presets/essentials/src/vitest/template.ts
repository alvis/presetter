import { relative } from 'node:path';

import { asset } from '@presetter/types';
import { merge, mergeByKey } from 'presetter';
import { configDefaults } from 'vitest/config';

import { PROVIDE_KEY } from './provide';
import { scopeGlobalSetup, scopeSetup } from './scope';
import {
  detectScopedSetupFiles,
  detectSetupFiles,
  escapeGlob,
  toPosix,
} from './setup';

import type {
  TestProjectInlineConfiguration,
  ViteUserConfig,
} from 'vitest/config';

/** int and e2e files that would otherwise match the unit patterns */
const SUFFIXED_SPECS = '**/*.{int,integration,e2e}.{test,spec}.?(c|m)[jt]s?(x)';

const UNIT_INCLUDE = ['**/*.spec.?(c|m)[jt]s?(x)', '**/*.unit.?(c|m)[jt]s?(x)'];
const UNIT_EXCLUDE = [...configDefaults.exclude, SUFFIXED_SPECS];

const INT_INCLUDE = [
  '**/*.{int,integration}.?(c|m)[jt]s?(x)',
  '**/*.{int,integration}.{test,spec}.?(c|m)[jt]s?(x)',
];

const E2E_INCLUDE = [
  '**/*.e2e.?(c|m)[jt]s?(x)',
  '**/*.e2e.{test,spec}.?(c|m)[jt]s?(x)',
];

export default asset<{ default: ViteUserConfig }>((current, context) => {
  const { packageJson, projectRoot, variables } = context;
  const testDir = variables.test!;
  const unitSetup = setupOf({
    projectRoot,
    testDir,
    suffixes: ['', '.unit'],
    excluded: UNIT_EXCLUDE,
  });
  const intSetup = setupOf({
    projectRoot,
    testDir,
    suffixes: ['.int', '.integration'],
  });
  const e2eSetup = setupOf({ projectRoot, testDir, suffixes: ['.e2e'] });

  // bare Vitest registers UNIT only; --project/-p registers every project for selection.
  const isProjectSelected = process.argv.some((arg) =>
    /^(?:--project|-p)(?:=|$)/.test(arg),
  );

  const unit = {
    extends: true,
    test: {
      name: 'UNIT',
      // collect from the project, so its relative patterns hold when Vitest runs from another directory
      dir: projectRoot,
      ...unitSetup,
      include: UNIT_INCLUDE,
      // keep Vitest's *.{test,spec}-d.* type-test files alongside the runtime patterns.
      typecheck: {
        include: [...UNIT_INCLUDE, ...configDefaults.typecheck.include],
        exclude: unitSetup.exclude,
      },
    },
  } satisfies TestProjectInlineConfiguration;
  const int = {
    extends: true,
    test: {
      name: 'INT',
      dir: projectRoot,
      ...intSetup,
      environment: 'node',
      fileParallelism: false,
      testTimeout: 60_000,
      hookTimeout: 120_000,
      include: INT_INCLUDE,
      typecheck: { include: INT_INCLUDE, exclude: intSetup.exclude },
    },
  } satisfies TestProjectInlineConfiguration;
  const e2e = {
    extends: true,
    test: {
      name: 'E2E',
      dir: projectRoot,
      ...e2eSetup,
      environment: 'node',
      fileParallelism: false,
      testTimeout: 600_000,
      hookTimeout: 120_000,
      include: E2E_INCLUDE,
      typecheck: { include: E2E_INCLUDE, exclude: e2eSetup.exclude },
    },
  } satisfies TestProjectInlineConfiguration;

  return merge(current, {
    default: {
      test: {
        name: packageJson.name!,
        projects: mergeByKey(
          'test.name',
          isProjectSelected ? [unit, int, e2e] : [unit],
        ),
        // Vitest only supports teardownTimeout at the root, so it covers every project.
        teardownTimeout: 600_000,
        // every inline project inherits this, so scoped setup wrappers can resolve paths from here.
        provide: { [PROVIDE_KEY]: projectRoot },
        passWithNoTests: true,
        typecheck: {
          enabled: true,
          tsconfig: 'tsconfig.json',
        },
        watch: false,
        // auto reset mocks and stubs
        mockReset: true,
        unstubEnvs: true,
        unstubGlobals: true,
        coverage: {
          clean: true,
          include: [`${variables.source!}/**/*.ts`],
          exclude: [
            // exclude barrel files
            `${variables.source!}/**/index.ts`,
            // exclude type files
            `${variables.source!}/**/types/**`,
          ],
          provider: 'v8',
          reporter: ['text', 'html', 'clover', 'json', 'lcov'],
        },
      },
    },
  });
});

/** detection inputs of an inline project */
interface SetupParams {
  /** consumer project directory */
  projectRoot: string;
  /** directory containing tests */
  testDir: string;
  /** filename suffixes selecting the project, in execution order */
  suffixes: string[];
  /** existing test exclusions */
  excluded?: string[];
}

/**
 * builds setup settings and matching collection exclusions for an inline project
 * @param params detection inputs of the project
 * @returns setup settings shared by runtime and typecheck discovery
 */
function setupOf(
  params: SetupParams,
): Pick<
  NonNullable<TestProjectInlineConfiguration['test']>,
  'setupFiles' | 'globalSetup' | 'exclude'
> {
  const {
    projectRoot,
    testDir,
    suffixes,
    excluded = configDefaults.exclude,
  } = params;
  const detected = detectSetupFiles(projectRoot, testDir, suffixes);
  // nested folders scope their setup files to their own subtree
  const scoped = detectScopedSetupFiles(projectRoot, testDir, suffixes);
  const setupFiles = [
    ...detected.file,
    ...scoped.file.map(({ globs, file }) => scopeSetup(globs, file)),
  ];
  const globalSetup = [
    ...detected.project,
    ...scoped.project.map(({ globs, file }) => scopeGlobalSetup(globs, file)),
  ];

  return {
    setupFiles: setupFiles.length > 0 ? setupFiles : undefined,
    globalSetup: globalSetup.length > 0 ? globalSetup : undefined,
    // suffixed setup files also match the test globs, so keep them out of collection.
    exclude: [
      ...excluded,
      ...[
        ...detected.file,
        ...detected.project,
        ...scoped.file.map(({ file }) => file),
        ...scoped.project.map(({ file }) => file),
      ].map((path) => escapeGlob(toPosix(relative(projectRoot, path)))),
    ],
  };
}
