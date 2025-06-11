import { describe, expect, it } from 'vitest';

import { resolvePreset } from '#preset/resolution/preset';

import type { Preset, PresetNode, ProjectContext } from 'presetter-types';

const context = {
  isRepoRoot: false,
  relativeProjectRoot: '.',
  relativeRepoRoot: '.',
  repoRoot: '/path/to/project',
  projectRoot: '/path/to/project',
  packageJson: { name: 'test-package' },
} satisfies ProjectContext;

describe('fn:resolvePreset', () => {
  it('should able to resolve a plan object preset successfully', async () => {
    const preset: Preset = {
      id: 'test-preset',
      assets: {
        'config.json': {},
      },
    };

    const result = await resolvePreset(preset, context);
    const expected: PresetNode = {
      definition: {
        id: 'test-preset',
        assets: {
          'config.json': {},
        },
      },
      nodes: [],
    };

    expect(result).toEqual(expected);
  });

  it('should able to resolve a preset function', async () => {
    const preset: Preset = Object.assign(
      () => ({
        assets: {
          'config.json': {},
        },
      }),
      { id: 'test-preset' },
    );

    const result = await resolvePreset(preset, context);
    const expected: PresetNode = {
      definition: {
        id: 'test-preset',
        assets: {
          'config.json': {},
        },
      },
      nodes: [],
    };

    expect(result).toEqual(expected);
  });

  it('should able to resolve a preset with nested presets', async () => {
    const preset: Preset = {
      id: 'parent',
      extends: [
        Object.assign(
          () => ({
            assets: {
              'child.json': {},
            },
          }),
          { id: 'child' },
        ),
      ],
      assets: {
        'parent.json': {},
      },
    };

    const result = await resolvePreset(preset, context);
    const expected: PresetNode = {
      definition: {
        id: 'parent',
        extends: preset.extends,
        assets: {
          'parent.json': {},
        },
      },
      nodes: [
        {
          definition: {
            id: 'child',
            assets: {
              'child.json': {},
            },
          },
          nodes: [],
        },
      ],
    };

    expect(result).toEqual(expected);
  });
});
