/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on isImportDirective
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { isImportDirective } from '#directive';

describe('fn:isImportDirective', () => {
  it('return true for a simple package', () => {
    expect(isImportDirective('@import package')).toEqual(true);
  });

  it('return true for a package with special characters', () => {
    expect(isImportDirective('@import p_c-a.e')).toEqual(true);
  });

  it('return true for a scoped package', () => {
    expect(isImportDirective('@import @scope/package')).toEqual(true);
  });

  it('return true for a named import', () => {
    expect(isImportDirective('@import @scope/package[named]')).toEqual(true);
  });

  it('return true for sibling import', () => {
    expect(isImportDirective('@import ./sibling')).toEqual(true);
  });

  it('return true for parental import', () => {
    expect(isImportDirective('@import ../parent')).toEqual(true);
  });

  it('return false for missing named import', () => {
    expect(isImportDirective('@import missing_name[]')).toEqual(false);
  });

  it('return false for including trailing slash', () => {
    expect(isImportDirective('@import no_ending_slash/')).toEqual(false);
  });

  it('return false for an invalid scoped package name', () => {
    expect(isImportDirective('@import @@invalid_scope')).toEqual(false);
  });
});
