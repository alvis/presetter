import { describe, expect, it } from 'vitest';

import { display, prefixDisplay } from '#utilities/display';

describe('fn:display', () => {
  it('should return "Function" for function content', () => {
    const result = display(() => {});
    const expected = 'Function';

    expect(result).toEqual(expected);
  });

  it('should return "Array(length)" for array content', () => {
    const result = display([1, 2, 3]);
    const expected = 'Array(3)';

    expect(result).toEqual(expected);
  });

  it('should return "Buffer" for buffer content', () => {
    const result = display(Buffer.from('test'));
    const expected = 'Buffer';

    expect(result).toEqual(expected);
  });

  it('should return "null" for null content', () => {
    const result = display(null);
    const expected = 'null';

    expect(result).toEqual(expected);
  });

  it('should return "Object({...})" for object content', () => {
    const result = display({ key: 'value' });
    const expected = 'Object({\n  key: string\n})';

    expect(result).toEqual(expected);
  });

  it('should return the type of primitive content', () => {
    expect(display(123)).toEqual('number');
    expect(display('test')).toEqual('string');
    expect(display(true)).toEqual('boolean');
  });

  it('should handle nested objects correctly', () => {
    const result = display({ a: { b: { c: 'value' } } });
    const expected = 'Object({\n  a: Object({\n    b: Object({...})\n  })\n})';

    expect(result).toEqual(expected);
  });
});

describe('fn:prefixDisplay', () => {
  it('should prefix the display output with the given prefix', () => {
    const result = prefixDisplay('> ', { key: 'value' });
    const expected = `
> Object({
    key: string
  })`.trim();

    expect(result).toEqual(expected);
  });

  it('should handle different prefixes correctly', () => {
    const result = prefixDisplay('>> ', [1, 2, 3]);
    const expected = '>> Array(3)';

    expect(result).toEqual(expected);
  });

  it('should handle nested objects with prefix correctly', () => {
    const result = prefixDisplay('> ', { a: { b: { c: 'value' } } });
    const expected = `
> Object({
    a: Object({
      b: Object({...})
    })
  })`.trim();

    expect(result).toEqual(expected);
  });
});
