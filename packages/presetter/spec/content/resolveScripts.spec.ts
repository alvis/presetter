import { posix, relative, resolve, sep } from 'node:path';

import { jest } from '@jest/globals';

import * as resolution from '#resolution';

jest.unstable_mockModule('#resolution', () => {
  const getFileContext = (path) => {
    // ensure that the paths below is compatible with windows
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
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
    ...resolution,
    loadDynamic: jest.fn(loadDynamic),
    loadDynamicMap: jest.fn((map, context) =>
      Object.fromEntries(
        Object.entries({ ...(map as any) }).map(
          ([relativePath, value]): [string, any] => [
            relativePath,
            loadDynamic(value, context),
          ],
        ),
      ),
    ),
  };
});

const { resolveScripts } = await import('#content');
describe('fn:resolveScripts', () => {
  it('combine script templates from presets', async () => {
    const scripts = await resolveScripts({
      graph: [
        {
          name: 'preset1',
          asset: {},
          nodes: [
            {
              name: 'preset11',
              asset: {
                scripts: '/path/to/script.yaml',
              },
              nodes: [],
            },
            {
              name: 'preset12',
              asset: {
                scripts: '/path/to/script.yaml',
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
          },
          nodes: [],
        },
      ],
      context: {
        target: {
          name: 'client',
          root: '/project',
          package: {},
        },
        custom: { preset: 'preset', config: {}, variable: {}, noSymlinks: [] },
      },
    });

    expect(scripts).toEqual({ task: 'cmd', task_from_preset2: 'cmd' });
  });
});
