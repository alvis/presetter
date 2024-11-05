import { describe, expect, it, vi } from 'vitest';

import { getContext } from '#preset/context';

vi.mock('#package', () => ({
  getPackage: vi.fn(async () => ({
    path: '/project/package.json',
    json: {
      name: 'client',
      scripts: {
        test: 'test',
      },
      dependencies: {},
    },
  })),
}));

vi.mock('#preset/presetterRC', () => ({
  getPresetterRC: vi.fn((root: string) => {
    switch (root) {
      case '/project':
        return {
          preset: 'preset',
        };
      default:
        throw new Error(`getPresetterRC: missing ${root}`);
    }
  }),
}));

describe('fn:getContext', () => {
  it('compute the current context', async () => {
    expect(await getContext()).toEqual({
      target: {
        name: 'client',
        root: '/project',
        package: {
          dependencies: {},
          name: 'client',
          scripts: {
            test: 'test',
          },
        },
      },
      custom: {
        preset: 'preset',
      },
    });
  });
});
