/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on serializeContent
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { serializeContent } from '#io';

describe('fn:serializeContent', () => {
  it('treat string as a string', () => {
    expect(serializeContent('/path/to/config.json', '{ "json": true }'));
  });

  it('convert an object to a json format', () => {
    expect(serializeContent('/path/to/config.json', { json: true })).toEqual(
      '{\n  "json": true\n}',
    );
  });

  it('convert an object to a yaml format', () => {
    expect(serializeContent('/path/to/config.yaml', { yaml: true })).toEqual(
      'yaml: true\n',
    );
  });
});
