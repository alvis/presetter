import { handleError } from '#executable/error';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const { warn } = vi.hoisted(() => ({
  warn: vi.fn(),
}));

const { createCallsiteRecord } = vi.hoisted(() => ({
  createCallsiteRecord: vi.fn(),
}));

vi.mock('node:console', () => ({
  warn,
}));

vi.mock('callsite-record', () => ({
  default: createCallsiteRecord,
}));

const ansiPattern = [
  '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
  '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
].join('|');
const ansi = new RegExp(ansiPattern, 'g');

const printedLines = (): string[] =>
  warn.mock.calls.map(([line]) => String(line ?? '').replace(ansi, ''));

describe.sequential('fn:handleError', () => {
  beforeEach(() => vi.clearAllMocks());

  it('should print the error if there is no tty', async () => {
    process.stdout.isTTY = false;

    const error = new Error('no tty');

    await handleError(error);

    expect(warn.mock.calls).toEqual([[error]]);
  });

  it('should print the error with source code on a tty', async () => {
    process.stdout.isTTY = true;

    const error = new Error('tty');
    createCallsiteRecord.mockReturnValueOnce({
      render: vi.fn(async () => 'callsite record'),
    });

    await handleError(error);

    expect(printedLines()).toEqual(['[Error] tty', '', 'callsite record']);
  });

  it('should print the error without callsite record when record is null', async () => {
    process.stdout.isTTY = true;

    const error = new Error('no record');
    createCallsiteRecord.mockReturnValueOnce(null);

    await handleError(error);

    expect(printedLines()).toEqual(['[Error] no record']);
  });

  it('should print the message when the callsite record cannot be rendered', async () => {
    process.stdout.isTTY = true;

    const error = new Error('unrenderable');
    createCallsiteRecord.mockReturnValueOnce({
      render: vi.fn(() => {
        throw new Error('cannot read the source file');
      }),
    });

    await handleError(error);

    expect(printedLines()).toEqual(['[Error] unrenderable']);
  });

  it('should print every nested cause on a tty', async () => {
    process.stdout.isTTY = true;

    const error = new Error('failed to bootstrap packages/b', {
      cause: new SyntaxError('Unexpected token'),
    });
    createCallsiteRecord.mockReturnValueOnce(null);

    await handleError(error);

    expect(printedLines()).toEqual([
      '[Error] failed to bootstrap packages/b',
      '  [SyntaxError] Unexpected token',
    ]);
  });

  it('should print every aggregated error on a tty', async () => {
    process.stdout.isTTY = true;

    const error = new AggregateError(
      [new Error('first'), new Error('second')],
      'failed to bootstrap 2 of 3 projects',
    );
    createCallsiteRecord.mockReturnValue(null);

    await handleError(error);

    expect(printedLines()).toEqual([
      '[AggregateError] failed to bootstrap 2 of 3 projects',
      '  [Error] first',
      '  [Error] second',
    ]);
  });
});
