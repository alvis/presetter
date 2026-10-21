import { info } from 'node:console';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Readable } from 'node:stream';

import { execa, ExecaError } from 'execa';
import { createJiti } from 'jiti';
import { describe, expect, test, vi } from 'vitest';

import { bootstrap } from '#preset/bootstrap';
import { resolvePreset } from '#preset/resolution/preset';
import { use } from '#preset/use';

import type { PackageJson } from 'type-fest';

vi.mock(
  'node:console',
  () =>
    ({ info: vi.fn<typeof info>() }) satisfies Partial<
      typeof import('node:console')
    >,
);
vi.mock('execa', async (importOriginal) => {
  const original = await importOriginal<typeof import('execa')>();

  return {
    ...original,
    // execa also has a bound-options overload; adoption only uses the command overload
    execa: vi.fn() as typeof execa,
  } satisfies typeof import('execa');
});
vi.mock(
  '#preset/bootstrap',
  () =>
    ({ bootstrap: vi.fn<typeof bootstrap>() }) satisfies Partial<
      typeof import('#preset/bootstrap')
    >,
);
vi.mock('jiti', () => {
  const jiti = { import: vi.fn(async (id: string) => ({ id })) };

  return {
    createJiti: vi.fn(() => jiti) as unknown as typeof createJiti,
  } satisfies Partial<typeof import('jiti')>;
});
vi.mock(
  '#preset/resolution/preset',
  () =>
    ({
      resolvePreset: vi.fn(async () => ({
        definition: {
          id: 'test',
          setup: {
            scripts: {
              build: 'run build',
              lint: 'run lint --',
              test: 'run test --',
            },
          },
        },
        nodes: [],
      })),
    }) satisfies Partial<typeof import('#preset/resolution/preset')>,
);

const it = test.extend<{ root: string }>({
  root: async ({ task }, provide) => {
    const root = await mkdtemp(join(tmpdir(), 'presetter-use-'));
    await writeFile(
      join(root, 'package.json'),
      `${JSON.stringify({ name: task.name, private: true, type: 'module' }, null, 2)}\n`,
    );
    try {
      await provide(root);
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  },
});

function result(stdout: string): Awaited<ReturnType<typeof execa>> {
  return { stdout } as Awaited<ReturnType<typeof execa>>;
}

/**
 * models npm's cross-section save effects so preservation assertions detect unsafe flags
 * @param root the project directory
 * @param args npm install arguments
 */
async function saveNpmPackages(
  root: string,
  args: readonly string[],
): Promise<Awaited<ReturnType<typeof execa>>> {
  const path = join(root, 'package.json');
  const json = JSON.parse(await readFile(path, 'utf8')) as PackageJson;
  const section = args.includes('--save-prod')
    ? 'dependencies'
    : args.includes('--save-peer')
      ? 'peerDependencies'
      : 'devDependencies';
  for (const specification of args.slice(2)) {
    const [name, version = '*'] = specification.split('@', 2) as [
      string,
      string?,
    ];
    (json[section] ??= {})[name] = version;
    if (section === 'dependencies') {
      delete json.peerDependencies?.[name];
    }
    if (
      section === 'peerDependencies' &&
      Object.hasOwn(json.devDependencies ?? {}, name)
    ) {
      json.devDependencies![name] = version;
    }
  }
  await writeFile(path, JSON.stringify(json));

  return result('');
}

describe('fn:use', () => {
  it.for(['npm', 'pnpm', 'yarn', 'bun'] as const)(
    'should install side-by-side compiler aliases as setup packages with %s',
    async (manager, { root }) => {
      vi.mocked(resolvePreset).mockResolvedValueOnce({
        definition: {
          id: 'synthetic',
          setup: {
            devDependencies: {
              '@typescript/native': 'npm:typescript@^7.0.0',
              'typescript': 'npm:@typescript/typescript6@^6.0.0',
            },
          },
        },
        nodes: [],
      });

      await use(['preset'], { cwd: root, packageManager: manager });

      expect(vi.mocked(execa).mock.calls).toEqual([
        [
          manager,
          [
            manager === 'npm' ? 'install' : 'add',
            manager === 'bun' ? '-d' : '-D',
            'presetter',
            'preset',
          ],
          expect.objectContaining({ cwd: root }),
        ],
        [
          manager,
          [
            manager === 'npm' ? 'install' : 'add',
            manager === 'bun' ? '-d' : '-D',
            '@typescript/native@npm:typescript@^7.0.0',
            'typescript@npm:@typescript/typescript6@^6.0.0',
          ],
          expect.objectContaining({ cwd: root }),
        ],
      ]);
      expect(bootstrap).toHaveBeenCalledWith(root);
    },
  );

  it('should install every setup section in order and preserve packages installed by an earlier section', async ({
    root,
  }) => {
    vi.mocked(resolvePreset).mockResolvedValueOnce({
      definition: {
        id: 'synthetic',
        setup: {
          dependencies: { shared: '^1', runtime: '^1' },
          devDependencies: { shared: '^2', tool: '^1' },
          peerDependencies: { peer: '^1' },
        },
      },
      nodes: [],
    });
    vi.mocked(execa).mockImplementation((async (
      _manager: string | URL,
      args: readonly string[],
    ) => {
      const json = JSON.parse(
        await readFile(join(root, 'package.json'), 'utf8'),
      ) as PackageJson;
      const argumentsList = args;
      const section = argumentsList.includes('--save-prod')
        ? 'dependencies'
        : argumentsList.includes('--save-peer')
          ? 'peerDependencies'
          : 'devDependencies';
      const packages = argumentsList.slice(2).map((specification) => {
        const [name, version = '*'] = specification.split('@', 2);

        return [name, version];
      });
      await writeFile(
        join(root, 'package.json'),
        JSON.stringify({
          ...json,
          [section]: { ...json[section], ...Object.fromEntries(packages) },
        }),
      );

      return result('');
    }) as typeof execa);

    await use(['preset'], { cwd: root, packageManager: 'npm' });

    expect(vi.mocked(execa).mock.calls.map(([, args]) => args)).toEqual([
      ['install', '-D', 'presetter', 'preset'],
      ['install', '--save-prod', 'shared@^1', 'runtime@^1'],
      ['install', '-D', 'tool@^1'],
      ['install', '--save-peer', 'peer@^1'],
    ]);
    expect(
      JSON.parse(await readFile(join(root, 'package.json'), 'utf8')),
    ).toMatchObject({
      dependencies: { shared: '^1', runtime: '^1' },
      devDependencies: { presetter: '*', preset: '*', tool: '^1' },
      peerDependencies: { peer: '^1' },
    });
    expect(vi.mocked(bootstrap).mock.calls).toEqual([[root]]);
  });

  it.for(['dependencies', 'devDependencies'] as const)(
    'should preserve an existing peer under npm setup %s save semantics',
    async (section, { root }) => {
      await writeFile(
        join(root, 'package.json'),
        JSON.stringify({
          name: 'peer-library',
          peerDependencies: { typescript: '^5' },
        }),
      );
      vi.mocked(resolvePreset).mockResolvedValueOnce({
        definition: {
          id: 'peer-library',
          setup: { [section]: { typescript: '^6' } },
        },
        nodes: [],
      });
      vi.mocked(execa).mockImplementation((async (
        _manager: string | URL,
        args: readonly string[],
      ) => saveNpmPackages(root, args)) as typeof execa);

      await use(['preset'], { cwd: root, packageManager: 'npm' });

      expect(vi.mocked(execa).mock.calls.map(([, args]) => args)).toEqual([
        ['install', '-D', 'presetter', 'preset'],
        ...(section === 'devDependencies'
          ? [['install', '-D', 'typescript@^6']]
          : []),
      ]);
      expect(
        JSON.parse(await readFile(join(root, 'package.json'), 'utf8')),
      ).toMatchObject({
        peerDependencies: { typescript: '^5' },
        ...(section === 'devDependencies' && {
          devDependencies: { typescript: '^6' },
        }),
      });
      expect(bootstrap).toHaveBeenCalledWith(root);
    },
  );

  it('should skip a peer declaration for an existing runtime dependency', async ({
    root,
  }) => {
    await writeFile(
      join(root, 'package.json'),
      JSON.stringify({ name: 'library', dependencies: { typescript: '^5' } }),
    );
    vi.mocked(resolvePreset).mockResolvedValueOnce({
      definition: {
        id: 'library',
        setup: { peerDependencies: { typescript: '>=6', fresh: '^1' } },
      },
      nodes: [],
    });
    vi.mocked(execa).mockImplementation((async (
      _manager: string | URL,
      args: readonly string[],
    ) => saveNpmPackages(root, args)) as typeof execa);

    await use(['preset'], { cwd: root, packageManager: 'npm' });

    expect(vi.mocked(execa).mock.calls.map(([, args]) => args)).toEqual([
      ['install', '-D', 'presetter', 'preset'],
      ['install', '--save-peer', 'fresh@^1'],
    ]);
    const json = JSON.parse(
      await readFile(join(root, 'package.json'), 'utf8'),
    ) as PackageJson;
    expect(json.dependencies).toEqual({ typescript: '^5' });
    expect(json.peerDependencies).toEqual({ fresh: '^1' });
  });

  it('should add a peer directly while preserving existing devDependencies and manifest formatting', async ({
    root,
  }) => {
    const original =
      `${JSON.stringify({ name: 'library', devDependencies: { typescript: '^5' } }, null, '\t')}\n`.replaceAll(
        '\n',
        '\r\n',
      );
    await writeFile(join(root, 'package.json'), original);
    vi.mocked(resolvePreset).mockResolvedValueOnce({
      definition: {
        id: 'library',
        setup: { peerDependencies: { typescript: '>=6', fresh: '^1' } },
      },
      nodes: [],
    });
    vi.mocked(execa).mockImplementation((async (
      _manager: string | URL,
      args: readonly string[],
    ) => saveNpmPackages(root, args)) as typeof execa);

    await use(['preset'], { cwd: root, packageManager: 'npm' });

    expect(vi.mocked(execa).mock.calls.map(([, args]) => args)).toEqual([
      ['install', '-D', 'presetter', 'preset'],
      ['install', '--save-peer', 'fresh@^1'],
    ]);
    const content = await readFile(join(root, 'package.json'), 'utf8');
    expect(JSON.parse(content)).toMatchObject({
      devDependencies: { typescript: '^5' },
      peerDependencies: { typescript: '>=6', fresh: '^1' },
    });
    expect(content).toContain('\r\n\t"peerDependencies":');
    expect(content.endsWith('\r\n')).toBe(true);
  });

  it('should keep peerDependencies sorted when adding a peer directly', async ({
    root,
  }) => {
    await writeFile(
      join(root, 'package.json'),
      JSON.stringify({
        name: 'library',
        devDependencies: { typescript: '^5' },
        peerDependencies: { zod: '^3' },
      }),
    );
    vi.mocked(resolvePreset).mockResolvedValueOnce({
      definition: {
        id: 'library',
        setup: { peerDependencies: { typescript: '>=6' } },
      },
      nodes: [],
    });
    vi.mocked(execa).mockImplementation((async (
      _manager: string | URL,
      args: readonly string[],
    ) => saveNpmPackages(root, args)) as typeof execa);

    await use(['preset'], { cwd: root, packageManager: 'npm' });

    const json = JSON.parse(
      await readFile(join(root, 'package.json'), 'utf8'),
    ) as PackageJson;
    expect(json.peerDependencies).toEqual({ typescript: '>=6', zod: '^3' });
    expect(Object.keys(json.peerDependencies!)).toEqual(['typescript', 'zod']);
  });

  it('should resolve setup from the installed presets without loading presetter.config.ts', async ({
    root,
  }) => {
    await use(['preset', 'preset@^2', '@scope/other@next'], {
      cwd: root,
      packageManager: 'npm',
    });

    const jiti = vi.mocked(createJiti).mock.results[0]!.value as {
      import: ReturnType<typeof vi.fn>;
    };
    expect(createJiti).toHaveBeenCalledWith(join(root, 'package.json'), {
      moduleCache: false,
    });
    expect(jiti.import.mock.calls).toEqual([
      ['preset', { default: true }],
      ['@scope/other', { default: true }],
    ]);
    expect(resolvePreset).toHaveBeenCalledWith(
      {
        id: 'presetter.config',
        extends: [{ id: 'preset' }, { id: '@scope/other' }],
      },
      expect.objectContaining({ projectRoot: root }),
    );
  });

  it('should preserve the installed development range when the preset also declares a peer', async ({
    root,
  }) => {
    vi.mocked(resolvePreset).mockResolvedValueOnce({
      definition: {
        id: 'library',
        setup: {
          devDependencies: { typescript: '^6' },
          peerDependencies: { typescript: '>=5' },
        },
      },
      nodes: [],
    });
    vi.mocked(execa).mockImplementation((async (
      _manager: string | URL,
      args: readonly string[],
    ) => saveNpmPackages(root, args)) as typeof execa);

    await use(['preset'], { cwd: root, packageManager: 'npm' });

    expect(vi.mocked(execa).mock.calls.map(([, args]) => args)).toEqual([
      ['install', '-D', 'presetter', 'preset'],
      ['install', '-D', 'typescript@^6'],
    ]);
    expect(
      JSON.parse(await readFile(join(root, 'package.json'), 'utf8')),
    ).toMatchObject({
      devDependencies: { presetter: '*', preset: '*', typescript: '^6' },
      peerDependencies: { typescript: '>=5' },
    });
  });

  it('should trust a successful preset install when all setup packages are already declared', async ({
    root,
  }) => {
    vi.spyOn(process, 'stdin', 'get').mockReturnValue(
      Readable.from([]) as typeof process.stdin,
    );
    await writeFile(
      join(root, 'package.json'),
      JSON.stringify({
        name: 'library',
        devDependencies: { typescript: '^6' },
      }),
    );
    vi.mocked(resolvePreset).mockResolvedValueOnce({
      definition: {
        id: 'library',
        setup: { devDependencies: { typescript: '^6' } },
      },
      nodes: [],
    });
    vi.mocked(execa).mockImplementation((async (
      _manager: string | URL,
      args: readonly string[],
    ) =>
      result(
        args[0] === 'ignored-builds'
          ? 'Automatically ignored builds during installation:\n  esbuild@0.28.2\n'
          : '',
      )) as typeof execa);

    await use(['preset'], { cwd: root, packageManager: 'pnpm' });

    expect(vi.mocked(execa).mock.calls.map(([, args]) => args)).toEqual([
      ['add', '-D', 'presetter', 'preset'],
    ]);
    expect(bootstrap).toHaveBeenCalledWith(root);
  });

  it('should check pending builds once when neither install stage installs anything', async ({
    root,
  }) => {
    vi.spyOn(process, 'stdin', 'get').mockReturnValue(
      Readable.from([]) as typeof process.stdin,
    );
    await writeFile(
      join(root, 'package.json'),
      JSON.stringify({
        name: 'library',
        devDependencies: { presetter: '^9', preset: '^1', typescript: '^6' },
      }),
    );
    vi.mocked(resolvePreset).mockResolvedValueOnce({
      definition: {
        id: 'library',
        setup: { devDependencies: { typescript: '^6' } },
      },
      nodes: [],
    });
    vi.mocked(execa)
      .mockResolvedValueOnce(
        result(
          'Automatically ignored builds during installation:\n  esbuild@0.28.2\n',
        ),
      )
      .mockResolvedValueOnce(result(''));

    await use(['preset'], { cwd: root, packageManager: 'pnpm' });

    expect(vi.mocked(execa).mock.calls.map(([, args]) => args)).toEqual([
      ['ignored-builds'],
      ['why', 'esbuild'],
    ]);
    expect(bootstrap).not.toHaveBeenCalled();
    expect(
      JSON.parse(await readFile(join(root, 'package.json'), 'utf8')),
    ).toMatchObject({ devDependencies: { typescript: '^6' } });
  });

  it('should detect the current project with default options and preserve CRLF formatting', async ({
    root,
  }) => {
    vi.spyOn(process, 'cwd').mockReturnValue(root);
    await writeFile(
      join(root, 'package.json'),
      '{\r\n    "name": "default",\r\n    "packageManager": "npm@11.6.0"\r\n}\r\n',
    );

    await use(['preset']);

    const manifest = await readFile(join(root, 'package.json'), 'utf8');
    expect(manifest).toContain('\r\n    "scripts":');
    expect(manifest.endsWith('\r\n')).toBe(true);
    expect(vi.mocked(bootstrap).mock.calls).toEqual([[root]]);
  });

  it('should accept quoted version ranges and deduplicate imported preset names', async ({
    root,
  }) => {
    await writeFile(
      join(root, 'package.json'),
      JSON.stringify({ name: 'duplicates', dependencies: { unscoped: '^1' } }),
    );

    await use(['@scope/preset@>=1 <3', '@scope/preset', 'unscoped@latest'], {
      cwd: root,
      packageManager: 'npm',
    });

    const config = await readFile(join(root, 'presetter.config.ts'), 'utf8');
    expect(config.match(/from '@scope\/preset'/g)).toEqual([
      "from '@scope/preset'",
    ]);
    expect(vi.mocked(execa).mock.calls).toEqual([
      [
        'npm',
        ['install', '-D', 'presetter', '@scope/preset@>=1 <3'],
        {
          cwd: root,
          stdin: 'ignore',
          stdout: ['inherit', 'pipe'],
          stderr: ['inherit', 'pipe'],
        },
      ],
    ]);
  });

  it('should adopt presets from the nearest package root and bootstrap after writing scripts', async ({
    root,
  }) => {
    await mkdir(join(root, 'src'));
    await writeFile(
      join(root, 'package.json'),
      '{\n\t"name": "example",\n\t"custom": true,\n\t"devDependencies": { "existing": "1" },\n\t"scripts": { "build": "custom build", "test": "run test --" }\n}\n',
    );
    vi.mocked(bootstrap).mockImplementationOnce(async (cwd) => {
      const json = JSON.parse(
        await readFile(join(cwd!, 'package.json'), 'utf8'),
      ) as PackageJson;
      expect(json.scripts).toEqual({
        build: 'custom build',
        lint: 'run lint --',
        test: 'run test --',
      });
    });

    await use(['@scope/preset@^2', 'unscoped@latest'], {
      cwd: join(root, 'src'),
      packageManager: 'npm',
    });

    const config = await readFile(join(root, 'presetter.config.ts'), 'utf8');
    const manifest = await readFile(join(root, 'package.json'), 'utf8');
    expect(config).toBe(`import preset0 from '@scope/preset';
import preset1 from 'unscoped';

import { preset } from 'presetter';

import { name } from './package.json' with { type: 'json' };

export default preset(name, {
  extends: [preset0, preset1],
});
`);
    expect(JSON.parse(manifest)).toMatchObject({
      custom: true,
      devDependencies: { existing: '1' },
    });
    expect(manifest).toContain('\n\t"scripts":');
    expect(manifest.endsWith('\n')).toBe(true);
    expect(vi.mocked(execa).mock.calls).toEqual([
      [
        'npm',
        ['install', '-D', 'presetter', '@scope/preset@^2', 'unscoped@latest'],
        {
          cwd: root,
          stdin: 'ignore',
          stdout: ['inherit', 'pipe'],
          stderr: ['inherit', 'pipe'],
        },
      ],
    ]);
    expect(vi.mocked(info).mock.calls).toEqual([
      [expect.stringContaining('Installing')],
      [expect.stringMatching(/Skipping.*build/)],
      [expect.stringMatching(/Adding.*lint/)],
      [expect.stringMatching(/Keeping.*test/)],
    ]);
  });

  it('should succeed with identical config and scripts on repeated adoption', async ({
    root,
  }) => {
    await use(['@scope/preset'], { cwd: root, packageManager: 'npm' });
    const before = await Promise.all(
      ['presetter.config.ts', 'package.json'].map(async (file) =>
        readFile(join(root, file), 'utf8'),
      ),
    );

    await use(['@scope/preset@latest'], { cwd: root, packageManager: 'npm' });

    expect(
      await Promise.all(
        ['presetter.config.ts', 'package.json'].map(async (file) =>
          readFile(join(root, file), 'utf8'),
        ),
      ),
    ).toEqual(before);
  });

  it('should skip installation when every tool is already in either dependency map', async ({
    root,
  }) => {
    vi.mocked(execa)
      .mockResolvedValueOnce(result('false\n'))
      .mockResolvedValueOnce(result('false\n'))
      .mockResolvedValueOnce(result('false\n'))
      .mockResolvedValueOnce(result('false\n'));
    vi.mocked(resolvePreset).mockResolvedValueOnce({
      definition: {
        id: 'test',
        setup: {
          scripts: {
            build: 'run build',
            lint: 'run lint --',
            test: 'run test --',
          },
          devDependencies: {
            'typescript': '^6.0.0',
            '@types/node': '^24.0.0',
          },
        },
      },
      nodes: [],
    });
    await writeFile(
      join(root, 'package.json'),
      JSON.stringify({
        name: 'adopted',
        devDependencies: {
          unscoped: '^1',
          typescript: '^5.9.0',
        },
        dependencies: {
          'presetter': '^8',
          '@scope/preset': '^1',
          '@types/node': '^22.0.0',
        },
      }),
    );

    await use(['@scope/preset@latest', 'unscoped@^2'], {
      cwd: root,
      packageManager: 'npm',
    });

    expect(vi.mocked(execa).mock.calls).toEqual([
      ['npm', ['config', 'get', 'strict-allow-scripts'], { cwd: root }],
    ]);
    expect(bootstrap).toHaveBeenCalledWith(root);
    const before = await readFile(join(root, 'package.json'), 'utf8');
    expect(JSON.parse(before)).toMatchObject({
      scripts: {
        build: 'run build',
        lint: 'run lint --',
        test: 'run test --',
      },
    });

    await use(['@scope/preset@latest', 'unscoped@^2'], {
      cwd: root,
      packageManager: 'npm',
    });

    expect(vi.mocked(execa).mock.calls).toEqual([
      ['npm', ['config', 'get', 'strict-allow-scripts'], { cwd: root }],
      ['npm', ['config', 'get', 'strict-allow-scripts'], { cwd: root }],
    ]);
    expect(bootstrap).toHaveBeenCalledTimes(2);
    expect(await readFile(join(root, 'package.json'), 'utf8')).toBe(before);
  });

  it.for([
    ['npm', 'install'],
    ['pnpm', 'add'],
  ] as const)(
    'should install only the missing preset with %s and preserve declared dependencies',
    async ([manager, command], { root }) => {
      const dependencies = { presetter: '^8' };
      const devDependencies = { unscoped: '1.2.3' };
      await writeFile(
        join(root, 'package.json'),
        JSON.stringify({
          name: 'partial-presets',
          dependencies,
          devDependencies,
        }),
      );

      await use(['unscoped@latest', '@scope/preset@latest'], {
        cwd: root,
        packageManager: manager,
      });

      expect(vi.mocked(execa).mock.calls).toEqual([
        [
          manager,
          [command, '-D', '@scope/preset@latest'],
          {
            cwd: root,
            stdin: 'ignore',
            stdout: ['inherit', 'pipe'],
            stderr: ['inherit', 'pipe'],
          },
        ],
      ]);
      expect(vi.mocked(info).mock.calls).toEqual([
        [`Installing @scope/preset@latest with ${manager}`],
        [expect.stringMatching(/Adding.*build/)],
        [expect.stringMatching(/Adding.*lint/)],
        [expect.stringMatching(/Adding.*test/)],
      ]);
      expect(
        JSON.parse(await readFile(join(root, 'package.json'), 'utf8')),
      ).toMatchObject({ dependencies, devDependencies });
      expect(bootstrap).toHaveBeenCalledWith(root);
    },
  );

  it('should install only missing tools and preserve existing dependency versions', async ({
    root,
  }) => {
    vi.mocked(resolvePreset).mockResolvedValueOnce({
      definition: {
        id: 'test',
        setup: {
          scripts: {
            build: 'run build',
            lint: 'run lint --',
            test: 'run test --',
          },
          devDependencies: {
            'typescript': '^6.0.0',
            '@types/node': '^24.0.0',
            'vitest': '^5.0.0',
          },
        },
      },
      nodes: [],
    });
    await writeFile(
      join(root, 'package.json'),
      JSON.stringify({
        name: 'partial',
        dependencies: { 'presetter': '^8', '@types/node': '^22.0.0' },
        devDependencies: { typescript: '^5.9.0' },
      }),
    );

    vi.mocked(execa)
      .mockResolvedValueOnce(result(''))
      .mockResolvedValueOnce(result(''));
    await use(['@scope/preset@^2'], { cwd: root, packageManager: 'npm' });

    expect(vi.mocked(execa).mock.calls).toEqual([
      [
        'npm',
        ['install', '-D', '@scope/preset@^2'],
        {
          cwd: root,
          stdin: 'ignore',
          stdout: ['inherit', 'pipe'],
          stderr: ['inherit', 'pipe'],
        },
      ],
      [
        'npm',
        ['install', '-D', 'vitest@^5.0.0'],
        {
          cwd: root,
          stdin: 'ignore',
          stdout: ['inherit', 'pipe'],
          stderr: ['inherit', 'pipe'],
        },
      ],
    ]);
    expect(
      JSON.parse(await readFile(join(root, 'package.json'), 'utf8')),
    ).toMatchObject({
      dependencies: { 'presetter': '^8', '@types/node': '^22.0.0' },
      devDependencies: { typescript: '^5.9.0' },
      scripts: {
        build: 'run build',
        lint: 'run lint --',
        test: 'run test --',
      },
    });
  });

  it('should install declared setup tools when dependency maps are absent', async ({
    root,
  }) => {
    vi.mocked(resolvePreset).mockResolvedValueOnce({
      definition: {
        id: 'test',
        setup: {
          devDependencies: {
            'typescript': '^6.0.0',
            '@types/node': '^24.0.0',
          },
        },
      },
      nodes: [],
    });

    await use(['preset'], { cwd: root, packageManager: 'npm' });

    expect(vi.mocked(execa).mock.calls).toEqual([
      [
        'npm',
        ['install', '-D', 'presetter', 'preset'],
        {
          cwd: root,
          stdin: 'ignore',
          stdout: ['inherit', 'pipe'],
          stderr: ['inherit', 'pipe'],
        },
      ],
      [
        'npm',
        ['install', '-D', 'typescript@^6.0.0', '@types/node@^24.0.0'],
        {
          cwd: root,
          stdin: 'ignore',
          stdout: ['inherit', 'pipe'],
          stderr: ['inherit', 'pipe'],
        },
      ],
    ]);
    expect(bootstrap).toHaveBeenCalledWith(root);
  });

  it('should read the latest manifest before merging setup scripts', async ({
    root,
  }) => {
    vi.mocked(resolvePreset).mockImplementationOnce(async () => {
      await writeFile(
        join(root, 'package.json'),
        JSON.stringify({
          name: 'installed',
          devDependencies: { presetter: '^9', preset: '^1' },
          scripts: { custom: 'from install' },
        }),
      );

      return {
        definition: { id: 'test', setup: { scripts: { build: 'run build' } } },
        nodes: [],
      };
    });

    await use(['preset'], { cwd: root, packageManager: 'npm' });

    expect(
      JSON.parse(await readFile(join(root, 'package.json'), 'utf8')),
    ).toMatchObject({
      devDependencies: { presetter: '^9', preset: '^1' },
      scripts: { custom: 'from install', build: 'run build' },
    });
  });

  it('should reject a differing config before installation or file writes', async ({
    root,
  }) => {
    const manifest = await readFile(join(root, 'package.json'), 'utf8');
    await writeFile(join(root, 'presetter.config.ts'), 'custom config');

    await expect(
      use(['@scope/preset'], { cwd: root, packageManager: 'npm' }),
    ).rejects.toThrow(/presetter\.config\.ts/);

    expect(vi.mocked(execa).mock.calls).toEqual([]);
    expect(await readFile(join(root, 'package.json'), 'utf8')).toBe(manifest);
    expect(await readFile(join(root, 'presetter.config.ts'), 'utf8')).toBe(
      'custom config',
    );
  });

  it.for(['mts', 'mjs', 'js'])(
    'should reject an existing .%s config even beside an identical generated .ts config',
    async (extension, { root }) => {
      await use(['preset'], { cwd: root, packageManager: 'npm' });
      const manifest = await readFile(join(root, 'package.json'), 'utf8');
      const calls = vi.mocked(execa).mock.calls.length;
      const path = join(root, `presetter.config.${extension}`);
      await writeFile(path, 'existing config');

      await expect(
        use(['preset'], { cwd: root, packageManager: 'npm' }),
      ).rejects.toThrow(`presetter.config.${extension}`);

      expect(vi.mocked(execa).mock.calls).toHaveLength(calls);
      expect(await readFile(join(root, 'package.json'), 'utf8')).toBe(manifest);
      expect(await readFile(path, 'utf8')).toBe('existing config');
    },
  );

  it.for([
    ['npm', 'install', '-D'],
    ['pnpm', 'add', '-D'],
    ['yarn', 'add', '-D'],
    ['bun', 'add', '-d'],
  ] as const)(
    'should use explicit %s when lockfiles conflict',
    async ([manager, command, flag], { root }) => {
      await writeFile(join(root, 'pnpm-lock.yaml'), '');
      await writeFile(join(root, 'yarn.lock'), '');

      await use(['preset'], { cwd: root, packageManager: manager });

      const calls: unknown[][] = [
        [
          manager,
          [command, flag, 'presetter', 'preset'],
          {
            cwd: root,
            stdin: 'ignore',
            stdout: ['inherit', 'pipe'],
            stderr: ['inherit', 'pipe'],
          },
        ],
      ];
      expect(vi.mocked(execa).mock.calls).toEqual(calls);
    },
  );

  it.for([undefined, 'pnpm', 'npm'] as const)(
    'should prefer packageManager over lockfiles and flag %s without enforcing its version',
    async (flag, { root }) => {
      await writeFile(
        join(root, 'package.json'),
        '{"name":"test","packageManager":"pnpm@11.6.0"}',
      );
      await writeFile(join(root, 'yarn.lock'), '');

      await use(['preset'], { cwd: root, packageManager: flag });

      const manifest = await readFile(join(root, 'package.json'), 'utf8');
      expect(execa).toHaveBeenCalledWith('pnpm', expect.any(Array), {
        cwd: root,
        stdin: 'ignore',
        stdout: ['inherit', 'pipe'],
        stderr: ['inherit', 'pipe'],
      });
      expect(manifest.endsWith('\n')).toBe(false);
      expect(vi.mocked(info).mock.calls).toEqual([
        ...(flag === 'npm'
          ? [
              [
                'Using pnpm from packageManager; --package-manager=npm was ignored',
              ],
            ]
          : []),
        ['Installing presetter, preset with pnpm'],
        ['Adding script build'],
        ['Adding script lint'],
        ['Adding script test'],
      ]);
    },
  );

  it.for([
    ['package-lock.json', 'npm'],
    ['npm-shrinkwrap.json', 'npm'],
    ['pnpm-lock.yaml', 'pnpm'],
    ['yarn.lock', 'yarn'],
    ['bun.lock', 'bun'],
    ['bun.lockb', 'bun'],
  ] as const)(
    'should detect %s in the project root',
    async ([lockfile, manager], { root }) => {
      await writeFile(join(root, lockfile), '');

      const flag = manager === 'npm' ? 'pnpm' : 'npm';
      await use(['preset'], { cwd: root, packageManager: flag });

      expect(execa).toHaveBeenCalledWith(manager, expect.any(Array), {
        cwd: root,
        stdin: 'ignore',
        stdout: ['inherit', 'pipe'],
        stderr: ['inherit', 'pipe'],
      });
      expect(vi.mocked(info).mock.calls).toEqual([
        [
          `Using ${manager} from ${lockfile}; --package-manager=${flag} was ignored`,
        ],
        [`Installing presetter, preset with ${manager}`],
        ['Adding script build'],
        ['Adding script lint'],
        ['Adding script test'],
      ]);
    },
  );

  it('should accept multiple lockfiles belonging to the same manager', async ({
    root,
  }) => {
    await writeFile(join(root, 'package-lock.json'), '');
    await writeFile(join(root, 'npm-shrinkwrap.json'), '');

    await use(['preset'], { cwd: root, packageManager: 'npm' });

    expect(execa).toHaveBeenCalledWith('npm', expect.any(Array), {
      cwd: root,
      stdin: 'ignore',
      stdout: ['inherit', 'pipe'],
      stderr: ['inherit', 'pipe'],
    });
    expect(vi.mocked(info).mock.calls).toEqual([
      ['Installing presetter, preset with npm'],
      ['Adding script build'],
      ['Adding script lint'],
      ['Adding script test'],
    ]);
  });

  it('should fail with an explicit manager instruction when detection has no result', async ({
    root,
  }) => {
    vi.spyOn(process, 'stdin', 'get').mockReturnValue(
      Readable.from([]) as typeof process.stdin,
    );
    await expect(use(['preset'], { cwd: root })).rejects.toThrow(
      /cannot detect package manager.*--package-manager=npm\|pnpm\|yarn\|bun/,
    );

    expect(vi.mocked(execa).mock.calls).toEqual([]);
    expect(existsSync(join(root, 'presetter.config.ts'))).toBe(false);
  });

  it('should reject conflicting lockfiles without installing', async ({
    root,
  }) => {
    await writeFile(join(root, 'pnpm-lock.yaml'), '');
    await writeFile(join(root, 'yarn.lock'), '');

    await expect(use(['preset'], { cwd: root })).rejects.toThrow(
      /--package-manager/,
    );

    expect(vi.mocked(execa).mock.calls).toEqual([]);
  });

  it.for(['unknown@1', 'unknown'])(
    'should reject an unsupported packageManager field %s',
    async (packageManager, { root }) => {
      await writeFile(
        join(root, 'package.json'),
        JSON.stringify({ name: 'test', packageManager }),
      );

      await expect(
        use(['preset'], { cwd: root, packageManager: 'npm' }),
      ).rejects.toThrow(
        `unsupported packageManager ${packageManager} in package.json; set it to npm, pnpm, yarn or bun, or remove it`,
      );

      expect(vi.mocked(execa).mock.calls).toEqual([]);
    },
  );

  it.for(['pnpm', 'pnpm@not-a-version'])(
    'should resolve packageManager %s by name only',
    async (packageManager, { root }) => {
      await writeFile(
        join(root, 'package.json'),
        JSON.stringify({ name: 'test', packageManager }),
      );

      await use(['preset'], { cwd: root });

      expect(execa).toHaveBeenCalledWith(
        'pnpm',
        ['add', '-D', 'presetter', 'preset'],
        expect.objectContaining({ cwd: root }),
      );
    },
  );

  it.for([
    { answers: ['npm'], lockfiles: [] },
    { answers: ['pnpm'], lockfiles: ['pnpm-lock.yaml', 'yarn.lock'] },
    { answers: ['invalid', 'yarn'], lockfiles: [] },
    { answers: ['bun'], lockfiles: [] },
    { answers: [''], lockfiles: [] },
    { answers: [null], lockfiles: [] },
  ])(
    'should prompt for an undetermined manager %j',
    async ({ answers, lockfiles }, { root }) => {
      for (const lockfile of lockfiles) {
        await writeFile(join(root, lockfile), '');
      }
      const input = Object.assign(new Readable({ read() {} }), { isTTY: true });
      vi.spyOn(process, 'stdin', 'get').mockReturnValue(
        input as typeof process.stdin,
      );
      const pending = [...answers];
      vi.mocked(info).mockImplementation((message: unknown) => {
        if (!String(message).includes('Choose a package manager')) {
          return;
        }
        const answer = pending.shift();
        queueMicrotask(() =>
          input.push(answer === null ? null : `${answer}\n`),
        );
      });
      try {
        const adoption = use(['preset'], { cwd: root });
        const manager = answers.at(-1);
        if (manager) {
          await adoption;
          expect(execa).toHaveBeenCalledWith(
            manager,
            expect.any(Array),
            expect.objectContaining({ cwd: root }),
          );
          expect(bootstrap).toHaveBeenCalledWith(root);
        } else {
          await expect(adoption).rejects.toThrow(
            /cannot detect package manager.*--package-manager=npm\|pnpm\|yarn\|bun/,
          );
          expect(execa).not.toHaveBeenCalled();
          expect(existsSync(join(root, 'presetter.config.ts'))).toBe(false);
        }
        expect(vi.mocked(info).mock.calls).toEqual([
          ...answers.map(() => [
            expect.stringMatching(
              /Choose a package manager.*npm.*pnpm.*yarn.*bun/,
            ),
          ]),
          ...(manager
            ? [
                [`Installing presetter, preset with ${manager}`],
                ['Adding script build'],
                ['Adding script lint'],
                ['Adding script test'],
              ]
            : []),
        ]);
        expect(input.listenerCount('data')).toBe(0);
      } finally {
        input.destroy();
      }
    },
  );

  it('should propagate installation failure without creating config or scripts', async ({
    root,
  }) => {
    const failure = new Error('install failed');
    vi.mocked(execa).mockImplementationOnce(() => {
      throw failure;
    });
    const before = await readFile(join(root, 'package.json'), 'utf8');

    await expect(
      use(['preset'], { cwd: root, packageManager: 'npm' }),
    ).rejects.toBe(failure);

    expect(existsSync(join(root, 'presetter.config.ts'))).toBe(false);
    expect(await readFile(join(root, 'package.json'), 'utf8')).toBe(before);
    expect(vi.mocked(bootstrap).mock.calls).toEqual([]);
  });

  it.for([
    { input: 'y\ny\n', terminal: false },
    { input: 'y\nn\n', terminal: false },
    { input: 'y\ny\n', terminal: true },
    { input: 'y\nn\n', terminal: true },
  ])(
    'should consume one answer per prompt and discard terminal typeahead %j',
    async ({ input, terminal }, { root }) => {
      const blocked = Object.assign(new ExecaError(), {
        exitCode: 1,
        stdout: '',
        stderr: 'ERR_PNPM_IGNORED_BUILDS',
      });
      const pending = result(
        'Automatically ignored builds during installation:\n  esbuild@0.28.2\n',
      );
      vi.mocked(execa)
        .mockRejectedValueOnce(blocked)
        .mockResolvedValueOnce(pending)
        .mockResolvedValueOnce(result(''))
        .mockResolvedValueOnce(result('{}'))
        .mockResolvedValueOnce(result(''))
        .mockResolvedValueOnce(result(''))
        .mockRejectedValueOnce(blocked)
        .mockResolvedValueOnce(pending)
        .mockResolvedValueOnce(result(''))
        .mockResolvedValueOnce(result('{}'));
      vi.mocked(resolvePreset).mockResolvedValueOnce({
        definition: {
          id: 'test',
          setup: { devDependencies: { 'build-tool': '^1' } },
        },
        nodes: [],
      });
      const stream = Object.assign(
        terminal ? new Readable({ read() {} }) : Readable.from([input]),
        { isTTY: terminal },
      );
      const lines = input.trim().split('\n');
      vi.spyOn(process, 'stdin', 'get').mockReturnValue(
        stream as typeof process.stdin,
      );
      if (terminal) {
        vi.mocked(info).mockImplementation((message: unknown) => {
          if (!String(message).includes('Allow? (y/N)')) {
            return;
          }

          const answer = lines.shift();
          queueMicrotask(() => stream.push(`${answer}\nstray\n`));
        });
      }

      await use(['preset'], { cwd: root, packageManager: 'pnpm' });

      expect(
        vi
          .mocked(execa)
          .mock.calls.filter(
            ([, args]) => Array.isArray(args) && args.includes('set'),
          ),
      ).toHaveLength(input === 'y\ny\n' ? 2 : 1);
      expect(vi.mocked(bootstrap).mock.calls).toEqual(
        input === 'y\ny\n' ? [[root]] : [],
      );
    },
  );

  it.for(['y', ''])(
    'should close terminal input immediately after an answer or EOF %j',
    async (answer, { root }) => {
      const input = Object.assign(new Readable({ read() {} }), { isTTY: true });
      vi.spyOn(process, 'stdin', 'get').mockReturnValue(
        input as typeof process.stdin,
      );
      vi.mocked(info).mockImplementation((message: unknown) => {
        if (String(message).includes('Allow? (y/N)')) {
          queueMicrotask(() => {
            if (answer) {
              input.push(`${answer}\nstray\n`);
            } else {
              input.push(null);
            }
          });
        }
      });
      vi.mocked(execa)
        .mockRejectedValueOnce(
          Object.assign(new ExecaError(), {
            exitCode: 1,
            stderr: 'ERR_PNPM_IGNORED_BUILDS',
          }),
        )
        .mockResolvedValueOnce(
          result(
            'Automatically ignored builds during installation:\n  esbuild@0.28.2\n',
          ),
        )
        .mockResolvedValueOnce(result(''))
        .mockResolvedValueOnce(result('{}'));
      vi.mocked(resolvePreset).mockImplementationOnce(async () => {
        expect(input.listenerCount('data')).toBe(0);

        return { definition: { id: 'terminal' }, nodes: [] };
      });

      try {
        await use(['preset'], { cwd: root, packageManager: 'pnpm' });
        expect(input.listenerCount('data')).toBe(0);
        expect(vi.mocked(bootstrap).mock.calls).toEqual(answer ? [[root]] : []);
      } finally {
        input.destroy();
      }
    },
  );

  it('should write config and scripts but skip bootstrap when builds are declined', async ({
    root,
  }) => {
    const blocked = Object.assign(new ExecaError(), {
      exitCode: 1,
      stdout: '',
      stderr: 'ERR_PNPM_IGNORED_BUILDS',
    });
    vi.mocked(execa)
      .mockRejectedValueOnce(blocked)
      .mockResolvedValueOnce(
        result(
          'Automatically ignored builds during installation:\n  esbuild@0.28.2\n',
        ),
      );
    vi.spyOn(process, 'stdin', 'get').mockReturnValue(
      Readable.from([]) as typeof process.stdin,
    );

    await use(['preset'], { cwd: root, packageManager: 'pnpm' });

    expect(await readFile(join(root, 'presetter.config.ts'), 'utf8')).toContain(
      "from 'preset'",
    );
    expect(
      JSON.parse(await readFile(join(root, 'package.json'), 'utf8')),
    ).toMatchObject({
      scripts: {
        build: 'run build',
        lint: 'run lint --',
        test: 'run test --',
      },
    });
    expect(bootstrap).not.toHaveBeenCalled();
  });

  it('should fail when no package.json can be found', async ({ root }) => {
    await rm(join(root, 'package.json'));

    await expect(
      use(['preset'], { cwd: root, packageManager: 'npm' }),
    ).rejects.toThrow(/package\.json/);

    expect(vi.mocked(execa).mock.calls).toEqual([]);
  });

  it.for([[], ['https://example.com/preset.tgz'], ['--bad']])(
    'should reject unsupported preset specifications %j before installation',
    async (presets, { root }) => {
      await expect(
        use(presets, { cwd: root, packageManager: 'npm' }),
      ).rejects.toThrow();

      expect(vi.mocked(execa).mock.calls).toEqual([]);
    },
  );
});
