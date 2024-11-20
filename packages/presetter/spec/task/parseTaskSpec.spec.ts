import { describe, expect, it } from 'vitest';

import { parseTaskSpec } from '#task';

describe('fn:parseTaskSpec', () => {
  it('should return the correct selector and empty args if no args provided', () => {
    const taskString = 'selector';
    const globalArgs: string[] = [];
    const expectedResult: { selector: string; args: string[] } = {
      selector: 'selector',
      args: [],
    };

    expect(parseTaskSpec(taskString, globalArgs)).toEqual(expectedResult);
  });

  it('should return the correct selector and args without globalArgs', () => {
    const taskString = 'selector -- --arg1=value1 --arg2="value with spaces"';
    const globalArgs: string[] = [];
    const expectedResult: { selector: string; args: string[] } = {
      selector: 'selector',
      args: ['--arg1=value1', '--arg2="value with spaces"'],
    };

    expect(parseTaskSpec(taskString, globalArgs)).toEqual(expectedResult);
  });

  it('should return the correct selector and args with globalArgs', () => {
    const taskString = 'selector -- {@} --arg1=value1';
    const globalArgs: string[] = ['--globalArg1=value1', '--globalArg2=value2'];
    const expectedResult: { selector: string; args: string[] } = {
      selector: 'selector',
      args: ['--globalArg1=value1', '--globalArg2=value2', '--arg1=value1'],
    };

    expect(parseTaskSpec(taskString, globalArgs)).toEqual(expectedResult);
  });

  it('should handle quotes in arguments correctly', () => {
    const taskString = `selector -- --arg1='value with "quotes"' --arg2="value with 'quotes'"`;
    const globalArgs: string[] = [];
    const expectedResult: { selector: string; args: string[] } = {
      selector: 'selector',
      args: [
        '--arg1=\'value with "quotes"\'',
        '--arg2="value with \'quotes\'"',
      ],
    };

    expect(parseTaskSpec(taskString, globalArgs)).toEqual(expectedResult);
  });
});
