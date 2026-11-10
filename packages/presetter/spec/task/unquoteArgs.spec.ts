import { describe, expect, it } from 'vitest';

import { unquoteArgs } from '#task';

describe('fn:unquoteArgs', () => {
  it('should strip the single or double quotes that wrap each argument', () => {
    expect(unquoteArgs(['"hello world"', "'task -- --watch'"])).toEqual([
      'hello world',
      'task -- --watch',
    ]);
  });

  it('should keep quotes that do not wrap the whole argument', () => {
    expect(unquoteArgs([`"mismatched'`, 'say "hi"'])).toEqual([
      `"mismatched'`,
      'say "hi"',
    ]);
  });

  it('should stringify numeric arguments', () => {
    expect(unquoteArgs([123])).toEqual(['123']);
  });
});
