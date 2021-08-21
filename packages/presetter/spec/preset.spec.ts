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

import { reifyDependencies } from '#package';
import {
  bootstrapPreset,
  getConfiguration,
  getPresetAsset,
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
    lstat: jest.fn(async (path: string): Promise<{}> => {
      switch (path) {
        case 'link-pointed-to-other':
          return {};
        default:
          throw new Error();
      }
    }),
    pathExists: jest.fn(async (path: string): Promise<boolean> => {
      switch (path) {
        case mockPresetterRC:
        case 'link-rewritten-by-project':
          return true;
        default:
          return false;
      }
    }),
    readFile: jest.fn(async (path: string): Promise<Buffer> => {
      const filename = jest.requireActual('path').basename(path);
      switch (filename) {
        case mockPresetterRC:
          return Buffer.from(JSON.stringify({ preset: 'preset' }));
        default:
          throw new Error();
      }
    }),
    readlink: jest.fn(async (path: string): Promise<string> => {
      switch (path) {
        case 'link-pointed-to-preset':
          return 'path-to-preset';
        case 'link-pointed-to-other':
          return 'path-to-other';
        default:
          throw new Error();
      }
    }),
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

let mockArePeerPackagesAutoInstalled = false;
jest.mock('#package', () => ({
  __esModule: true,
  arePeerPackagesAutoInstalled: () => mockArePeerPackagesAutoInstalled,
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
  reifyDependencies: jest.fn(
    async ({ add }: Parameters<typeof reifyDependencies>[0]) =>
      add?.map((name) => ({ name, version: '*' })),
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
  beforeAll(() => {
    jest.clearAllMocks();
    setupPreset('preset');
  });

  it('install presetter and the preset', async () => {
    expect(reifyDependencies).toBeCalledWith({
      add: ['presetter', 'preset'],
      root: process.cwd(),
      saveAs: 'dev',
      lockFile: true,
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

  it('install the peer dependencies provided by the preset', async () => {
    expect(reifyDependencies).toHaveBeenCalledTimes(1);
  });

  it('merge the bootstrapping script to package.json', async () => {
    expect(writePackage).toBeCalledWith('.', {
      name: 'client',
      scripts: {
        prepare: 'presetter bootstrap',
        test: 'test',
      },
      dependencies: {},
    });
  });
});

describe('fn:getConfiguration', () => {
  afterEach(() => (mockPresetterRC = '.presetterrc'));

  it('accept an alternative file extension', async () => {
    mockPresetterRC = '.presetterrc.json';
    expect(await getConfiguration('.')).toEqual({ preset: 'preset' });
  });

  it('use the default preset when no configuration file is found', async () => {
    mockPresetterRC = null;
    expect(await getConfiguration('.')).toEqual({ preset: 'presetter-preset' });
  });
});

describe('fn:getPreset', () => {
  it('compute the preset configuration', async () => {
    expect(await getPresetAsset()).toEqual({
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
  describe('peer packages auto installed disabled', () => {
    beforeAll(async () => {
      jest.clearAllMocks();

      mockArePeerPackagesAutoInstalled = false;
      await bootstrapPreset();
    });

    it('link up artifacts provided by the preset', async () => {
      expect(symlink).toHaveBeenCalledTimes(1);
      expect(symlink).toHaveBeenCalledWith(
        'path-to-preset',
        'link-pointed-to-preset',
      );
    });

    it('install packages specified by the preset', async () => {
      expect(reifyDependencies).toHaveBeenCalledTimes(1);
    });
  });

  describe('peer packages auto installed enabled', () => {
    beforeEach(() => {
      jest.clearAllMocks();

      mockArePeerPackagesAutoInstalled = true;
    });

    afterAll(() => {
      mockArePeerPackagesAutoInstalled = false;
    });

    it('install packages regardless', async () => {
      await bootstrapPreset({ force: true });

      expect(reifyDependencies).toHaveBeenCalledTimes(1);
    });

    it('skip installing peer packages manually if it is supported by package manager', async () => {
      mockArePeerPackagesAutoInstalled = true;
      await bootstrapPreset();

      expect(reifyDependencies).not.toHaveBeenCalled();
    });
  });
});
