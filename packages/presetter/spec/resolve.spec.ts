import { resolve as resolvePath } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { resolveProjectContext } from '#context';
import { resolve } from '#resolve';

import type { ProjectContext } from 'presetter-types';

const { configTs } = vi.hoisted(() => ({ configTs: { foo: () => 'bar' } }));

vi.mock('#context', () => ({
  resolveProjectContext: vi.fn(
    async (): Promise<ProjectContext> => ({
      isRepoRoot: false,
      relativeProjectRoot: '.',
      relativeRepoRoot: '.',
      repoRoot: resolvePath('/path/to/project'),
      projectRoot: resolvePath('/path/to/project'),
      packageJson: {},
    }),
  ),
}));

vi.mock('#preset', async (importActual) => {
  return {
    ...(await importActual<typeof import('#preset')>()),
    resolvePresetterConfig: vi.fn(async () => ({
      id: 'test-preset',
      assets: {
        'nested/config.ts': configTs,
      },
    })),
  } satisfies Partial<typeof import('#preset')>;
});

describe('fn:resolve', () => {
  it('should resolve an asset given its file url', async () => {
    const url = `file://${resolvePath('/path/to/project/nested/config.ts')}`;
    const result = await resolve(url);
    const expected = configTs;

    expect(result).toEqual(expected);
    expect(vi.mocked(resolveProjectContext)).toHaveBeenCalledWith(
      resolvePath('/path/to/project/nested'),
    );
  });

  it('should throw an error if the asset is not found', async () => {
    const url = `file://${resolvePath('/path/to/project/missing.ts')}`;
    await expect(resolve(url)).rejects.toThrow(
      `asset missing.ts not found in preset defined at ${resolvePath('/path/to/project/missing.ts')}`,
    );
  });
});
