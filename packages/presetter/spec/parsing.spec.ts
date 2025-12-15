import { describe, expect, it } from 'vitest';

import {
  findRunInParsed,
  parseCommandStructure,
  parseCommandText,
} from '#parsing';

import type {
  ParsedBlock,
  ParsedBinaryCmd,
  ParsedCallExpr,
  ParsedCommand,
  ParsedSimpleCommand,
  ParsedSubshell,
} from '#parsing';

// TEST SUITES //

describe('fn:parseCommandText', () => {
  it('should parse a simple command with arguments', () => {
    const cmdText = 'run build test';

    const result = parseCommandText(cmdText);

    expect(result).toEqual({
      command: 'run',
      args: ['build', 'test'],
      extraArgs: [],
    } satisfies ParsedCallExpr);
  });

  it('should parse a command with extra args after --', () => {
    const cmdText = 'run build -- --verbose --debug';

    const result = parseCommandText(cmdText);

    expect(result).toEqual({
      command: 'run',
      args: ['build'],
      extraArgs: ['--verbose', '--debug'],
    } satisfies ParsedCallExpr);
  });

  it('should handle empty command text', () => {
    const cmdText = '';

    const result = parseCommandText(cmdText);

    expect(result).toEqual({
      command: '',
      args: [],
      extraArgs: [],
    } satisfies ParsedCallExpr);
  });
});

describe('fn:parseCommandStructure', () => {
  it('should parse a simple command as CallExpr', () => {
    const text = 'echo hello';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    expect(result).toEqual({
      type: 'CallExpr',
      command: 'echo',
      args: ['hello'],
      extraArgs: [],
      start: 0,
      end: 10,
    } satisfies ParsedSimpleCommand);
  });

  it('should parse subshell command with parentheses', () => {
    const text = '(echo test)';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    expect(result).toEqual({
      type: 'Subshell',
      body: {
        type: 'CallExpr',
        command: 'echo',
        args: ['test'],
        extraArgs: [],
        start: 1,
        end: 10,
      },
      start: 0,
      end: 11,
    } satisfies ParsedSubshell);
  });

  it('should parse block command with braces', () => {
    const text = '{ cmd; }';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    expect(result).toEqual({
      type: 'Block',
      body: {
        type: 'CallExpr',
        command: 'cmd;',
        args: [],
        extraArgs: [],
        start: 2,
        end: 6,
      },
      start: 0,
      end: 8,
    } satisfies ParsedBlock);
  });

  it('should parse binary command with && operator', () => {
    const text = 'cmd1 && cmd2';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    expect(result).toEqual({
      type: 'BinaryCmd',
      op: '&&',
      left: {
        type: 'CallExpr',
        command: 'cmd1',
        args: [],
        extraArgs: [],
        start: 0,
        end: 4,
      },
      right: {
        type: 'CallExpr',
        command: 'cmd2',
        args: [],
        extraArgs: [],
        start: 8,
        end: 12,
      },
      start: 0,
      end: 12,
    } satisfies ParsedBinaryCmd);
  });

  it('should parse binary command with || operator', () => {
    const text = 'cmd1 || cmd2';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    expect(result).toEqual({
      type: 'BinaryCmd',
      op: '||',
      left: {
        type: 'CallExpr',
        command: 'cmd1',
        args: [],
        extraArgs: [],
        start: 0,
        end: 4,
      },
      right: {
        type: 'CallExpr',
        command: 'cmd2',
        args: [],
        extraArgs: [],
        start: 8,
        end: 12,
      },
      start: 0,
      end: 12,
    } satisfies ParsedBinaryCmd);
  });

  it('should parse binary command with single pipe operator', () => {
    const text = 'cmd1 | cmd2';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    expect(result).toEqual({
      type: 'BinaryCmd',
      op: '|',
      left: {
        type: 'CallExpr',
        command: 'cmd1',
        args: [],
        extraArgs: [],
        start: 0,
        end: 4,
      },
      right: {
        type: 'CallExpr',
        command: 'cmd2',
        args: [],
        extraArgs: [],
        start: 7,
        end: 11,
      },
      start: 0,
      end: 11,
    } satisfies ParsedBinaryCmd);
  });

  it('should preserve operators inside single quotes', () => {
    const text = "echo '&&' test";
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    // yargs-parser preserves the quotes in args
    expect(result).toEqual({
      type: 'CallExpr',
      command: 'echo',
      args: ["'&&'", 'test'],
      extraArgs: [],
      start: 0,
      end: 14,
    } satisfies ParsedSimpleCommand);
  });

  it('should preserve operators inside double quotes', () => {
    const text = 'echo "||" test';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    // yargs-parser preserves the quotes in args
    expect(result).toEqual({
      type: 'CallExpr',
      command: 'echo',
      args: ['"||"', 'test'],
      extraArgs: [],
      start: 0,
      end: 14,
    } satisfies ParsedSimpleCommand);
  });

  it('should handle escaped characters outside quotes', () => {
    const text = 'echo \\&\\& test';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    // escaped && should not be treated as operator
    expect(result.type).toBe('CallExpr');
  });

  it('should handle escaped backslash in double quotes', () => {
    const text = 'echo "\\\\" && cmd2';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    // the && after quoted string should be treated as operator
    expect(result.type).toBe('BinaryCmd');
  });

  it('should handle nested parentheses inside braces', () => {
    const text = '{ (cmd) }';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    expect(result).toEqual({
      type: 'Block',
      body: {
        type: 'Subshell',
        body: {
          type: 'CallExpr',
          command: 'cmd',
          args: [],
          extraArgs: [],
          start: 3,
          end: 6,
        },
        start: 2,
        end: 7,
      },
      start: 0,
      end: 9,
    } satisfies ParsedBlock);
  });

  it('should not treat braces as block inside parentheses', () => {
    const text = 'cmd1 && cmd2';
    const baseOffset = 5;

    const result = parseCommandStructure(text, baseOffset);

    expect(result.start).toBe(5);
    expect(result.end).toBe(17);
  });

  it('should not detect operator inside parentheses', () => {
    // operators inside parens should not be treated as top-level
    const text = 'echo $(cmd1 && cmd2) test';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    // the whole thing should be parsed as single CallExpr since && is inside ()
    expect(result.type).toBe('CallExpr');
  });

  it('should not detect operator inside braces', () => {
    // operators inside braces should not be treated as top-level
    // eslint-disable-next-line no-template-curly-in-string -- shell variable syntax, not JS template
    const text = 'echo ${var:-a && b} test';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    // the whole thing should be parsed as single CallExpr since && is inside {}
    expect(result.type).toBe('CallExpr');
  });

  it('should handle closing paren in complex expressions', () => {
    // test that closing paren decrements depth correctly
    const text = 'echo $(foo) && cmd2';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    // && should be detected after the subshell closes
    expect(result).toEqual(
      expect.objectContaining({
        type: 'BinaryCmd',
        op: '&&',
      }),
    );
  });

  it('should handle closing brace in complex expressions', () => {
    // test that closing brace decrements depth correctly
    // eslint-disable-next-line no-template-curly-in-string -- shell variable syntax, not JS template
    const text = 'echo ${foo} && cmd2';
    const baseOffset = 0;

    const result = parseCommandStructure(text, baseOffset);

    // && should be detected after the brace closes
    expect(result).toEqual(
      expect.objectContaining({
        type: 'BinaryCmd',
        op: '&&',
      }),
    );
  });
});

describe('fn:findRunInParsed', () => {
  it('should find run command in CallExpr', () => {
    const cmd: ParsedCommand = {
      type: 'CallExpr',
      command: 'run',
      args: ['build'],
      extraArgs: [],
      start: 0,
      end: 9,
    };
    const source = 'run build';

    const result = findRunInParsed(cmd, source);

    expect(result).toEqual([{ match: 'run build', start: 0, end: 9 }]);
  });

  it('should not match run command without arguments', () => {
    const cmd: ParsedCommand = {
      type: 'CallExpr',
      command: 'run',
      args: [],
      extraArgs: [],
      start: 0,
      end: 3,
    };
    const source = 'run';

    const result = findRunInParsed(cmd, source);

    expect(result).toEqual([]);
  });

  it('should find run commands in BinaryCmd', () => {
    const cmd: ParsedCommand = {
      type: 'BinaryCmd',
      op: '&&',
      left: {
        type: 'CallExpr',
        command: 'run',
        args: ['build'],
        extraArgs: [],
        start: 0,
        end: 9,
      },
      right: {
        type: 'CallExpr',
        command: 'run',
        args: ['test'],
        extraArgs: [],
        start: 13,
        end: 21,
      },
      start: 0,
      end: 21,
    };
    const source = 'run build && run test';

    const result = findRunInParsed(cmd, source);

    expect(result).toEqual([
      { match: 'run build', start: 0, end: 9 },
      { match: 'run test', start: 13, end: 21 },
    ]);
  });

  it('should find run command in Subshell', () => {
    const cmd: ParsedCommand = {
      type: 'Subshell',
      body: {
        type: 'CallExpr',
        command: 'run',
        args: ['build'],
        extraArgs: [],
        start: 1,
        end: 10,
      },
      start: 0,
      end: 11,
    };
    const source = '(run build)';

    const result = findRunInParsed(cmd, source);

    expect(result).toEqual([{ match: 'run build', start: 1, end: 10 }]);
  });

  it('should find run command in Block', () => {
    const cmd: ParsedCommand = {
      type: 'Block',
      body: {
        type: 'CallExpr',
        command: 'run',
        args: ['build'],
        extraArgs: [],
        start: 2,
        end: 11,
      },
      start: 0,
      end: 13,
    };
    const source = '{ run build }';

    const result = findRunInParsed(cmd, source);

    expect(result).toEqual([{ match: 'run build', start: 2, end: 11 }]);
  });

  it('should handle unknown command types gracefully', () => {
    // test the default case in switch statement
    const cmd = {
      type: 'Unknown',
      start: 0,
      end: 5,
    } as unknown as ParsedCommand;
    const source = 'hello';

    const result = findRunInParsed(cmd, source);

    expect(result).toEqual([]);
  });
});
