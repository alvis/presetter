/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on the helpers
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { readFile, writeFile } from 'fs-extra';

import {
  buildJSONConfig,
  buildListConfig,
  buildTextConfig,
  createLinker,
  filterLinks,
  loadText,
  loadYAML,
  merge,
  template,
} from '#utilities';

jest.mock('path', () => ({
  __esModule: true,
  resolve(...args: string[]): string {
    const { resolve, relative, sep } = jest.requireActual('path');

    return relative(resolve(), resolve(...args))
      .split(sep)
      .join('/');
  },
}));

jest.mock('fs-extra', () => ({
  __esModule: true,
  ensureFile: jest.fn(),
  readFile: jest.fn(async (path: string) => {
    switch (path) {
      case 'templates/list':
        return Buffer.from('line1');
      case 'templates/text':
        return Buffer.from('line1');
      case 'templates/json.yaml':
        return Buffer.from('a: 1');
      default:
        throw new Error(`missing path ${path}`);
    }
  }),
  writeFile: jest.fn(),
}));

describe('fn:buildListConfig', () => {
  beforeEach(jest.clearAllMocks);

  it('output the default template', async () => {
    expect(
      await buildListConfig({
        name: 'list',
        base: 'templates',
        outDir: 'dist',
      }),
    ).toEqual('dist/list');
    expect(readFile).toBeCalledWith('templates/list');
    expect(writeFile).toBeCalledWith('dist/list', 'line1');
  });

  it('compile and write to the output folder', async () => {
    expect(
      await buildListConfig({
        name: 'list',
        base: 'templates',
        outDir: 'dist',
        extra: ['more'],
      }),
    ).toEqual('dist/list');
    expect(readFile).toBeCalledWith('templates/list');
    expect(writeFile).toBeCalledWith('dist/list', 'line1\nmore');
  });
});

describe('fn:buildTextConfig', () => {
  beforeEach(jest.clearAllMocks);

  it('output the default template', async () => {
    expect(
      await buildTextConfig({
        name: 'text',
        base: 'templates',
        outDir: 'dist',
      }),
    ).toEqual('dist/text');
    expect(readFile).toBeCalledWith('templates/text');
    expect(writeFile).toBeCalledWith('dist/text', 'line1');
  });
});

describe('fn:buildJSONConfig', () => {
  beforeEach(jest.clearAllMocks);

  it('output the default template', async () => {
    expect(
      await buildJSONConfig({
        name: 'json',
        base: 'templates',
        outDir: 'dist',
      }),
    ).toEqual('dist/json.json');
    expect(
      await buildJSONConfig({
        name: 'json',
        base: 'templates',
        outDir: 'dist',
      }),
    ).toEqual('dist/json.json');
    expect(readFile).toBeCalledWith('templates/json.yaml');
    expect(writeFile).toBeCalledWith('dist/json.json', '{\n  "a": 1\n}');
  });

  it('compile and write to the output folder', async () => {
    expect(
      await buildJSONConfig({
        name: 'json',
        base: 'templates',
        outDir: 'dist',
        extra: { b: 2 },
      }),
    ).toEqual('dist/json.json');
    expect(readFile).toBeCalledWith('templates/json.yaml');
    expect(writeFile).toBeCalledWith(
      'dist/json.json',
      '{\n  "a": 1,\n  "b": 2\n}',
    );
  });
});

describe('fn:filterLinks', () => {
  it('should keep everything if no ignore list is given', () => {
    expect(filterLinks({ link: 'destination' })).toEqual({
      link: 'destination',
    });
  });

  it('should ignore links that is asked not to create', () => {
    expect(filterLinks({ link: 'destination' }, ['link'])).toEqual({});
  });
});

describe('fn:createLinker', () => {
  beforeEach(jest.clearAllMocks);

  it('output the default template', async () => {
    const { json, list, text } = createLinker({
      base: 'templates',
      outDir: 'dist',
      parameter: { parameter: 'parameter' },
    });

    await json('json', { b: 2 });
    await list('list', ['line2']);
    await text('text');

    expect(readFile).toBeCalledWith('templates/json.yaml');
    expect(writeFile).toBeCalledWith(
      'dist/json.json',
      '{\n  "a": 1,\n  "b": 2\n}',
    );
    expect(readFile).toBeCalledWith('templates/list');
    expect(writeFile).toBeCalledWith('dist/list', 'line1\nline2');
    expect(readFile).toBeCalledWith('templates/text');
    expect(writeFile).toBeCalledWith('dist/text', 'line1');
  });

  it('compile and write to the output folder', async () => {
    expect(
      await buildJSONConfig({
        name: 'json',
        base: 'templates',
        outDir: 'dist',
        extra: { b: 2 },
      }),
    ).toEqual('dist/json.json');
    expect(readFile).toBeCalledWith('templates/json.yaml');
    expect(writeFile).toBeCalledWith(
      'dist/json.json',
      '{\n  "a": 1,\n  "b": 2\n}',
    );
  });
});

describe('fn:loadText', () => {
  beforeEach(jest.clearAllMocks);

  it('read a text-based template', async () => {
    expect(await loadText('list', 'templates')).toEqual('line1');
  });
});

describe('fn:loadYAML', () => {
  beforeEach(jest.clearAllMocks);

  it('read a yaml template', async () => {
    expect(await loadYAML('json', 'templates')).toEqual({ a: 1 });
  });
});

describe('fn:merge', () => {
  it('merge two independent objects', () => {
    expect(merge({ a: 0 }, { b: 1 })).toEqual({ a: 0, b: 1 });
  });

  it('overwrite a primitive property', () => {
    expect(merge({ a: 0 }, { a: 1 })).toEqual({ a: 1 });
  });

  it('attach to a list', () => {
    expect(merge({ a: [0] }, { a: [1] })).toEqual({ a: [0, 1] });
  });

  it('overwrite a list', () => {
    expect(merge({ a: [0, 1] }, { a: { 0: 1 } })).toEqual({ a: [1, 1] });
  });

  it('leave a list untouched', () => {
    expect(merge({ a: [0] }, {})).toEqual({ a: [0] });
  });

  it('deep merge a primitive', () => {
    expect(merge({ a: { b: 0 }, c: 1 }, { a: { b: 1 } })).toEqual({
      a: { b: 1 },
      c: 1,
    });
  });

  it('deep merge an object', () => {
    expect(merge({ a: { b: 0 } }, { a: { c: 1 } })).toEqual({
      a: { b: 0, c: 1 },
    });
  });

  it('deep extend a list', () => {
    expect(merge({ a: { b: [0] } }, { a: { b: [1] } })).toEqual({
      a: { b: [0, 1] },
    });
  });

  it('deep overwrite a list item', () => {
    expect(merge({ a: { b: [0, 1] } }, { a: { b: { 0: 1 } } })).toEqual({
      a: { b: [1, 1] },
    });
  });

  it('deep overwrite a list item', () => {
    expect(merge({ a: { b: [0] } }, { a: { b: 1 } })).toEqual({
      a: { b: 1 },
    });
  });

  it('overwrite an object by null', () => {
    expect(
      merge(
        {
          a: { b: 0 },
        },
        { a: null },
      ),
    ).toEqual({ a: null });
  });
});

describe('fn:template', () => {
  it('replace a simple string', () => {
    expect(template('{value}', { value: 'value' })).toEqual('value');
  });

  it('replace content in an object', () => {
    expect(
      template({ '{key}': '{value}' }, { key: 'key', value: 'value' }),
    ).toEqual({ key: 'value' });
  });
});
