/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on plugin related helpers
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import {
  assertPluginList,
  assertPluginListItem,
  assertPluginObject,
  assertPluginManifest,
} from '#plugin';

describe('fn:assertPluginListItem', () => {
  it('pass with just a string', () => {
    expect(() => assertPluginListItem('plugin')).not.toThrow();
  });

  it('pass with a string in an array', () => {
    expect(() => assertPluginListItem(['plugin'])).not.toThrow();
  });

  it('pass with a string and its options in an array', () => {
    expect(() =>
      assertPluginListItem(['plugin', { options: true }]),
    ).not.toThrow();
  });

  it('fails with a non-string header', () => {
    expect(() => assertPluginListItem([0])).toThrow(TypeError);
  });

  it('fails with an array more than 2 items', () => {
    expect(() =>
      assertPluginListItem(['plugin', { options: true }, 'extra']),
    ).toThrow(TypeError);
  });
});

describe('fn:assertPluginList', () => {
  it('pass with a valid plugin configuration list', () => {
    expect(() =>
      assertPluginList(['plugin', ['plugin'], ['plugin', { options: true }]]),
    ).not.toThrow();
  });

  it('fail with any invalid plugin configurations', () => {
    expect(() =>
      assertPluginList([
        'plugin',
        ['plugin'],
        ['plugin', { options: true }],
        { invalid: true },
      ]),
    ).toThrow(TypeError);
  });
});

describe('fn:assertPluginObject', () => {
  it('pass with a valid plugin configuration object', () => {
    expect(() =>
      assertPluginObject({ plugin: { options: true } }),
    ).not.toThrow();
  });

  it('fail with any invalid plugin options', () => {
    expect(() => assertPluginObject({ plugin: true })).toThrow(TypeError);
  });
});

describe('fn:assertPluginManifest', () => {
  it('pass with a valid plugin configuration object', () => {
    expect(() =>
      assertPluginManifest({ plugin: { options: true } }),
    ).not.toThrow();
  });

  it('pass with a valid plugin configuration list', () => {
    expect(() =>
      assertPluginManifest([
        'plugin',
        ['plugin'],
        ['plugin', { options: true }],
      ]),
    ).not.toThrow();
  });

  it('fail with any invalid manifest', () => {
    expect(() => assertPluginManifest(null)).toThrow(TypeError);
    expect(() => assertPluginManifest('invalid')).toThrow(TypeError);
  });
});
