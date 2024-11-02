import { dirname, posix, relative, resolve, sep } from 'node:path';

import { vi } from 'vitest';

import type * as pathNode from 'node:path';

import type { PresetContext, ResolvedPresetContext } from 'presetter-types';

/**
 *
 */
export function makeResolveRelative() {
  vi.doMock('node:path', async (importActual) => {
    const actual = await importActual<typeof pathNode>();

    return {
      ...actual,
      resolve: vi.fn((...pathSegments: string[]): string => {
        const relativePath = actual.relative(
          resolve(dirname(import.meta.url), '..'),
          resolve(...pathSegments),
        );

        return actual.resolve('/', relativePath);
      }),
    };
  });
}

/**
 *
 * @param file
 */
export function mockIO(file?: Record<string, unknown>) {
  vi.doMock('node:fs', () => ({
    existsSync: vi.fn((path: string): boolean => {
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
    writeFileSync: vi.fn(),
  }));

  vi.doMock('#io', () => ({
    linkFiles: vi.fn(),
    loadFile: vi.fn((path: string) => {
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
            preset: [
              'virtual:no-symlink-preset',
              'virtual:symlink-only-preset',
            ],
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
    unlinkFiles: vi.fn(),
    writeFiles: vi.fn(),
  }));
}

/**
 *
 */
export function mockModuleResolution() {
  vi.doMock('resolve-pkg', () => ({
    default: (name: string): string => name,
  }));

  vi.doMock('virtual:extension-preset', () => ({
    default: async () => ({
      extends: ['virtual:no-symlink-preset', 'virtual:symlink-only-preset'],
      supplementaryIgnores: () => [
        'link/pointed/to/preset',
        'link/pointed/to/other',
        'link/rewritten/by/project',
      ],
    }),
  }));

  vi.doMock('virtual:no-symlink-preset', () => ({
    default: async () => ({
      template: {
        'path/to/file': '/path/to/template',
      },
      scripts: '/path/to/no-symlink-preset/scripts.yaml',
    }),
  }));

  vi.doMock('virtual:symlink-only-preset', () => ({
    default: async () => ({
      template: {
        'link/pointed/to/preset': '/path/to/template',
        'link/pointed/to/other': '/path/to/template',
        'link/rewritten/by/project': '/path/to/template',
      },
      scripts: '/path/to/symlink-only-preset/scripts.yaml',
    }),
  }));
}

/**
 *
 * @param custom
 */
export function mockContext(custom?: PresetContext['custom']) {
  vi.doMock('#preset/context', () => ({
    getContext: vi.fn(async () => ({
      ...defaultDummyContext,
      custom: {
        ...defaultDummyContext.custom,
        ...custom,
      },
    })),
  }));
}

/**
 *
 * @param custom
 */
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
    preset: ['virtual:no-symlink-preset', 'virtual:symlink-only-preset'],
    config: {},
    noSymlinks: ['path/to/file'],
    variable: {},
  },
};
