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

    const consumedOverrides = [
      node.definition.override?.scripts,
      ...Object.values({ ...node.definition.override?.assets }),
    ]
      .filter((item) => typeof item === 'string')
      .map((path) => relative(OVERRIDES, path));
    const consumedTemplates = [
      node.definition.scripts,
      ...Object.values({
        ...(node.definition.assets instanceof Function
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

  it('should skip release bumps by ignored path or package name glob', () => {
    const root = mkdtempSync(join(tmpdir(), 'presetter-release-'));
    const bin = join(root, 'bin');

    mkdirSync(bin);
    writePackage(root, '@acme/root');
    writePackage(join(root, 'packages/app'), '@acme/app');
    writePackage(join(root, 'e2e'), '@acme/fixture');
    writePackage(join(root, 'packages/e2e-tools'), '@acme/e2e-tools');
    writeFileSync(join(root, 'e2e/README.md'), '# fixture\n');

    writeExecutable(
      join(bin, 'git'),
      [
        '#!/bin/sh',
        'if [ "$1" = "rev-parse" ] && [ "$2" = "--show-toplevel" ]; then pwd; exit 0; fi',
        'if [ "$1" = "add" ]; then exit 0; fi',
        'echo "unexpected git $*" >&2',
        'exit 1',
      ].join('\n'),
    );
    writeExecutable(
      join(bin, 'git-cliff'),
      [
        '#!/bin/sh',
        'while [ "$#" -gt 0 ]; do',
        '  if [ "$1" = "--bumped-version" ]; then echo v1.2.3; exit 0; fi',
        '  if [ "$1" = "--output" ]; then mkdir -p "$(dirname "$2")"; echo changelog > "$2"; exit 0; fi',
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
      execFileSync(
        // the temporary `bin` directory is created by this test to stub git/git-cliff/npm,
        // and is prepended to $PATH inside the shell, isolated test scaffolding
        // eslint-disable-next-line sonarjs/no-os-command-from-path -- intentional test stubbing via a self-created temp bin
        'sh',
        [
          '-c',
          `PATH="${posixBin}:$PATH" ${readReleaseChangelogScript()} --ignore ./e2e/* --ignore '@acme/e2e-*'`,
        ],
        { cwd: root },
      );

      expect(readVersion(root)).toBe('1.2.3');
      expect(readVersion(join(root, 'packages/app'))).toBe('1.2.3');
      expect(readVersion(join(root, 'e2e'))).toBe('0.0.0');
      expect(readVersion(join(root, 'packages/e2e-tools'))).toBe('0.0.0');
      expect(existsSync(join(root, 'packages/app/CHANGELOG.md'))).toBe(true);
      expect(existsSync(join(root, 'e2e/CHANGELOG.md'))).toBe(false);
      expect(existsSync(join(root, 'packages/e2e-tools/CHANGELOG.md'))).toBe(
        false,
      );
    } finally {
      rmSync(root, { force: true, recursive: true });
    }
  });
});

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
    .join('\n');
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
