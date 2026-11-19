import { describe, expect, it, vi } from 'vitest';

import { PROVIDE_KEY } from '#vitest/provide';
import { runGlobalSetup, runSetupFile } from '#vitest/runner';

import type { TestProject } from 'vitest/node';

import type { GlobalSetup } from '#vitest/runner';

const { globby, importActual, inject } = vi.hoisted(() => ({
  // the files that the docker globs match in the project, as globby lists them
  globby: vi.fn(async () => ['spec/docker/a.spec.ts']),
  importActual: vi.fn<typeof vi.importActual>(),
  inject: vi.fn<(key: string) => string | undefined>(
    () => String.raw`C:\project`,
  ),
}));

vi.mock('vitest', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vitest')>();

  return {
    ...actual,
    inject,
    vi: { ...actual.vi, importActual: importActual as typeof vi.importActual },
  } satisfies Partial<typeof import('vitest')>;
});

vi.mock('globby', () => ({ globby }));

// resolve paths as Windows does, whatever platform runs the suite
vi.mock('node:path', async (importOriginal) => {
  const actual = await importOriginal<typeof import('node:path')>();

  return actual.win32 satisfies Partial<typeof import('node:path')>;
});

/** the part of a project that the runner reads */
interface RunnerProject {
  config: Pick<TestProject['config'], 'root' | 'provide'>;
  vitest: { state: Pick<TestProject['vitest']['state'], 'getPaths'> };
  matchesTestGlob: TestProject['matchesTestGlob'];
  import: (moduleId: string) => Promise<{ default: GlobalSetup }>;
}

const TARGET = { globs: ['spec/docker/**'], file: String.raw`setup\docker.ts` };

function createProject(
  specs: string[],
  directory = String.raw`C:\project`,
): TestProject {
  const project: RunnerProject = {
    config: {
      root: String.raw`C:\root`,
      provide: { [PROVIDE_KEY]: directory },
    },
    vitest: { state: { getPaths: () => specs } },
    matchesTestGlob: (spec) => specs.includes(spec),
    import: vi.fn(async () => ({ default: vi.fn<GlobalSetup>() })),
  };

  return project as TestProject;
}

describe('fn:runGlobalSetup', () => {
  it('should match POSIX globs against spec paths separated by backslashes', async () => {
    const project = createProject([
      String.raw`C:\project\spec\docker\a.spec.ts`,
    ]);

    await runGlobalSetup(project, TARGET, PROVIDE_KEY);

    expect(globby).toHaveBeenCalledWith(
      TARGET.globs,
      expect.objectContaining({ cwd: String.raw`C:\project` }),
    );
    expect(project.import).toHaveBeenCalledWith(
      String.raw`C:\project\setup\docker.ts`,
    );
  });

  it('should skip a setup file when no spec path with backslashes matches', async () => {
    const project = createProject([String.raw`C:\project\spec\ecr\a.spec.ts`]);

    await runGlobalSetup(project, TARGET, PROVIDE_KEY);

    expect(project.import).not.toHaveBeenCalled();
  });

  it('should match a spec path and a provided directory that use forward slashes, as Vitest reports on Windows', async () => {
    const project = createProject(
      ['C:/project/spec/docker/a.spec.ts'],
      'C:/project',
    );

    await runGlobalSetup(project, TARGET, PROVIDE_KEY);

    expect(project.import).toHaveBeenCalledWith(
      String.raw`C:\project\setup\docker.ts`,
    );
  });

  it('should skip a setup file when no spec path with forward slashes matches', async () => {
    const project = createProject(
      ['C:/project/spec/ecr/a.spec.ts'],
      'C:/project',
    );

    await runGlobalSetup(project, TARGET, PROVIDE_KEY);

    expect(project.import).not.toHaveBeenCalled();
  });
});

describe('fn:runSetupFile', () => {
  it('should match POSIX globs against a test path separated by backslashes', async () => {
    expect.setState({ testPath: String.raw`C:\project\spec\docker\a.spec.ts` });

    await runSetupFile(TARGET, PROVIDE_KEY);

    expect(importActual).toHaveBeenCalledWith(
      String.raw`C:\project\setup\docker.ts`,
    );
  });

  it('should import nothing before a test path with backslashes outside the globs', async () => {
    expect.setState({ testPath: String.raw`C:\project\spec\ecr\a.spec.ts` });

    await runSetupFile(TARGET, PROVIDE_KEY);

    expect(importActual).not.toHaveBeenCalled();
  });

  it('should match a test path and a provided directory that use forward slashes, as Vitest reports on Windows', async () => {
    inject.mockReturnValue('C:/project');
    expect.setState({ testPath: 'C:/project/spec/docker/a.spec.ts' });

    await runSetupFile(TARGET, PROVIDE_KEY);

    expect(importActual).toHaveBeenCalledWith(
      String.raw`C:\project\setup\docker.ts`,
    );
  });
});
