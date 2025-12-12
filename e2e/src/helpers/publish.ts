/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Utility for publishing packages to local Verdaccio registry
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2024 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { execa } from 'execa';

import { PNPM_ENV, ROOT_DIR, VERDACCIO_AUTH } from '../config';
import { log } from '../log';

import type { ExecaError } from 'execa';

/** default timeout for publish operation (15 minutes) */
const PUBLISH_TIMEOUT = 900_000;

/**
 * publishes all packages to the local Verdaccio registry
 * @param registry local Verdaccio registry URL
 */
export async function publishAllPackages(registry: string): Promise<void> {
  log(`publishing all packages to ${registry}...`);

  const url = new URL(registry);
  if (!url.pathname.endsWith('/')) {
    url.pathname += '/';
  }
  const registryPath = `//${url.host}${url.pathname}`;

  // set auth via pnpm config (cross-platform compatible)
  log(`setting registry auth for ${registryPath}...`);
  await execa(
    'pnpm',
    ['config', 'set', `${registryPath}:_auth`, VERDACCIO_AUTH],
    {
      cwd: ROOT_DIR,
      env: PNPM_ENV,
    },
  );

  const args = [
    '--recursive',
    'publish',
    '--force',
    '--no-git-checks',
    `--registry=${registry}`,
  ];

  log(`current working directory: ${ROOT_DIR}`);
  log(`executing: pnpm ${args.join(' ')}`);

  try {
    await execa('pnpm', args, {
      detached: true,
      cwd: ROOT_DIR,
      timeout: PUBLISH_TIMEOUT,
      // stream to terminal while capturing output
      stdout: ['inherit', 'pipe'],
      stderr: ['inherit', 'pipe'],
      env: PNPM_ENV,
    });

    log(`published all packages to local registry`);
  } catch (exception) {
    // execa provides typed errors with exitCode, stdout, stderr properties
    const error = exception as ExecaError;

    const details = [
      `publish failed with exit code: ${error.exitCode ?? 'unknown'}`,
      '',
      '=== STDOUT ===',
      error.stdout ?? '(empty)',
      '',
      '=== STDERR ===',
      error.stderr ?? '(empty)',
    ].join('\n');

    log(details);

    throw new Error(`failed to publish to local registry:\n${details}`);
  }
}
