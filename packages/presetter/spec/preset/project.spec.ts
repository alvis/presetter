import { describe, expect, it, vi } from 'vitest';
import Xception from 'xception';

import { resolvePresetterConfig } from '#preset/config';
import { resolveProjectPreset } from '#preset/project';

import type { PresetNode, ProjectContext } from 'presetter-types';

vi.mock('#preset/config', () => ({
  resolvePresetterConfig: vi.fn(),
}));

const context = {
  isRepoRoot: false,
  repoRoot: '/path/to/project',
  projectRoot: '/path/to/project',
  packageJson: { name: 'test-package' },
} satisfies ProjectContext;

describe('fn:resolveProjectPreset', () => {
  it('resolves the project preset successfully', async () => {
    vi.mocked(resolvePresetterConfig).mockResolvedValueOnce({
      id: 'test-preset',
    });

    const result = await resolveProjectPreset(context);
    const expected: PresetNode = {
      definition: { id: 'test-preset' },
      nodes: [],
    };

    expect(result).toEqual(expected);
  });

  it('throws an error if preset resolution fails', async () => {
    vi.mocked(resolvePresetterConfig).mockRejectedValueOnce(
      new Error('something went wrong'),
    );

    await expect(resolveProjectPreset(context)).rejects.toThrow(Xception);
  });
});
