import { relative, resolve } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import {
  bootstrapProjects,
  expandDelimitedValues,
  resolveProjectRoots,
} from '#executable/projects';
import { bootstrap } from '#preset';

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

const fixtureRoot = (relative: string): string =>
  resolve(`${FIXTURE_ROOT}/${relative}`);

describe('fn:bootstrapProjects', () => {
  it('should bootstrap the remaining roots after one of them fails', async () => {
    vi.mocked(bootstrap).mockRejectedValueOnce(new Error('broken config'));

    await expect(
      bootstrapProjects([resolve('packages/a'), resolve('packages/b')]),
    ).rejects.toThrow();

    expect(vi.mocked(bootstrap).mock.calls).toEqual([
      [resolve('packages/a')],
      [resolve('packages/b')],
    ]);
  });

  it('should report every failed root once the whole run is over', async () => {
    const repoFailure = new Error('broken config');
    const packageFailure = new Error('missing preset');
    vi.mocked(bootstrap)
      .mockRejectedValueOnce(repoFailure)
      .mockRejectedValueOnce(packageFailure);

    const error = await bootstrapProjects([
      process.cwd(),
      resolve('packages/b'),
    ])
      .then(() => undefined)
      .catch((error: AggregateError) => error);

    expect({
      message: error?.message,
      errors: error?.errors.map((member: Error) => member.message),
      causes: error?.errors.map((member: Error) => member.cause),
    }).toEqual({
      message: 'failed to bootstrap 2 of 2 projects',
      errors: [
        'failed to bootstrap .',
        `failed to bootstrap ${relative(process.cwd(), resolve('packages/b'))}`,
      ],
      causes: [repoFailure, packageFailure],
    });
  });

  it('should resolve silently when every root succeeds', async () => {
    await expect(
      bootstrapProjects([resolve('packages/a'), resolve('packages/b')]),
    ).resolves.toBeUndefined();
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

  it('should subtract path globs prefixed with an exclamation mark', async () => {
    const roots = await resolveProjectRoots({
      projects: [
        `${FIXTURE_ROOT}/presets/next`,
        `${FIXTURE_ROOT}/presets/node`,
        `!${FIXTURE_ROOT}/presets/node`,
      ],
      packages: [],
    });

    expect(roots).toEqual([fixtureRoot('presets/next')]);
  });

  it('should subtract package-name globs prefixed with an exclamation mark', async () => {
    const roots = await resolveProjectRoots({
      projects: [],
      packages: ['@acme/preset-*', '!@acme/preset-node'],
    });

    expect([...roots].sort()).toEqual(
      [fixtureRoot('presets/next'), fixtureRoot('presets/monorepo')].sort(),
    );
  });

  it('should subtract a path exclusion from roots selected by a package-name glob', async () => {
    const roots = await resolveProjectRoots({
      projects: [`!${FIXTURE_ROOT}/presets/node`],
      packages: ['@acme/preset-*'],
    });

    expect([...roots].sort()).toEqual(
      [fixtureRoot('presets/next'), fixtureRoot('presets/monorepo')].sort(),
    );
  });

  it('should subtract a package-name exclusion from roots selected by a path glob', async () => {
    const roots = await resolveProjectRoots({
      projects: [
        `${FIXTURE_ROOT}/presets/next`,
        `${FIXTURE_ROOT}/presets/node`,
      ],
      packages: ['!@acme/preset-node'],
    });

    expect(roots).toEqual([fixtureRoot('presets/next')]);
  });

  it('should select nothing when only exclusions are given', async () => {
    const roots = await resolveProjectRoots({
      projects: [`!${FIXTURE_ROOT}/presets/node`],
      packages: [],
    });

    expect(roots).toEqual([]);
  });

  it('should ignore a pattern that carries nothing but the exclamation mark', async () => {
    const roots = await resolveProjectRoots({
      projects: ['!'],
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
