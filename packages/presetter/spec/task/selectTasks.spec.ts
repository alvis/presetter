import { describe, expect, it } from 'vitest';

import { selectTasks } from '#task';

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
