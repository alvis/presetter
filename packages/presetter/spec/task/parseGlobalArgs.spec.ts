import { describe, expect, it } from 'vitest';

import { parseGlobalArgs } from '#task';

import type { Arguments } from 'yargs-parser';

describe('fn:parseGlobalArgs', () => {
  it('should return an array of cleaned up global arguments as strings', () => {
    const argv: Arguments = {
      '_': [],
      '--': ['"hello"', "'world'", 123, 'no-quotes'],
    };

    const expectedResult = ['hello', 'world', '123', 'no-quotes'];
    const result = parseGlobalArgs(argv);

    expect(result).toEqual(expectedResult);
  });

  it('should return an empty array when no global arguments are present', () => {
    const argv: Arguments = {
      _: [],
    };

    const expectedResult: string[] = [];
    const result = parseGlobalArgs(argv);

    expect(result).toEqual(expectedResult);
  });
});
