import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

import {
  createDummyContext,
  makeResolveRelative,
  mockModuleResolution,
} from './mock';

makeResolveRelative();
mockModuleResolution();

const { getDestinationMap } = await import('#preset/mapping');

describe('fn:getDestinationMap', () => {
  it('compute the correct output paths', async () => {
    expect(
      await getDestinationMap(
        {
          config: '/path/to/template',
        },
        createDummyContext(),
      ),
    ).toEqual({
      config: resolve('/.presetter/client/config'),
    });
  });

  it('compute the correct output paths', async () => {
    expect(
      await getDestinationMap(
        {
          noSymlink: '/path/to/template',
          symlink: '/path/to/template',
        },
        createDummyContext({ noSymlinks: ['noSymlink'] }),
      ),
    ).toEqual({
      noSymlink: resolve('/project/noSymlink'),
      symlink: resolve('/.presetter/client/symlink'),
    });
  });
});
