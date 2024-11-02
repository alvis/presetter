/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on writeFiles
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { posix, relative, resolve, sep } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { writeFiles } from '#io';

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
        case 'path/to/config.yaml':
          return { isSymbolicLink: () => false };
        default:
          if (throwIfNoEntry) {
            throw new Error();
          }
      }
    },
  ),
  mkdirSync: vi.fn(),
  unlinkSync: vi.fn(),
  writeFileSync: vi.fn(),
}));

describe('fn:writeFiles', () => {
  it('write content to the disk if the destination path does not exist', async () => {
    await writeFiles(
      '/path/to',
      { 'new.yaml': { yaml: true } },
      { 'new.yaml': '/path/to/new.yaml' },
    );

    expect(mkdirSync).toBeCalledWith('/path/to', { recursive: true });
    expect(writeFileSync).toBeCalledWith('/path/to/new.yaml', 'yaml: true\n');
  });

  it('write content to the disk for symlinked templates', async () => {
    await writeFiles(
      '/path/to',
      { 'config.yaml': { yaml: true } },
      { 'config.yaml': '/config.yaml' },
    );

    expect(mkdirSync).toBeCalledWith('/', { recursive: true });
    expect(writeFileSync).toBeCalledWith('/config.yaml', 'yaml: true\n');
  });

  it('skip content to the disk if the destination already exist on the project root', async () => {
    await writeFiles(
      '/path/to',
      { 'config.yaml': { yaml: true } },
      { 'config.yaml': resolve('/path/to/config.yaml') },
    );

    expect(mkdirSync).toBeCalledTimes(0);
    expect(writeFileSync).toBeCalledTimes(0);
  });

  it('write content to the disk if force is set', async () => {
    await writeFiles(
      '/path/to',
      { 'config.yaml': { yaml: true } },
      { 'config.yaml': '/path/to/config.yaml' },
      { force: true },
    );

    expect(mkdirSync).toBeCalledWith('/path/to', { recursive: true });
    expect(writeFileSync).toBeCalledWith(
      '/path/to/config.yaml',
      'yaml: true\n',
    );
  });
});
