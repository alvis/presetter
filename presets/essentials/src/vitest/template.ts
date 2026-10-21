import { relative, sep } from 'node:path';

import { asset } from '@presetter/types';
import { merge, mergeByKey } from 'presetter';
import { configDefaults } from 'vitest/config';

import { detectSetupFiles } from './setup';

import type {
  TestProjectInlineConfiguration,
  ViteUserConfig,
} from 'vitest/config';

import type { SetupFiles } from './setup';

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
  const unitSetup = setupOf(
    projectRoot,
    detectSetupFiles(projectRoot, variables.test!, ['', '.unit']),
    UNIT_EXCLUDE,
  );
  const intSetup = setupOf(
    projectRoot,
    detectSetupFiles(projectRoot, variables.test!, ['.int', '.integration']),
  );
  const e2eSetup = setupOf(
    projectRoot,
    detectSetupFiles(projectRoot, variables.test!, ['.e2e']),
  );

  // bare Vitest registers UNIT only; --project/-p registers every project for selection.
  const isProjectSelected = process.argv.some((arg) =>
    /^(?:--project|-p)(?:=|$)/.test(arg),
  );

  const unit = {
    extends: true,
    test: {
      name: 'UNIT',
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

/**
 * builds setup settings and matching collection exclusions for an inline project
 * @param projectRoot consumer project directory
 * @param detected setup files in execution order
 * @param excluded existing test exclusions
 * @returns setup settings shared by runtime and typecheck discovery
 */
function setupOf(
  projectRoot: string,
  detected: SetupFiles,
  excluded: string[] = configDefaults.exclude,
): Pick<
  NonNullable<TestProjectInlineConfiguration['test']>,
  'setupFiles' | 'globalSetup' | 'exclude'
> {
  return {
    setupFiles: detected.file.length > 0 ? detected.file : undefined,
    globalSetup: detected.project.length > 0 ? detected.project : undefined,
    // suffixed setup files also match the test globs, so keep them out of collection.
    exclude: [
      ...excluded,
      ...[...detected.file, ...detected.project].map((path) =>
        relative(projectRoot, path).split(sep).join('/'),
      ),
    ],
  };
}
