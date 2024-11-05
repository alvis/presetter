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
