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

import {
  arePeerPackagesAutoInstalled,
  getPackage,
  installPackages,
} from '#package';
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

describe('fn:arePeerPackagesAutoInstalled', () => {
  it('return false for unknown npm agent', () => {
    process.env['npm_config_user_agent'] = undefined;

    expect(arePeerPackagesAutoInstalled()).toEqual(false);
  });

  it('return false for npm before v7', () => {
    process.env['npm_config_user_agent'] = 'npm/6.0.0 node/v15.0.0 darwin x64';

    expect(arePeerPackagesAutoInstalled()).toEqual(false);
  });

  it('return true for npm v7', () => {
    process.env['npm_config_user_agent'] = 'npm/7.0.0 node/v15.0.0 darwin x64';

    expect(arePeerPackagesAutoInstalled()).toEqual(true);
  });

  it('return true for npm v7+', () => {
    process.env['npm_config_user_agent'] = 'npm/10.0.0 node/v15.0.0 darwin x64';

    expect(arePeerPackagesAutoInstalled()).toEqual(true);
  });
});

describe('fn:getPackage', () => {
  it('resolve the content in package.json', async () => {
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

describe('fn:installPackages', () => {
  beforeEach(jest.clearAllMocks);

  it('install packages via npm using default', async () => {
    const packages = await installPackages({
      packages: ['package1@alpha', 'package2@beta'],
    });

    expect(execa).toHaveBeenCalledWith('npm', [
      'install',
      '--no-audit',
      '--legacy-peer-deps',
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
      '--no-audit',
      '--legacy-peer-deps',
      '--no-save',
      'package1@alpha',
      'package2@beta',
    ]);
    expect(packages).toEqual([
      { name: 'package1', version: 'alpha' },
      { name: 'package2', version: 'beta' },
    ]);
  });

  it('does not install anything if none is supplied', async () => {
    await installPackages({ packages: [] });

    expect(execa).not.toHaveBeenCalled();
  });
});
