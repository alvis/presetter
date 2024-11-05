import { readPackageUp } from 'read-pkg-up';
import { describe, expect, it, vi } from 'vitest';

import { getPackage } from '#package';

vi.mock('read-pkg-up', () => ({
  readPackageUp: vi.fn(),
}));

describe('fn:getPackage', () => {
  it('resolve the content in package.json', async () => {
    vi.mocked(readPackageUp).mockResolvedValueOnce({
      path: 'path',
      packageJson: {
        name: 'name',
      },
    });

    expect(await getPackage()).toEqual({
      path: 'path',
      json: {
        name: 'name',
      },
    });
  });

  it('throw an error when no package.json is found', async () => {
    vi.mocked(readPackageUp).mockResolvedValueOnce(undefined);

    await expect(getPackage()).rejects.toThrow();
  });
});
