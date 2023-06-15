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

import { jest } from '@jest/globals';

jest.unstable_mockModule('read-pkg-up', () => ({
  readPackageUp: jest.fn(),
}));

const { readPackageUp } = await import('read-pkg-up');

const { getPackage } = await import('#package');
describe('fn:getPackage', () => {
  beforeEach(() => jest.resetModules());

  it('resolve the content in package.json', async () => {
    jest.mocked(readPackageUp).mockResolvedValueOnce({
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
    jest.mocked(readPackageUp).mockResolvedValueOnce(undefined);

    await expect(getPackage()).rejects.toThrow();
  });
});
