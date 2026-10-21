/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Utility for executing shell commands
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2024 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

import { execa, ExecaError } from 'execa';

import { log } from '#log';

import {
  BUN_ENV,
  MANAGER_ENV,
  NPM_ENV,
  PNPM_ENV,
  REGISTRY_URL,
  TEMP_DIR,
} from '../config';

import type { PackageManager } from '../types';

/** default timeout for command execution (5 minutes) */
const DEFAULT_TIMEOUT = 300_000;

/** command and leading arguments that run a project script with each package manager */
const SCRIPT_RUNNERS: Record<PackageManager, [string, ...string[]]> = {
  npm: ['npx', 'corepack', 'npm', '--verbose', 'run'],
  pnpm: ['npx', 'corepack', 'pnpm', 'run'],
  bun: ['bun', 'run'],
};

/**
 * gathers context about the node_modules environment for error reporting
 * @param cwd working directory to inspect
 * @returns formatted string with package and bin information
 */
function getErrorContext(cwd: string): string {
  const context: string[] = [];

  // List node_modules packages (top-level only)
  const nodeModulesPath = join(cwd, 'node_modules');
  if (existsSync(nodeModulesPath)) {
    const packages = readdirSync(nodeModulesPath)
      .filter((name) => !name.startsWith('.'))
      .flatMap((name) => {
        if (name.startsWith('@')) {
          const scopedPath = join(nodeModulesPath, name);

          return readdirSync(scopedPath).map((sub) => `${name}/${sub}`);
        }

        return [name];
      });
    context.push(
      `=== Packages in node_modules (${packages.length}) ===\n${packages.join(', ')}`,
    );
  }

  // List available binaries
  const binPath = join(cwd, 'node_modules', '.bin');
  if (existsSync(binPath)) {
    const bins = readdirSync(binPath);
    context.push(
      `=== Commands in node_modules/.bin (${bins.length}) ===\n${bins.join(', ')}`,
    );
  }

  return context.join('\n\n');
}

/** options for command execution */
export interface ExecOptions {
  args?: string[];
  /** text sent to the command's standard input */
  input?: string;
  /** working directory for command execution */
  cwd?: string;
  /** timeout in milliseconds */
  timeout?: number;
  /** whether to suppress output */
  silent?: boolean;
  env?: Record<string, string>;
  shell?: boolean;
}

// create isolated environment to avoid user .npmrc interference
const isolatedEnv = {
  // disable interactive prompts
  CI: 'true',
  // point to non-existent .npmrc files to prevent reading any .npmrc which may cause false results
  NPM_CONFIG_USERCONFIG: join(TEMP_DIR, '.user.npmrc'),
  NPM_CONFIG_GLOBALCONFIG: join(TEMP_DIR, '.global.npmrc'),
  // point to non-existent .npmrc files to prevent reading any .npmrc which may cause false results
  PATH: process.env.PATH?.split(':')
    .filter((path) => !path.includes('node_modules'))
    .join(':'),
  // unset npm related variables inherited from the parent process
  ...Object.fromEntries(
    Object.keys(process.env)
      .filter((key) => key.startsWith('npm_'))
      .map((key) => [key, undefined]),
  ),
};

/**
 * executes a shell command asynchronously with enhanced error reporting
 * @param command command to execute
 * @param options execution options
 * @returns command output as string
 * @throws {Error} detailed context if command fails
 */
export async function exec(
  command: string,
  options: ExecOptions,
): Promise<string> {
  const { args = [], cwd = process.cwd(), timeout = DEFAULT_TIMEOUT } = options;
  const env = { ...isolatedEnv, ...options.env };

  log(`current working directory: ${cwd}`);
  log('env: ', env);
  log(`executing: ${[command, ...args].join(' ')}`);

  try {
    const output = options.silent ? 'pipe' : (['inherit', 'pipe'] as const);
    const result = await execa(command, args, {
      input: options.input,
      shell: options.shell,
      detached: true,
      cwd,
      timeout,
      // stream to terminal while capturing output when not silent
      stdout: output,
      stderr: output,
      env,
    });

    const message = [
      '=== STDOUT ===',
      result.stdout || '(empty)',
      '',
      '=== STDERR ===',
      result.stderr || '(empty)',
    ].join('\n');

    log(message);

    return message;
  } catch (error) {
    if (error instanceof ExecaError) {
      const message = [
        `Command failed: ${command}`,
        `Working directory: ${cwd}`,
        `Exit code: ${error.exitCode ?? 'unknown'}`,
        `Message: ${error.message}`,
        '',
        '=== STDOUT ===',
        (error as ExecaError).stdout ?? '(empty)',
        '',
        '=== STDERR ===',
        (error as ExecaError).stderr ?? '(empty)',
        '',
        getErrorContext(cwd),
      ].join('\n');

      throw new Error(message);
    } else {
      throw error;
    }
  }
}

// NOTE: the explicit --registry flag avoids user .npmrc interference
const registry = `--registry=${REGISTRY_URL}`;

/** installs an example's dependencies with each supported package manager */
const INSTALLERS: Record<
  PackageManager,
  (options: ExecOptions) => Promise<string>
> = {
  npm: async (options) =>
    exec('npx', {
      ...options,
      args: [
        'npm@latest',
        'install',
        '--dangerously-allow-all-scripts',
        '--strict-peer-deps',
        registry,
      ],
      env: NPM_ENV,
    }),
  pnpm: async (options) => {
    const envs = await exec('env', { ...options, env: PNPM_ENV });

    const configs = await exec('npx', {
      ...options,
      args: ['corepack', 'pnpm@latest', 'config', 'list'],
      env: PNPM_ENV,
    });

    const install = await exec('npx', {
      ...options,
      shell: true,
      args: [
        'corepack',
        'pnpm@latest',
        'install',
        '--dangerously-allow-all-builds',
        registry,
      ],
      env: PNPM_ENV,
    });

    const bins = await exec('ls', {
      ...options,
      args: ['-al', 'node_modules/.bin'],
      env: PNPM_ENV,
    });

    return [install, envs, configs, bins].join('\n\n---\n\n');
  },
  bun: async (options) => {
    const install = await exec('bun', {
      ...options,
      args: ['install', registry],
      env: BUN_ENV,
    });

    // run the install scripts bun blocks, as the other managers allow all builds
    const trust = await exec('bun', {
      ...options,
      args: ['pm', 'trust', '--all'],
      env: BUN_ENV,
    });

    return [install, trust].join('\n\n---\n\n');
  },
};

/**
 * installs an example's dependencies with the given package manager
 * @param cwd working directory
 * @param manager package manager to use
 * @returns combined output from the install commands
 */
export async function runInstall(
  cwd: string,
  manager: PackageManager,
): Promise<string> {
  return INSTALLERS[manager]({ cwd, silent: true });
}

/**
 * runs a package manager script
 * @param script script name to run
 * @param cwd working directory
 * @param manager package manager to use
 */
export async function runScript(
  script: string,
  cwd: string,
  manager: PackageManager,
): Promise<void> {
  const [command, ...args] = SCRIPT_RUNNERS[manager];

  await exec(command, {
    cwd,
    silent: true,
    args: [...args, script],
    env: MANAGER_ENV[manager],
  });
}
