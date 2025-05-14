import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import { listAssetNames, resolveAssets, resolvePreset } from 'presetter';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import preset, { DEFAULT_VARIABLES as variables } from '#';

import type { ProjectContext } from 'presetter-types';

vi.mock('node:fs', async (importActual) => {
  const fs = await importActual<typeof import('node:fs')>();

  return {
    ...fs,
    existsSync: (path: string) =>
      fs.existsSync(path) || path === resolve('/path/to/project/.git'),
  };
});

vi.mock('node:path', { spy: true });

const OVERRIDES = resolve(import.meta.dirname, '..', 'overrides');
const TEMPLATES = resolve(import.meta.dirname, '..', 'templates');

const context = {
  isRepoRoot: true,
  repoRoot: '/path/to/project',
  projectRoot: '/path/to/project',
  packageJson: {},
} satisfies ProjectContext;

describe('fn:preset', () => {
  beforeEach(() => vi.clearAllMocks());

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

  it('should skip .husky/pre-commit if .git is not present', async () => {
    const context = { root: '/packages/project', package: {} };

    const node = await resolvePreset(preset, context);
    listAssetNames(node, { ...context, variables });

    expect(vi.mocked(resolve)).not.toHaveBeenCalledWith(
      TEMPLATES,
      'pre-commit',
    );
  });
});
