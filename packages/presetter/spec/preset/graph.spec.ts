/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on preset graph generation
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { describe, expect, it } from 'vitest';

import { createDummyContext, mockModuleResolution } from './mock';

mockModuleResolution();

const dummyContext = createDummyContext();

const { getPresetAsset, getPresetGraph } = await import('#preset/graph');

describe('fn:getPresetAsset', () => {
  it('return the preset asset', async () => {
    expect(
      await getPresetAsset('virtual:no-symlink-preset', dummyContext),
    ).toEqual({
      template: {
        'path/to/file': '/path/to/template',
      },
      scripts: '/path/to/no-symlink-preset/scripts.yaml',
    });
  });
});

describe('fn:getPresetGraph', () => {
  it('compute the preset graph', async () => {
    expect(await getPresetGraph(dummyContext)).toEqual([
      {
        name: 'virtual:no-symlink-preset',
        asset: {
          template: {
            'path/to/file': '/path/to/template',
          },
          scripts: '/path/to/no-symlink-preset/scripts.yaml',
        },
        nodes: [],
      },
      {
        name: 'virtual:symlink-only-preset',
        asset: {
          template: {
            'link/pointed/to/preset': '/path/to/template',
            'link/pointed/to/other': '/path/to/template',
            'link/rewritten/by/project': '/path/to/template',
          },
          scripts: '/path/to/symlink-only-preset/scripts.yaml',
        },
        nodes: [],
      },
    ]);
  });

  it('add and merge extended presets', async () => {
    const graph = await getPresetGraph(
      createDummyContext({ preset: 'virtual:extension-preset' }),
    );

    expect(graph.length).toEqual(1);
    expect(graph).toMatchObject([
      {
        name: 'virtual:extension-preset',
        asset: {
          extends: ['virtual:no-symlink-preset', 'virtual:symlink-only-preset'],
        },
        nodes: [
          {
            name: 'virtual:no-symlink-preset',
            asset: {
              template: {
                'path/to/file': '/path/to/template',
              },
              scripts: '/path/to/no-symlink-preset/scripts.yaml',
            },
            nodes: [],
          },
          {
            name: 'virtual:symlink-only-preset',
            asset: {
              template: {
                'link/pointed/to/preset': '/path/to/template',
                'link/pointed/to/other': '/path/to/template',
                'link/rewritten/by/project': '/path/to/template',
              },
              scripts: '/path/to/symlink-only-preset/scripts.yaml',
            },
            nodes: [],
          },
        ],
      },
    ]);
  });

  it('warn about any missing presets', async () => {
    await expect(async () =>
      getPresetGraph({
        target: {
          name: 'client',
          root: '/missing-preset',
          package: {},
        },
        custom: { preset: 'virtual:missing-preset' },
      }),
    ).rejects.toThrow();
  });
});
