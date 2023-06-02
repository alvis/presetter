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
  reifyDependencies,
} from '#package';

jest.mock('node:console', () => ({
  __esModule: true,
  info: jest.fn(),
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

const mockArborist = jest.fn();
const mockArboristReify = jest.fn(async () => ({
  edgesOut: new Map(
    Object.entries({
      package: { name: 'package', spec: '*' },
    }),
  ),
}));
jest.mock('@npmcli/arborist', () => ({
  __esModule: true,
  Arborist: jest.fn().mockImplementation((args) => {
    mockArborist(args);

    return {
      reify: mockArboristReify,
    };
  }),
}));

describe('fn:arePeerPackagesAutoInstalled', () => {
  it('return false for unknown npm agent', () => {
    process.env['npm_config_user_agent'] = 'pnpm/1.0.0 node/v15.0.0 darwin x64';

    expect(arePeerPackagesAutoInstalled()).toEqual(true);
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
      },
    });
  });

  it('throw an error when no package.json is found', async () => {
    await expect(getPackage()).rejects.toThrow();
  });
});

describe('fn:reifyDependencies', () => {
  it('use arborist to reify package dependencies', async () => {
    await reifyDependencies({ root: 'root' });

    expect(mockArborist).toHaveBeenCalledWith(
      expect.objectContaining({
        path: 'root',
        workspacesEnabled: arePeerPackagesAutoInstalled(),
      }),
    );
    expect(mockArboristReify).toHaveBeenCalledWith({
      add: [],
      rm: [],
      save: false,
      saveType: 'prod',
      update: true,
    });
  });
});
