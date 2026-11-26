import { statSync } from 'node:fs';
import { win32 } from 'node:path';

/** characters cmd.exe gives a meaning of its own, which a caret makes literal */
const CMD_META_CHARACTERS = /[ !%^&()<>|"]/g;

/** how a posix shell reads a single quote inside a single-quoted argument: close the quote, escape it, reopen */
const SH_QUOTED_SINGLE_QUOTE = String.raw`'\''`;

/** extensions Windows tries when PATHEXT is not set */
const DEFAULT_PATHEXT = '.EXE;.CMD;.BAT;.COM';

/** environment variables by name */
type Environment = Readonly<Record<string, string | undefined>>;

/** how to start a shell that runs a script with its arguments */
export interface ShellCommand {
  /** the shell to spawn */
  shell: string;
  /** the arguments of the shell, ending with the script and its quoted arguments */
  args: string[];
  /** whether node must pass the arguments to the shell exactly as they are, which cmd.exe needs */
  windowsVerbatimArguments: boolean;
}

/**
 * compose the shell invocation running a script with extra arguments, quoting them for that shell as npm does
 * @param _ collection of arguments
 * @param _.command the script to run
 * @param _.args the arguments to append to the script
 * @param _.env the environment the shell runs in
 * @param _.platform the operating system the shell runs on
 * @returns the shell and its arguments
 */
export function composeShellCommand(_: {
  command: string;
  args: string[];
  env: Environment;
  platform: NodeJS.Platform;
}): ShellCommand {
  const { command, args, env, platform } = _;
  const shell =
    platform === 'win32' ? (readVariable(env, 'ComSpec') ?? 'cmd.exe') : 'sh';

  if (/(?:^|\\)cmd(?:\.exe)?$/i.test(shell)) {
    // NOTE: a batch file reparses its arguments, so they need to survive cmd.exe twice
    const doubleEscape = /\.(?:bat|cmd)$/i.test(
      resolveExecutable(readFirstToken(command), env),
    );
    const script = [
      command,
      ...args.map((arg) => escapeForCmd(arg, doubleEscape)),
    ].join(' ');

    return {
      shell,
      args: ['/d', '/s', '/c', script],
      windowsVerbatimArguments: true,
    };
  }

  const script = [command, ...args.map(escapeForSh)].join(' ');

  return { shell, args: ['-c', script], windowsVerbatimArguments: false };
}

/**
 * quote an argument for a posix shell
 * @param input an argument to pass to the script
 * @returns the argument as the shell reads it back
 */
export function escapeForSh(input: string): string {
  if (!input) {
    return `''`;
  }

  if (!/[\t\n\r "#$&'()*;<>?\\`|~]/.test(input)) {
    return input;
  }

  // NOTE: close the quote around each single quote, and drop the empty quotes this leaves around a leading one
  return `'${input.replaceAll("'", () => SH_QUOTED_SINGLE_QUOTE)}'`
    .replace(/^(?:'')+(?!$)/, '')
    .replaceAll(String.raw`\'''`, String.raw`\'`);
}

/**
 * quote an argument for cmd.exe, following the parsing rules of the C runtime
 * @param input an argument to pass to the script
 * @param doubleEscape whether the argument goes through cmd.exe twice, as it does for a batch file
 * @returns the argument as the program reads it back
 */
export function escapeForCmd(input: string, doubleEscape: boolean): string {
  if (!input) {
    return '""';
  }

  const quoted = /[\t\n\v "]/.test(input) ? quoteForCmd(input) : input;
  const escaped = quoted.replaceAll(CMD_META_CHARACTERS, '^$&');

  return doubleEscape
    ? escaped.replaceAll(CMD_META_CHARACTERS, '^$&')
    : escaped;
}

/**
 * wrap an argument in double quotes the C runtime reads back as the argument
 * @param input an argument holding whitespace or a double quote
 * @returns the argument in double quotes
 */
function quoteForCmd(input: string): string {
  // NOTE: backslashes are literal unless they precede a quote,
  //       so double only those and the ones before the closing quote, then escape the quote itself
  const body = input.replaceAll(/\\+|"/g, (match, offset: number) => {
    if (match === '"') {
      return String.raw`\"`;
    }

    const next = input.charAt(offset + match.length);

    return next === '"' || next === '' ? match.repeat(2) : match;
  });

  return `"${body}"`;
}

/**
 * read the program a cmd.exe command starts, undoing the carets and quotes around it
 * @param command a script as cmd.exe runs it
 * @returns the name or path of the program the script starts
 */
function readFirstToken(command: string): string {
  // NOTE: outside quotes a caret escapes the next character and a space ends the token,
  //       and as the pattern also matches nothing, it always finds a token
  const [token] = /^(?:"[^"]*(?:"|$)|\^[^]|[^ "^]|\^$)*/.exec(command)!;
  const program = token.replaceAll(
    /("[^"]*(?:"|$))|\^([^])/g,
    (_, quoted?: string, escaped?: string) => quoted ?? escaped!,
  );

  return program.startsWith('"') && program.endsWith('"')
    ? program.slice(1, -1)
    : program;
}

/**
 * find the file Windows runs for a program, searching the current directory and PATH with each extension in PATHEXT
 * @param program the name or path of the program, as the script gives it
 * @param env the environment holding PATH and PATHEXT
 * @returns the path to the file, or the program itself if no file is found
 */
function resolveExecutable(program: string, env: Environment): string {
  const directories = /[/\\]/.test(program)
    ? ['']
    : [process.cwd(), ...(readVariable(env, 'PATH') ?? '').split(';')];
  const extensions = (readVariable(env, 'PATHEXT') ?? DEFAULT_PATHEXT).split(
    ';',
  );
  // NOTE: a program named with an extension may be the file itself
  const suffixes = program.includes('.') ? ['', ...extensions] : extensions;

  const candidates = directories.flatMap((directory) =>
    suffixes.map((suffix) => win32.join(directory, `${program}${suffix}`)),
  );

  return (
    candidates.find((candidate) =>
      statSync(candidate, { throwIfNoEntry: false })?.isFile(),
    ) ?? program
  );
}

/**
 * read an environment variable regardless of the case of its name, as Windows does
 * @param env the variables to search
 * @param name the variable to read, in any case
 * @returns the value of the variable, if set
 */
function readVariable(env: Environment, name: string): string | undefined {
  // NOTE: an empty variable counts as unset, as it does for the shell
  const key = Object.keys(env)
    .sort()
    .find(
      (candidate) =>
        candidate.toLowerCase() === name.toLowerCase() && env[candidate],
    );

  return key === undefined ? undefined : env[key];
}
