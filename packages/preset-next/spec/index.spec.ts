import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import { listAssetNames, resolvePreset } from 'presetter';
import { describe, expect, it, vi } from 'vitest';

import preset, { DEFAULT_VARIABLES as variables } from '#index';

vi.mock('node:fs', () => ({
  existsSync: (path: string) => path === '/.git',
}));

vi.mock('node:path', { spy: true });

const OVERRIDES = resolve(import.meta.dirname, '..', 'overrides');
const TEMPLATES = resolve(import.meta.dirname, '..', 'templates');

describe('fn:preset', () => {
  it('should use all templates', async () => {
    const context = { root: '/', package: {} };

    const node = await resolvePreset(preset, context);
    listAssetNames(node, { ...context, variables });

    const overrides = existsSync(OVERRIDES) ? readdirSync(OVERRIDES) : [];
    const templates = existsSync(TEMPLATES) ? readdirSync(TEMPLATES) : [];

    for (const path of overrides) {
      expect(vi.mocked(resolve)).toBeCalledWith(OVERRIDES, path);
    }
    for (const path of templates) {
      expect(vi.mocked(resolve)).toBeCalledWith(TEMPLATES, path);
    }
  });
});
