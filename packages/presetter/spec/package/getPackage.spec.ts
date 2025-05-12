import { describe, expect, it, vi } from 'vitest';

import { getPackage } from '#package';

vi.mock(
  'node:fs/promises',
  () =>
    ({
      // WORKAROUND: cast to unknown first since readFile has overloading signature which doesn't allow us to simply cast it
      readFile: vi.fn(async () =>
        JSON.stringify({ name: 'name' }),
      ) as unknown as (typeof import('node:fs/promises'))['readFile'],
    }) satisfies Partial<typeof import('node:fs/promises')>,
);

const findUp = vi.hoisted(() => vi.fn());
vi.mock(
  'find-up-simple',
  () =>
    ({
      findUp,
    }) satisfies Partial<typeof import('find-up-simple')>,
);

describe('fn:getPackage', () => {
  it('resolve the content in package.json', async () => {
    vi.mocked(findUp).mockResolvedValueOnce('/project/package.json');

    expect(await getPackage()).toEqual({
      path: '/project/package.json',
      json: {
        name: 'name',
      },
    });
  });

  it('throw an error when no package.json is found', async () => {
    vi.mocked(findUp).mockResolvedValueOnce(undefined);

    await expect(getPackage()).rejects.toThrow();
  });
});
