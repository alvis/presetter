import { resolve } from 'node:path';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ensureFile } from '#io';
import { arePeerPackagesAutoInstalled, reifyDependencies } from '#package';

import { bootstrap } from '#preset/bootstrap';
import { resolveAssets } from '#preset/resolution';

vi.mock(
  'node:console',
  () =>
    ({
      info: vi.fn(), // disable console output
    }) satisfies Partial<typeof import('node:console')>,
);

vi.mock(
  '#io',
  async () =>
    ({
      ensureFile: vi.fn(),
    }) satisfies Partial<typeof import('#io')>,
);

vi.mock(
  '#preset/context',
  () =>
    ({
      getContext: vi.fn(async () => ({
        root: resolve('/path/to/project'),
        package: {},
      })),
    }) satisfies Partial<typeof import('#preset/context')>,
);

vi.mock(
  '#preset/project',
  () =>
    ({
      resolveProjectPreset: vi.fn(async () => ({
        definition: { id: 'test-preset' },
        nodes: [],
      })),
    }) satisfies Partial<typeof import('#preset/project')>,
);

vi.mock(
  '#preset/resolution',
  () =>
    ({
      resolveAssets: vi.fn(async () => ({})),
    }) satisfies Partial<typeof import('#preset/resolution')>,
);

vi.mock('#package', () => ({
  arePeerPackagesAutoInstalled: vi.fn(),
  reifyDependencies: vi.fn(
    async ({ add }: Parameters<typeof reifyDependencies>[0]) =>
      add?.map((name) => ({ name, version: '*' })),
  ),
}));

describe('fn:bootstrap', () => {
  beforeEach(() => vi.clearAllMocks());

  it('should generate files from templates and place them to the target project root', async () => {
    vi.mocked(resolveAssets).mockResolvedValue({
      'config.json': {
        foo: 'bar',
      },
    });

    await bootstrap();

    expect(vi.mocked(ensureFile)).toHaveBeenCalledWith(
      resolve('/path/to/project/config.json'),
      JSON.stringify({ foo: 'bar' }, null, 2),
    );
  });

  it('should skip generating files if the asset is marked as ignored (null)', async () => {
    vi.mocked(resolveAssets).mockResolvedValue({
      'config.json': null,
    });

    await bootstrap();

    expect(vi.mocked(ensureFile)).not.toHaveBeenCalled();
  });

  it('should install packages specified by the preset if peer packages are not automatically installed by the package manager', async () => {
    vi.mocked(arePeerPackagesAutoInstalled).mockReturnValue(false);

    await bootstrap();

    expect(reifyDependencies).toHaveBeenCalledTimes(1);
  });

  it('should skip installing peer packages manually if auto peers install is supported by package manager', async () => {
    vi.mocked(arePeerPackagesAutoInstalled).mockReturnValue(true);

    await bootstrap();

    expect(reifyDependencies).not.toHaveBeenCalled();
  });
});
