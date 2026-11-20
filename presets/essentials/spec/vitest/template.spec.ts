import { basename, dirname, join } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { PROVIDE_KEY } from '#vitest/provide';
import template from '#vitest/template';

import type { Dirent, PathLike } from 'node:fs';

import type {
  PresetContentContext,
  PresetContentGenerator,
} from '@presetter/types';
import type {
  TestProjectInlineConfiguration,
  ViteUserConfig,
} from 'vitest/config';

// a virtual project tree, so that no wrapper or setup file is written to disk
vi.mock('node:fs', async (importOriginal) => {
  type Kind = 'dir' | 'file';

  const files = [
    // scoped: fixed-name files at the root and in the test directory, and nested ones
    '/scoped/project/vitest.setup.ts',
    '/scoped/project/spec/setup.ts',
    '/scoped/project/vitest.global-setup.ts',
    '/scoped/project/spec/global-setup.ts',
    '/scoped/project/spec/(group)/vitest.setup.ts',
    '/scoped/project/spec/a/setup.ts',
    '/scoped/project/spec/a/inner/global-setup.ts',
    // suffixed: one folder with files of every project
    '/suffixed/project/spec/svc/setup.ts',
    '/suffixed/project/spec/svc/setup.unit.ts',
    '/suffixed/project/spec/svc/setup.int.ts',
    '/suffixed/project/spec/svc/setup.integration.ts',
    '/suffixed/project/spec/svc/setup.e2e.ts',
    '/suffixed/project/spec/svc/global-setup.int.ts',
    '/suffixed/project/spec/svc/global-setup.e2e.ts',
    // fixed: fixed-name files only, and a test file
    '/fixed/project/vitest.setup.ts',
    '/fixed/project/vitest.setup.int.ts',
    '/fixed/project/spec/setup.unit.ts',
    '/fixed/project/spec/vitest.global-setup.int.ts',
    '/fixed/project/spec/one.spec.ts',
  ];

  const ancestorsOf = (path: string): string[] =>
    dirname(path) === path
      ? []
      : [dirname(path), ...ancestorsOf(dirname(path))];
  const entry = (path: string, kind: Kind): [string, Kind] => [
    join(path),
    kind,
  ];
  const kinds = new Map<string, Kind>([
    ...files.flatMap(ancestorsOf).map((path) => entry(path, 'dir')),
    ...files.map((path) => entry(path, 'file')),
  ]);

  return {
    ...(await importOriginal<typeof import('node:fs')>()),
    existsSync: (path) => kinds.has(String(path)),
    // like the platform, list in no particular order
    readdirSync: ((
      directory: PathLike,
      _options?: { withFileTypes: true },
    ): Array<Pick<Dirent, 'name' | 'isDirectory'>> =>
      [...kinds]
        .filter(([child]) => dirname(child) === String(directory))
        .map(([child, kind]) => ({
          name: basename(child),
          isDirectory: () => kind === 'dir',
        }))
        .sort((left, right) => right.name.localeCompare(left.name))) as Partial<
      typeof import('node:fs')
    >['readdirSync'],
  } satisfies Partial<typeof import('node:fs')>;
});

// a wrapper path that tells which helper made it and from what
vi.mock(
  '#vitest/scope',
  () =>
    ({
      scopeGlobalSetup: vi.fn(
        (globs: string[], file: string) =>
          `global-setup<${globs.join(',')}|${file}>`,
      ),
      scopeSetup: vi.fn(
        (globs: string[], file: string) => `setup<${globs.join(',')}|${file}>`,
      ),
    }) satisfies Partial<typeof import('#vitest/scope')>,
);

const generate = template as PresetContentGenerator<{
  default: ViteUserConfig;
}>;

const context = {
  isRepoRoot: true,
  relativeProjectRoot: '.',
  relativeRepoRoot: '.',
  repoRoot: '/path/to/repo',
  projectRoot: '/path/to/repo/packages/project',
  packageJson: { name: 'project' },
  variables: { source: 'src', test: 'spec' },
} satisfies PresetContentContext;

/** what Vitest is started with when it registers every project for selection */
const SELECTING_PROJECTS = ['node', 'vitest', '--project', 'INT'];

/** what Vitest is started with when it registers UNIT alone */
const BARE = ['node', 'vitest', 'run'];

/** the setup decisions of a project */
interface Setup {
  /** name of the project */
  name: NonNullable<TestProjectInlineConfiguration['test']>['name'];
  /** setup files run before each test file */
  setupFiles: unknown;
  /** global setup files run before the project starts */
  globalSetup: unknown;
  /** collection exclusions that name a file of the project, not a pattern */
  excluded: string[];
  /** type-check exclusions that name a file of the project, not a pattern */
  typeExcluded: string[];
}

/**
 * generates the config of a project
 * @param projectRoot absolute project directory
 * @param argv command-line arguments Vitest is started with
 * @returns the setup decisions of each project it registers
 */
async function setupsOf(projectRoot: string, argv: string[]): Promise<Setup[]> {
  vi.spyOn(process, 'argv', 'get').mockReturnValue(argv);

  const result = await generate({ default: {} }, { ...context, projectRoot });
  const isFile = (glob: string): boolean => !glob.startsWith('**/');

  return (result?.default.test?.projects ?? [])
    .filter(
      (project): project is TestProjectInlineConfiguration =>
        typeof project === 'object' && 'test' in project,
    )
    .map(({ test }) => ({
      name: test?.name,
      setupFiles: test?.setupFiles,
      globalSetup: test?.globalSetup,
      excluded: (test?.exclude ?? []).filter(isFile),
      typeExcluded: (test?.typecheck?.exclude ?? []).filter(isFile),
    }));
}

describe('fn:template', () => {
  it('should provide the project root to every project under the config directory key', async () => {
    const result = await generate({ default: {} }, context);

    expect(result?.default.test?.provide).toEqual({
      [PROVIDE_KEY]: '/path/to/repo/packages/project',
    });
  });

  it('should collect the tests of every project from the project root, whichever directory Vitest runs from', async () => {
    vi.spyOn(process, 'argv', 'get').mockReturnValue(SELECTING_PROJECTS);

    const result = await generate({ default: {} }, context);

    expect(
      (result?.default.test?.projects ?? [])
        .filter(
          (project): project is TestProjectInlineConfiguration =>
            typeof project === 'object' && 'test' in project,
        )
        .map(({ test }) => [test?.name, test?.dir]),
    ).toEqual([
      ['UNIT', '/path/to/repo/packages/project'],
      ['INT', '/path/to/repo/packages/project'],
      ['E2E', '/path/to/repo/packages/project'],
    ]);
  });

  it('should append folder-scoped setup files after the fixed-name ones, as wrappers scoped to their folder', async () => {
    const root = join('/scoped/project');
    const group = String.raw`spec/\(group\)/**`;

    expect(await setupsOf(root, BARE)).toEqual([
      expect.objectContaining({
        name: 'UNIT',
        setupFiles: [
          join(root, 'vitest.setup.ts'),
          join(root, 'spec/setup.ts'),
          `setup<${group}|${join(root, 'spec/(group)/vitest.setup.ts')}>`,
          `setup<spec/a/**|${join(root, 'spec/a/setup.ts')}>`,
        ],
        globalSetup: [
          join(root, 'vitest.global-setup.ts'),
          join(root, 'spec/global-setup.ts'),
          `global-setup<spec/a/inner/**|${join(root, 'spec/a/inner/global-setup.ts')}>`,
        ],
      }),
    ]);
  });

  it('should keep folder-scoped setup files out of test collection and type checking', async () => {
    const root = join('/scoped/project');
    const files = [
      'vitest.setup.ts',
      'spec/setup.ts',
      'vitest.global-setup.ts',
      'spec/global-setup.ts',
      String.raw`spec/\(group\)/vitest.setup.ts`,
      'spec/a/setup.ts',
      'spec/a/inner/global-setup.ts',
    ];

    expect(await setupsOf(root, BARE)).toEqual([
      expect.objectContaining({
        excluded: expect.arrayContaining(files),
        typeExcluded: expect.arrayContaining(files),
      }),
    ]);
  });

  it('should give UNIT, INT and E2E only the scoped files of their own suffixes', async () => {
    const root = join('/suffixed/project');

    expect(await setupsOf(root, SELECTING_PROJECTS)).toEqual([
      {
        name: 'UNIT',
        setupFiles: [
          `setup<spec/svc/**|${join(root, 'spec/svc/setup.ts')}>`,
          `setup<spec/svc/**|${join(root, 'spec/svc/setup.unit.ts')}>`,
        ],
        globalSetup: undefined,
        excluded: ['spec/svc/setup.ts', 'spec/svc/setup.unit.ts'],
        typeExcluded: ['spec/svc/setup.ts', 'spec/svc/setup.unit.ts'],
      },
      {
        name: 'INT',
        setupFiles: [
          `setup<spec/svc/**|${join(root, 'spec/svc/setup.int.ts')}>`,
          `setup<spec/svc/**|${join(root, 'spec/svc/setup.integration.ts')}>`,
        ],
        globalSetup: [
          `global-setup<spec/svc/**|${join(root, 'spec/svc/global-setup.int.ts')}>`,
        ],
        excluded: [
          'spec/svc/setup.int.ts',
          'spec/svc/setup.integration.ts',
          'spec/svc/global-setup.int.ts',
        ],
        typeExcluded: [
          'spec/svc/setup.int.ts',
          'spec/svc/setup.integration.ts',
          'spec/svc/global-setup.int.ts',
        ],
      },
      {
        name: 'E2E',
        setupFiles: [
          `setup<spec/svc/**|${join(root, 'spec/svc/setup.e2e.ts')}>`,
        ],
        globalSetup: [
          `global-setup<spec/svc/**|${join(root, 'spec/svc/global-setup.e2e.ts')}>`,
        ],
        excluded: ['spec/svc/setup.e2e.ts', 'spec/svc/global-setup.e2e.ts'],
        typeExcluded: ['spec/svc/setup.e2e.ts', 'spec/svc/global-setup.e2e.ts'],
      },
    ]);
  });

  it('should list fixed-name setup files at the root and in the test directory as plain paths, as before', async () => {
    const root = join('/fixed/project');

    expect(await setupsOf(root, SELECTING_PROJECTS)).toEqual([
      {
        name: 'UNIT',
        setupFiles: [
          join(root, 'vitest.setup.ts'),
          join(root, 'spec/setup.unit.ts'),
        ],
        globalSetup: undefined,
        excluded: ['vitest.setup.ts', 'spec/setup.unit.ts'],
        typeExcluded: ['vitest.setup.ts', 'spec/setup.unit.ts'],
      },
      {
        name: 'INT',
        setupFiles: [join(root, 'vitest.setup.int.ts')],
        globalSetup: [join(root, 'spec/vitest.global-setup.int.ts')],
        excluded: ['vitest.setup.int.ts', 'spec/vitest.global-setup.int.ts'],
        typeExcluded: [
          'vitest.setup.int.ts',
          'spec/vitest.global-setup.int.ts',
        ],
      },
      {
        name: 'E2E',
        setupFiles: undefined,
        globalSetup: undefined,
        excluded: [],
        typeExcluded: [],
      },
    ]);
  });
});
