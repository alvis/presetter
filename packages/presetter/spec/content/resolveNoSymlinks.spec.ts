import { describe, expect, it } from 'vitest';

import { resolveNoSymlinks } from '#content';

describe('fn:resolveNoSymlinks', () => {
  it('compute the final no symlinks list', async () => {
    expect(
      await resolveNoSymlinks({
        graph: [
          {
            name: 'preset1',
            asset: {
              noSymlinks: ['file1', 'file2'],
            },
            nodes: [],
          },
          {
            name: 'preset2',
            asset: {
              noSymlinks: ['file1', 'file3'],
            },
            nodes: [
              {
                name: 'preset3',
                asset: {
                  noSymlinks: ['file4'],
                },
                nodes: [],
              },
            ],
          },
        ],
        context: {
          target: {
            name: 'client',
            root: '/project',
            package: {},
          },
          custom: {
            preset: 'preset',
            variable: {},
          },
        },
      }),
    ).toEqual(['file1', 'file2', 'file4', 'file3']);
  });
});
