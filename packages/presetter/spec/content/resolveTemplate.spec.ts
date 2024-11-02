import { posix, relative, resolve, sep } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { resolveTemplate } from '#content';

import type { PresetGraph } from 'presetter-types';

vi.mock('#resolution', async (importActual) => {
  const getFileContext = (path) => {
    // ensure that the paths below is compatible with windows
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'path/to/config.json':
        return { json: true, list: [0] };
      case 'path/to/config.yaml':
        return { yaml: true };
      case 'path/to/file1':
        return 'file1';
      case 'path/to/file2':
        return 'file2';
      case 'path/to/list1':
        return 'list1';
      case 'path/to/list2':
        return 'list2';
      default:
        throw new Error(`loadFile: missing path ${path}`);
    }
  };

  const loadDynamic = (value, context) => {
    if (typeof value === 'function') {
      return value(context);
    } else if (typeof value === 'string') {
      return getFileContext(value);
    } else {
      return value;
    }
  };

  return {
    ...(await importActual<typeof import('#resolution')>()),
    loadDynamic: vi.fn(loadDynamic),
    loadDynamicMap: vi.fn((map, context) =>
      Object.fromEntries(
        Object.entries({ ...map }).map(
          ([relativePath, value]): [string, any] => [
            relativePath,
            loadDynamic(value, context),
          ],
        ),
      ),
    ),
  };
});

const graph: PresetGraph = [
  {
    name: 'preset1',
    asset: {
      template: {
        '.config.json': '/path/to/config.json',
        '.list': '/path/to/list1',
      },
      supplementaryIgnores: () => ['.ignore'],
    },
    nodes: [
      {
        name: 'preset11',
        asset: {
          template: {
            '.config.json': { list: [1] },
            '.list': '/path/to/list1',
            'general.file': '/path/to/file1',
            '.ignore': '/path/to/file1',
          },
        },
        nodes: [],
      },
      {
        name: 'preset12',
        asset: {
          template: {
            '.config.json': { list: [2] },
            '.list': '/path/to/list1',
          },
        },
        nodes: [],
      },
    ],
  },
  {
    name: 'preset2',
    asset: {
      template: {
        '.config.json': '/path/to/config.yaml',
        '.list': '/path/to/list2',
        'general.file': '/path/to/file2',
      },
    },
    nodes: [],
  },
];

describe('fn:resolveTemplate', () => {
  it('give an empty object if no template is given at all', async () => {
    expect(
      await resolveTemplate({
        graph: [],
        context: {
          target: {
            name: 'client',
            root: '/project',
            package: {},
          },
          custom: {
            preset: 'preset',
            config: {},
            variable: {},
            noSymlinks: [],
          },
        },
      }),
    ).toEqual({});
  });

  it('merge config from all presets', async () => {
    expect(
      await resolveTemplate({
        graph,
        context: {
          target: {
            name: 'client',
            root: '/project',
            package: {},
          },
          custom: {
            preset: 'preset',
            config: {},
            variable: {},
            noSymlinks: [],
          },
        },
      }),
    ).toEqual({
      '.config.json': { json: true, yaml: true, list: [1, 2, 0] },
      '.list': 'list1\nlist2',
      'general.file': 'file2',
    });
  });

  it('return a customized configuration', async () => {
    expect(
      await resolveTemplate({
        graph,
        context: {
          target: {
            name: 'client',
            root: '/project',
            package: {},
          },
          custom: {
            preset: 'preset',
            config: {
              config: { json: false, yaml: false, extra: true, list: [99] },
              list: ['list3'],
            },
            variable: {},
            noSymlinks: [],
          },
        },
      }),
    ).toEqual({
      '.config.json': {
        json: false,
        yaml: false,
        extra: true,
        list: [1, 2, 0, 99],
      },
      '.list': 'list1\nlist2\nlist3',
      'general.file': 'file2',
    });
  });

  it('filter out unwanted items', async () => {
    expect(
      await resolveTemplate({
        graph,
        context: {
          target: {
            name: 'client',
            root: '/project',
            package: {},
          },
          custom: {
            preset: 'preset',
            config: {},
            variable: {},
            noSymlinks: [],
            ignores: ['general.file', { '.config.json': ['list'] }],
          },
        },
      }),
    ).toEqual({
      '.config.json': { json: true, yaml: true },
      '.list': 'list1\nlist2',
    });
  });
});
