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
  ADOPTION_MANAGERS,
  MANAGER_ENV,
  REGISTRY_URL,
  TEMP_DIR,
} from '#config';
import { exec, runScript } from '#helpers/exec';
import { log } from '#log';

import type { PackageJson } from 'type-fest';

import type { PackageManager } from '#types';

/** how a package manager runs presetter use against the local registry */
interface Adoption {
  /** command and leading arguments that fetch and run presetter */
  runner: [string, ...string[]];
  /** whether corepack provides the manager, pinned through packageManager instead of --package-manager */
  corepack: boolean;
  /** asserts the build approvals the adoption recorded */
  approvals?: (destination: string) => Promise<void>;
}

const ADOPTIONS: Record<PackageManager, Adoption> = {
  npm: { runner: ['npx', '--yes', 'presetter'], corepack: false },
  pnpm: {
    runner: ['npx', '--yes', 'corepack', 'pnpm', 'dlx', 'presetter'],
    corepack: true,
    approvals: async (destination) => {
      const workspace = await readFile(
        join(destination, 'pnpm-workspace.yaml'),
        'utf8',
      );
      const approvals = /^allowBuilds:\n((?: {2}.+\n)*)/m.exec(workspace)?.[1];
      expect(approvals).toMatch(/^ {2}esbuild@[^:\n]+: true$/m);
      expect(approvals).toMatch(/^ {2}unrs-resolver@[^:\n]+: true$/m);
    },
  },
  bun: {
    runner: ['bunx', 'presetter'],
    corepack: false,
    approvals: async (destination) => {
      const json = JSON.parse(
        await readFile(join(destination, 'package.json'), 'utf8'),
      ) as PackageJson & { trustedDependencies?: string[] };
      expect(json.trustedDependencies).toEqual(
        expect.arrayContaining(['esbuild', 'unrs-resolver']),
      );
    },
  },
};

/** points every package manager at the local registry */
const REGISTRY_ENV = {
  NPM_CONFIG_REGISTRY: REGISTRY_URL,
  PNPM_CONFIG_REGISTRY: REGISTRY_URL,
  BUN_CONFIG_REGISTRY: REGISTRY_URL,
};

describe.each(ADOPTION_MANAGERS)('cmd:presetter use (%s)', (manager) => {
  const { runner, corepack, approvals } = ADOPTIONS[manager];
  const destination = join(TEMP_DIR, `use-${manager}`);
  // corepack shims here let presetter run the version pinned by packageManager
  const managerBin = join(TEMP_DIR, `use-${manager}-bin`);
  const env = {
    ...MANAGER_ENV[manager],
    ...REGISTRY_ENV,
    PATH: [
      ...(corepack ? [managerBin] : []),
      ...(process.env.PATH ?? '')
        .split(delimiter)
        .filter((path) => !path.includes('node_modules')),
    ].join(delimiter),
  };
  const [command, ...runnerArgs] = runner;
  const args = [
    ...runnerArgs,
    'use',
    '@presetter/preset-esm',
    ...(corepack ? [] : [`--package-manager=${manager}`]),
  ];

  /**
   * installs corepack shims for the manager and resolves its latest version
   * @returns the packageManager field pinning that version
   */
  async function pinManager(): Promise<string> {
    await mkdir(managerBin, { recursive: true });
    await exec('npx', {
      args: [
        '--yes',
        'corepack',
        'enable',
        '--install-directory',
        managerBin,
        manager,
      ],
      cwd: TEMP_DIR,
      env,
      silent: true,
    });
    const version = /^(\d+\.\d+\.\d+)$/m.exec(
      await exec('npx', {
        args: ['--yes', 'corepack', `${manager}@latest`, '--version'],
        cwd: TEMP_DIR,
        env,
        silent: true,
      }),
    )?.[1];
    expect(version).toBeDefined();

    return `${manager}@${version!}`;
  }

  beforeAll(async () => {
    const packageManager = corepack ? await pinManager() : undefined;
    const packageJson = JSON.stringify(
      { name: `use-${manager}`, private: true, type: 'module', packageManager },
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
    if (packageManager) {
      const nestedVersion = await exec(manager, {
        args: ['--version'],
        cwd: destination,
        env,
        silent: true,
      });
      expect(nestedVersion).toContain(
        `\n${packageManager.slice(manager.length + 1)}\n`,
      );
    }
    await exec(command, {
      args,
      cwd: destination,
      env,
      // NOTE: bun asks twice, as trusting one package drops its default trust for esbuild
      input: 'y\ny\n',
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
    await approvals?.(destination);
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

    const rerun = await exec(command, {
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
