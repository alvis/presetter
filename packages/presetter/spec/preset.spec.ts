/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on preset handling
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { info } from 'console';
import { symlink, unlink, writeJSON } from 'fs-extra';
import writePackage from 'write-pkg';

import { installPackages } from '#package';
import {
  bootstrapPreset,
  getConfiguration,
  getPreset,
  setupPreset,
  unsetPreset,
} from '#preset';

jest.mock('console', () => ({
  __esModule: true,
  info: jest.fn(),
}));

// file name of the configuration file, null for missing file
let mockPresetterRC: string | null = '.presetterrc';
jest.mock(
  'fs-extra',
  () => ({
    __esModule: true,
    lstat: jest.fn(
      async (path: string): Promise<{}> => {
        switch (path) {
          case 'link-pointed-to-other':
            return {};
          default:
            throw new Error();
        }
      },
    ),
    pathExists: jest.fn(
      async (path: string): Promise<boolean> => {
        switch (path) {
          case mockPresetterRC:
          case 'link-rewritten-by-project':
            return true;
          default:
            return false;
        }
      },
    ),
    readFile: jest.fn(
      async (path: string): Promise<Buffer> => {
        const filename = jest.requireActual('path').basename(path);
        switch (filename) {
          case mockPresetterRC:
            return Buffer.from(JSON.stringify({ preset: 'preset' }));
          default:
            throw new Error();
        }
      },
    ),
    readlink: jest.fn(
      async (path: string): Promise<string> => {
        switch (path) {
          case 'link-pointed-to-preset':
            return 'path-to-preset';
          case 'link-pointed-to-other':
            return 'path-to-other';
          default:
            throw new Error();
        }
      },
    ),
    symlink: jest.fn(),
    unlink: jest.fn(),
    writeJSON: jest.fn(),
  }),
  { virtual: true },
);

jest.mock('path', () => ({
  __esModule: true,
  ...jest.requireActual<object>('path'),
  resolve: jest.fn((_, path: string): string => path),
}));

jest.mock(
  'preset',
  () => ({
    __esModule: true,
    default: async () => ({
      links: {
        'link-pointed-to-preset': 'path-to-preset',
        'link-pointed-to-other': 'path-to-preset',
        'link-rewritten-by-project': 'path-to-preset',
      },
      scripts: { task: 'command' },
    }),
  }),
  { virtual: true },
);

jest.mock('resolve-pkg', () => ({
  __esModule: true,
  default: (name: string): string => name,
}));

jest.mock('write-pkg', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('#package', () => ({
  __esModule: true,
  getPackage: jest.fn(async (root) => {
    switch (root) {
      case 'preset':
        return {
          json: {
            peerDependencies: {
              package: 'version',
            },
          },
        };
      default:
        return {
          path: './package.json',
          json: {
            name: 'client',
            scripts: {
              test: 'test',
            },
            dependencies: {},
          },
        };
    }
  }),
  installPackages: jest.fn(async ({ packages }: { packages: string[] }) =>
    packages.map((name) => ({ name })),
  ),
}));

describe('fn:unsetPreset', () => {
  beforeAll(unsetPreset);

  it('clean up any artifacts installed on the project root', async () => {
    expect(info).toHaveBeenCalledTimes(2);
    expect(info).toHaveBeenCalledWith('removing link-pointed-to-preset');
    expect(info).toHaveBeenCalledWith('skipping link-rewritten-by-project');
    expect(unlink).toHaveBeenCalledTimes(1);
    expect(unlink).toHaveBeenCalledWith('link-pointed-to-preset');
  });
});

describe('fn:setupPreset', () => {
  beforeAll(() => setupPreset('preset'));

  it('install presetter and the preset', async () => {
    expect(installPackages).toBeCalledWith({
      packages: ['presetter', 'preset'],
      save: 'development',
      lock: true,
    });
  });

  it('write to .presetter', async () => {
    expect(writeJSON).toBeCalledWith(
      '.presetterrc',
      {
        preset: 'preset',
      },
      { spaces: 2 },
    );
  });

  it('bootstrap the preset', async () => {
    expect(installPackages).toHaveBeenCalledWith({
      packages: ['package@version'],
    });
  });

  it('write to package.json', async () => {
    expect(writePackage).toBeCalledWith('.', {
      name: 'client',
      scripts: {
        prepublish: 'presetter bootstrap',
        test: 'test',
      },
      dependencies: {},
    });
  });
});

describe('fn:getConfiguration', () => {
  afterEach(() => (mockPresetterRC = '.presetterrc'));

  it('look for an alternative file extension', async () => {
    mockPresetterRC = '.presetterrc.json';
    expect(await getConfiguration('.')).toEqual({ preset: 'preset' });
  });

  it('throw an error when no configuration file is found', async () => {
    mockPresetterRC = null;
    await expect(getConfiguration('.')).rejects.toThrow();
  });
});

describe('fn:getPreset', () => {
  it('resolve package configuration', async () => {
    expect(await getPreset()).toEqual({
      name: 'preset',
      links: {
        'link-pointed-to-preset': 'path-to-preset',
        'link-pointed-to-other': 'path-to-preset',
        'link-rewritten-by-project': 'path-to-preset',
      },
      scripts: { task: 'command' },
    });
  });
});

describe('fn:bootstrapPreset', () => {
  beforeAll(jest.clearAllMocks);
  beforeAll(bootstrapPreset);

  it('link up artifacts provided by the preset', async () => {
    expect(symlink).toHaveBeenCalledTimes(1);
    expect(symlink).toHaveBeenCalledWith(
      'path-to-preset',
      'link-pointed-to-preset',
    );
  });

  it('install packages specified by the preset', async () => {
    expect(installPackages).toHaveBeenCalledWith({
      packages: ['package@version'],
    });
  });
});
