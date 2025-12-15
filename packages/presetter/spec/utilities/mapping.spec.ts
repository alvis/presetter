import { describe, expect, it } from 'vitest';

import { mapValues, mapValuesAsync } from '#utilities/mapping';

describe('fn:mapValues', () => {
  it('should map object values correctly', () => {
    const input = { a: 1, b: 2, c: 3 };
    const expected = { a: '1', b: '2', c: '3' };

    const result = mapValues(input, (value) => String(value));

    expect(result).toEqual(expected);
  });

  it('should return empty object for empty input', () => {
    const input: Record<string, number> = {};

    const result = mapValues(input, (value) => value * 2);

    expect(result).toEqual({});
  });

  it('should preserve original keys', () => {
    const input = { firstName: 'john', lastName: 'doe' };

    const result = mapValues(input, (value) => value.toUpperCase());

    expect(result).toEqual({ firstName: 'JOHN', lastName: 'DOE' });
  });

  it('should transform values to different types', () => {
    const input = { count: '5', price: '10.99' };

    const result = mapValues(input, (value) => parseFloat(value));

    expect(result).toEqual({ count: 5, price: 10.99 });
  });
});

describe('fn:mapValuesAsync', () => {
  it('should map values asynchronously', async () => {
    const input = { a: 1, b: 2, c: 3 };
    const expected = { a: 2, b: 4, c: 6 };

    const result = await mapValuesAsync(input, async (value) => value * 2);

    expect(result).toEqual(expected);
  });

  it('should return empty object for empty input', async () => {
    const input: Record<string, number> = {};

    const result = await mapValuesAsync(input, async (value) => value * 2);

    expect(result).toEqual({});
  });

  it('should preserve original keys', async () => {
    const input = { firstName: 'john', lastName: 'doe' };

    const result = await mapValuesAsync(input, async (value) =>
      value.toUpperCase(),
    );

    expect(result).toEqual({ firstName: 'JOHN', lastName: 'DOE' });
  });

  it('should execute transformations in parallel', async () => {
    const executionOrder: string[] = [];
    const input = { slow: 50, fast: 10 };

    const result = await mapValuesAsync(input, async (delay) => {
      await new Promise((resolve) => setTimeout(resolve, delay));
      executionOrder.push(delay === 50 ? 'slow' : 'fast');

      return delay;
    });

    // fast should complete before slow due to parallel execution
    expect(executionOrder).toEqual(['fast', 'slow']);
    expect(result).toEqual({ slow: 50, fast: 10 });
  });

  it('should propagate rejection from mapping function', async () => {
    const input = { a: 1, b: 2 };

    await expect(
      mapValuesAsync(input, async () => {
        throw new Error('transformation failed');
      }),
    ).rejects.toThrow('transformation failed');
  });

  it('should transform values to different types', async () => {
    const input = { count: '5', price: '10.99' };

    const result = await mapValuesAsync(input, async (value) =>
      parseFloat(value),
    );

    expect(result).toEqual({ count: 5, price: 10.99 });
  });
});
