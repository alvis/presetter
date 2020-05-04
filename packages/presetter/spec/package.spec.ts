/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on preset handling
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { installPackages, getPackage } from '#package';
import execa from 'execa';

jest.mock('console', () => ({
  __esModule: true,
  info: jest.fn(),
}));

jest.mock('execa', () => ({
  __esModule: true,
  default: jest.fn(() => ({ stdout: '+ package1@alpha\n+ package2@beta' })),
}));

jest.mock('read-pkg-up', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockResolvedValueOnce({
      path: 'path',
      packageJson: {
        name: 'name',
      },
    })
    .mockResolvedValueOnce(undefined),
}));

describe('fn:installPackages', () => {
  beforeEach(jest.clearAllMocks);

  it('install packages via npm using default', async () => {
    const packages = await installPackages({
      packages: ['package1@alpha', 'package2@beta'],
    });

    expect(execa).toHaveBeenCalledWith('npm', [
      'install',
      '--no-save',
      '--no-package-lock',
      'package1@alpha',
      'package2@beta',
    ]);
    expect(packages).toEqual([
      { name: 'package1', version: 'alpha' },
      { name: 'package2', version: 'beta' },
    ]);
  });

  it('install packages via npm with package lock', async () => {
    const packages = await installPackages({
      packages: ['package1@alpha', 'package2@beta'],
      lock: true,
    });

    expect(execa).toHaveBeenCalledWith('npm', [
      'install',
      '--no-save',
      'package1@alpha',
      'package2@beta',
    ]);
    expect(packages).toEqual([
      { name: 'package1', version: 'alpha' },
      { name: 'package2', version: 'beta' },
    ]);
  });

  it('not install packages if none is supplied', async () => {
    await installPackages({ packages: [] });

    expect(execa).not.toHaveBeenCalled();
  });
});

describe('fn:getPackage', () => {
  it('resolve configuration', async () => {
    expect(await getPackage()).toEqual({
      path: 'path',
      json: {
        name: 'name',
        scripts: {},
      },
    });
  });

  it('throw an error when no package.json is found', async () => {
    await expect(getPackage()).rejects.toThrow();
  });
});
