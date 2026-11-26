import { delimiter, dirname, resolve } from 'node:path';

import { execa } from 'execa';

import debug from './debugger';
import { composeShellCommand } from './shell';

/**
 * a script running in a shell, which settles once the script has exited
 *
 * It rejects with an `ExecaError` when the script exits with a nonzero code, which it gives as `exitCode`,
 * when a signal kills the script, which it gives as `signal`, or when the shell cannot be spawned.
 */
export interface ScriptProcess extends PromiseLike<unknown> {
  /**
   * send a signal to the shell running the script
   * @param signal the signal to send
   * @returns whether the signal was delivered
   */
  kill(signal: NodeJS.Signals): boolean;
}

/**
 * start a script in a shell with the environment npm gives a package script
 * @param _ collection of arguments
 * @param _.event the name of the script
 * @param _.command the script to run
 * @param _.args the arguments to append to the script
 * @param _.cwd the project root, where the script runs
 * @param _.paths additional binary paths from preset roots
 * @returns the running script
 */
export function startScript(_: {
  event: string;
  command: string;
  args: string[];
  cwd: string;
  paths: string[];
}): ScriptProcess {
  const { event, command, args, cwd, paths } = _;
  const env = {
    // NOTE: Windows passes on the first casing of PATH in sorted order, which an upper-case PATH always is
    PATH: [
      ...listBinaryDirectories(cwd),
      ...paths,
      ...(process.env.PATH?.split(delimiter) ?? []),
    ].join(delimiter),
    npm_package_json: resolve(cwd, 'package.json'),
    npm_lifecycle_event: event,
    npm_lifecycle_script: command,
  };
  const shell = composeShellCommand({
    command,
    args,
    env: { ...process.env, ...env },
    platform: process.platform,
  });

  debug('RUNNING\n%O', { task: event, command, args, paths });

  return execa(shell.shell, shell.args, {
    cwd,
    env,
    stdio: 'inherit',
    windowsVerbatimArguments: shell.windowsVerbatimArguments,
    // NOTE: run the shell as a plain child process does: shown on Windows, never killed after a delay,
    //       and left alone when presetter exits, so the signals presetter relays are all it receives
    windowsHide: false,
    forceKillAfterDelay: false,
    cleanup: false,
  });
}

/**
 * list the node_modules/.bin directories of a folder and of every folder above it, nearest first
 * @param directory the folder to start from
 * @returns where the folder and its parents install the executables of their dependencies
 */
function listBinaryDirectories(directory: string): string[] {
  const parent = dirname(directory);
  const binaries = resolve(directory, 'node_modules', '.bin');

  return parent === directory
    ? [binaries]
    : [binaries, ...listBinaryDirectories(parent)];
}
