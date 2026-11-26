import { statSync } from 'node:fs';

import { describe, expect, it, vi } from 'vitest';

import { composeShellCommand, escapeForCmd, escapeForSh } from '#shell';

import type { Stats } from 'node:fs';

vi.mock('node:fs', () => ({
  statSync: vi.fn(),
}));

/**
 * make the given files the only ones that exist
 * @param files the names the existing files end with
 */
function stubFiles(...files: string[]): void {
  vi.mocked(statSync).mockImplementation(((path: string) =>
    files.some((file) => path.endsWith(file))
      ? ({ isFile: () => true } satisfies Partial<Stats> as Stats)
      : undefined) as typeof statSync);
}

describe('fn:escapeForSh', () => {
  it.each([
    ['an empty argument', '', `''`],
    ['a plain argument', '--flag=value', '--flag=value'],
    ['an argument with a space', 'a b', `'a b'`],
    ['an argument with a single quote', "it's", String.raw`'it'\''s'`],
    [
      'an argument wrapped in single quotes',
      "'quoted'",
      String.raw`\''quoted'\'`,
    ],
    ['an argument with double quotes', 'say "hi"', `'say "hi"'`],
    ['an argument with a variable', '$HOME', `'$HOME'`],
  ])('should quote %s', (_, input, expected) => {
    expect(escapeForSh(input)).toEqual(expected);
  });
});

describe('fn:escapeForCmd', () => {
  it.each([
    ['an empty argument', '', '""'],
    ['a plain argument', '--flag=value', '--flag=value'],
    ['an argument with a space', 'a b', '^"a^ b^"'],
    [
      'an argument with double quotes',
      'say "hi"',
      String.raw`^"say^ \^"hi\^"^"`,
    ],
    ['backslashes before a quote', String.raw`x\"y`, String.raw`^"x\\\^"y^"`],
    [
      'backslashes at the end of a quoted argument',
      String.raw`C:\a b\\`,
      String.raw`^"C:\a^ b\\\\^"`,
    ],
    ['backslashes elsewhere', String.raw`C:\dir\\`, String.raw`C:\dir\\`],
    ['a meta character', '100%', '100^%'],
  ])('should quote %s', (_, input, expected) => {
    expect(escapeForCmd(input, false)).toEqual(expected);
  });

  it('should quote an argument a batch file reads through cmd.exe again', () => {
    expect(escapeForCmd('a b', true)).toEqual('^^^"a^^^ b^^^"');
  });
});

describe('fn:composeShellCommand', () => {
  it('should run the script with sh on a posix system', () => {
    const result = composeShellCommand({
      command: 'vitest --run',
      args: ['--project', 'a b'],
      env: {},
      platform: 'linux',
    });

    expect(result).toEqual({
      shell: 'sh',
      args: ['-c', `vitest --run --project 'a b'`],
      windowsVerbatimArguments: false,
    });
  });

  it('should run the script with cmd.exe on Windows', () => {
    stubFiles();

    const result = composeShellCommand({
      command: 'vitest --run',
      args: ['a b'],
      env: {},
      platform: 'win32',
    });

    expect(result).toEqual({
      shell: 'cmd.exe',
      args: ['/d', '/s', '/c', 'vitest --run ^"a^ b^"'],
      windowsVerbatimArguments: true,
    });
  });

  it('should run the script with the command interpreter ComSpec names on Windows', () => {
    stubFiles();

    const result = composeShellCommand({
      command: 'vitest',
      args: [],
      env: { ComSpec: String.raw`C:\Windows\System32\cmd.exe` },
      platform: 'win32',
    });

    expect(result).toEqual({
      shell: String.raw`C:\Windows\System32\cmd.exe`,
      args: ['/d', '/s', '/c', 'vitest'],
      windowsVerbatimArguments: true,
    });
  });

  it('should quote for sh when ComSpec names a shell other than cmd.exe', () => {
    const result = composeShellCommand({
      command: 'vitest',
      args: ['a b'],
      env: { ComSpec: String.raw`C:\Program Files\Git\bin\bash.exe` },
      platform: 'win32',
    });

    expect(result).toEqual({
      shell: String.raw`C:\Program Files\Git\bin\bash.exe`,
      args: ['-c', `vitest 'a b'`],
      windowsVerbatimArguments: false,
    });
  });

  it('should quote twice for a program that PATH resolves to a batch file', () => {
    stubFiles(String.raw`\bin\vitest.CMD`);

    const result = composeShellCommand({
      command: 'vitest',
      args: ['a b'],
      env: { Path: String.raw`C:\tools;C:\bin` },
      platform: 'win32',
    });

    expect(result.args).toEqual(['/d', '/s', '/c', 'vitest ^^^"a^^^ b^^^"']);
  });

  it('should try the extensions PATHEXT lists', () => {
    stubFiles(String.raw`\bin\vitest.bat`);

    const result = composeShellCommand({
      command: 'vitest',
      args: ['a b'],
      env: { PATH: String.raw`C:\bin`, PathExt: '.exe;.bat' },
      platform: 'win32',
    });

    expect(result.args).toEqual(['/d', '/s', '/c', 'vitest ^^^"a^^^ b^^^"']);
  });

  it('should quote once for a program that PATH resolves to an executable', () => {
    stubFiles(String.raw`\bin\node.EXE`);

    const result = composeShellCommand({
      command: 'node script.js',
      args: ['a b'],
      env: { PATH: String.raw`C:\bin` },
      platform: 'win32',
    });

    expect(result.args).toEqual(['/d', '/s', '/c', 'node script.js ^"a^ b^"']);
  });

  it('should take a program named with its extension as the file itself', () => {
    stubFiles(String.raw`\bin\setup.cmd`);

    const result = composeShellCommand({
      command: 'setup.cmd',
      args: ['a b'],
      env: { PATH: String.raw`C:\bin` },
      platform: 'win32',
    });

    expect(result.args).toEqual(['/d', '/s', '/c', 'setup.cmd ^^^"a^^^ b^^^"']);
  });

  it('should look a program given with a path up by that path alone', () => {
    stubFiles(String.raw`C:\bin\vitest.CMD`);

    const result = composeShellCommand({
      command: String.raw`.\tools\vitest`,
      args: ['a b'],
      env: { PATH: String.raw`C:\bin` },
      platform: 'win32',
    });

    expect(result.args).toEqual([
      '/d',
      '/s',
      '/c',
      String.raw`.\tools\vitest ^"a^ b^"`,
    ]);
  });

  it('should read a program quoted or escaped with carets', () => {
    stubFiles(String.raw`\my tools\run.cmd`);

    const quoted = composeShellCommand({
      command: String.raw`"C:\my tools\run.cmd" --flag`,
      args: ['a b'],
      env: {},
      platform: 'win32',
    });
    const escaped = composeShellCommand({
      command: String.raw`C:\my^ tools\run.cmd --flag`,
      args: ['a b'],
      env: {},
      platform: 'win32',
    });

    expect(quoted.args.at(-1)).toEqual(
      String.raw`"C:\my tools\run.cmd" --flag ^^^"a^^^ b^^^"`,
    );
    expect(escaped.args.at(-1)).toEqual(
      String.raw`C:\my^ tools\run.cmd --flag ^^^"a^^^ b^^^"`,
    );
  });

  it('should judge a program that cannot be found by its own name', () => {
    stubFiles();

    const batch = composeShellCommand({
      command: 'missing.bat',
      args: ['a b'],
      env: {},
      platform: 'win32',
    });
    const program = composeShellCommand({
      command: 'missing',
      args: ['a b'],
      env: {},
      platform: 'win32',
    });

    expect(batch.args.at(-1)).toEqual('missing.bat ^^^"a^^^ b^^^"');
    expect(program.args.at(-1)).toEqual('missing ^"a^ b^"');
  });
});
