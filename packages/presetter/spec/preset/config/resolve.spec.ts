import { describe, expect, it, vi } from 'vitest';

import { resolvePresetterConfig } from '#preset/config/resolve';

import type { Jiti } from 'jiti';

const createJiti = vi.hoisted(() =>
  vi.fn(
    () =>
      ({
        import: vi.fn(async () => ({ id: 'test-preset' })),
      }) as Partial<Jiti> as Jiti,
  ),
);
vi.mock(
  'jiti',
  () =>
    ({
      createJiti,
    }) satisfies Partial<typeof import('jiti')>,
);

vi.mock(
  '#preset/config/search',
  () =>
    ({
      searchPresetterConfigs: vi.fn(async (base: string) =>
        base === '/missing/config'
          ? []
          : [
              '/path/to/project/presetter.config.ts',
              '/path/to/project/presetter.config.js',
            ],
      ),
    }) as Partial<typeof import('#preset/config/search')>,
);

describe('fn:resolvePresetterConfig', () => {
  it('resolves the presetter configuration from the project root', async () => {
    const root = '/path/to/project';

    const result = await resolvePresetterConfig(root);
    const expected = { id: 'test-preset' };

    expect(result).toEqual(expected);
  });

  it('throws an error if no configuration file is found', async () => {
    await expect(resolvePresetterConfig('/missing/config')).rejects.toThrow();
  });
});
