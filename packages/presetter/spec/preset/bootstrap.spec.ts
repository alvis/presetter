import { info } from 'node:console';
import { resolve } from 'node:path';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { resolveProjectContext } from '#context';
import { ensureFile } from '#io';

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
  '#context',
  () =>
    ({
      resolveProjectContext: vi.fn(async () => ({
        isRepoRoot: true,
        relativeProjectRoot: '.',
        relativeRepoRoot: '.',
        repoRoot: resolve('/path/to/project'),
        projectRoot: resolve('/path/to/project'),
        packageJson: { name: 'test-package' },
      })),
    }) satisfies Partial<typeof import('#context')>,
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

describe('fn:bootstrap', () => {
  beforeEach(() => vi.clearAllMocks());

  it('should print the package name and root-relative path for the repo root', async () => {
    await bootstrap();

    expect(info).toHaveBeenNthCalledWith(1, 'Bootstrapping test-package (.)');
  });

  it('should print the package name and root-relative path for a package', async () => {
    vi.mocked(resolveProjectContext).mockResolvedValueOnce({
      isRepoRoot: false,
      relativeProjectRoot: 'packages/core',
      relativeRepoRoot: '../..',
      repoRoot: resolve('/path/to/project'),
      projectRoot: resolve('/path/to/project/packages/core'),
      packageJson: { name: '@theriety/core' },
    });

    await bootstrap();

    expect(info).toHaveBeenNthCalledWith(
      1,
      'Bootstrapping @theriety/core (packages/core)',
    );
  });

  it('should throw when the package has no name', async () => {
    vi.mocked(resolveProjectContext).mockResolvedValueOnce({
      isRepoRoot: false,
      relativeProjectRoot: 'packages/core',
      relativeRepoRoot: '../..',
      repoRoot: resolve('/path/to/project'),
      projectRoot: resolve('/path/to/project/packages/core'),
      packageJson: {},
    });

    await expect(bootstrap()).rejects.toThrow(
      'failed to bootstrap unnamed package at packages/core',
    );
  });

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
});
