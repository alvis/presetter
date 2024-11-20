import { beforeEach, describe, expect, it, vi } from 'vitest';

import { getPackage } from '#package';
import { getContext } from '#preset/context';

import type { PresetContext } from 'presetter-types';

vi.mock(
  '#package',
  () =>
    ({
      getPackage: vi.fn(async () => ({
        json: { name: 'test-package' },
        path: '/path/to/project/package.json',
      })),
    }) as Partial<typeof import('#package')>,
);

describe('fn:getContext', () => {
  beforeEach(() => vi.clearAllMocks());

  it('should be able to resolve the current context', async () => {
    const cwd = '/path/to/project';

    const result = await getContext(cwd);
    const expected: PresetContext = {
      root: '/path/to/project',
      package: { name: 'test-package' },
    };

    expect(result).toEqual(expected);
    expect(vi.mocked(getPackage)).toHaveBeenCalledWith(cwd);
  });
});
