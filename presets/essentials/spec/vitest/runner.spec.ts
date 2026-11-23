import {
  mkdirSync,
  mkdtempSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';

import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { PROVIDE_KEY } from '#vitest/provide';
import { runGlobalSetup, runSetupFile } from '#vitest/runner';
import { escapeGlob } from '#vitest/setup';

import type { TestProject } from 'vitest/node';

import type { GlobalSetup, GlobalTeardown } from '#vitest/runner';

const { importActual, inject } = vi.hoisted(() => ({
  importActual: vi.fn<typeof vi.importActual>(),
  inject: vi.fn<(key: string) => string | undefined>(),
}));

vi.mock('vitest', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vitest')>();

  return {
    ...actual,
    inject,
    vi: { ...actual.vi, importActual: importActual as typeof vi.importActual },
  } satisfies Partial<typeof import('vitest')>;
});

/** exports a global setup file may have */
interface LoadedModule {
  default?: GlobalSetup;
  setup?: GlobalSetup;
  teardown?: GlobalTeardown;
}

/** options shaping a project double */
interface ProjectOptions {
  /** absolute paths of the specs that the project collects */
  specs: string[];
  /** absolute paths of the specs that other projects of the same run collect */
  others?: string[];
  /** exports of the setup file the project loads */
  loaded?: LoadedModule;
  /** `config.provide` of the project */
  provide?: TestProject['config']['provide'];
}

/** the part of a project that the runner reads */
interface RunnerProject {
  config: Pick<TestProject['config'], 'root' | 'provide'>;
  vitest: { state: Pick<TestProject['vitest']['state'], 'getPaths'> };
  matchesTestGlob: TestProject['matchesTestGlob'];
  import: (moduleId: string) => Promise<LoadedModule>;
}

// globby lists the files a glob matches, so the specs exist on disk
const PROJECT = realpathSync(mkdtempSync(join(tmpdir(), 'runner-project-')));
const ROOT = realpathSync(mkdtempSync(join(tmpdir(), 'runner-root-')));

/** a folder whose name is glob syntax that every platform allows */
const LITERAL = 'spec/(a)/[id]/{x,y}/!+@';

const GLOBS = ['spec/docker/**'];
const FILE = 'setup/docker.ts';
const TARGET = { globs: GLOBS, file: FILE };

const DOCKER_SPEC = resolve(PROJECT, 'spec/docker/a.spec.ts');
const ECR_SPEC = resolve(PROJECT, 'spec/ecr/a.spec.ts');

for (const spec of [
  DOCKER_SPEC,
  ECR_SPEC,
  resolve(PROJECT, 'spec/index.spec.ts'),
  resolve(PROJECT, 'spec/docker/nested/b.spec.ts'),
  resolve(PROJECT, 'spec/other/c.spec.ts'),
  resolve(PROJECT, 'spec/.hidden/a.spec.ts'),
  resolve(PROJECT, 'node_modules/pkg/spec/a.spec.ts'),
  resolve(PROJECT, LITERAL, 'one.spec.ts'),
  resolve(PROJECT, LITERAL, 'deep/two.spec.ts'),
  resolve(PROJECT, 'spec/a/i/x/!+@/one.spec.ts'),
  resolve(PROJECT, 'spec/a/d/y/!+@/one.spec.ts'),
  resolve(PROJECT, 'spec/(a)/[id]/{x,y}/other/one.spec.ts'),
  resolve(ROOT, 'spec/docker/a.spec.ts'),
]) {
  mkdirSync(dirname(spec), { recursive: true });
  writeFileSync(spec, '');
}

afterAll(() => {
  rmSync(PROJECT, { recursive: true, force: true });
  rmSync(ROOT, { recursive: true, force: true });
});

// the Vitest state lists the specs of every project of the run, whereas a project only matches its own
function createProject({
  specs,
  others = [],
  loaded = { default: vi.fn<GlobalSetup>() },
  provide = { [PROVIDE_KEY]: PROJECT },
}: ProjectOptions): TestProject {
  const project: RunnerProject = {
    config: { root: ROOT, provide },
    vitest: { state: { getPaths: () => [...others, ...specs] } },
    matchesTestGlob: (spec) => specs.includes(spec),
    import: vi.fn(async () => loaded),
  };

  return project as TestProject;
}

describe('fn:runGlobalSetup', () => {
  it('should run the default export and return its teardown when a selected spec matches', async () => {
    const teardown = vi.fn<GlobalTeardown>();
    const setup = vi.fn<GlobalSetup>(() => teardown);
    const project = createProject({
      specs: [DOCKER_SPEC],
      loaded: { default: setup },
    });

    await expect(runGlobalSetup(project, TARGET, PROVIDE_KEY)).resolves.toBe(
      teardown,
    );
    expect(setup).toHaveBeenCalledWith(project);
  });

  it('should run when an unfiltered run selects every spec and one of them matches', async () => {
    const teardown = vi.fn<GlobalTeardown>();
    const project = createProject({
      specs: [
        ECR_SPEC,
        resolve(PROJECT, 'spec/index.spec.ts'),
        DOCKER_SPEC,
        resolve(PROJECT, 'spec/docker/nested/b.spec.ts'),
      ],
      others: [resolve(PROJECT, 'spec/other/c.spec.ts')],
      loaded: { default: vi.fn<GlobalSetup>(() => teardown) },
    });

    await expect(runGlobalSetup(project, TARGET, PROVIDE_KEY)).resolves.toBe(
      teardown,
    );
  });

  it('should import nothing and return no teardown when no selected spec matches', async () => {
    const setup = vi.fn<GlobalSetup>(() => vi.fn<GlobalTeardown>());
    const project = createProject({
      specs: [ECR_SPEC],
      loaded: { default: setup },
    });

    await expect(
      runGlobalSetup(project, TARGET, PROVIDE_KEY),
    ).resolves.toBeUndefined();
    expect(project.import).not.toHaveBeenCalled();
    expect(setup).not.toHaveBeenCalled();
  });

  it('should import nothing when only a spec of another project matches', async () => {
    const setup = vi.fn<GlobalSetup>(() => vi.fn<GlobalTeardown>());
    const project = createProject({
      specs: [ECR_SPEC],
      others: [DOCKER_SPEC],
      loaded: { default: setup },
    });

    await expect(
      runGlobalSetup(project, TARGET, PROVIDE_KEY),
    ).resolves.toBeUndefined();
    expect(project.import).not.toHaveBeenCalled();
    expect(setup).not.toHaveBeenCalled();
  });

  it('should match a spec inside a dot-directory', async () => {
    const project = createProject({
      specs: [resolve(PROJECT, 'spec/.hidden/a.spec.ts')],
    });

    await runGlobalSetup(
      project,
      { globs: ['spec/**/*.spec.ts'], file: FILE },
      PROVIDE_KEY,
    );

    expect(project.import).toHaveBeenCalledWith(resolve(PROJECT, FILE));
  });

  it('should not match a spec inside node_modules', async () => {
    const project = createProject({
      specs: [resolve(PROJECT, 'node_modules/pkg/spec/a.spec.ts')],
    });

    await runGlobalSetup(
      project,
      { globs: ['**/*.spec.ts'], file: FILE },
      PROVIDE_KEY,
    );

    expect(project.import).not.toHaveBeenCalled();
  });

  it('should match a folder escaped by escapeGlob only at its literal path', async () => {
    const target = { globs: [`${escapeGlob(LITERAL)}/**`], file: FILE };
    const specs = [
      resolve(PROJECT, LITERAL, 'one.spec.ts'),
      resolve(PROJECT, LITERAL, 'deep/two.spec.ts'),
      resolve(PROJECT, 'spec/a/i/x/!+@/one.spec.ts'),
      resolve(PROJECT, 'spec/a/d/y/!+@/one.spec.ts'),
      resolve(PROJECT, 'spec/(a)/[id]/{x,y}/other/one.spec.ts'),
    ];

    const matched = await Promise.all(
      specs.map(async (spec) => {
        const project = createProject({ specs: [spec] });

        await runGlobalSetup(project, target, PROVIDE_KEY);

        return vi.mocked(project.import).mock.calls.length > 0;
      }),
    );

    expect(matched).toEqual([true, true, false, false, false]);
  });

  it('should run the setup export and return the teardown export', async () => {
    const teardown = vi.fn<GlobalTeardown>();
    const setup = vi.fn<GlobalSetup>();
    const project = createProject({
      specs: [DOCKER_SPEC],
      loaded: { setup, teardown },
    });

    await expect(runGlobalSetup(project, TARGET, PROVIDE_KEY)).resolves.toBe(
      teardown,
    );
    expect(setup).toHaveBeenCalledWith(project);
  });

  it('should return the teardown that the setup export returns when there is no teardown export', async () => {
    const teardown = vi.fn<GlobalTeardown>();
    const project = createProject({
      specs: [DOCKER_SPEC],
      loaded: { setup: vi.fn<GlobalSetup>(async () => teardown) },
    });

    await expect(runGlobalSetup(project, TARGET, PROVIDE_KEY)).resolves.toBe(
      teardown,
    );
  });

  it('should prefer the teardown export over the teardown that the setup export returns, as Vitest does', async () => {
    const teardown = vi.fn<GlobalTeardown>();
    const project = createProject({
      specs: [DOCKER_SPEC],
      loaded: {
        setup: vi.fn<GlobalSetup>(() => vi.fn<GlobalTeardown>()),
        teardown,
      },
    });

    await expect(runGlobalSetup(project, TARGET, PROVIDE_KEY)).resolves.toBe(
      teardown,
    );
  });

  it('should return the teardown export of a module that exports no setup', async () => {
    const teardown = vi.fn<GlobalTeardown>();
    const project = createProject({
      specs: [DOCKER_SPEC],
      loaded: { teardown },
    });

    await expect(runGlobalSetup(project, TARGET, PROVIDE_KEY)).resolves.toBe(
      teardown,
    );
  });

  it('should reject a module exporting no default, setup or teardown', async () => {
    const project = createProject({ specs: [DOCKER_SPEC], loaded: {} });

    await expect(runGlobalSetup(project, TARGET, PROVIDE_KEY)).rejects.toEqual(
      new Error(
        `invalid global setup file ${resolve(PROJECT, FILE)}. Must export setup, teardown or have a default export`,
      ),
    );
  });

  it('should resolve a relative file against the provided directory', async () => {
    const project = createProject({ specs: [DOCKER_SPEC] });

    await runGlobalSetup(project, TARGET, PROVIDE_KEY);

    expect(project.import).toHaveBeenCalledWith(resolve(PROJECT, FILE));
  });

  it('should use an absolute file as is', async () => {
    const file = resolve('/shared/docker.ts');
    const project = createProject({ specs: [DOCKER_SPEC] });

    await runGlobalSetup(project, { globs: GLOBS, file }, PROVIDE_KEY);

    expect(project.import).toHaveBeenCalledWith(file);
  });

  it('should match globs against the provided directory rather than the Vitest root', async () => {
    const project = createProject({
      specs: [resolve(ROOT, 'spec/docker/a.spec.ts')],
    });

    await runGlobalSetup(project, TARGET, PROVIDE_KEY);

    expect(project.import).not.toHaveBeenCalled();
  });

  it('should fall back to the Vitest root when no directory is provided', async () => {
    const project = createProject({
      specs: [resolve(ROOT, 'spec/docker/a.spec.ts')],
      provide: {},
    });

    await runGlobalSetup(project, TARGET, PROVIDE_KEY);

    expect(project.import).toHaveBeenCalledWith(resolve(ROOT, FILE));
  });
});

describe('fn:runSetupFile', () => {
  beforeEach(() => {
    inject.mockReturnValue(PROJECT);
  });

  it('should import the file, resolved against the provided directory, before a matching spec', async () => {
    expect.setState({ testPath: DOCKER_SPEC });

    await runSetupFile(TARGET, PROVIDE_KEY);

    expect(inject).toHaveBeenCalledWith(PROVIDE_KEY);
    expect(importActual).toHaveBeenCalledWith(resolve(PROJECT, FILE));
  });

  it('should import nothing before a spec that matches no glob', async () => {
    expect.setState({ testPath: ECR_SPEC });

    await runSetupFile(TARGET, PROVIDE_KEY);

    expect(importActual).not.toHaveBeenCalled();
  });

  it('should import the file before a spec inside a dot-directory', async () => {
    expect.setState({ testPath: resolve(PROJECT, 'spec/.hidden/a.spec.ts') });

    await runSetupFile(
      { globs: ['spec/**/*.spec.ts'], file: FILE },
      PROVIDE_KEY,
    );

    expect(importActual).toHaveBeenCalledWith(resolve(PROJECT, FILE));
  });

  it('should import nothing when the worker reports no test path', async () => {
    expect.setState({ testPath: undefined });

    await runSetupFile(TARGET, PROVIDE_KEY);

    expect(importActual).not.toHaveBeenCalled();
  });

  it('should use an absolute file as is', async () => {
    const file = resolve('/shared/docker.ts');
    expect.setState({ testPath: DOCKER_SPEC });

    await runSetupFile({ globs: GLOBS, file }, PROVIDE_KEY);

    expect(importActual).toHaveBeenCalledWith(file);
  });

  it('should match globs against the provided directory rather than the working directory', async () => {
    vi.spyOn(process, 'cwd').mockReturnValue(ROOT);
    expect.setState({ testPath: resolve(ROOT, 'spec/docker/a.spec.ts') });

    await runSetupFile(TARGET, PROVIDE_KEY);

    expect(importActual).not.toHaveBeenCalled();
  });

  it('should fall back to the working directory when no directory is provided', async () => {
    inject.mockReturnValue(undefined);
    vi.spyOn(process, 'cwd').mockReturnValue(ROOT);
    expect.setState({ testPath: resolve(ROOT, 'spec/docker/a.spec.ts') });

    await runSetupFile(TARGET, PROVIDE_KEY);

    expect(importActual).toHaveBeenCalledWith(resolve(ROOT, FILE));
  });
});
