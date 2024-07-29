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

import { describe, expect, it, vi } from 'vitest';

import { reifyDependencies } from '#package';

const { Arborist, reify } = vi.hoisted(() => {
  const reify = vi.fn(async () => ({
    edgesOut: new Map(
      Object.entries({
        package: { name: 'package', spec: '*' },
      }),
    ),
  }));

  const Arborist = vi.fn().mockImplementation(() => ({
    reify,
  }));

  return { Arborist, reify };
});

vi.mock('@npmcli/arborist', () => ({
  Arborist,
}));

describe('fn:reifyDependencies', () => {
  it('use arborist to reify package dependencies', async () => {
    await reifyDependencies({ root: 'root' });

    expect(Arborist).toHaveBeenCalledWith(
      expect.objectContaining({
        path: 'root',
        workspacesEnabled: expect.any(Boolean),
      }),
    );

    expect(reify).toHaveBeenCalledWith({
      add: [],
      rm: [],
      save: false,
      saveType: 'prod',
      update: true,
    });
  });
});
