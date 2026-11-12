import { execFileSync } from 'node:child_process';
import {
  chmodSync,
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, relative, resolve } from 'node:path';

import { resolveAssets, resolvePreset } from 'presetter';
import { describe, expect, it, vi } from 'vitest';

import preset, { DEFAULT_VARIABLES as variables } from '#index';

import { posix } from './path';

import type { ProjectContext } from '@presetter/types';

vi.mock('node:path', { spy: true });

const OVERRIDES = resolve(import.meta.dirname, '..', 'overrides');
const TEMPLATES = resolve(import.meta.dirname, '..', 'templates');

const rootContext = {
  isRepoRoot: true,
  relativeProjectRoot: '.',
  relativeRepoRoot: '.',
  repoRoot: '/',
  projectRoot: '/',
  packageJson: {},
} satisfies ProjectContext;

const context = {
  isRepoRoot: false,
  relativeProjectRoot: 'packages/example',
  relativeRepoRoot: '../..',
  repoRoot: '/',
  projectRoot: '/packages/example',
  packageJson: {},
} satisfies ProjectContext;

describe('fn:preset', () => {
  it('should use all templates', async () => {
    const node = await resolvePreset(preset, context);

    const overrides = existsSync(OVERRIDES) ? readdirSync(OVERRIDES) : [];
    const templates = existsSync(TEMPLATES) ? readdirSync(TEMPLATES) : [];

    const overrideAssets = node.definition.override?.assets;
    const consumedOverrides = [
      node.definition.override?.scripts,
      ...[rootContext, context].flatMap((ctx) =>
        Object.values({
          ...(typeof overrideAssets === 'function'
            ? overrideAssets({ ...ctx, variables })
            : overrideAssets),
        }),
      ),
    ]
      .filter((item) => typeof item === 'string')
      .map((path) => relative(OVERRIDES, path));
    const consumedTemplates = [
      node.definition.scripts,
      ...Object.values({
        ...(typeof node.definition.assets === 'function'
          ? node.definition.assets({ ...context, variables })
          : node.definition.assets),
      }),
    ]
      .filter((item) => typeof item === 'string')
      .map((path) => relative(TEMPLATES, path));

    for (const path of overrides) {
      expect(consumedOverrides).contain(path);
    }
    for (const path of templates) {
      expect(consumedTemplates).contain(path);
    }
  });

  it('should be able to resolve all assets for both repo root and packages', async () => {
    // Test repo root context
    const repoNode = await resolvePreset(preset, rootContext);
    const repoResult = resolveAssets(repoNode, rootContext);
    await expect(repoResult).resolves.not.toThrow();

    // Test package context
    const packageNode = await resolvePreset(preset, context);
    const packageResult = resolveAssets(packageNode, context);
    await expect(packageResult).resolves.not.toThrow();
  });

  it('should prepend scoped changelog entries and skip ignored release bumps', () => {
    const root = mkdtempSync(join(tmpdir(), 'presetter-release-'));
    const bin = join(root, 'bin');

    mkdirSync(bin);
    writePackage(root, '@acme/root');
    writePackage(join(root, 'packages/app'), '@acme/app');
    writePackage(join(root, 'packages/changed'), '@acme/changed');
    writePackage(join(root, 'packages/new'), '@acme/new');
    writePackage(join(root, 'e2e'), '@acme/fixture');
    writePackage(join(root, 'packages/e2e-tools'), '@acme/e2e-tools');
    writeFileSync(join(root, 'CHANGELOG.md'), 'old root\n');
    writeFileSync(join(root, 'packages/app/CHANGELOG.md'), 'old app\n');
    writeFileSync(join(root, 'packages/changed/CHANGELOG.md'), 'old changed\n');
    writeFileSync(join(root, 'e2e/README.md'), '# fixture\n');

    writeExecutable(
      join(bin, 'git'),
      [
        '#!/bin/sh',
        'if [ "$1" = "rev-parse" ] && [ "$2" = "--show-toplevel" ]; then pwd; exit 0; fi',
        'if [ "$1" = "describe" ]; then echo v1.0.0; exit 0; fi',
        'if [ "$1" = "rev-list" ]; then case "$*" in *packages/changed*|*packages/new*) echo abc123;; esac; exit 0; fi',
        'if [ "$1" = "add" ]; then exit 0; fi',
        'echo "unexpected git $*" >&2',
        'exit 1',
      ].join('\n'),
    );
    writeExecutable(
      join(bin, 'git-cliff'),
      [
        '#!/bin/sh',
        'case " $* " in',
        '  *" --bumped-version "*) echo v1.2.3; exit 0;;',
        'esac',
        String.raw`printf "%s\n" "$*" >> git-cliff.log`,
        'while [ "$#" -gt 0 ]; do',
        '  if [ "$1" = "--output" ]; then mkdir -p "$(dirname "$2")"; echo changelog > "$2"; exit 0; fi',
        '  if [ "$1" = "--prepend" ]; then { echo changelog; cat "$2"; } > "$2.tmp"; mv "$2.tmp" "$2"; exit 0; fi',
        '  shift',
        'done',
      ].join('\n'),
    );
    writeExecutable(
      join(bin, 'npm'),
      [
        '#!/bin/sh',
        'if [ "$1" = "pkg" ] && [ "$2" = "set" ]; then',
        // these strings hold POSIX shell and an embedded node -e snippet, so ${...} is
        // intentional shell parameter expansion / runtime template syntax, not a JS template literal
        /* eslint-disable no-template-curly-in-string -- shell/embedded-script literals, not JS templates */
        '  version="${3#version=}"',
        '  node -e \'const fs = require("node:fs"); const version = process.argv[1]; const pkg = JSON.parse(fs.readFileSync("package.json", "utf8")); pkg.version = version; fs.writeFileSync("package.json", `${JSON.stringify(pkg, null, 2)}\\n`);\' "$version"',
        /* eslint-enable no-template-curly-in-string */
        '  exit 0',
        'fi',
        'echo "unexpected npm $*" >&2',
        'exit 1',
      ].join('\n'),
    );

    // convert the stub bin dir to a posix path so it can be prepended to $PATH inside sh,
    // which uses ':' separators and forward slashes even on Windows (Git Bash);
    // on macOS/Linux this conversion is a no-op
    const posixBin = posix(bin);

    try {
      // the temporary `bin` directory is created by this test to stub git/git-cliff/npm,
      // and is prepended to $PATH inside the shell, isolated test scaffolding
      runShell(
        `PATH="${posixBin}:$PATH" ${readReleaseChangelogScript()} --ignore ./e2e/* --ignore '@acme/e2e-*'`,
        root,
      );

      expect(readVersion(root)).toBe('1.2.3');
      expect(readVersion(join(root, 'packages/app'))).toBe('1.2.3');
      expect(readVersion(join(root, 'packages/changed'))).toBe('1.2.3');
      expect(readVersion(join(root, 'packages/new'))).toBe('1.2.3');
      expect(readVersion(join(root, 'e2e'))).toBe('0.0.0');
      expect(readVersion(join(root, 'packages/e2e-tools'))).toBe('0.0.0');
      expect(existsSync(join(root, 'packages/app/CHANGELOG.md'))).toBe(true);
      expect(existsSync(join(root, 'packages/changed/CHANGELOG.md'))).toBe(
        true,
      );
      expect(existsSync(join(root, 'packages/new/CHANGELOG.md'))).toBe(true);
      expect(existsSync(join(root, 'e2e/CHANGELOG.md'))).toBe(false);
      expect(existsSync(join(root, 'packages/e2e-tools/CHANGELOG.md'))).toBe(
        false,
      );
      expect(readFileSync(join(root, 'CHANGELOG.md'), 'utf8')).toBe(
        'changelog\nold root\n',
      );
      expect(
        readFileSync(join(root, 'packages/app/CHANGELOG.md'), 'utf8'),
      ).toBe('old app\n');
      expect(
        readFileSync(join(root, 'packages/changed/CHANGELOG.md'), 'utf8'),
      ).toBe('changelog\nold changed\n');
      expect(
        readFileSync(join(root, 'packages/new/CHANGELOG.md'), 'utf8'),
      ).toBe('changelog\n');

      const cliffInvocations = readFileSync(join(root, 'git-cliff.log'), 'utf8')
        .trim()
        .split('\n');
      const packageInvocation = cliffInvocations.find((line) =>
        line.includes('--include-path packages/app/**'),
      );
      const changedPackageInvocation = cliffInvocations.find((line) =>
        line.includes('--include-path packages/changed/**'),
      );
      const newPackageInvocation = cliffInvocations.find((line) =>
        line.includes('--include-path packages/new/**'),
      );

      expect(packageInvocation).toBeUndefined();
      expect(changedPackageInvocation).toBeDefined();
      expect(changedPackageInvocation).toContain('--unreleased');
      expect(changedPackageInvocation).toContain('--tag v1.2.3');
      expect(changedPackageInvocation).toContain(
        '--prepend packages/changed/CHANGELOG.md',
      );
      expect(newPackageInvocation).toBeDefined();
      expect(newPackageInvocation).toContain(
        '--output packages/new/CHANGELOG.md',
      );
    } finally {
      rmSync(root, { force: true, recursive: true });
    }
  });

  it('should run lint-staged at the repo root only in packages with a config and staged changes', () => {
    const root = createPreCommitRepo();

    try {
      runPreCommit(root, 0);

      expect(readFileSync(join(root, 'presetter.log'), 'utf8')).toBe(
        'packages/staged run lint-staged -- --concurrent=false\n',
      );
    } finally {
      rmSync(root, { force: true, recursive: true });
    }
  });

  it('should fail the commit when lint-staged fails in a package', () => {
    const root = createPreCommitRepo();

    try {
      expect(() => runPreCommit(root, 3)).toThrow();
    } finally {
      rmSync(root, { force: true, recursive: true });
    }
  });
});

/**
 * create a scratch repo whose staged changes cover a package with a config, one without, and a dependency
 * @returns the repo root, with a `presetter` stub in the root's node_modules/.bin that logs where it runs
 */
function createPreCommitRepo(): string {
  const root = mkdtempSync(join(tmpdir(), 'presetter-pre-commit-'));

  for (const path of [
    'packages/staged',
    'packages/unstaged',
    'packages/no-config',
    'node_modules/dependency',
  ]) {
    writePackage(join(root, path), path);
    writeFileSync(join(root, path, 'index.ts'), 'export {};\n');
  }
  for (const path of [
    'packages/staged',
    'packages/unstaged',
    'node_modules/dependency',
  ]) {
    writeFileSync(join(root, path, '.lintstagedrc.json'), '{}\n');
  }
  writeFileSync(join(root, '.gitignore'), 'node_modules\n.lintstagedrc.json\n');
  writeExecutable(
    join(root, 'node_modules/.bin/presetter'),
    [
      '#!/bin/sh',
      String.raw`printf "%s %s\n" "$(pwd -P | sed "s|^$ROOT/||")" "$*" >> "$ROOT/presetter.log"`,
      'exit "$STUB_EXIT"',
    ].join('\n'),
  );

  return root;
}

/**
 * stage changes and run the root pre-commit hook the way husky does, with a relative node_modules/.bin on PATH
 * @param root the scratch repo root
 * @param exitCode the exit code of the stubbed lint-staged run
 */
function runPreCommit(root: string, exitCode: number): void {
  const hook = posix(resolve(OVERRIDES, 'pre-commit'));

  // drop the GIT_* variables a calling git hook exports (e.g. GIT_INDEX_FILE), so git targets the scratch repo
  const env = Object.fromEntries(
    Object.entries(process.env).filter(([key]) => !key.startsWith('GIT_')),
  );

  runShell(
    [
      'git init -q',
      'git add .gitignore packages/staged/package.json packages/unstaged/package.json packages/no-config/package.json',
      'git -c user.name=test -c user.email=test@example.com -c commit.gpgsign=false commit -q -m init',
      'git add packages/staged/index.ts packages/no-config/index.ts',
      'git add -f node_modules/dependency/index.ts',
      'ROOT="$(pwd -P)"',
      `STUB_EXIT=${exitCode}`,
      'export ROOT STUB_EXIT',
      `PATH="node_modules/.bin:$PATH" sh -e "${hook}"`,
    ].join('\n'),
    root,
    env,
  );
}

function readReleaseChangelogScript(): string {
  // normalize CRLF so marker matching and the extracted shell body work on Windows checkouts
  const template = readFileSync(
    resolve(OVERRIDES, 'scripts.yaml'),
    'utf8',
  ).replace(/\r\n/g, '\n');
  const marker = 'release:changelog: >-\n';
  const start = template.indexOf(marker);
  const bodyStart = start + marker.length;
  const bodyEnd = template.indexOf('\nrelease:notes:', bodyStart);

  return template
    .slice(bodyStart, bodyEnd)
    .split('\n')
    .filter(Boolean)
    .map((line) => line.replace(/^ {2}/, ''))
    .join(' ');
}

/**
 * run a POSIX shell script, through Git Bash on Windows
 * @param script the script to run
 * @param cwd the working directory
 * @param env the environment, defaulting to the current one
 */
function runShell(script: string, cwd: string, env?: NodeJS.ProcessEnv): void {
  // eslint-disable-next-line sonarjs/no-os-command-from-path -- intentional test stubbing via a self-created temp bin
  execFileSync('sh', ['-c', script], { cwd, env });
}

function writePackage(path: string, name: string): void {
  mkdirSync(path, { recursive: true });
  writeFileSync(
    join(path, 'package.json'),
    `${JSON.stringify({ name, version: '0.0.0' }, null, 2)}\n`,
  );
}

function writeExecutable(path: string, content: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${content}\n`);
  chmodSync(path, 0o755);
}

function readVersion(path: string): string {
  return JSON.parse(readFileSync(join(path, 'package.json'), 'utf8')).version;
}
