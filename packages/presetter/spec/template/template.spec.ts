import { describe, expect, it } from 'vitest';

import { template } from '#template';

describe('fn:template', () => {
  it('replace a simple string', () => {
    expect(template('{value}', { value: 'value' })).toEqual('value');
  });

  it('replace content in an array', () => {
    expect(
      template(['{key}', '{value}'], { key: 'key', value: 'value' }),
    ).toEqual(['key', 'value']);
  });

  it('replace content in an object', () => {
    expect(
      template({ '{key}': '{value}' }, { key: 'key', value: 'value' }),
    ).toEqual({ key: 'value' });
  });

  it('return the original content if not recognized', () => {
    expect(template(null, {})).toEqual(null);
  });
});
