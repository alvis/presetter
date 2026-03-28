import { resolve } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import {
  entry,
  expandDelimitedValues,
  resolveProjectRoots,
} from '#executable/entry';
import { bootstrap } from '#preset';
import { run } from '#run';

const { FIXTURE_ROOT, FIXTURE_PATHS, FIXTURE_PACKAGES } = vi.hoisted(() => {
  const root = 'spec/executable/fixtures';
  const packages: Record<string, { name?: string }> = {
    [`${root}/packages/app/package.json`]: { name: 'acme' },
    [`${root}/presets/next/package.json`]: { name: '@acme/preset-next' },
    [`${root}/presets/node/package.json`]: { name: '@acme/preset-node' },
    [`${root}/presets/monorepo/package.json`]: {
      name: '@acme/preset-monorepo',
    },
    [`${root}/tools/scripts/package.json`]: { name: 'scripts' },
    [`${root}/no-name/package.json`]: {},
  };

  return {
    FIXTURE_ROOT: root,
    FIXTURE_PATHS: Object.keys(packages),
    FIXTURE_PACKAGES: packages,
  };
});

vi.mock(
  'globby',
  () =>
    ({
      // @ts-expect-error -- globby exports an overloaded signature whose first
      // overload returns Entry[]; only the simple string[] overload is reachable
      // from entry.ts, so a single-signature vi.fn cannot satisfy the union
      globby: vi.fn(
        async (patterns: string | readonly string[]): Promise<string[]> => {
          const list = Array.isArray(patterns)
            ? [...(patterns as readonly string[])]
            : [patterns as string];

          if (list.length === 1 && list[0] === '**/package.json') {
            return FIXTURE_PATHS;
          }

          return list.filter((pattern) => FIXTURE_PATHS.includes(pattern));
        },
      ),
    }) satisfies Partial<typeof import('globby')>,
);

vi.mock(
  'node:fs',
  () =>
    ({
      existsSync: vi.fn((path: import('node:fs').PathLike) => path === 'exist'),
      // @ts-expect-error -- readFileSync is overloaded; the string-returning
      // overload is the only one reached from entry.ts, which a single-signature
      // vi.fn cannot satisfy against the full union
      readFileSync: vi.fn((path: string): string => {
        const pkg = FIXTURE_PACKAGES[path];
        if (!pkg) {
          throw new Error(`unexpected readFileSync path: ${path}`);
        }

        return JSON.stringify(pkg);
      }),
    }) satisfies Partial<typeof import('node:fs')>,
);

vi.mock(
  '#preset',
  () =>
    ({
      bootstrap: vi.fn(),
    }) satisfies Partial<typeof import('#preset')>,
);

vi.mock(
  '#run',
  () =>
    ({
      run: vi.fn(),
    }) satisfies Partial<typeof import('#run')>,
);

const fixtureRoot = (relative: string): string =>
  resolve(`${FIXTURE_ROOT}/${relative}`);

describe('fn:entry', () => {
  describe('bootstrap', () => {
    it('should bootstrap when no --only gate is provided', async () => {
      await entry(['bootstrap', '--projects', `${FIXTURE_ROOT}/packages/app`]);

      expect(bootstrap).toHaveBeenCalledWith(fixtureRoot('packages/app'));
    });

    it('should bootstrap if the specified file exists', async () => {
      await entry([
        'bootstrap',
        '--only',
        'exist',
        '--projects',
        `${FIXTURE_ROOT}/packages/app`,
      ]);

      expect(bootstrap).toHaveBeenCalledWith(fixtureRoot('packages/app'));
    });

    it('should skip bootstrap if the specified file is missing', async () => {
      await entry(['bootstrap', '--only', 'no-such-file']);

      expect(bootstrap).not.toHaveBeenCalled();
    });

    it('should bootstrap each path-glob match in order', async () => {
      await entry([
        'bootstrap',
        '--projects',
        `${FIXTURE_ROOT}/presets/next,${FIXTURE_ROOT}/presets/node`,
      ]);

      expect(bootstrap).toHaveBeenNthCalledWith(1, fixtureRoot('presets/next'));
      expect(bootstrap).toHaveBeenNthCalledWith(2, fixtureRoot('presets/node'));
    });

    it('should bootstrap by package-name glob via the -P alias', async () => {
      await entry([
        'bootstrap',
        '-p',
        '',
        '-P',
        '@acme/preset-next,@acme/preset-node',
      ]);

      const calls = vi.mocked(bootstrap).mock.calls.map(([root]) => root);
      expect([...calls].sort()).toEqual(
        [fixtureRoot('presets/next'), fixtureRoot('presets/node')].sort(),
      );
    });
  });

  describe('run', () => {
    it('should run a single task with provided arguments', async () => {
      await entry(['run', 'task', '--', '"arg 1"', "'arg 2'"]);

      expect(run).toHaveBeenCalledWith(
        [
          {
            selector: 'task',
            args: ['arg 1', 'arg 2'],
          },
        ],
        { templateOnly: false },
      );
    });
  });

  describe('run-s', () => {
    it('should run a single task without arguments', async () => {
      await entry(['run-s', 'task', '--', 'arg-1', '--arg-2']);

      expect(run).toHaveBeenCalledWith([
        {
          selector: 'task',
          args: [],
        },
      ]);
    });

    it('should run multiple tasks without arguments', async () => {
      await entry(['run-s', 'task1', 'task2', '--', 'arg-1', '--arg-2']);

      expect(run).toHaveBeenCalledWith([
        {
          selector: 'task1',
          args: [],
        },
        {
          selector: 'task2',
          args: [],
        },
      ]);
    });

    it('should run multiple tasks with specified arguments', async () => {
      await entry([
        'run-s',
        'task1 -- arg-1 --arg-2 "arg 3"',
        'task2 -- arg-4 --arg-5 {@}',
        '--',
        'arg-6',
        '--arg-7',
      ]);

      expect(run).toHaveBeenCalledWith([
        {
          selector: 'task1',
          args: ['arg-1', '--arg-2', 'arg 3'],
        },
        {
          selector: 'task2',
          args: ['arg-4', '--arg-5', 'arg-6', '--arg-7'],
        },
      ]);
    });
  });

  describe('run-p', () => {
    it('should run multiple tasks in parallel', async () => {
      await entry(['run-p', 'task1', 'task2']);

      expect(run).toHaveBeenCalledWith(
        [
          {
            selector: 'task1',
            args: [],
          },
          {
            selector: 'task2',
            args: [],
          },
        ],
        { parallel: true },
      );
    });
  });

  it('should not do anything if the command cannot be recognized', async () => {
    await entry(['unknown', '--arg-1']);

    expect(bootstrap).toHaveBeenCalledTimes(0);
    expect(run).toHaveBeenCalledTimes(0);
  });
});

describe('fn:resolveProjectRoots', () => {
  it('should resolve absolute project roots from path globs', async () => {
    const roots = await resolveProjectRoots({
      projects: [
        `${FIXTURE_ROOT}/presets/next`,
        `${FIXTURE_ROOT}/presets/node`,
      ],
      packages: [],
    });

    expect(roots).toEqual([
      fixtureRoot('presets/next'),
      fixtureRoot('presets/node'),
    ]);
  });

  it('should resolve absolute project roots from exact package-name globs', async () => {
    const roots = await resolveProjectRoots({
      projects: [],
      packages: ['@acme/preset-next'],
    });

    expect(roots).toEqual([fixtureRoot('presets/next')]);
  });

  it('should resolve absolute project roots from wildcard package-name globs', async () => {
    const roots = await resolveProjectRoots({
      projects: [],
      packages: ['@acme/preset-*'],
    });

    expect([...roots].sort()).toEqual(
      [
        fixtureRoot('presets/next'),
        fixtureRoot('presets/node'),
        fixtureRoot('presets/monorepo'),
      ].sort(),
    );
  });

  it('should not cross the scope boundary when using wildcard globs', async () => {
    const roots = await resolveProjectRoots({
      projects: [],
      packages: ['*'],
    });

    expect([...roots].sort()).toEqual(
      [fixtureRoot('packages/app'), fixtureRoot('tools/scripts')].sort(),
    );
  });

  it('should dedupe roots when path and package globs overlap', async () => {
    const roots = await resolveProjectRoots({
      projects: [`${FIXTURE_ROOT}/presets/next`],
      packages: ['@acme/preset-next'],
    });

    expect(roots).toEqual([fixtureRoot('presets/next')]);
  });

  it('should skip package.json files without a name field', async () => {
    const roots = await resolveProjectRoots({
      projects: [],
      packages: ['*'],
    });

    expect(roots).not.toContain(fixtureRoot('no-name'));
  });

  it('should escape regex metacharacters in package-name globs', async () => {
    const roots = await resolveProjectRoots({
      projects: [],
      packages: ['scripts.next'],
    });

    expect(roots).toEqual([]);
  });

  it('should skip scanning entirely when both inputs are empty', async () => {
    const roots = await resolveProjectRoots({
      projects: [],
      packages: [],
    });

    expect(roots).toEqual([]);
  });
});

describe('fn:expandDelimitedValues', () => {
  it('should flatten comma-delimited entries by default', () => {
    expect(expandDelimitedValues(['a,b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('should trim whitespace around each part', () => {
    expect(expandDelimitedValues([' a , b ', ' c '])).toEqual(['a', 'b', 'c']);
  });

  it('should drop empty parts produced by trailing or repeated delimiters', () => {
    expect(expandDelimitedValues(['a,,b,'])).toEqual(['a', 'b']);
  });

  it('should accept a custom delimiter', () => {
    expect(expandDelimitedValues(['a;b;c'], ';')).toEqual(['a', 'b', 'c']);
  });
});
