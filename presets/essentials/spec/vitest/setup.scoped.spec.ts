import { basename, dirname, join } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { detectScopedSetupFiles, escapeGlob } from '#vitest/setup';

import type { Dirent, PathLike } from 'node:fs';

import type { ScopeTarget } from '#vitest/runner';

// a virtual project tree, so that symbolic links and names which some platforms refuse need no real files
vi.mock('node:fs', () => {
  type Kind = 'dir' | 'file' | 'link';

  const files = [
    // nesting: any depth, outer before inner, siblings sorted
    '/nesting/vitest.setup.ts',
    '/nesting/spec/setup.ts',
    '/nesting/spec/global-setup.ts',
    '/nesting/spec/a/setup.ts',
    '/nesting/spec/a/global-setup.ts',
    '/nesting/spec/a/inner/global-setup.ts',
    '/nesting/spec/a/inner/deep/setup.ts',
    '/nesting/spec/a-b/setup.ts',
    '/nesting/spec/b/setup.ts',
    '/nesting/spec/gap/leaf/setup.ts',
    // within: one folder holding every base, suffix and extension
    '/within/spec/x/setup.ts',
    '/within/spec/x/setup.mts',
    '/within/spec/x/setup.cts',
    '/within/spec/x/setup.js',
    '/within/spec/x/setup.mjs',
    '/within/spec/x/setup.cjs',
    '/within/spec/x/setup.unit.ts',
    '/within/spec/x/setup.tsx',
    '/within/spec/x/setup.json',
    '/within/spec/x/vitest.setup.ts',
    '/within/spec/x/vitest.setup.unit.mjs',
    '/within/spec/x/global-setup.mts',
    '/within/spec/x/vitest.global-setup.unit.ts',
    '/within/spec/x/vitest.global-setup.js',
    // suffixes: UNIT, INT and E2E files side by side
    '/suffixes/spec/svc/setup.ts',
    '/suffixes/spec/svc/setup.unit.ts',
    '/suffixes/spec/svc/setup.int.ts',
    '/suffixes/spec/svc/setup.integration.ts',
    '/suffixes/spec/svc/setup.e2e.ts',
    '/suffixes/spec/svc/global-setup.ts',
    '/suffixes/spec/svc/global-setup.int.ts',
    '/suffixes/spec/svc/global-setup.e2e.ts',
    '/suffixes/spec/svc/vitest.setup.integration.ts',
    '/suffixes/spec/svc/vitest.global-setup.unit.ts',
    '/suffixes/spec/only-e2e/setup.e2e.ts',
    // prefixed: only the vitest. forms
    '/prefixed/spec/p/vitest.setup.mts',
    '/prefixed/spec/p/vitest.global-setup.cjs',
    // skips
    '/skip-dot/spec/.hidden/setup.ts',
    '/skip-dot/spec/.hidden/inner/setup.ts',
    '/skip-dot/spec/kept/.cache/setup.ts',
    '/skip-dot/spec/kept/setup.ts',
    '/skip-modules/spec/node_modules/pkg/setup.ts',
    '/skip-modules/spec/kept/node_modules/setup.ts',
    '/skip-modules/spec/kept/setup.ts',
    '/skip-links/spec/linked/setup.ts',
    '/skip-links/spec/kept/alias/setup.ts',
    '/skip-links/spec/kept/setup.ts',
    // direct: nothing but files of the test directory itself
    '/direct/vitest.setup.ts',
    '/direct/spec/setup.ts',
    '/direct/spec/vitest.setup.ts',
    '/direct/spec/global-setup.ts',
    '/direct/spec/vitest.global-setup.ts',
    '/direct/spec/one.spec.ts',
    '/direct/spec/docs/readme.md',
    // names: only the fixed names count
    '/names/spec/docker/setup.int.ts',
    '/names/spec/docker/docker-setup.int.ts',
    '/names/spec/docker/docker-global-setup.int.ts',
    '/names/spec/docker/vitest-setup.int.ts',
    // custom: a test directory below the project root
    '/custom/src/setup.ts',
    '/custom/other/setup.ts',
    '/custom/src/tests/api/setup.ts',
    '/custom/src/tests/api/v1/global-setup.ts',
    // escaped: folder names that a glob would read as syntax
    '/escaped/spec/(group)/[id]/setup.ts',
    '/escaped/spec/a*b?c!d+e@f|g{h}/setup.ts',
  ];
  const links = ['/skip-links/spec/linked', '/skip-links/spec/kept/alias'];

  const ancestorsOf = (path: string): string[] =>
    dirname(path) === path
      ? []
      : [dirname(path), ...ancestorsOf(dirname(path))];
  const entry = (path: string, kind: Kind): [string, Kind] => [
    join(path),
    kind,
  ];
  // links come last, so that they win over the folder their content implies
  const kinds = new Map<string, Kind>([
    ...[...files, ...links]
      .flatMap(ancestorsOf)
      .map((path) => entry(path, 'dir')),
    ...files.map((path) => entry(path, 'file')),
    ...links.map((path) => entry(path, 'link')),
  ]);

  return {
    existsSync: (path) => kinds.has(String(path)),
    // like the platform, list in no particular order, and refuse what is not a folder
    readdirSync: ((
      directory: PathLike,
      _options?: { withFileTypes: true },
    ): Array<Pick<Dirent, 'name' | 'isDirectory' | 'isSymbolicLink'>> => {
      const path = String(directory);

      if (!['dir', 'link'].includes(kinds.get(path) ?? 'file')) {
        throw Object.assign(new Error(`ENOENT: ${path}`), { code: 'ENOENT' });
      }

      return [...kinds]
        .filter(([child]) => dirname(child) === path)
        .map(([child, kind]) => ({
          name: basename(child),
          isDirectory: () => kind === 'dir',
          isSymbolicLink: () => kind === 'link',
        }))
        .sort((left, right) => right.name.localeCompare(left.name));
    }) as Partial<typeof import('node:fs')>['readdirSync'],
  } satisfies Partial<typeof import('node:fs')>;
});

const NO_FILES = { file: [], project: [] };

/**
 * builds the entry expected for a setup file of a folder
 * @param root absolute project directory
 * @param folder POSIX path of the folder relative to the project directory
 * @param name file name of the setup file
 * @returns the scoped entry of that file
 */
function scoped(root: string, folder: string, name: string): ScopeTarget {
  return { globs: [`${folder}/**`], file: join(root, folder, name) };
}

describe('fn:detectScopedSetupFiles', () => {
  it('should list folders depth-first, each before its subfolders and siblings alphabetically, scoping each file to its own folder', () => {
    const root = '/nesting';

    expect(detectScopedSetupFiles(root, 'spec', [''])).toEqual({
      file: [
        scoped(root, 'spec/a', 'setup.ts'),
        scoped(root, 'spec/a/inner/deep', 'setup.ts'),
        scoped(root, 'spec/a-b', 'setup.ts'),
        scoped(root, 'spec/b', 'setup.ts'),
        scoped(root, 'spec/gap/leaf', 'setup.ts'),
      ],
      project: [
        scoped(root, 'spec/a', 'global-setup.ts'),
        scoped(root, 'spec/a/inner', 'global-setup.ts'),
      ],
    });
  });

  it('should order the files of a folder by base, then suffix, then extension, and ignore unsupported extensions', () => {
    const root = '/within';

    expect(detectScopedSetupFiles(root, 'spec', ['', '.unit'])).toEqual({
      file: [
        'setup.ts',
        'setup.mts',
        'setup.cts',
        'setup.js',
        'setup.mjs',
        'setup.cjs',
        'setup.unit.ts',
        'vitest.setup.ts',
        'vitest.setup.unit.mjs',
      ].map((name) => scoped(root, 'spec/x', name)),
      project: [
        'global-setup.mts',
        'vitest.global-setup.js',
        'vitest.global-setup.unit.ts',
      ].map((name) => scoped(root, 'spec/x', name)),
    });
  });

  it('should detect vitest-prefixed setup and global setup files', () => {
    const root = '/prefixed';

    expect(detectScopedSetupFiles(root, 'spec', [''])).toEqual({
      file: [scoped(root, 'spec/p', 'vitest.setup.mts')],
      project: [scoped(root, 'spec/p', 'vitest.global-setup.cjs')],
    });
  });

  it('should detect only unsuffixed and .unit files for UNIT', () => {
    const root = '/suffixes';

    expect(detectScopedSetupFiles(root, 'spec', ['', '.unit'])).toEqual({
      file: [
        scoped(root, 'spec/svc', 'setup.ts'),
        scoped(root, 'spec/svc', 'setup.unit.ts'),
      ],
      project: [
        scoped(root, 'spec/svc', 'global-setup.ts'),
        scoped(root, 'spec/svc', 'vitest.global-setup.unit.ts'),
      ],
    });
  });

  it('should detect only .int and .integration files for INT', () => {
    const root = '/suffixes';

    expect(
      detectScopedSetupFiles(root, 'spec', ['.int', '.integration']),
    ).toEqual({
      file: [
        scoped(root, 'spec/svc', 'setup.int.ts'),
        scoped(root, 'spec/svc', 'setup.integration.ts'),
        scoped(root, 'spec/svc', 'vitest.setup.integration.ts'),
      ],
      project: [scoped(root, 'spec/svc', 'global-setup.int.ts')],
    });
  });

  it('should detect only .e2e files for E2E', () => {
    const root = '/suffixes';

    expect(detectScopedSetupFiles(root, 'spec', ['.e2e'])).toEqual({
      file: [
        scoped(root, 'spec/only-e2e', 'setup.e2e.ts'),
        scoped(root, 'spec/svc', 'setup.e2e.ts'),
      ],
      project: [scoped(root, 'spec/svc', 'global-setup.e2e.ts')],
    });
  });

  it('should skip dot-folders at any depth', () => {
    const root = '/skip-dot';

    expect(detectScopedSetupFiles(root, 'spec', [''])).toEqual({
      file: [scoped(root, 'spec/kept', 'setup.ts')],
      project: [],
    });
  });

  it('should skip node_modules at any depth', () => {
    const root = '/skip-modules';

    expect(detectScopedSetupFiles(root, 'spec', [''])).toEqual({
      file: [scoped(root, 'spec/kept', 'setup.ts')],
      project: [],
    });
  });

  it('should skip symbolic links to folders at any depth', () => {
    const root = '/skip-links';

    expect(detectScopedSetupFiles(root, 'spec', [''])).toEqual({
      file: [scoped(root, 'spec/kept', 'setup.ts')],
      project: [],
    });
  });

  it('should ignore setup files outside the nested folders, including those of the test directory itself', () => {
    expect(detectScopedSetupFiles('/direct', 'spec', [''])).toEqual(NO_FILES);
  });

  it('should return nothing when the test directory does not exist', () => {
    expect(detectScopedSetupFiles('/missing', 'spec', [''])).toEqual(NO_FILES);
  });

  it('should not detect a file because its name ends in -setup or -global-setup', () => {
    const root = '/names';

    expect(detectScopedSetupFiles(root, 'spec', ['.int'])).toEqual({
      file: [scoped(root, 'spec/docker', 'setup.int.ts')],
      project: [],
    });
  });

  it('should scope folders to the path from the project root through a custom test directory', () => {
    const root = '/custom';

    expect(detectScopedSetupFiles(root, 'src/tests', [''])).toEqual({
      file: [scoped(root, 'src/tests/api', 'setup.ts')],
      project: [scoped(root, 'src/tests/api/v1', 'global-setup.ts')],
    });
  });

  it('should escape glob syntax in the folder of a scope, but not in the file path', () => {
    const root = '/escaped';

    expect(detectScopedSetupFiles(root, 'spec', [''])).toEqual({
      file: [
        {
          globs: [String.raw`spec/\(group\)/\[id\]/**`],
          file: join(root, 'spec/(group)/[id]/setup.ts'),
        },
        {
          globs: [String.raw`spec/a\*b\?c\!d+e@f\|g\{h\}/**`],
          file: join(root, 'spec/a*b?c!d+e@f|g{h}/setup.ts'),
        },
      ],
      project: [],
    });
  });
});

describe('fn:escapeGlob', () => {
  it('should put a backslash before each of ( ) [ ] { } * ? ! and |', () => {
    expect(escapeGlob('()[]{}*?!|')).toEqual(String.raw`\(\)\[\]\{\}\*\?\!\|`);
  });

  it('should turn a backslash into a class holding only a backslash', () => {
    expect(escapeGlob(String.raw`a\b`)).toEqual(String.raw`a[\\]b`);
  });

  it('should leave + and @ unescaped, as they are syntax only before an escaped (', () => {
    expect(escapeGlob('a+@/+(x)/@(y)')).toEqual(String.raw`a+@/+\(x\)/@\(y\)`);
  });

  it('should leave a path without glob syntax unchanged', () => {
    expect(escapeGlob('spec/docker-compose_v2/a.b#c,d$e^f~g h')).toEqual(
      'spec/docker-compose_v2/a.b#c,d$e^f~g h',
    );
  });
});
