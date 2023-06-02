import { mapValues } from '#utilities/mapValues';

describe('fn:mapValues', () => {
  it('should map object values correctly', () => {
    const input = { a: 1, b: 2, c: 3 };
    const expectedOutput = { a: '1', b: '2', c: '3' };
    const output = mapValues(input, (value) => String(value));

    expect(output).toEqual(expectedOutput);
  });
});
