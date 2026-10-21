import { info } from 'node:console';
import { readFile } from 'node:fs/promises';

import { execa, ExecaError } from 'execa';
import { describe, expect, it, vi } from 'vitest';

import { resolveBuilds } from '#preset/install/builds';
import { installPackages } from '#preset/install/index';

vi.mock(
  'node:console',
  () =>
    ({ info: vi.fn<typeof info>() }) satisfies Partial<
      typeof import('node:console')
    >,
);

vi.mock(
  'node:fs/promises',
  () =>
    ({
      readFile: vi.fn<
        (...args: Parameters<typeof readFile>) => ReturnType<typeof readFile>
      >(async () => '{}') as typeof readFile,
    }) satisfies Partial<typeof import('node:fs/promises')>,
);

vi.mock('execa', async (importOriginal) => {
  const original = await importOriginal<typeof import('execa')>();

  return {
    ...original,
    execa: vi.fn() as typeof execa,
  } satisfies typeof import('execa');
});

const root = '/path/to/project';
const presets = ['@presetter/preset-esm'];
const params = { cwd: root, presets, readAnswer: async () => 'yes' };
const pending = `Automatically ignored builds during installation:
  esbuild@0.28.2
  unrs-resolver@1.12.2
Hint: run pnpm approve-builds
`;
const none = 'Automatically ignored builds during installation:\n  None\n';
const installOptions = {
  cwd: root,
  stdin: 'ignore',
  stdout: ['inherit', 'pipe'],
  stderr: ['inherit', 'pipe'],
};

function blockedBuildError(code: string, exitCode = 1): ExecaError {
  return Object.assign(new ExecaError(), {
    exitCode,
    stdout: '',
    stderr: code,
  });
}

function result(stdout: string): Awaited<ReturnType<typeof execa>> {
  return { stdout } as Awaited<ReturnType<typeof execa>>;
}

describe('fn:installPackages', () => {
  it.each([
    ['npm', 'dependencies', ['install', '--save-prod']],
    ['npm', 'peerDependencies', ['install', '--save-peer']],
    ['pnpm', 'dependencies', ['add']],
    ['pnpm', 'peerDependencies', ['add', '--save-peer']],
    ['yarn', 'dependencies', ['add']],
    ['yarn', 'peerDependencies', ['add', '--peer']],
    ['bun', 'dependencies', ['add']],
    ['bun', 'peerDependencies', ['add', '--peer']],
  ] as const)(
    'should install %s %s with the matching save flag',
    async (manager, dependencyType, args) => {
      const approved = await installPackages(
        manager,
        { [dependencyType]: { 'new-tool': '^1' } },
        params,
      );

      expect(approved).toMatchObject({ build: true });
      expect(vi.mocked(execa).mock.calls).toEqual([
        [manager, [...args, 'new-tool@^1'], installOptions],
      ]);
    },
  );

  it('should preserve entries in every section when installing runtime dependencies', async () => {
    vi.mocked(readFile).mockResolvedValueOnce(
      JSON.stringify({
        dependencies: { prod: '^1' },
        devDependencies: { dev: '^1' },
        peerDependencies: { peer: '^1' },
      }),
    );
    const approved = await installPackages(
      'npm',
      {
        dependencies: { prod: '^2', dev: '^2', peer: '^2', fresh: '^2' },
      },
      params,
    );

    expect(approved).toMatchObject({ build: true });
    expect(vi.mocked(execa).mock.calls).toEqual([
      ['npm', ['install', '--save-prod', 'fresh@^2'], installOptions],
    ]);
  });

  it('should keep an existing peer range even when a runtime entry also exists', async () => {
    vi.mocked(readFile).mockResolvedValueOnce(
      JSON.stringify({
        dependencies: { existing: '^1' },
        peerDependencies: { existing: '^2' },
      }),
    );
    const approved = await installPackages(
      'yarn',
      {
        peerDependencies: { existing: '^3' },
      },
      params,
    );

    expect(approved).toMatchObject({ build: true });
    expect(vi.mocked(execa).mock.calls).toEqual([]);
  });

  it('should trust a successful pnpm install without querying ignored builds', async () => {
    vi.mocked(execa).mockResolvedValueOnce(result(''));
    expect(
      await installPackages(
        'pnpm',
        { devDependencies: { 'presetter': '', '@presetter/preset-esm': '' } },
        params,
      ),
    ).toMatchObject({ build: true });

    expect(vi.mocked(execa).mock.calls).toEqual([
      [
        'pnpm',
        ['add', '-D', 'presetter', '@presetter/preset-esm'],
        installOptions,
      ],
    ]);
  });

  it('should approve exact pnpm package versions after an ignored-build failure', async () => {
    vi.mocked(execa)
      .mockRejectedValueOnce(blockedBuildError('ERR_PNPM_IGNORED_BUILDS'))
      .mockResolvedValueOnce(result(pending))
      .mockResolvedValueOnce(result(''))
      .mockResolvedValueOnce(result('{}'));

    expect(
      await installPackages(
        'pnpm',
        { devDependencies: { 'presetter': '', '@presetter/preset-esm': '' } },
        params,
      ),
    ).toMatchObject({ build: true });

    expect(vi.mocked(info).mock.calls).toEqual([
      ['Installing presetter, @presetter/preset-esm with pnpm'],
      [expect.stringContaining('Pending install scripts in this project')],
      [expect.stringContaining('Allow? (y/N)')],
    ]);
    expect(vi.mocked(execa).mock.calls).toEqual([
      [
        'pnpm',
        ['add', '-D', 'presetter', '@presetter/preset-esm'],
        installOptions,
      ],
      ['pnpm', ['ignored-builds'], expect.objectContaining({ cwd: root })],
      [
        'pnpm',
        ['why', 'esbuild', 'unrs-resolver'],
        expect.objectContaining({ cwd: root }),
      ],
      ['pnpm', ['config', 'get', '--json', 'allowBuilds'], { cwd: root }],
      [
        'pnpm',
        [
          'config',
          'set',
          '--location=project',
          '--json',
          'allowBuilds',
          JSON.stringify({
            'esbuild@0.28.2': true,
            'unrs-resolver@1.12.2': true,
          }),
        ],
        expect.objectContaining({ cwd: root }),
      ],
      ['pnpm', ['rebuild', 'esbuild', 'unrs-resolver'], installOptions],
    ]);
  });

  it('should pin every installed version reported for unversioned registry builds and preserve other rules', async () => {
    vi.mocked(execa)
      .mockRejectedValueOnce(blockedBuildError('ERR_PNPM_IGNORED_BUILDS'))
      .mockResolvedValueOnce(
        result(
          'Automatically ignored builds during installation:\n  core-js\n  @scope/build\n',
        ),
      )
      .mockResolvedValueOnce(
        result(
          JSON.stringify([
            {
              dependencies: {
                'core-js': { version: '3.0.0' },
                'parent': {
                  optionalDependencies: { 'core-js': { version: '3.1.0' } },
                  devDependencies: { '@scope/build': { version: '1.0.0' } },
                },
              },
            },
          ]),
        ),
      )
      .mockResolvedValueOnce(result(''))
      .mockResolvedValueOnce(
        result(
          JSON.stringify({
            'existing@1.0.0': false,
            'core-js@2.0.0': false,
            'core-js@2.1.0': true,
            '@scope/build': false,
            'core-js': 'set this to true or false',
          }),
        ),
      );

    expect(
      await installPackages(
        'pnpm',
        { devDependencies: { presetter: '' } },
        params,
      ),
    ).toMatchObject({ build: true });
    expect(vi.mocked(execa).mock.calls.map(([, args]) => args)).toEqual([
      ['add', '-D', 'presetter'],
      ['ignored-builds'],
      ['list', 'core-js', '@scope/build', '--depth', 'Infinity', '--json'],
      ['why', 'core-js', '@scope/build'],
      ['config', 'get', '--json', 'allowBuilds'],
      [
        'config',
        'set',
        '--location=project',
        '--json',
        'allowBuilds',
        JSON.stringify({
          'existing@1.0.0': false,
          'core-js@2.0.0': false,
          'core-js@2.1.0': true,
          '@scope/build': false,
          'core-js@3.0.0': true,
          '@scope/build@1.0.0': true,
          'core-js@3.1.0': true,
        }),
      ],
      ['rebuild', 'core-js', '@scope/build'],
    ]);
  });

  it.each(['undefined\n', 'null\n', '', '\n'])(
    'should create pinned approval rules when pnpm has no allowBuilds setting: %j',
    async (config) => {
      vi.mocked(execa)
        .mockRejectedValueOnce(blockedBuildError('ERR_PNPM_IGNORED_BUILDS'))
        .mockResolvedValueOnce(result(pending))
        .mockResolvedValueOnce(result(''))
        .mockResolvedValueOnce(result(config));

      expect(
        await installPackages(
          'pnpm',
          { devDependencies: { presetter: '' } },
          params,
        ),
      ).toMatchObject({ build: true });
    },
  );

  it.each(['yes', 'no'])(
    'should handle the pnpm 12 blocked-build report with answer %s',
    async (answer) => {
      vi.mocked(execa)
        .mockRejectedValueOnce(
          blockedBuildError(`Error: ERR_PNPM_IGNORED_BUILDS

  × adding a new package
  ╰─▶ Ignored build scripts: esbuild@0.28.2, unrs-resolver@1.12.2
  help: Run "pnpm approve-builds" to pick which dependencies should be allowed
        to run scripts.
`),
        )
        .mockResolvedValueOnce(
          result(`Automatically ignored builds during installation:
  esbuild
  unrs-resolver
hint: To allow the execution of build scripts for a package, add its name to "allowBuilds" and set to "true", then run "pnpm rebuild".
hint: For example:
hint: allowBuilds:
hint:   esbuild: true
hint: If you don't want to build a package, set it to "false" instead.
`),
        )
        .mockResolvedValueOnce(
          result(
            JSON.stringify([
              {
                devDependencies: {
                  'esbuild': { version: '0.28.2' },
                  'unrs-resolver': { version: '1.12.2' },
                },
              },
            ]),
          ),
        )
        .mockResolvedValueOnce(result(''))
        .mockResolvedValueOnce(result('null\n'));

      expect(
        await installPackages(
          'pnpm',
          { devDependencies: { presetter: '' } },
          {
            ...params,
            readAnswer: async () => answer,
          },
        ),
      ).toMatchObject({ build: answer === 'yes' });
      expect(vi.mocked(info)).toHaveBeenCalledWith(
        'esbuild@0.28.2, unrs-resolver@1.12.2 need to run install scripts. Allow? (y/N)',
      );
      expect(vi.mocked(execa).mock.calls.map(([, args]) => args)).toEqual([
        ['add', '-D', 'presetter'],
        ['ignored-builds'],
        ['list', 'esbuild', 'unrs-resolver', '--depth', 'Infinity', '--json'],
        ['why', 'esbuild', 'unrs-resolver'],
        ...(answer === 'yes'
          ? [
              ['config', 'get', '--json', 'allowBuilds'],
              [
                'config',
                'set',
                '--location=project',
                '--json',
                'allowBuilds',
                JSON.stringify({
                  'esbuild@0.28.2': true,
                  'unrs-resolver@1.12.2': true,
                }),
              ],
              ['rebuild', 'esbuild', 'unrs-resolver'],
            ]
          : []),
      ]);
    },
  );

  it('should reject a pending build whose installed version cannot be resolved', async () => {
    vi.mocked(execa)
      .mockRejectedValueOnce(blockedBuildError('ERR_PNPM_IGNORED_BUILDS'))
      .mockResolvedValueOnce(
        result(
          'Automatically ignored builds during installation:\n  core-js\n',
        ),
      )
      .mockResolvedValueOnce(
        result(JSON.stringify([{ dependencies: { 'core-js': {} } }])),
      );

    await expect(
      installPackages('pnpm', { devDependencies: { presetter: '' } }, params),
    ).rejects.toThrow(/installed versions/);
    expect(vi.mocked(execa).mock.calls).toHaveLength(3);
  });

  it.each([['n\n'], ['\n'], ['']])(
    'should decline blocked pnpm builds for input %j',
    async (input) => {
      vi.mocked(execa)
        .mockRejectedValueOnce(blockedBuildError('ERR_PNPM_IGNORED_BUILDS'))
        .mockResolvedValueOnce(result(pending));

      expect(
        await installPackages(
          'pnpm',
          { devDependencies: { presetter: '' } },
          {
            ...params,
            readAnswer: async () => input,
          },
        ),
      ).toMatchObject({ build: false });
      expect(
        vi
          .mocked(execa)
          .mock.calls.some(
            ([, args]) => Array.isArray(args) && args.includes('set'),
          ),
      ).toBe(false);
    },
  );

  it('should stage packages without scripts or a second prompt when skipBuilds is true', async () => {
    expect(
      await installPackages(
        'pnpm',
        { devDependencies: { typescript: '^6.0.0' } },
        {
          ...params,
          skipBuilds: true,
        },
      ),
    ).toMatchObject({ build: false });
    expect(vi.mocked(execa).mock.calls).toEqual([
      [
        'pnpm',
        ['add', '-D', 'typescript@^6.0.0', '--ignore-scripts'],
        installOptions,
      ],
    ]);
  });

  it('should inspect pnpm approvals when installation was already skipped', async () => {
    vi.mocked(execa).mockResolvedValueOnce(result(none));
    expect(await resolveBuilds('pnpm', params)).toBe(true);
    expect(vi.mocked(execa).mock.calls).toEqual([
      ['pnpm', ['ignored-builds'], { cwd: root }],
    ]);
  });

  it('should preserve the blocked install error when pnpm reports no pending builds', async () => {
    const blocked = blockedBuildError('ERR_PNPM_IGNORED_BUILDS');
    vi.mocked(execa)
      .mockRejectedValueOnce(blocked)
      .mockResolvedValueOnce(result(none));

    await expect(
      installPackages('pnpm', { devDependencies: { presetter: '' } }, params),
    ).rejects.toBe(blocked);
  });

  it('should stage npm dependencies and approve pending strict-policy scripts', async () => {
    vi.mocked(execa)
      .mockRejectedValueOnce(blockedBuildError('ESTRICTALLOWSCRIPTS'))
      .mockResolvedValueOnce(result(''))
      .mockResolvedValueOnce(
        result(
          JSON.stringify({
            allowScripts: [
              {
                name: 'esbuild',
                changes: [{ key: 'esbuild@0.28.2', change: 'pending' }],
              },
              {
                name: 'unrs-resolver',
                changes: [{ key: 'unrs-resolver@1.12.2', change: 'pending' }],
              },
            ],
          }),
        ),
      );

    expect(
      await installPackages(
        'npm',
        { devDependencies: { presetter: '' } },
        params,
      ),
    ).toMatchObject({ build: true });
    expect(vi.mocked(execa).mock.calls).toEqual([
      ['npm', ['install', '-D', 'presetter'], installOptions],
      [
        'npm',
        ['install', '-D', 'presetter', '--ignore-scripts'],
        installOptions,
      ],
      [
        'npm',
        ['approve-scripts', '--allow-scripts-pending', '--json'],
        { cwd: root },
      ],
      ['npm', ['explain', 'esbuild', 'unrs-resolver'], installOptions],
      ['npm', ['approve-scripts', 'esbuild', 'unrs-resolver'], installOptions],
      ['npm', ['rebuild', 'esbuild', 'unrs-resolver'], installOptions],
    ]);
  });

  it('should leave npm strict-policy scripts unapproved at EOF', async () => {
    vi.mocked(execa)
      .mockRejectedValueOnce(blockedBuildError('ESTRICTALLOWSCRIPTS'))
      .mockResolvedValueOnce(result(''))
      .mockResolvedValueOnce(
        result(
          JSON.stringify({
            allowScripts: [
              {
                name: 'esbuild',
                changes: [{ key: 'esbuild@0.28.2', change: 'pending' }],
              },
            ],
          }),
        ),
      );

    expect(
      await installPackages(
        'npm',
        { devDependencies: { presetter: '' } },
        {
          ...params,
          readAnswer: async () => '',
        },
      ),
    ).toMatchObject({ build: false });
    expect(vi.mocked(execa).mock.calls.map(([, args]) => args)).toEqual([
      ['install', '-D', 'presetter'],
      ['install', '-D', 'presetter', '--ignore-scripts'],
      ['approve-scripts', '--allow-scripts-pending', '--json'],
      ['explain', 'esbuild'],
    ]);
  });

  it('should check strict npm policy when no install is needed', async () => {
    vi.mocked(execa).mockResolvedValueOnce(result('false\n'));

    expect(await resolveBuilds('npm', params)).toBe(true);
    expect(vi.mocked(execa).mock.calls).toEqual([
      ['npm', ['config', 'get', 'strict-allow-scripts'], { cwd: root }],
    ]);
  });

  it('should ask about pending builds on a strict npm rerun without installing again', async () => {
    vi.mocked(execa)
      .mockResolvedValueOnce(result('true\n'))
      .mockResolvedValueOnce(
        result(
          JSON.stringify({
            allowScripts: [
              {
                name: 'esbuild',
                changes: [{ key: 'esbuild@0.28.2', change: 'pending' }],
              },
            ],
          }),
        ),
      );

    expect(
      await resolveBuilds('npm', {
        ...params,
        readAnswer: async () => 'no',
      }),
    ).toBe(false);
    expect(vi.mocked(execa).mock.calls.map(([, args]) => args)).toEqual([
      ['config', 'get', 'strict-allow-scripts'],
      ['approve-scripts', '--allow-scripts-pending', '--json'],
      ['explain', 'esbuild'],
    ]);
  });

  it('should not query approval for a successful advisory npm install', async () => {
    expect(
      await installPackages(
        'npm',
        { devDependencies: { presetter: '' } },
        params,
      ),
    ).toMatchObject({ build: true });
    expect(vi.mocked(execa).mock.calls).toEqual([
      ['npm', ['install', '-D', 'presetter'], installOptions],
    ]);
  });

  it.each(['yarn', 'bun'] as const)(
    'should install with %s without querying approval',
    async (manager) => {
      expect(
        await installPackages(
          manager,
          { devDependencies: { presetter: '' } },
          params,
        ),
      ).toMatchObject({ build: true });
      expect(vi.mocked(execa).mock.calls).toEqual([
        [
          manager,
          ['add', manager === 'yarn' ? '-D' : '-d', 'presetter'],
          installOptions,
        ],
      ]);
    },
  );

  it.each(['yarn', 'bun'] as const)(
    'should bootstrap a %s rerun without an approval query',
    async (manager) => {
      expect(await resolveBuilds(manager, params)).toBe(true);
      expect(vi.mocked(execa).mock.calls).toEqual([]);
    },
  );

  it('should reject an unrecognized pnpm ignored-build report', async () => {
    vi.mocked(execa)
      .mockRejectedValueOnce(blockedBuildError('ERR_PNPM_IGNORED_BUILDS'))
      .mockResolvedValueOnce(result('unexpected output'));

    await expect(
      installPackages('pnpm', { devDependencies: { presetter: '' } }, params),
    ).rejects.toThrow(/ignored-builds/);
  });

  it.each([
    'Automatically ignored builds during installation:\n  Cannot identify as no node_modules found\n',
    'unexpected output',
  ])(
    'should tolerate unavailable pending-build metadata on a rerun: %s',
    async (stdout) => {
      vi.mocked(execa).mockResolvedValueOnce(result(stdout));

      expect(await resolveBuilds('pnpm', params)).toBe(true);
    },
  );

  it('should propagate unrelated install errors', async () => {
    const failure = new Error('registry unavailable');
    vi.mocked(execa).mockRejectedValueOnce(failure);

    await expect(
      installPackages('pnpm', { devDependencies: { presetter: '' } }, params),
    ).rejects.toBe(failure);
    expect(vi.mocked(execa).mock.calls).toHaveLength(1);
  });

  it('should propagate a blocked-build code with a nonblocking exit status', async () => {
    const failure = blockedBuildError('ERR_PNPM_IGNORED_BUILDS', 2);
    vi.mocked(execa).mockRejectedValueOnce(failure);

    await expect(
      installPackages('pnpm', { devDependencies: { presetter: '' } }, params),
    ).rejects.toBe(failure);
    expect(vi.mocked(execa).mock.calls).toHaveLength(1);
  });

  it('should propagate a blocked-build code from an unsupported approval manager', async () => {
    const failure = blockedBuildError('ERR_PNPM_IGNORED_BUILDS');
    vi.mocked(execa).mockRejectedValueOnce(failure);

    await expect(
      installPackages('yarn', { devDependencies: { presetter: '' } }, params),
    ).rejects.toBe(failure);
    expect(vi.mocked(execa).mock.calls).toHaveLength(1);
  });
});
