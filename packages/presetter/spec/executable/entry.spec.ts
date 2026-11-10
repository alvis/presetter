import { resolve } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { entry } from '#executable/entry';
import { bootstrap, use } from '#preset';
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

          // NOTE: every fixture pattern resolves to an exact path, so matching reduces to
          // an exact-string lookup, deduped the way globby returns unique results
          return [...new Set(list)].filter((pattern) =>
            FIXTURE_PATHS.includes(pattern),
          );
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
      use: vi.fn(),
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
  describe('use', () => {
    it('should adopt each named preset with an explicit package manager', async () => {
      await entry([
        'use',
        '@scope/esm@^2',
        'preset-strict',
        '--package-manager=pnpm',
      ]);

      expect(vi.mocked(use).mock.calls).toEqual([
        [['@scope/esm@^2', 'preset-strict'], { packageManager: 'pnpm' }],
      ]);
    });

    it('should pass --force to adoption', async () => {
      await entry(['use', '@scope/esm', '--force']);

      expect(vi.mocked(use).mock.calls).toEqual([
        [['@scope/esm'], { packageManager: undefined, force: true }],
      ]);
    });

    it('should leave package manager detection to adoption when the flag is omitted', async () => {
      await entry(['use', '@scope/esm']);

      expect(vi.mocked(use).mock.calls).toEqual([
        [['@scope/esm'], { packageManager: undefined }],
      ]);
    });
  });

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
