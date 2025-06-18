import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import { listAssetNames, resolveAssets, resolvePreset } from 'presetter';
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

const packageContext = {
  isRepoRoot: false,
  relativeProjectRoot: 'packages/example',
  relativeRepoRoot: '../..',
  repoRoot: '/',
  projectRoot: '/packages/example',
  packageJson: {},
} satisfies ProjectContext;

describe('fn:preset', () => {
  it('should use all templates', async () => {
    const node = await resolvePreset(preset, rootContext);
    listAssetNames(node, { ...rootContext, variables });

    const overrides = existsSync(OVERRIDES) ? readdirSync(OVERRIDES) : [];
    const templates = existsSync(TEMPLATES) ? readdirSync(TEMPLATES) : [];

    for (const path of overrides) {
      expect(vi.mocked(resolve)).toHaveBeenCalledWith(OVERRIDES, path);
    }
    for (const path of templates) {
      expect(vi.mocked(resolve)).toHaveBeenCalledWith(TEMPLATES, path);
    }
  });

  it('should be able to resolve all assets for both repo root and packages', async () => {
    // Test repo root context
    const repoNode = await resolvePreset(preset, rootContext);
    const repoResult = resolveAssets(repoNode, rootContext);
    await expect(repoResult).resolves.not.toThrow();

    // Test package context
    const packageNode = await resolvePreset(preset, packageContext);
    const packageResult = resolveAssets(packageNode, packageContext);
    await expect(packageResult).resolves.not.toThrow();
  });
});
