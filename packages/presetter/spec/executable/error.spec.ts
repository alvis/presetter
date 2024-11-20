import { beforeEach, describe, expect, it, vi } from 'vitest';

import { handleError } from '#executable/error';

const { warn } = vi.hoisted(() => ({
  warn: vi.fn(),
}));

vi.mock('node:console', () => ({
  warn,
}));

const ansiPattern = [
  '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
  '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
].join('|');
const ansi = new RegExp(ansiPattern, 'g');

describe.sequential('fn:handleError', () => {
  beforeEach(() => vi.clearAllMocks());

  it('should print the error if there is no tty', async () => {
    process.stdout.isTTY = false;

    const error = new Error('no tty');

    await handleError(error);

    expect(warn).toHaveBeenCalledTimes(1);

    expect(warn).toHaveBeenCalledWith(error);
  });

  it('should print the error with source code on a tty', async () => {
    process.stdout.isTTY = true;

    const error = new Error('tty');

    await handleError(error);

    expect(warn).toHaveBeenCalledTimes(3);

    const message = warn.mock.calls[0][0] as string;
    expect(message.replace(ansi, '')).toEqual(`[Error] tty`);
  });
});
