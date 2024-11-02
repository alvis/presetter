/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on io unlinkFiles
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { info } from 'node:console';
import { unlinkSync } from 'node:fs';
import { posix, relative, resolve, sep } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { unlinkFiles } from '#io';

import type { Stats } from 'node:fs';

vi.mock('node:console', () => ({
  info: vi.fn(),
}));

vi.mock('node:fs', async (importActual) => ({
  ...(await importActual<typeof import('node:fs')>()),
  lstatSync: vi.fn(
    (
      path: string,
      options: { throwIfNoEntry: boolean },
    ): Partial<Stats> | void => {
      const { throwIfNoEntry } = options;

      // ensure that the paths below is compatible with windows
      const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
      switch (posixPath) {
        case 'path/to/config.json':
        case 'path/to/config.yaml':
        case 'path/to/list1':
        case 'path/to/list2':
        case 'project/old/symlink/rewritten/by/user':
          return { isSymbolicLink: () => false };
        case 'project/old/symlink/by/presetter':
        case 'project/old/symlink/pointed/to/other':
          return { isSymbolicLink: () => true };
        default:
          if (throwIfNoEntry) {
            throw new Error();
          }
      }
    },
  ),
  readlinkSync: vi.fn((path: string): string => {
    // ensure that the paths below is compatible with windows
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'project/old/symlink/by/presetter':
        return 'relative/path/to/config'.split(posix.sep).join(sep);
      case 'project/old/symlink/pointed/to/other':
        return 'other/path'.split(posix.sep).join(sep);
      default:
        throw new Error();
    }
  }),
  unlinkSync: vi.fn(),
}));

describe('fn:unlinkFiles', () => {
  it('clean up any artifacts installed on the project root', async () => {
    await unlinkFiles('/project', {
      'old/symlink/by/presetter': resolve('/project/relative/path/to/config'),
      'old/symlink/pointed/to/other': resolve(
        '/project/relative/path/to/config',
      ),
      'old/symlink/rewritten/by/user': resolve(
        '/project/relative/path/to/config',
      ),
    });

    expect(info).toHaveBeenCalledTimes(3);
    expect(info).toHaveBeenCalledWith('Removing old/symlink/by/presetter');
    expect(info).toHaveBeenCalledWith('Skipping old/symlink/pointed/to/other');
    expect(info).toHaveBeenCalledWith('Skipping old/symlink/rewritten/by/user');
    expect(unlinkSync).toHaveBeenCalledTimes(1);
    expect(unlinkSync).toHaveBeenCalledWith(
      resolve('/project/old/symlink/by/presetter'),
    );
  });

  it('ignore any configuration that are written on the project root', async () => {
    await unlinkFiles('/project', {
      'on/project/root': resolve('/project/on/project/root'),
    });
    expect(info).toHaveBeenCalledTimes(1);
    expect(info).toHaveBeenCalledWith('Skipping on/project/root');
    expect(unlinkSync).toHaveBeenCalledTimes(0);
  });
});
