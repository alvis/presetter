/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on mergeTemplate
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { mergeTemplate } from '#template';

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
