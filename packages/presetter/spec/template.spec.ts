/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on template related helpers
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { filter, merge, mergeTemplate, template } from '#template';

describe('fn:filter', () => {
  it('return the subject without filtering', () => {
    expect(filter({ a: 'a' })).toEqual({
      a: 'a',
    });
  });

  it('filter out fields that are in the list', () => {
    expect(filter({ a: 'a', b: 'b', c: 'c' }, 'b', 'c')).toEqual({
      a: 'a',
    });
  });

  it('filter out fields deep', () => {
    expect(
      filter({ a: { aa: { aaa: 'aaa', aab: 'aab' } } }, { a: { aa: ['aab'] } }),
    ).toEqual({ a: { aa: { aaa: 'aaa' } } });
  });

  it('filter out a list deep', () => {
    expect(
      filter({ a: { aa: [0, 1, 2, 3, 4] } }, { a: { aa: [1, 3] } }),
    ).toEqual({ a: { aa: [0, 2, 4] } });
  });

  it('merge filtering rules', () => {
    expect(
      filter(
        { a: { aa: { aaa: 'aaa', aab: 'aab' } } },
        { a: { aa: ['aaa'] } },
        { a: { aa: ['aab'] } },
      ),
    ).toEqual({ a: { aa: {} } });
  });

  it('ignore non-existent paths', () => {
    expect(
      filter({ a: { aa: { aaa: 'aaa' } }, b: 'b' }, { a: { aa: ['aab'] } }),
    ).toEqual({ a: { aa: { aaa: 'aaa' } }, b: 'b' });

    expect(filter({ a: { aa: { aaa: 'aaa' } }, b: 'b' }, { a: ['b'] })).toEqual(
      { a: { aa: { aaa: 'aaa' } }, b: 'b' },
    );

    expect(filter({ a: { aa: { aaa: 'aaa' } }, b: 'b' }, { b: ['c'] })).toEqual(
      { a: { aa: { aaa: 'aaa' } }, b: 'b' },
    );

    expect(filter({ a: { aa: { aaa: 'aaa' } }, b: 'b' }, 'c')).toEqual({
      a: { aa: { aaa: 'aaa' } },
      b: 'b',
    });
  });
});

describe('fn:merge', () => {
  it('overwite list content', () => {
    expect(merge('list1', 'list2')).toEqual('list2');
  });

  it('just return the replacement if the supplied customization cannot be mergeed', () => {
    expect(merge('line', { object: true })).toEqual({ object: true });
    expect(merge({ object: true }, 'line')).toEqual('line');
  });

  it('return the original if no replacement is given', () => {
    expect(merge(0)).toEqual(0);
    expect(merge({ a: 0 })).toEqual({ a: 0 });
    expect(merge([0])).toEqual([0]);
  });

  it('merge two independent objects', () => {
    expect(merge({ a: 0 }, { b: 1 })).toEqual({ a: 0, b: 1 });
  });

  it('merge a list', () => {
    expect(merge([0], [1])).toEqual([0, 1]);
  });

  it('overwrite a list', () => {
    expect(merge([0], 1)).toEqual(1);
  });

  it('overwrite a primitive property', () => {
    expect(merge({ a: 0 }, { a: 1 })).toEqual({ a: 1 });
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

  it('deep merge an object in overwrite mode', () => {
    expect(merge({ a: { b: 0 } }, { a: { c: 1 } })).toEqual({
      a: { b: 0, c: 1 },
    });
  });

  it('deep merge a list', () => {
    expect(merge({ a: [{ b: 0 }] }, { a: { 0: { c: 1 } } })).toEqual({
      a: [{ b: 0, c: 1 }],
    });
  });

  it('deep extend a list', () => {
    expect(merge({ a: { b: [0] } }, { a: { b: [1] } })).toEqual({
      a: { b: [0, 1] },
    });
  });

  it('deep overwrite a list', () => {
    expect(
      merge(
        { a: { b: [0, { options: false }] } },
        { a: { b: [1, { options: true }] } },
      ),
    ).toEqual({
      a: { b: [1, { options: true }] },
    });
  });

  it('deep merge a list uniquely', () => {
    expect(merge({ a: [0] }, { a: [0] })).toEqual({ a: [0] });
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
});

describe('fn:template', () => {
  it('replace a simple string', () => {
    expect(template('{value}', { value: 'value' })).toEqual('value');
  });

  it('replace content in an array', () => {
    expect(
      template(['{key}', '{value}'], { key: 'key', value: 'value' }),
    ).toEqual(['key', 'value']);
  });

  it('replace content in an object', () => {
    expect(
      template({ '{key}': '{value}' }, { key: 'key', value: 'value' }),
    ).toEqual({ key: 'value' });
  });

  it('return the original content if not recognized', () => {
    expect(template(null, {})).toEqual(null);
  });
});

describe('fn:mergeTemplate', () => {
  it('keep source template if the target does not have one', () => {
    expect(
      mergeTemplate(
        { common: 'to be written', sourceOnly: 'source_only' },
        { common: 'common' },
      ),
    ).toEqual({
      common: 'common',
      sourceOnly: 'source_only',
    });
  });

  it('merge a JSON template', () => {
    expect(mergeTemplate({ json: { a: true } }, { json: { b: true } })).toEqual(
      {
        json: { a: true, b: true },
      },
    );
  });

  it('merge a list', () => {
    expect(mergeTemplate({ '.list': 'line1' }, { '.list': 'line2' })).toEqual({
      '.list': 'line1\nline2',
    });
  });

  it('overwhite value if the template file is not a list', () => {
    expect(
      mergeTemplate({ 'notalist.file': 'line1' }, { 'notalist.file': 'line2' }),
    ).toEqual({
      'notalist.file': 'line2',
    });
  });
});
