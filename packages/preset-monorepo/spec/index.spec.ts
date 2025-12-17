import { existsSync, readdirSync } from 'node:fs';
import { relative, resolve } from 'node:path';

import { resolveAssets, resolvePreset } from 'presetter';
import { describe, expect, it, vi } from 'vitest';

import preset, { DEFAULT_VARIABLES as variables } from '#index';

import type { ProjectContext } from 'presetter-types';

vi.mock('node:path', { spy: true });

const OVERRIDES = resolve(import.meta.dirname, '..', 'overrides');
const TEMPLATES = resolve(import.meta.dirname, '..', 'templates');

const rootContext = {
  isRepoRoot: true,
  relativeProjectRoot: '.',
  relativeRepoRoot: '.',
  repoRoot: '/',
  projectRoot: '/',
  packageJson: {},
} satisfies ProjectContext;

const context = {
  isRepoRoot: false,
  relativeProjectRoot: 'packages/example',
  relativeRepoRoot: '../..',
  repoRoot: '/',
  projectRoot: '/packages/example',
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

  it('should be able to resolve all assets for both repo root and packages', async () => {
    // Test repo root context
    const repoNode = await resolvePreset(preset, rootContext);
    const repoResult = resolveAssets(repoNode, rootContext);
    await expect(repoResult).resolves.not.toThrow();

    // Test package context
    const packageNode = await resolvePreset(preset, context);
    const packageResult = resolveAssets(packageNode, context);
    await expect(packageResult).resolves.not.toThrow();
  });
});
