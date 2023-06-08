/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on context resolution
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { jest } from '@jest/globals';

jest.unstable_mockModule('#package', () => ({
  getPackage: jest.fn(async () => ({
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

jest.unstable_mockModule('#preset/presetterRC', () => ({
  getPresetterRC: jest.fn((root: string) => {
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

const { getContext } = await import('#preset/context');
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
