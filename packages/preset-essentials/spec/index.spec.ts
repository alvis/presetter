import { existsSync, readdirSync } from 'node:fs';
import { relative, resolve } from 'node:path';

import { listAssetNames, resolveAssets, resolvePreset } from 'presetter';
import { describe, expect, it, vi } from 'vitest';

import preset, { DEFAULT_VARIABLES as variables } from '#index';

import type { ProjectContext } from 'presetter-types';

vi.mock('node:fs', async (importActual) => {
  const fs = await importActual<typeof import('node:fs')>();

  return {
    ...fs,
    existsSync: (path: string) =>
      fs.existsSync(path) || path === resolve('/path/to/project/.git'),
  };
});

const OVERRIDES = resolve(import.meta.dirname, '..', 'overrides');
const TEMPLATES = resolve(import.meta.dirname, '..', 'templates');

const context = {
  isRepoRoot: true,
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
        ...(node.definition.assets instanceof Function
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

  it('should skip .husky/pre-commit if .git is not present', async () => {
    const context = {
      isRepoRoot: false,
      relativeProjectRoot: './packages/project',
      relativeRepoRoot: '../..',
      repoRoot: '/',
      projectRoot: '/packages/project',
      packageJson: {},
    } satisfies ProjectContext;

    const node = await resolvePreset(preset, context);
    const assets = listAssetNames(node, { ...context, variables });

    expect(assets).not.contain('.husky/pre-commit');
  });
});
