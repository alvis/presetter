/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on loadDynamic
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { describe, expect, it, vi } from 'vitest';

import { posix, relative, resolve, sep } from 'node:path';

import { loadDynamic } from '#resolution';

import type { ResolvedPresetContext } from 'presetter-types';

vi.mock('node:fs', () => ({
  existsSync: vi.fn((path: string): boolean => {
    // ensure that the paths below is compatible with windows
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'path/to/config.json':
        return true;
      default:
        return false;
    }
  }),
}));

vi.mock('#io', () => ({
  loadFile: vi.fn(async (path: string) => {
    // ensure that the paths below is compatible with windows
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);

    switch (posixPath) {
      case 'path/to/config.json':
        return { json: true };
      default:
        throw new Error(`readFile: missing ${path}`);
    }
  }),
}));

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
