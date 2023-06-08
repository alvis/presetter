/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on reifyDependencies
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { jest } from '@jest/globals';

const mockArborist = jest.fn();
const mockArboristReify = jest.fn(async () => ({
  edgesOut: new Map(
    Object.entries({
      package: { name: 'package', spec: '*' },
    }),
  ),
}));
jest.unstable_mockModule('@npmcli/arborist', () => ({
  Arborist: jest.fn((args) => {
    mockArborist(args);

    return {
      reify: mockArboristReify,
    };
  }),
}));

const { reifyDependencies } = await import('#package');
describe('fn:reifyDependencies', () => {
  it('use arborist to reify package dependencies', async () => {
    await reifyDependencies({ root: 'root' });

    expect(mockArborist).toHaveBeenCalledWith(
      expect.objectContaining({
        path: 'root',
        workspacesEnabled: expect.any(Boolean),
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
