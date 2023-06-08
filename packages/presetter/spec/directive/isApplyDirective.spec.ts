/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on isApplyDirective
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { isApplyDirective } from '#directive';

describe('fn:isApplyDirective', () => {
  it('return true for a simple package', () => {
    expect(isApplyDirective('@apply package')).toEqual(true);
  });

  it('return true for a package with special characters', () => {
    expect(isApplyDirective('@apply p_c-a.e')).toEqual(true);
  });

  it('return true for a scoped package', () => {
    expect(isApplyDirective('@apply @scope/package')).toEqual(true);
  });

  it('return true for a named import', () => {
    expect(isApplyDirective('@apply @scope/package[named]')).toEqual(true);
  });

  it('return true for sibling import', () => {
    expect(isApplyDirective('@apply ./sibling')).toEqual(true);
  });

  it('return true for parental import', () => {
    expect(isApplyDirective('@apply ../parent')).toEqual(true);
  });

  it('return false for missing named import', () => {
    expect(isApplyDirective('@apply missing_name[]')).toEqual(false);
  });

  it('return false for including trailing slash', () => {
    expect(isApplyDirective('@apply no_ending_slash/')).toEqual(false);
  });

  it('return false for an invalid scoped package name', () => {
    expect(isApplyDirective('@apply @@invalid_scope')).toEqual(false);
  });
});
