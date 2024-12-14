import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import { listAssetNames, resolveAssets, resolvePreset } from 'presetter';
import { describe, expect, it, vi } from 'vitest';

import preset, { DEFAULT_VARIABLES as variables } from '#';

import type { PresetContext } from 'presetter-types';

vi.mock('node:fs', async (importActual) => {
  const actual = await importActual<typeof import('node:fs')>();

  return {
    ...actual,
    readdirSync: (path: string) =>
      path.startsWith('/path/to/project')
        ? ['tailwind.config.ts']
        : actual.readdirSync(path),
  };
});

vi.mock('node:path', { spy: true });

const OVERRIDES = resolve(import.meta.dirname, '..', 'overrides');
const TEMPLATES = resolve(import.meta.dirname, '..', 'templates');

const context = {
  root: '/path/to/project',
  package: {},
} satisfies PresetContext;

describe('fn:preset', () => {
  it('should use all templates', async () => {
    const node = await resolvePreset(preset, context);
    listAssetNames(node, { ...context, variables });

    const overrides = existsSync(OVERRIDES) ? readdirSync(OVERRIDES) : [];
    const templates = existsSync(TEMPLATES) ? readdirSync(TEMPLATES) : [];

    for (const path of overrides) {
      expect(vi.mocked(resolve)).toHaveBeenCalledWith(OVERRIDES, path);
    }
    for (const path of templates) {
      expect(vi.mocked(resolve)).toHaveBeenCalledWith(TEMPLATES, path);
    }
  });

  it('should be able to resolve all assets', async () => {
    const node = await resolvePreset(preset, context);
    const result = resolveAssets(node, context);

    await expect(result).resolves.not.toThrow();
  });

  it('should add add additional files to existing ignore list', async () => {
    const node = await resolvePreset(preset, context);
    const result = await resolveAssets(node, context);
    const expected = ['/types/image.d.ts', '/types/style.d.ts'];

    expect(result['.gitignore']).toEqual(expect.arrayContaining(expected));
  });
});
