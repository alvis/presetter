import { describe, expect, it } from 'vitest';

import { substitute } from '#template/substitute';

describe('fn:substitute', () => {
  it('should replace a simple string', () => {
    expect(substitute('{value}', { value: 'value' })).toEqual('value');
  });

  it('should replace content in an array', () => {
    expect(
      substitute(['{key}', '{value}'], { key: 'key', value: 'value' }),
    ).toEqual(['key', 'value']);
  });

  it('should replace content in an object', () => {
    expect(
      substitute({ '{key}': '{value}' }, { key: 'key', value: 'value' }),
    ).toEqual({ key: 'value' });
  });

  it('should return the original content if not recognized', () => {
    expect(substitute(null, {})).toEqual(null);
  });
});
