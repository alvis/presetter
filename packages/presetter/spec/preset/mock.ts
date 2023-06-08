import * as pathNode from 'node:path';
import { dirname, posix, relative, resolve, sep } from 'node:path';

import { jest } from '@jest/globals';

import type { PresetContext, ResolvedPresetContext } from 'presetter-types';

export function makeResolveRelative() {
  jest.unstable_mockModule('node:path', () => ({
    ...pathNode,
    resolve: jest.fn((...pathSegments: string[]): string => {
      const { relative, resolve } = jest.requireActual<any>('path');
      const relativePath = relative(
        resolve(dirname(import.meta.url), '..'),
        resolve(...pathSegments),
      );

      return resolve('/', relativePath);
    }),
  }));
}

export function mockIO(file?: Record<string, unknown>) {
  jest.unstable_mockModule('node:fs', () => ({
    existsSync: jest.fn((path: string): boolean => {
      // ensure that the paths below is compatible with windows
      const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);

      switch (posixPath) {
        case 'path/to/template':
        case 'path/to/no-symlink-preset/scripts.yaml':
        case 'path/to/symlink-only-preset/scripts.yaml':
        case `project/.presetterrc`:
          return true;
        default:
          return Object.keys({ ...file }).includes(posixPath);
      }
    }),
    writeFileSync: jest.fn(),
  }));

  jest.unstable_mockModule('#io', () => ({
    linkFiles: jest.fn(),
    loadFile: jest.fn((path: string) => {
      // ensure that the paths below is compatible with windows
      const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
      switch (posixPath) {
        case 'path/to/template':
          return { template: true };
        case 'path/to/no-symlink-preset/scripts.yaml':
          return { task: 'command_from_file' };
        case 'path/to/symlink-only-preset/scripts.yaml':
          return { task: 'command_from_symlink' };
        case `project/.presetterrc`:
          return {
            preset: ['no-symlink-preset', 'symlink-only-preset'],
            noSymlinks: ['path/to/file'],
          };
        default:
          if (Object.keys({ ...file }).includes(posixPath)) {
            return file![posixPath];
          } else {
            throw new Error(`loadFile: missing ${path}`);
          }
      }
    }),
    unlinkFiles: jest.fn(),
    writeFiles: jest.fn(),
  }));
}

export function mockModuleResolution() {
  jest.unstable_mockModule('resolve-pkg', () => ({
    default: (name: string): string => name,
  }));

  // NOTE: virtual ESM mocking works only when the modules are also mocked as CJS
  jest.mock(
    'extension-preset',
    () => ({
      __esModule: true,
      default: async () => ({}),
    }),
    { virtual: true },
  );

  jest.mock(
    'no-symlink-preset',
    () => ({
      __esModule: true,
      default: async () => ({}),
    }),
    { virtual: true },
  );

  jest.mock(
    'symlink-only-preset',
    () => ({
      __esModule: true,
      default: async () => ({}),
    }),
    { virtual: true },
  );

  jest.unstable_mockModule(
    'extension-preset',
    () => ({
      default: async () => ({
        extends: ['no-symlink-preset', 'symlink-only-preset'],
        supplementaryIgnores: () => [
          'link/pointed/to/preset',
          'link/pointed/to/other',
          'link/rewritten/by/project',
        ],
      }),
    }),
    { virtual: true },
  );

  jest.unstable_mockModule(
    'no-symlink-preset',
    () => ({
      default: async () => ({
        template: {
          'path/to/file': '/path/to/template',
        },
        scripts: '/path/to/no-symlink-preset/scripts.yaml',
      }),
    }),
    { virtual: true },
  );

  jest.unstable_mockModule(
    'symlink-only-preset',
    () => ({
      default: async () => ({
        template: {
          'link/pointed/to/preset': '/path/to/template',
          'link/pointed/to/other': '/path/to/template',
          'link/rewritten/by/project': '/path/to/template',
        },
        scripts: '/path/to/symlink-only-preset/scripts.yaml',
      }),
    }),
    { virtual: true },
  );
}

export function mockContext(custom?: PresetContext['custom']) {
  jest.unstable_mockModule('#preset/context', () => ({
    getContext: jest.fn(async () => ({
      ...defaultDummyContext,
      custom: {
        ...defaultDummyContext.custom,
        ...custom,
      },
    })),
  }));
}

export function createDummyContext(custom?: Partial<PresetContext['custom']>) {
  return {
    ...defaultDummyContext,
    custom: {
      ...defaultDummyContext.custom,
      ...custom,
    },
  };
}

export const defaultDummyContext: ResolvedPresetContext = {
  target: {
    name: 'client',
    root: '/project',
    package: {
      name: 'client',
      scripts: {
        test: 'test',
      },
      dependencies: {},
    },
  },
  custom: {
    preset: ['no-symlink-preset', 'symlink-only-preset'],
    config: {},
    noSymlinks: ['path/to/file'],
    variable: {},
  },
};
