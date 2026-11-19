import {
  existsSync,
  mkdirSync,
  renameSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { basename, dirname, join } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { PROVIDE_KEY } from '#vitest/provide';
import { scopeGlobalSetup, scopeSetup } from '#vitest/scope';

vi.mock(
  'node:fs',
  () =>
    ({
      existsSync: vi.fn(() => false),
      mkdirSync: vi.fn(() => undefined),
      renameSync: vi.fn(() => undefined),
      rmSync: vi.fn(() => undefined),
      writeFileSync: vi.fn(() => undefined),
    }) satisfies Partial<typeof import('node:fs')>,
);

const CACHE = join(
  process.cwd(),
  'node_modules',
  '.cache',
  'presetter',
  'vitest',
);

/** where the generated wrappers import the runner from */
const RUNNER_URL = new URL('../../src/vitest/runner.ts', import.meta.url).href;

const GLOBS = ['spec/docker/**'];
const FILE = 'setup/docker.ts';

/**
 * reads what reached a wrapper, which is whatever was written to the file renamed to it
 * @param wrapper absolute path of the wrapper
 * @returns the source of the wrapper, if one was put in place
 */
function sourceOf(wrapper: string): unknown {
  const [temporary] =
    vi.mocked(renameSync).mock.calls.find(([, target]) => target === wrapper) ??
    [];

  return vi
    .mocked(writeFileSync)
    .mock.calls.find(([path]) => path === temporary)?.[1];
}

describe('fn:scopeGlobalSetup', () => {
  it('should put a hash-named wrapper in the cache of the working directory and return its path', () => {
    const wrapper = scopeGlobalSetup(GLOBS, FILE);

    expect(dirname(wrapper)).toEqual(CACHE);
    expect(basename(wrapper)).toMatch(/^global-setup-[0-9a-f]{16}\.mjs$/);
    expect(mkdirSync).toHaveBeenCalledWith(CACHE, { recursive: true });
    expect(sourceOf(wrapper)).toEqual(expect.any(String));
  });

  it('should write a temporary file next to the wrapper, then rename it into place', () => {
    const wrapper = scopeGlobalSetup(GLOBS, FILE);
    const [temporary] = vi.mocked(renameSync).mock.calls.at(0) ?? [];

    expect(vi.mocked(renameSync).mock.calls).toEqual([[temporary, wrapper]]);
    expect(vi.mocked(writeFileSync).mock.calls.map(([path]) => path)).toEqual([
      temporary,
    ]);
    expect(dirname(String(temporary))).toEqual(dirname(wrapper));
    expect(temporary).not.toEqual(wrapper);
  });

  it('should create the cache, then write the temporary file, then rename it', () => {
    scopeGlobalSetup(GLOBS, FILE);

    const order = [mkdirSync, writeFileSync, renameSync].flatMap(
      (fn) => vi.mocked(fn).mock.invocationCallOrder,
    );

    expect(order).toEqual([...order].sort((a, b) => a - b));
    expect(order).toHaveLength(3);
  });

  it('should generate a wrapper that hands the target and the provided key to the global setup runner', () => {
    const wrapper = scopeGlobalSetup(GLOBS, FILE);

    expect(sourceOf(wrapper)).toEqual(
      expect.stringContaining(
        `import { runGlobalSetup } from ${JSON.stringify(RUNNER_URL)};`,
      ),
    );
    expect(sourceOf(wrapper)).toEqual(
      expect.stringContaining(
        `runGlobalSetup(project, ${JSON.stringify({ globs: GLOBS, file: FILE })}, ${JSON.stringify(PROVIDE_KEY)})`,
      ),
    );
  });

  it('should return one path for identical calls', () => {
    expect(scopeGlobalSetup(GLOBS, FILE)).toEqual(
      scopeGlobalSetup([...GLOBS], FILE),
    );
  });

  it('should return a different path when the globs or the file differ', () => {
    const wrappers = [
      scopeGlobalSetup(GLOBS, FILE),
      scopeGlobalSetup(['spec/ecr/**'], FILE),
      scopeGlobalSetup(GLOBS, 'setup/ecr.ts'),
    ];

    expect(new Set(wrappers).size).toEqual(wrappers.length);
  });

  it('should leave a wrapper that already exists alone, and still put in place one with other content', () => {
    const wrapper = scopeGlobalSetup(GLOBS, FILE);
    vi.mocked(existsSync).mockImplementation((path) => path === wrapper);

    const again = scopeGlobalSetup(GLOBS, FILE);
    const other = scopeGlobalSetup(['spec/ecr/**'], FILE);

    expect(again).toEqual(wrapper);
    expect(
      vi.mocked(renameSync).mock.calls.map(([, target]) => target),
    ).toEqual([wrapper, other]);
    expect(writeFileSync).toHaveBeenCalledTimes(2);
  });

  it('should drop its temporary file when the rename fails because another process already put the wrapper in place', () => {
    vi.mocked(renameSync).mockImplementationOnce((_, target) => {
      vi.mocked(existsSync).mockImplementation((path) => path === target);
      throw new Error('EPERM: operation not permitted');
    });

    const wrapper = scopeGlobalSetup(GLOBS, FILE);
    const [temporary] = vi.mocked(renameSync).mock.calls.at(0) ?? [];

    expect(vi.mocked(renameSync).mock.calls).toEqual([[temporary, wrapper]]);
    expect(rmSync).toHaveBeenCalledWith(temporary, { force: true });
  });

  it('should drop its temporary file and rethrow a failed rename when no wrapper was put in place', () => {
    vi.mocked(renameSync).mockImplementationOnce(() => {
      throw new Error('ENOSPC: no space left on device');
    });

    expect(() => scopeGlobalSetup(GLOBS, FILE)).toThrow(
      'ENOSPC: no space left on device',
    );

    const [temporary] = vi.mocked(renameSync).mock.calls.at(0) ?? [];

    expect(rmSync).toHaveBeenCalledWith(temporary, { force: true });
  });
});

describe('fn:scopeSetup', () => {
  it('should load without the runner, so a preset can be resolved outside a Vitest run', async () => {
    vi.resetModules();
    vi.doMock('#vitest/runner', () => {
      throw new Error('the runner was loaded');
    });

    await expect(import('#vitest/scope')).resolves.toEqual(
      expect.objectContaining({ scopeSetup: expect.any(Function) }),
    );

    vi.doUnmock('#vitest/runner');
  });

  it('should put a hash-named wrapper in the cache of the working directory and return its path', () => {
    const wrapper = scopeSetup(GLOBS, FILE);

    expect(dirname(wrapper)).toEqual(CACHE);
    expect(basename(wrapper)).toMatch(/^setup-[0-9a-f]{16}\.mjs$/);
    expect(mkdirSync).toHaveBeenCalledWith(CACHE, { recursive: true });
    expect(sourceOf(wrapper)).toEqual(expect.any(String));
  });

  it('should generate a wrapper that awaits the setup file runner with the target and the provided key', () => {
    const wrapper = scopeSetup(GLOBS, FILE);

    expect(sourceOf(wrapper)).toEqual(
      expect.stringContaining(
        `import { runSetupFile } from ${JSON.stringify(RUNNER_URL)};`,
      ),
    );
    expect(sourceOf(wrapper)).toEqual(
      expect.stringContaining(
        `await runSetupFile(${JSON.stringify({ globs: GLOBS, file: FILE })}, ${JSON.stringify(PROVIDE_KEY)})`,
      ),
    );
  });

  it('should return one path for identical calls', () => {
    expect(scopeSetup(GLOBS, FILE)).toEqual(scopeSetup([...GLOBS], FILE));
  });

  it('should return a different path when the globs or the file differ, or for a global setup of the same target', () => {
    const wrappers = [
      scopeSetup(GLOBS, FILE),
      scopeSetup(['spec/ecr/**'], FILE),
      scopeSetup(GLOBS, 'setup/ecr.ts'),
      scopeGlobalSetup(GLOBS, FILE),
    ];

    expect(new Set(wrappers).size).toEqual(wrappers.length);
  });
});
