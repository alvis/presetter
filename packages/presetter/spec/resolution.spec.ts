/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on content resolver
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { getConfigKey, loadDynamic, loadDynamicMap } from '#resolution';

import type { ResolvedPresetContext } from 'presetter-types';

jest.mock('node:fs', () => ({
  __esModule: true,
  existsSync: jest.fn((path: string): boolean => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('node:path');
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'path/to/config.json':
        return true;
      default:
        return false;
    }
  }),
}));

jest.mock('#io', () => ({
  __esModule: true,
  loadFile: jest.fn(async (path: string) => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('node:path');
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'path/to/config.json':
        return { json: true };
      default:
        throw new Error(`readFile: missing ${path}`);
    }
  }),
}));

describe('fn:getConfigKey', () => {
  it('get config keys based on the filename', () => {
    expect(getConfigKey('.tsconfig.json')).toEqual('tsconfig');
    expect(getConfigKey('.npmignore')).toEqual('npmignore');
    expect(getConfigKey('rollup.config.ts')).toEqual('rollup');
  });
});

describe('fn:loadDynamicMap', () => {
  const context: ResolvedPresetContext = {
    target: { name: 'name', root: 'root', package: {} },
    custom: {
      preset: 'preset',
      config: {},
      noSymlinks: [],
      variable: { key: 'value' },
    },
  };

  it('pass on map if no generator is supplied', async () => {
    expect(
      await loadDynamicMap({ template: { form: 'literal' } }, context),
    ).toMatchObject({ template: { form: 'literal' } });
  });

  it('compute a field via a generator', async () => {
    expect(
      await loadDynamicMap(
        { template: () => ({ form: 'field generator' }) },
        context,
      ),
    ).toMatchObject({ template: { form: 'field generator' } });
  });

  it('compute map via generators', async () => {
    expect(
      await loadDynamicMap(
        () => ({
          template: () => ({ form: 'map generator' }),
        }),
        context,
      ),
    ).toMatchObject({ template: { form: 'map generator' } });
  });
});

describe('fn:loadDynamic', () => {
  const context: ResolvedPresetContext<'variable'> = {
    target: { name: 'name', root: 'root', package: {} },
    custom: { preset: 'preset', variable: { key: 'value' } },
  };

  it('load the content from a dynamic generator', async () => {
    expect(
      await loadDynamic(
        (args: ResolvedPresetContext<'variable'>) => ({
          key: args.custom.variable.key,
        }),
        context,
      ),
    ).toEqual({
      key: 'value',
    });
  });

  it('load the content from a file if it is a valid path', async () => {
    expect(await loadDynamic('/path/to/config.json', context)).toEqual({
      json: true,
    });
  });

  it('return any non-generator content directly', async () => {
    expect(await loadDynamic('text', context)).toEqual('text');
    expect(await loadDynamic({ a: 0 }, context)).toEqual({ a: 0 });
  });
});
