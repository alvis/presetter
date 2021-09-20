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
  customise,
  generateContent,
  getConfigKey,
  getVariable,
} from '#content';

import type { PresetContext } from '#types';

jest.mock('#io', () => ({
  __esModule: true,
  loadFile: jest.fn(async (path) => {
    // ensure that the paths below is compatible with windows
    const { posix, relative, resolve, sep } = jest.requireActual('path');
    const posixPath = relative(resolve('/'), path).split(sep).join(posix.sep);
    switch (posixPath) {
      case 'path/to/config.json':
        return { json: true };
      case 'path/to/config.yaml':
        return { yaml: true };
      case 'path/to/list1':
        return 'list1';
      case 'path/to/list2':
        return 'list2';
      default:
        throw new Error(`loadFile: missing path ${path}`);
    }
  }),
}));

const defaultContext: PresetContext = {
  target: {
    name: 'client',
    root: '/project',
    package: {},
  },
  custom: { preset: 'preset' },
};

describe('fn:customise', () => {
  it('return the template if the supplied customisation is missing', () => {
    expect(customise('line')).toEqual('line');
  });

  it('add extra lines into a list', () => {
    expect(customise('line1', ['line2', 'line3'])).toEqual(
      'line1\nline2\nline3',
    );
  });

  it('merge the template config with custom config', () => {
    expect(
      customise(
        { merged: { a: 1 }, replaced: true },
        { merged: { b: 2 }, replaced: false },
      ),
    ).toEqual({
      merged: { a: 1, b: 2 },
      replaced: false,
    });
  });

  it('just return the template if the supplied customisation is in the wrong format', () => {
    expect(customise('line', { incorrect: true })).toEqual('line');
    expect(customise({ object: true }, ['not a list'])).toEqual({
      object: true,
    });
  });
});

describe('fn:generateContent', () => {
  it('give an empty object if no template is given at all', async () => {
    expect(await generateContent([], defaultContext)).toEqual({});
  });

  it('merge config from all presets', async () => {
    expect(
      await generateContent(
        [
          {
            template: {
              '.config': '/path/to/config.json',
              '.list': '/path/to/list1',
            },
          },
          {
            template: {
              '.config': '/path/to/config.yaml',
              '.list': '/path/to/list2',
            },
          },
        ],
        defaultContext,
      ),
    ).toEqual({
      '.config': { json: true, yaml: true },
      '.list': 'list2',
    });
  });

  it('return the templated configuration if no customisation is supplied', async () => {
    expect(
      await generateContent(
        [
          {
            template: {
              '.config': '/path/to/config.json',
            },
          },
        ],
        defaultContext,
      ),
    ).toEqual({
      '.config': { json: true },
    });
  });

  it('return a customised configuration', async () => {
    expect(
      await generateContent(
        [
          {
            template: {
              '.config': '/path/to/config.json',
            },
          },
        ],
        {
          ...defaultContext,
          custom: {
            ...defaultContext.custom,
            config: { config: { extra: true } },
          },
        },
      ),
    ).toEqual({
      '.config': { json: true, extra: true },
    });
  });
});

describe('fn:getConfigKey', () => {
  it('get config keys based on the filename', () => {
    expect(getConfigKey('.babelrc.json')).toEqual('babel');
    expect(getConfigKey('.tsconfig.json')).toEqual('tsconfig');
    expect(getConfigKey('.npmignore')).toEqual('npmignore');
    expect(getConfigKey('rollup.config.ts')).toEqual('rollup');
  });
});

describe('fn:getVariable', () => {
  it('compute the final variables', () => {
    expect(
      getVariable(
        [
          {
            variable: {
              a: 'a',
            },
          },
          {
            variable: {
              b: 'b',
            },
          },
        ],
        {
          ...defaultContext,
          custom: { ...defaultContext.custom, variable: { c: 'c' } },
        },
      ),
    ).toEqual({ a: 'a', b: 'b', c: 'c' });
  });
});
