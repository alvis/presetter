import { resolve } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { searchPresetterConfigs } from '#preset/config/search';

import type { Options } from 'find-up-simple';

vi.mock(
  'node:fs',
  () =>
    ({
      existsSync: vi.fn((path) =>
        [
          '/path/to/project/presetter.config.mts',
          '/monorepo/presetter.config.mjs',
          '/monorepo/packages/presetter.config.ts',
          '/monorepo/packages/package1/presetter.config.ts',
          '/monorepo/packages/package2/presetter.config.mts',
        ]
          .map((file) => resolve(file))
          .includes(path),
      ),
    }) satisfies Partial<typeof import('node:fs')>,
);

vi.mock(
  'find-up-simple',
  () =>
    ({
      findUp: vi.fn(async (name: string, options?: Options) => {
        if ((options?.cwd as string).includes('/monorepo')) {
          return resolve('/monorepo/package.json');
        }

        return undefined;
      }),
    }) satisfies Partial<typeof import('find-up-simple')>,
);

vi.mock('/monorepo/package.json', () => ({
  name: 'monorepo',
  version: '1.0.0',
  readme: 'README.md',
  _id: 'id',
}));

describe('fn:searchPresetterConfigs', () => {
  it('returns configuration files from the base directory', async () => {
    const base = '/path/to/project';

    const result = await searchPresetterConfigs(base);
    const expected = [resolve(base, 'presetter.config.mts')];

    expect(result).toEqual(expected);
  });

  it('returns configuration files from the base directory and its parent', async () => {
    const monorepoBase = '/monorepo';
    const packagesBase = '/monorepo/packages';
    const projectBase = '/monorepo/packages/package1';

    const result = await searchPresetterConfigs(projectBase);
    const expected = [
      resolve(projectBase, 'presetter.config.ts'),
      resolve(packagesBase, 'presetter.config.ts'),
      resolve(monorepoBase, 'presetter.config.mjs'),
    ];

    expect(result).toEqual(expected);
  });
});
