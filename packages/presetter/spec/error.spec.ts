/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on error handlers
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { wrap } from '#error';

describe('fn:wrap', () => {
  it('resovle a promise', async () => {
    const fn = jest.fn(async () => true);
    expect(await wrap(fn(), 'message')).toEqual(true);
  });

  it('wrap an error with a message', async () => {
    const fn = jest.fn(async () => {
      throw new Error('error');
    });
    await expect(wrap(fn(), 'better explanation')).rejects.toThrow(
      'better explanation: error',
    );
  });

  it('pass on a non-erroneous object', async () => {
    const fn = jest.fn(async () => {
      throw 'message';
    });
    await expect(wrap(fn(), 'additional message')).rejects.toEqual('message');
  });
});
