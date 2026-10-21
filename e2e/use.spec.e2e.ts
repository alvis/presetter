/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   E2E tests for adopting presets in an empty project
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2024 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { delimiter, join } from 'node:path';

import { beforeAll, describe, expect, it } from 'vitest';

import {
  NPM_ENV,
  PACKAGE_MANAGERS,
  PNPM_ENV,
  REGISTRY_URL,
  TEMP_DIR,
} from '#config';
import { exec, runScript } from '#helpers/exec';
import { log } from '#log';

import type { PackageJson } from 'type-fest';

describe.each(PACKAGE_MANAGERS)('cmd:presetter use (%s)', (manager) => {
  const destination = join(TEMP_DIR, `use-${manager}`);
  const managerBin = join(TEMP_DIR, 'use-pnpm-bin');
  const env = {
    ...(manager === 'npm' ? NPM_ENV : PNPM_ENV),
    NPM_CONFIG_REGISTRY: REGISTRY_URL,
    PNPM_CONFIG_REGISTRY: REGISTRY_URL,
    PATH: [
      ...(manager === 'pnpm' ? [managerBin] : []),
      ...(process.env.PATH ?? '')
        .split(delimiter)
        .filter((path) => !path.includes('node_modules')),
    ].join(delimiter),
  };
  const args = [
    ...(manager === 'npm'
      ? ['--yes', 'presetter']
      : ['--yes', 'corepack', 'pnpm', 'dlx', 'presetter']),
    'use',
    '@presetter/preset-esm',
    ...(manager === 'npm' ? ['--package-manager=npm'] : []),
  ];

  beforeAll(async () => {
    if (manager === 'pnpm') {
      await mkdir(managerBin, { recursive: true });
      await exec('npx', {
        args: [
          '--yes',
          'corepack',
          'enable',
          '--install-directory',
          managerBin,
          'pnpm',
        ],
        cwd: TEMP_DIR,
        env,
        silent: true,
      });
    }
    const pnpmVersion =
      manager === 'pnpm'
        ? /^(\d+\.\d+\.\d+)$/m.exec(
            await exec('npx', {
              args: ['--yes', 'corepack', 'pnpm@latest', '--version'],
              cwd: TEMP_DIR,
              env,
              silent: true,
            }),
          )?.[1]
        : undefined;
    if (manager === 'pnpm') {
      expect(pnpmVersion).toBeDefined();
    }
    const packageJson = JSON.stringify(
      {
        name: `use-${manager}`,
        private: true,
        type: 'module',
        packageManager: pnpmVersion ? `pnpm@${pnpmVersion}` : undefined,
      },
      null,
      2,
    );
    log(`scaffolding empty project at ${destination}`);
    await rm(destination, { recursive: true, force: true });
    await mkdir(join(destination, 'src'), { recursive: true });
    await mkdir(join(destination, 'spec'), { recursive: true });
    await writeFile(join(destination, 'package.json'), `${packageJson}\n`);
    await writeFile(
      join(destination, 'src/index.ts'),
      'export const greeting: string = "hello";\n',
    );
    await writeFile(
      join(destination, 'spec/index.spec.ts'),
      `import { expect, it } from 'vitest';
import { greeting } from '../src/index';

it('should greet', () => {
  expect(greeting).toBe('hello');
});
`,
    );
    if (manager === 'pnpm') {
      const nestedVersion = await exec('pnpm', {
        args: ['--version'],
        cwd: destination,
        env,
        silent: true,
      });
      expect(nestedVersion).toContain(`\n${pnpmVersion}\n`);
    }
    await exec('npx', {
      args,
      cwd: destination,
      env,
      input: 'y\n',
      silent: true,
    });
  }, 300_000);

  it('should install the preset and presetter and declare usable scripts', async () => {
    const json = JSON.parse(
      await readFile(join(destination, 'package.json'), 'utf8'),
    ) as PackageJson;

    expect(json).toMatchObject({
      devDependencies: {
        'presetter': expect.any(String),
        '@presetter/preset-esm': expect.any(String),
        '@typescript/native': expect.any(String),
        'typescript': expect.any(String),
        '@types/node': expect.any(String),
        'vitest': expect.any(String),
        '@vitest/coverage-v8': expect.any(String),
      },
      scripts: {
        'prepare': 'run prepare',
        'build': 'run build',
        'lint': 'run lint --',
        'pretest': 'run pretest',
        'test': 'run test --',
        'test:coverage': 'run test:coverage --',
        'test:watch': 'run test:watch --',
        'typecheck': 'run typecheck --',
      },
    });
    const compiler = await exec(join(destination, 'node_modules/.bin/tsc'), {
      args: ['--version'],
      cwd: destination,
      env,
      silent: true,
    });
    const api = await exec('node', {
      args: [
        '--input-type=module',
        '--eval',
        "import ts from 'typescript'; console.log(ts.version)",
      ],
      cwd: destination,
      env,
      silent: true,
    });
    expect(compiler).toMatch(/Version 7\./);
    expect(api).toMatch(/^6\.\d+\.\d+$/m);
    log(`adopted ${manager} project compiler and API:\n${compiler}\n${api}`);
    expect(
      await readFile(join(destination, 'presetter.config.ts'), 'utf8'),
    ).toContain("from '@presetter/preset-esm'");
    for (const file of [
      'eslint.config.ts',
      'tsconfig.json',
      'tsconfig.build.json',
      'vitest.config.ts',
      '.gitignore',
    ]) {
      expect(await readFile(join(destination, file), 'utf8')).not.toBe('');
    }
    if (manager !== 'pnpm') {
      return;
    }

    const workspace = await readFile(
      join(destination, 'pnpm-workspace.yaml'),
      'utf8',
    );
    const approvals = /^allowBuilds:\n((?: {2}.+\n)*)/m.exec(workspace)?.[1];
    expect(approvals).toMatch(/^ {2}esbuild@[^:\n]+: true$/m);
    expect(approvals).toMatch(/^ {2}unrs-resolver@[^:\n]+: true$/m);
  });

  for (const script of ['build', 'lint', 'typecheck', 'test']) {
    it(`should run ${script} successfully`, async () => {
      await runScript(script, destination, manager);
    });
  }

  it('should succeed again without changing the config or package manifest', async () => {
    const paths = ['presetter.config.ts', 'package.json'].map((file) =>
      join(destination, file),
    );
    const before = await Promise.all(
      paths.map(async (path) => readFile(path, 'utf8')),
    );

    const rerun = await exec('npx', {
      args,
      cwd: destination,
      env,
      input: '',
      silent: true,
    });

    expect(rerun).not.toMatch(/Builds deferred|Allow\? \(y\/N\)/);
    expect(
      await Promise.all(paths.map(async (path) => readFile(path, 'utf8'))),
    ).toEqual(before);
  }, 300_000);
});
