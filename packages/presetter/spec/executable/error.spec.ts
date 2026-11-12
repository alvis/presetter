import { renderLocation } from 'sherlog';
import { describe, expect, it, vi } from 'vitest';

import { handleError } from '#executable/error';

const { warn } = vi.hoisted(() => ({
  warn: vi.fn(),
}));

vi.mock('node:console', () => ({
  warn,
}));

vi.mock('sherlog', async (importOriginal) => {
  const actual = await importOriginal<typeof import('sherlog')>();

  return {
    ...actual,
    renderLocation: vi.fn(actual.renderLocation),
  } satisfies Partial<typeof import('sherlog')>;
});

const ansiPattern = [
  String.raw`[\u001B\u009B][[\]()#;?]*(?:(?:(?:[a-zA-Z\d]*(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?\u0007)`,
  String.raw`(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~]))`,
].join('|');
const ansi = new RegExp(ansiPattern, 'g');

const printedLines = (): string[] =>
  warn.mock.calls.map(([line]) => String(line ?? '').replace(ansi, ''));

/** an error whose stack carries no location, so no callsite is rendered for it */
class LocationlessError extends Error {
  public override readonly name: string;
  public override readonly stack: string;

  /**
   * create an error without any location in its stack
   * @param name the type shown in brackets in the printed header, e.g. SyntaxError
   * @param message the text printed after the type
   */
  constructor(name: string, message: string) {
    super(message);
    this.name = name;
    this.stack = `${name}: ${message}`;
  }
}

describe('fn:handleError', { concurrent: false }, () => {
  it('should print the error if there is no tty', async () => {
    process.stdout.isTTY = false;

    const error = new Error('no tty');

    await handleError(error);

    expect(warn.mock.calls).toEqual([[error]]);
  });

  it('should print the error with the source excerpt of its top frame on a tty', async () => {
    process.stdout.isTTY = true;

    const error = new Error('tty');

    await handleError(error);

    const [header, gap, callsite] = printedLines();

    expect(header).toEqual('[Error] tty');
    expect(gap).toEqual('');
    expect(callsite).toMatch(
      /^ > +\d+ \| +const error = new Error\('tty'\);$/m,
    );
  });

  it('should print every located frame of the stack on a tty, naming anonymous ones and pointing eval-ed code at its caller', async () => {
    process.stdout.isTTY = true;

    const error: Error = {
      name: 'Error',
      message: 'unreadable',
      stack: [
        'Error: unreadable',
        '    at async Preset.load (/missing/presetter.config.ts:7:25)',
        '    at new Promise (<anonymous>)',
        '    at Object.<anonymous> (file:///missing/entry.js:3:4)',
        '    at async file:///missing/entry.js:5:6',
        '    at eval (eval at load (/missing/presetter.config.ts:11:5), <anonymous>:1:1)',
        '    at /missing/presetter.config.ts:9:3',
      ].join('\n'),
    };

    await handleError(error);

    expect(printedLines()).toEqual([
      '[Error] unreadable',
      '',
      [
        '    at async Preset.load (/missing/presetter.config.ts:7:25)',
        '    at Object.<anonymous> (file:///missing/entry.js:3:4)',
        '    at async (file:///missing/entry.js:5:6)',
        '    at eval (/missing/presetter.config.ts:11:5)',
        '    at <anonymous> (/missing/presetter.config.ts:9:3)',
      ].join('\n'),
    ]);
  });

  it('should print the error without callsite when its stack has no location', async () => {
    process.stdout.isTTY = true;

    const error = new LocationlessError('Error', 'no location');

    await handleError(error);

    expect(printedLines()).toEqual(['[Error] no location']);
  });

  it('should print the error without callsite when it has no stack', async () => {
    process.stdout.isTTY = true;

    const error = { name: 'Error', message: 'no stack' } satisfies Error;

    await handleError(error);

    expect(printedLines()).toEqual(['[Error] no stack']);
  });

  it('should print the message when the callsite cannot be rendered', async () => {
    process.stdout.isTTY = true;
    vi.mocked(renderLocation).mockRejectedValueOnce(
      new Error('cannot read the source file'),
    );

    const error = new Error('unrenderable');

    await handleError(error);

    expect(printedLines()).toEqual(['[Error] unrenderable']);
  });

  it('should print every nested cause on a tty', async () => {
    process.stdout.isTTY = true;

    const error = new Error('failed to bootstrap packages/b', {
      cause: new LocationlessError('SyntaxError', 'Unexpected token'),
    });

    await handleError(error);

    expect(printedLines()).toEqual([
      '[Error] failed to bootstrap packages/b',
      '  [SyntaxError] Unexpected token',
    ]);
  });

  it('should print every aggregated error on a tty', async () => {
    process.stdout.isTTY = true;

    const error = new AggregateError(
      [
        new LocationlessError('Error', 'first'),
        new LocationlessError('Error', 'second'),
      ],
      'failed to bootstrap 2 of 3 projects',
    );

    await handleError(error);

    expect(printedLines()).toEqual([
      '[AggregateError] failed to bootstrap 2 of 3 projects',
      '  [Error] first',
      '  [Error] second',
    ]);
  });
});
