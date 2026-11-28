import { existsSync, readdirSync } from 'node:fs';
import { relative, resolve } from 'node:path';

import {
  preset as definePreset,
  resolveAssets,
  resolvePreset,
} from 'presetter';
import { describe, expect, it, vi } from 'vitest';

import preset, { DEFAULT_VARIABLES as variables } from '#index';

import type { ProjectContext } from '@presetter/types';

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

const OVERRIDES = resolve(import.meta.dirname, '..', 'overrides');
const TEMPLATES = resolve(import.meta.dirname, '..', 'templates');

const context = {
  isRepoRoot: false,
  relativeProjectRoot: '.',
  relativeRepoRoot: '.',
  repoRoot: '/path/to/project',
  projectRoot: '/path/to/project',
  packageJson: {},
} satisfies ProjectContext;

describe('fn:preset', () => {
  it('should use all templates', async () => {
    const node = await resolvePreset(preset, context);

    const overrides = existsSync(OVERRIDES) ? readdirSync(OVERRIDES) : [];
    const templates = existsSync(TEMPLATES) ? readdirSync(TEMPLATES) : [];

    const consumedOverrides = [
      node.definition.override?.scripts,
      ...Object.values({ ...node.definition.override?.assets }),
    ]
      .filter((item) => typeof item === 'string')
      .map((path) => relative(OVERRIDES, path));
    const consumedTemplates = [
      node.definition.scripts,
      ...Object.values({
        ...(typeof node.definition.assets === 'function'
          ? node.definition.assets({ ...context, variables })
          : node.definition.assets),
      }),
    ]
      .filter((item) => typeof item === 'string')
      .map((path) => relative(TEMPLATES, path));

    for (const path of overrides) {
      expect(consumedOverrides).contain(path);
    }
    for (const path of templates) {
      expect(consumedTemplates).contain(path);
    }
  });

  it('should be able to resolve all assets', async () => {
    const node = await resolvePreset(preset, context);
    const result = resolveAssets(node, context);

    await expect(result).resolves.not.toThrow();
  });

  it('should pass staged jsx and tsx files to presetter run after a separator', async () => {
    // the override only takes effect on a lint-staged config supplied by another preset (e.g. essentials)
    const host = definePreset('host', {
      extends: [preset],
      assets: { '.lintstagedrc.json': {} },
    });
    const node = await resolvePreset(host, context);
    const assets = await resolveAssets(node, context);

    expect(assets['.lintstagedrc.json']).toEqual(
      expect.objectContaining({
        'src/**/*.[tj]sx': ['presetter run stage --'],
      }),
    );
  });
});
