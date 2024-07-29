import { describe, expect, it } from 'vitest';

import { resolveContext } from '#content';

describe('fn:resolveContext', () => {
  it('make those required fields available', async () => {
    expect(
      await resolveContext({
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
    ).toMatchObject({
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
    ).toMatchObject({
      custom: { variable: { var1: 'changed', var2: 'var2' } },
    });
  });

  it('pass on symlinks', async () => {
    expect(
      await resolveContext({
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
            noSymlinks: ['noSymlink'],
          },
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
          target: {
            name: 'client',
            root: '/project',
            package: {},
          },
          custom: {
            preset: 'preset',
            config: {},
            variable: {},
            noSymlinks: ['custom'],
          },
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
          target: {
            name: 'client',
            root: '/project',
            package: {},
          },
          custom: {
            preset: 'preset',
            config: { list: ['line'] },
            variable: {},
            noSymlinks: [],
          },
        },
      }),
    ).toMatchObject({
      custom: { config: { list: ['line'] } },
    });
  });
});
