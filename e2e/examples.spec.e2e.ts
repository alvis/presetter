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

import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { beforeAll, beforeEach, describe, expect, it } from 'vitest';

import { EXAMPLES, EXAMPLES_DIR, TEMP_DIR } from '#config';
import { copyExample } from '#helpers/copy';
import { exec, runInstall, runScript } from '#helpers/exec';
import { log } from '#log';

/** patterns indicating installation warnings or errors */
const WARNING_PATTERNS = [
  /\bWARN\b/i,
  /\bwarning\b/i,
  /\bpeer dep\b/i,
  /\bdeprecated\b/i,
  /\bERESOLVE\b/i,
];

/** patterns for transport noise and known third-party dependency warnings */
const IGNORABLE_PATTERNS = [
  /^[A-Z_][A-Z0-9_]*=/, // diagnostic environment dump
  /request took/i,
  // registry transfer speed does not indicate a dependency problem
  /^\s*\[WARN\] Tarball download average speed [^:]+: https?:\/\/\S+ \(GET\)\s*$/,
  /not found and will be installed/i,
  /^\s*(?:\[WARN\]|WARN)\s+Issues with peer dependencies found\. Run "pnpm peers check" to list them\.\s*$/,
  /tsconfck/i, // tsconfck is depreciated recently by it's used by vite-tsconfig-paths -> vite-plugin-storybook-nextjs -> @storybook/nextjs-vite. Until https://github.com/aleclarson/vite-tsconfig-paths/issues/219 is resolved, ignore the depreciateion warning
];

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
      IGNORABLE_PATTERNS.every((pattern) => !pattern.test(line)),
  );
}

describe.each(EXAMPLES)(
  'example: $name',
  (example: (typeof EXAMPLES)[number]) => {
    describe.each(example.managers)(
      'package manager: %s',
      (manager: (typeof example.managers)[number]) => {
        const destination = join(TEMP_DIR, `${example.name}-${manager}`);
        const source = join(EXAMPLES_DIR, example.name);
        let installOutput: string;

        beforeAll(async () => {
          log(`copying ${example.name} to ${destination}`);
          await rm(destination, { recursive: true, force: true });
          await mkdir(destination, { recursive: true });
          await copyExample(source, destination, manager);

          if (example.name === 'standalone') {
            await exec('git', {
              args: ['init'],
              cwd: destination,
              silent: true,
            });
          }

          log(`installing dependencies for ${example.name} with ${manager}...`);
          installOutput = await runInstall(destination, manager);
        }, 300_000);

        beforeEach(({ onTestFailed }) => {
          onTestFailed(() => log(`install output:\n${installOutput}`));
        });

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

        if (example.name === 'standalone') {
          it('should format staged files through the generated hook and propagate task failure', async () => {
            const sourceFile = join(destination, 'src', 'index.ts');
            const packageFile = join(destination, 'package.json');
            const formatted = 'export const greeting = { ready: true };\n';

            await writeFile(sourceFile, 'export const greeting={ready:true}\n');
            await exec('git', {
              args: ['add', 'src/index.ts'],
              cwd: destination,
              silent: true,
            });
            await exec('git', {
              args: [
                '-c',
                'user.name=Presetter E2E',
                '-c',
                'user.email=presetter-e2e@example.test',
                'commit',
                '--no-gpg-sign',
                '-m',
                'Verify generated hook',
              ],
              cwd: destination,
              silent: true,
            });

            expect(await readFile(sourceFile, 'utf8')).toBe(formatted);
            expect(
              await exec('git', {
                args: ['show', 'HEAD:src/index.ts'],
                cwd: destination,
                silent: true,
              }),
            ).toContain(formatted);

            const packageJson = JSON.parse(
              await readFile(packageFile, 'utf8'),
            ) as {
              scripts: Record<string, string>;
            };
            await writeFile(
              packageFile,
              JSON.stringify(
                {
                  ...packageJson,
                  scripts: {
                    ...packageJson.scripts,
                    'lint-staged': 'false',
                  },
                },
                null,
                2,
              ),
            );
            await writeFile(
              sourceFile,
              'export const greeting={ready:false}\n',
            );
            await exec('git', {
              args: ['add', 'src/index.ts'],
              cwd: destination,
              silent: true,
            });

            await expect(
              exec('git', {
                args: [
                  '-c',
                  'user.name=Presetter E2E',
                  '-c',
                  'user.email=presetter-e2e@example.test',
                  'commit',
                  '--no-gpg-sign',
                  '-m',
                  'Reject failing staged task',
                ],
                cwd: destination,
                silent: true,
              }),
            ).rejects.toThrow();
            expect(
              await exec('git', {
                args: ['show', 'HEAD:src/index.ts'],
                cwd: destination,
                silent: true,
              }),
            ).toContain(formatted);
          });
        }
      },
    );
  },
);
