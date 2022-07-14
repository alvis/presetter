/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on configuration helpers
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import {
  resolveContext,
  resolveNoSymlinks,
  resolveVariable,
  resolveScripts,
  resolveSupplementaryConfig,
  resolveSupplementaryScripts,
  resolveTemplate,
} from '#content';

import type { PresetGraph, ResolvedPresetContext } from '#types';

jest.mock('#resolution', () => {
  const getFileContext = (path) => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('path');
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
      case 'path/to/script.yaml':
        return { task: 'cmd' };
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
    __esModule: true,
    ...jest.requireActual('#resolution'),
    loadDynamic: jest.fn(loadDynamic),
    loadDynamicMap: jest.fn((map, context) =>
      Object.fromEntries(
        Object.entries({ ...map }).map(
          ([relativePath, value]): [string, any] => [
            relativePath,
            loadDynamic(value, context as ResolvedPresetContext),
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
          scripts: '/path/to/script.yaml',
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
          scripts: '/path/to/script.yaml',
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
      scripts: {
        task_from_preset2: 'cmd',
      },
      template: {
        '.config.json': '/path/to/config.yaml',
        '.list': '/path/to/list2',
        'general.file': '/path/to/file2',
      },
    },
    nodes: [],
  },
];

const context: ResolvedPresetContext = {
  target: {
    name: 'client',
    root: '/project',
    package: {},
  },
  custom: { preset: 'preset', config: {}, variable: {}, noSymlinks: [] },
};

describe('fn:resolveContext', () => {
  it('make those required fields available', async () => {
    expect(await resolveContext({ graph: [], context })).toMatchObject({
      custom: { config: {}, noSymlinks: [], variable: {} },
    });
  });

  it('compute the final variables', async () => {
    expect(
      await resolveContext({
        graph: [
          { name: 'preset1', asset: { variable: { var1: 'var1' } }, nodes: [] },
          {
            name: 'preset1',
            asset: { variable: { var1: 'changed', var2: 'var2' } },
            nodes: [],
          },
        ],
        context,
      }),
    ).toMatchObject({
      custom: { variable: { var1: 'changed', var2: 'var2' } },
    });
  });

  it('pass on symlinks', async () => {
    expect(
      await resolveContext({
        graph: [],
        context: {
          ...context,
          custom: { ...context.custom, noSymlinks: ['noSymlink'] },
        },
      }),
    ).toMatchObject({
      custom: { noSymlinks: ['noSymlink'] },
    });
  });

  it('consolidate all symlinks both provided by presets and presetterrc', async () => {
    expect(
      await resolveContext({
        graph: [
          {
            name: 'preset1',
            asset: { noSymlinks: () => ['preset'] },
            nodes: [],
          },
        ],
        context: {
          ...context,
          custom: { ...context.custom, noSymlinks: ['custom'] },
        },
      }),
    ).toMatchObject({
      custom: { noSymlinks: ['preset', 'custom'] },
    });
  });

  it('pass on custom configs', async () => {
    expect(
      await resolveContext({
        graph: [],
        context: {
          ...context,
          custom: { ...context.custom, config: { list: ['line'] } },
        },
      }),
    ).toMatchObject({
      custom: { config: { list: ['line'] } },
    });
  });
});

describe('fn:resolveSupplementaryConfig', () => {
  it('compute the final rules to overwrite those form the presets', async () => {
    expect(
      await resolveSupplementaryConfig({
        graph: [
          {
            name: 'preset1',
            asset: {
              supplementaryConfig: {
                config: { flag: true },
              },
            },
            nodes: [],
          },
          {
            name: 'preset2',
            asset: {
              supplementaryConfig: {
                config: { extra: true },
              },
            },
            nodes: [
              {
                name: 'preset3',
                asset: {
                  supplementaryConfig: {
                    config: { flag: false },
                  },
                },
                nodes: [],
              },
            ],
          },
        ],
        context: {
          ...context,
          custom: {
            ...context.custom,
            config: {
              config: { extra: false },
            },
            variable: {},
          },
        },
      }),
    ).toEqual({ config: { flag: false, extra: false } });
  });
});

describe('fn:resolveSupplementaryScripts', () => {
  it('compute the final scripts to overwrite those form the presets', async () => {
    expect(
      await resolveSupplementaryScripts({
        graph: [
          {
            name: 'preset1',
            asset: {
              supplementaryScripts: {
                task1: 'replaced',
              },
            },
            nodes: [],
          },
          {
            name: 'preset2',
            asset: {
              supplementaryScripts: {
                task1: 'command1',
              },
            },
            nodes: [
              {
                name: 'preset3',
                asset: {
                  supplementaryScripts: {
                    task2: 'command2',
                  },
                },
                nodes: [],
              },
            ],
          },
        ],
        context: {
          ...context,
          custom: {
            ...context.custom,
            scripts: {
              task3: 'command3',
            },
            variable: {},
          },
        },
      }),
    ).toEqual({ task1: 'command1', task2: 'command2', task3: 'command3' });
  });
});

describe('fn:resolveNoSymlinks', () => {
  it('compute the final no symlinks list', async () => {
    expect(
      await resolveNoSymlinks({
        graph: [
          {
            name: 'preset1',
            asset: {
              noSymlinks: ['file1', 'file2'],
            },
            nodes: [],
          },
          {
            name: 'preset2',
            asset: {
              noSymlinks: ['file1', 'file3'],
            },
            nodes: [
              {
                name: 'preset3',
                asset: {
                  noSymlinks: ['file4'],
                },
                nodes: [],
              },
            ],
          },
        ],
        context: {
          ...context,
          custom: { ...context.custom, variable: {}, noSymlinks: undefined },
        },
      }),
    ).toEqual(['file1', 'file2', 'file4', 'file3']);
  });
});

describe('fn:resolveVariable', () => {
  it('compute the final variables', () => {
    expect(
      resolveVariable({
        graph: [
          {
            name: 'preset1',
            asset: {
              variable: {
                a: 'a',
              },
            },
            nodes: [],
          },
          {
            name: 'preset2',
            asset: {
              variable: {
                b: 'b',
              },
            },
            nodes: [
              {
                name: 'preset3',
                asset: {
                  variable: {
                    b: 'other',
                  },
                },
                nodes: [],
              },
            ],
          },
        ],
        config: { ...context.custom, variable: { c: 'c' } },
      }),
    ).toEqual({ a: 'a', b: 'b', c: 'c' });
  });
});

describe('fn:resolveScripts', () => {
  it('combine script templates from presets', async () => {
    const scripts = await resolveScripts({ graph, context });

    expect(scripts).toEqual({ task: 'cmd', task_from_preset2: 'cmd' });
  });
});

describe('fn:resolveTemplate', () => {
  it('give an empty object if no template is given at all', async () => {
    expect(await resolveTemplate({ graph: [], context })).toEqual({});
  });

  it('merge config from all presets', async () => {
    expect(await resolveTemplate({ graph, context })).toEqual({
      '.config.json': { json: true, yaml: true, list: [2, 0] },
      '.list': 'list1\nlist2',
      'general.file': 'file2',
    });
  });

  it('return a customized configuration', async () => {
    expect(
      await resolveTemplate({
        graph,
        context: {
          ...context,
          custom: {
            ...context.custom,
            config: {
              config: { json: false, yaml: false, extra: true, list: [99] },
              list: ['list3'],
            },
          },
        },
      }),
    ).toEqual({
      '.config.json': {
        json: false,
        yaml: false,
        extra: true,
        list: [2, 0, 99],
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
          ...context,
          custom: {
            ...context.custom,
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
