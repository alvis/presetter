/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests for the task selector
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2019 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { parseGlobalArgs, parseTaskSpec, selectTasks } from '#task';

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

describe('fn:selectTasks', () => {
  const tasks = [
    'task1',
    'task1:subtask1',
    'task1:subtask2',
    'task1:subtask1:subsubtask1',
    'task1:subtask1:subsubtask2',
    'task1:subtask2:subsubtask1',
    'task1:subtask2:subsubtask2',
    'task2',
    'task2:subtask1',
    'task2:subtask2',
    'task2:subtask1:subsubtask1',
    'task2:subtask1:subsubtask2',
  ];

  it('should return the exact task when no wildcard is provided', () => {
    expect(selectTasks(tasks, 'task1')).toEqual(['task1']);
  });

  describe('with single-level wildcard (*)', () => {
    it('should return only the direct subtasks matching the wildcard', () => {
      expect(selectTasks(tasks, 'task1:*')).toEqual([
        'task1:subtask1',
        'task1:subtask2',
      ]);
    });

    it('should return only the direct subtasks matching the wildcard at a deeper level', () => {
      expect(selectTasks(tasks, 'task2:subtask1:*')).toEqual([
        'task2:subtask1:subsubtask1',
        'task2:subtask1:subsubtask2',
      ]);
    });

    it('should return subsubtasks at any subtask level matching the wildcard', () => {
      expect(selectTasks(tasks, 'task1:*:subsubtask1')).toEqual([
        'task1:subtask1:subsubtask1',
        'task1:subtask2:subsubtask1',
      ]);
    });
  });

  describe('with multi-level wildcard (**)', () => {
    it('should return all subtasks matching the wildcard at any level', () => {
      expect(selectTasks(tasks, 'task2:**')).toEqual([
        'task2:subtask1',
        'task2:subtask2',
        'task2:subtask1:subsubtask1',
        'task2:subtask1:subsubtask2',
      ]);
    });
  });
});
