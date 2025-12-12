/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   E2E tests for presetter example projects
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2024 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

import { beforeAll, describe, expect, it } from 'vitest';

import { EXAMPLES, EXAMPLES_DIR, PACKAGE_MANAGERS, TEMP_DIR } from '#config';
import { copyExample } from '#helpers/copy';
import { runInstall, runScript } from '#helpers/exec';
import { log } from '#log';

/** patterns indicating installation warnings or errors */
const WARNING_PATTERNS = [
  /\bWARN\b/i,
  /\bwarning\b/i,
  /\bpeer dep\b/i,
  /\bdeprecated\b/i,
  /\bERESOLVE\b/i,
];

/** patterns for warnings we can ignore (third-party subdependency issues) */
const IGNORABLE_PATTERNS = [/deprecated/i];

/**
 * finds warning messages in installation output
 * @param output installation command output
 * @returns array of lines containing warnings
 */
function findWarnings(output: string): string[] {
  const lines = output.split('\n');

  return lines.filter(
    (line) =>
      WARNING_PATTERNS.some((pattern) => pattern.test(line)) &&
      !IGNORABLE_PATTERNS.some((pattern) => pattern.test(line)),
  );
}

describe.each(EXAMPLES)(
  'example: $name',
  (example: (typeof EXAMPLES)[number]) => {
    describe.each(PACKAGE_MANAGERS)(
      'package manager: %s',
      (manager: (typeof PACKAGE_MANAGERS)[number]) => {
        const destination = join(TEMP_DIR, `${example.name}-${manager}`);
        const source = join(EXAMPLES_DIR, example.name);
        let installOutput: string;

        beforeAll(async () => {
          log(`copying ${example.name} to ${destination}`);
          await rm(destination, { recursive: true, force: true });
          await mkdir(destination, { recursive: true });
          await copyExample(source, destination, manager);

          log(`installing dependencies for ${example.name} with ${manager}...`);
          installOutput = await runInstall(destination, manager);
        }, 300_000);

        it('should complete installation successfully', () => {
          expect(installOutput).toBeDefined();
        });

        it('should install without warnings', () => {
          const warnings = findWarnings(installOutput);

          expect(warnings).toEqual([]);
        });

        for (const script of example.scripts) {
          it(`should run ${script} successfully`, async () => {
            await expect(
              runScript(script, destination, manager),
            ).resolves.not.toThrow();
          });
        }
      },
    );
  },
);
