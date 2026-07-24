import { describe, expect, it, vi } from 'vitest';

import { resolvePresetterConfig } from '#preset/config/resolve';

import type { Jiti } from 'jiti';

const { createJiti, jitiImport } = vi.hoisted(() => {
  const jitiImport = vi.fn(
    async (
      _path: string,
      _options?: { default: boolean },
    ): Promise<unknown> => ({ id: 'test-preset' }),
  );

  return {
    jitiImport,
    createJiti: vi.fn(() => ({ import: jitiImport }) as Partial<Jiti> as Jiti),
  };
});

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
      // NOTE: a distinct configuration path per root keeps the module-level cache from leaking between tests
      searchPresetterConfigs: vi.fn(async (base: string) =>
        base === '/missing/config'
          ? []
          : [`${base}/presetter.config.ts`, `${base}/presetter.config.js`],
      ),
    }) as Partial<typeof import('#preset/config/search')>,
);

describe('fn:resolvePresetterConfig', () => {
  it('should resolve the presetter configuration from the project root', async () => {
    const root = '/path/to/project';

    const result = await resolvePresetterConfig(root);
    const expected = { id: 'test-preset' };

    expect(result).toEqual(expected);
  });

  it('should accept a generator preset carrying an id', async () => {
    const generator = Object.assign(() => ({}), { id: 'generated-preset' });
    jitiImport.mockImplementationOnce(async () => generator);

    await expect(resolvePresetterConfig('/generator')).resolves.toBe(generator);
  });

  it('should report the root when no configuration file is found', async () => {
    await expect(resolvePresetterConfig('/missing/config')).rejects.toEqual(
      new Error('no presetter configuration file found for /missing/config'),
    );
  });

  it('should name the configuration file and keep the original failure as the cause', async () => {
    const failure = new SyntaxError('Unexpected token');
    jitiImport.mockImplementationOnce(async () => {
      throw failure;
    });

    const error = await resolvePresetterConfig('/broken').then(
      () => undefined,
      (error: Error) => error,
    );

    expect({ error, cause: error?.cause }).toEqual({
      error: new Error(
        'failed to load the presetter configuration at /broken/presetter.config.ts',
      ),
      cause: failure,
    });
  });

  it('should retry the import after a failed load instead of reusing it', async () => {
    jitiImport.mockImplementationOnce(async () => {
      throw new SyntaxError('Unexpected token');
    });

    await expect(resolvePresetterConfig('/retried')).rejects.toThrow();

    await expect(resolvePresetterConfig('/retried')).resolves.toEqual({
      id: 'test-preset',
    });
  });

  it('should reject an export that is not an object or function', async () => {
    jitiImport.mockImplementationOnce(async () => undefined);

    await expect(resolvePresetterConfig('/empty')).rejects.toEqual(
      new Error(
        'presetter.config.ts at /empty/presetter.config.ts does not default-export a preset ' +
          '(expected an object or function with an "id", received undefined)',
      ),
    );
  });

  it('should reject a module namespace left behind by a missing default export', async () => {
    jitiImport.mockImplementationOnce(async () => ({ preset: () => ({}) }));

    await expect(resolvePresetterConfig('/no-default')).rejects.toEqual(
      new Error(
        'presetter.config.ts at /no-default/presetter.config.ts does not default-export a preset ' +
          '(expected an object or function with an "id", received Object({\n  preset: Function\n}))',
      ),
    );
  });
});
