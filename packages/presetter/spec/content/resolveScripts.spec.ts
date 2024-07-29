import { describe, expect, it, vi } from 'vitest';

import { posix, relative, resolve, sep } from 'node:path';

import { resolveScripts } from '#content';

vi.mock('#resolution', async (importActual) => {
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
    ...(await importActual<typeof import('#resolution')>()),
    loadDynamic: vi.fn(loadDynamic),
    loadDynamicMap: vi.fn((map, context) =>
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
