import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import { loadDynamicMap, resolveContext } from 'presetter';
import { describe, expect, it, vi } from 'vitest';

import getPresetAsset from '#';

vi.mock('node:path', async (importActual) => {
  const { resolve, ...rest } = await importActual<typeof import('node:path')>();

  return {
    ...rest,
    // spy on resolve to check if a template is referenced
    resolve: vi.fn(resolve),
  };
});

describe('fn:getPresetAsset', () => {
  it('use all templates', async () => {
    const asset = getPresetAsset();
    const context = await resolveContext({
      graph: [{ name: 'preset', asset, nodes: [] }],
      context: {
        target: { name: 'preset', root: '/', package: {} },
        custom: { preset: 'preset' },
      },
    });

    // load all potential dynamic content
    await loadDynamicMap(asset.supplementaryConfig, context);
    await loadDynamicMap(asset.template, context);

    const CONFIGS = resolve(import.meta.dirname, '..', 'configs');
    const configs = existsSync(CONFIGS) ? readdirSync(CONFIGS) : [];
    const TEMPLATES = resolve(import.meta.dirname, '..', 'templates');
    const templates = existsSync(TEMPLATES) ? readdirSync(TEMPLATES) : [];

    for (const path of configs) {
      expect(vi.mocked(resolve)).toBeCalledWith(CONFIGS, path);
    }
    for (const path of templates) {
      expect(vi.mocked(resolve)).toBeCalledWith(TEMPLATES, path);
    }
  });
});
