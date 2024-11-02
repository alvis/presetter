/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Definitions for @npmcli/run-script
 * @see       https://github.com/npm/run-script
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { ChildProcess } from 'node:child_process';

import type { PackageJson } from 'type-fest';

export default function runScript<
  T extends 'inherit' | 'pipe' = 'inherit',
  S extends Boolean = true,
>(options: {
  event: string;
  args: string[];
  pkg: PackageJson;
  path?: string;
  stdio?: T;
  stdioString?: S;
}): Promise<{
  cmd: string;
  args: string[];
  code: number;
  signal: number | null;
  // NOTE: stdout and stderr are strings when stdioString is true, otherwise they are Buffers
  stdout: T extends 'inherit' ? null : S extends true ? string : Buffer;
  stderr: T extends 'inherit' ? null : S extends true ? string : Buffer;
  event: string;
  script: string;
  pkgid?: string;
  path: string;
}> & { process: ChildProcess; stdin: ChildProcess['stdin'] };
