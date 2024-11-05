import { mkdirSync, symlinkSync, unlinkSync } from 'node:fs';
import { posix, relative, resolve, sep } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { linkFiles } from '#io';

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
        case 'project/old/link/rewritten/by/user':
        case 'relative/path/to/config':
          return { isSymbolicLink: () => false };
        case 'project/old/link/by/presetter':
          return { isSymbolicLink: () => true };

        default:
          if (throwIfNoEntry) {
            throw new Error();
          }
      }
    },
  ),
  statSync: vi.fn(
    (
      path: string,
      options: { throwIfNoEntry: boolean },
    ): Partial<Stats> | void => {
      const { throwIfNoEntry } = options;

      // ensure that the paths below is compatible with windows
      const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
      switch (posixPath) {
        case 'project/old/link/rewritten/by/user':
          return { nlink: 1 };
        case 'project/old/link/by/presetter':
          return { nlink: 2 };
        default:
          if (throwIfNoEntry) {
            throw new Error();
          }
      }
    },
  ),
  readlinkSync: vi.fn(() => ''),
  mkdirSync: vi.fn(),
  symlinkSync: vi.fn(),
  unlinkSync: vi.fn(),
}));

describe('fn:linkFiles', () => {
  it('link generated files to the project', async () => {
    await linkFiles('/project', {
      'old/link/rewritten/by/user': resolve('/project/relative/path/to/config'),
      'old/link/by/presetter': resolve('/project/relative/path/to/config'),
      'new/link/config.json': resolve('/project/relative/path/to/config'),
    });

    expect(mkdirSync).toHaveBeenCalledTimes(2);
    expect(mkdirSync).toHaveBeenCalledWith(resolve('/project/old/link/by'), {
      recursive: true,
    });
    expect(mkdirSync).toHaveBeenCalledWith(resolve('/project/new/link'), {
      recursive: true,
    });
    expect(unlinkSync).toHaveBeenCalledTimes(1);
    expect(unlinkSync).toHaveBeenCalledWith(
      resolve('/project/old/link/by/presetter'),
    );
    expect(symlinkSync).toHaveBeenCalledTimes(2);
    expect(symlinkSync).toHaveBeenCalledWith(
      '../../../relative/path/to/config'.split(posix.sep).join(sep),
      resolve('/project/old/link/by/presetter'),
    );
    expect(symlinkSync).toHaveBeenCalledWith(
      '../../relative/path/to/config'.split(posix.sep).join(sep),
      resolve('/project/new/link/config.json'),
    );
  });

  it('ignore any configuration that are written on the project root', async () => {
    await linkFiles('/project', {
      'on/project/root': resolve('/project/on/project/root'),
    });
    expect(mkdirSync).toHaveBeenCalledTimes(0);
    expect(symlinkSync).toHaveBeenCalledTimes(0);
  });

  it('replace existing files if force is set', async () => {
    await linkFiles(
      '/',
      {
        'path/to/config.json': resolve('/relative/path/to/config'),
      },
      { force: true },
    );

    expect(mkdirSync).toHaveBeenCalledTimes(1);
    expect(mkdirSync).toHaveBeenCalledWith(resolve('/path/to'), {
      recursive: true,
    });

    expect(unlinkSync).toHaveBeenCalledTimes(1);

    expect(symlinkSync).toHaveBeenCalledTimes(1);
    expect(symlinkSync).toHaveBeenCalledWith(
      '../../relative/path/to/config'.split(posix.sep).join(sep),
      resolve('/path/to/config.json'),
    );
  });
});
