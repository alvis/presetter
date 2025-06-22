import { describe, expect, it, vi } from 'vitest';

import { getScripts } from '#preset/scripts';

vi.mock(
  '#preset/project',
  () =>
    ({
      resolveProjectPreset: vi.fn(async () => ({
        definition: {
          id: 'test-preset',
          scripts: {
            test: 'exit 0',
          },
        },
        nodes: [],
      })),
    }) satisfies Partial<typeof import('#preset/project')>,
);

describe('fn:getScripts', () => {
  it('should be able to resolves scripts templates', async () => {
    const result = await getScripts();
    const expected = {
      test: 'exit 0',
    };

    expect(result).toEqual(expected);
  });
});
