/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on the directive parser
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { describe, expect, it } from 'vitest';

import { resolveDirective } from '#directive';

import type { PresetContext } from 'presetter-types';

describe('fn:resolveDirective', () => {
  const context: PresetContext = {
    target: {
      name: 'target',
      root: '/path/to/target',
      package: {},
    },
    custom: {
      preset: 'preset',
    },
  };

  it('export a stringified JSON if no directive is involved', () => {
    expect(
      resolveDirective(
        {
          boolean: true,
          number: 0,
          string: 'string',
          array: [0, 1],
        },
        context,
      ),
    ).toEqual({
      importMap: {},
      stringifiedConfig:
        '{"boolean": true, "number": 0, "string": "string", "array": [0, 1]}',
    });
  });

  it('replace content via the import directive', () => {
    expect(resolveDirective({ imported: '@import another' }, context)).toEqual({
      importMap: { another: 'import0' },
      stringifiedConfig: '{"imported": import0}',
    });
  });

  it('replace content with a named import', () => {
    expect(
      resolveDirective({ imported: '@import another[name]' }, context),
    ).toEqual({
      importMap: { another: 'import0' },
      stringifiedConfig: '{"imported": import0.name}',
    });
  });

  it('replace content with a function call via the apply directive', () => {
    expect(resolveDirective({ applied: ['@apply another'] }, context)).toEqual({
      importMap: { another: 'import0' },
      stringifiedConfig: '{"applied": import0(...([] as const))}',
    });
  });

  it('replace content with a named function call via the apply directive', () => {
    expect(
      resolveDirective({ applied: ['@apply another[named]'] }, context),
    ).toEqual({
      importMap: { another: 'import0' },
      stringifiedConfig: '{"applied": import0.named(...([] as const))}',
    });
  });

  it('replace content with a function call with options via the apply directive', () => {
    expect(
      resolveDirective(
        { applied: ['@apply another', { options: null }] },
        context,
      ),
    ).toEqual({
      importMap: { another: 'import0' },
      stringifiedConfig:
        '{"applied": import0(...([{"options": null}] as const))}',
    });
  });

  it('does not do anything with an ordinary array', () => {
    expect(resolveDirective({ array: [['item0', 'item1']] }, context)).toEqual({
      importMap: {},
      stringifiedConfig: '{"array": [["item0", "item1"]]}',
    });
  });

  it('does not do anything with the apply directive if it is not in the array form', () => {
    expect(resolveDirective({ applied: '@apply another' }, context)).toEqual({
      importMap: {},
      stringifiedConfig: '{"applied": "@apply another"}',
    });
  });

  it('handle the apply directive together with the import directive as the argument', () => {
    expect(
      resolveDirective(
        { applied: ['@apply another', '@import options[name]'] },
        context,
      ),
    ).toEqual({
      importMap: { options: 'import0', another: 'import1' },
      stringifiedConfig: '{"applied": import1(...([import0.name] as const))}',
    });
  });

  it('handle the apply directive together with the import directive as part of the argument', () => {
    expect(
      resolveDirective(
        {
          applied: [
            '@apply another',
            { extra: true, name: '@import options[name]' },
          ],
        },
        context,
      ),
    ).toEqual({
      importMap: { options: 'import0', another: 'import1' },
      stringifiedConfig:
        '{"applied": import1(...([{"extra": true, "name": import0.name}] as const))}',
    });
  });

  it('always generate an unique import map despite multiple usage', () => {
    expect(
      resolveDirective(
        {
          apply0: ['@apply import0', '@import options0[name]'],
          apply1: ['@apply import1', '@import options0[name]'],
          apply2: ['@apply import0', '@import options1[name]'],
          apply3: ['@apply import1', '@import options1[name]'],
        },
        context,
      ),
    ).toEqual({
      importMap: {
        import0: 'import1',
        import1: 'import2',
        options0: 'import0',
        options1: 'import3',
      },
      stringifiedConfig:
        '{"apply0": import1(...([import0.name] as const)), "apply1": import2(...([import0.name] as const)), "apply2": import1(...([import3.name] as const)), "apply3": import2(...([import3.name] as const))}',
    });
  });

  it('handle mixed use cases', () => {
    expect(
      resolveDirective(
        {
          extra: true,
          applied: [
            '@apply another',
            { extra: true, name: '@import options[name]' },
          ],
          imported: '@import another[name]',
        },
        context,
      ),
    ).toEqual({
      importMap: { options: 'import0', another: 'import1' },
      stringifiedConfig:
        '{"extra": true, "applied": import1(...([{"extra": true, "name": import0.name}] as const)), "imported": import1.name}',
    });
  });
});
