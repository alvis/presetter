/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on getPackage
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { describe, expect, it, vi } from 'vitest';

import { readPackageUp } from 'read-pkg-up';

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
