/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on isDirective
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { describe, expect, it } from 'vitest';

import { isDirective } from '#directive';

describe('fn:isDirective', () => {
  it('return true for valid directives', () => {
    const validDirectives = ['@import package', '@import package'];
    for (const directive of validDirectives) {
      expect(isDirective(directive)).toEqual(true);
    }
  });

  it('return false for invalid directives', () => {
    const invalidDirectives = [{}];
    for (const directive of invalidDirectives) {
      expect(isDirective(directive)).toEqual(false);
    }
  });
});
