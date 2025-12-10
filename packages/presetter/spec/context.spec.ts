import { describe, expect, it, vi } from 'vitest';

import { resolveProjectContext, resolveRepoRoot } from '#context';

vi.mock(
  'node:fs/promises',
  () =>
    ({
      // WORKAROUND: cast to unknown first since readFile has overloading signature which doesn't allow us to simply cast it
      readFile: vi.fn(async () =>
        JSON.stringify({ name: 'name' }),
      ) as unknown as (typeof import('node:fs/promises'))['readFile'],
    }) satisfies Partial<typeof import('node:fs/promises')>,
);

const findUp = vi.hoisted(() => vi.fn());
vi.mock(
  'find-up-simple',
  () =>
    ({
      findUp,
    }) satisfies Partial<typeof import('find-up-simple')>,
);

vi.mock('#preset/project', () => ({
  resolveProjectPreset: vi.fn(async () => ({
    definition: { id: 'test-preset', root: '/path/to/preset' },
    nodes: [],
  })),
}));

describe('fn:resolveProjectContext', () => {
  it('resolve the content in package.json', async () => {
    // mock calls for resolveRepoRoot (.git, .hg, .svn)
    vi.mocked(findUp)
      .mockResolvedValueOnce('/project/package.json') // package.json
      .mockResolvedValueOnce(undefined) // .git
      .mockResolvedValueOnce(undefined) // .hg
      .mockResolvedValueOnce(undefined) // .svn
      .mockResolvedValueOnce('/project/package.json'); // package.json

    expect(await resolveProjectContext()).toEqual({
      isRepoRoot: true,
      relativeProjectRoot: '.',
      relativeRepoRoot: '.',
      repoRoot: '/project',
      projectRoot: '/project',
      packageJson: { name: 'name' },
    });
  });

  it('throw an error when no package.json is found', async () => {
    // mock calls for resolveRepoRoot (.git, .hg, .svn) + package.json
    vi.mocked(findUp).mockResolvedValue(undefined);

    await expect(resolveProjectContext()).rejects.toThrow();
  });

  it('use project root as repo root when no repository directories are found', async () => {
    // mock calls for resolveProjectContext
    vi.mocked(findUp)
      .mockResolvedValueOnce('/project/package.json') // package.json for main call
      .mockResolvedValueOnce(undefined) // .git for resolveRepoRoot
      .mockResolvedValueOnce(undefined) // .hg for resolveRepoRoot
      .mockResolvedValueOnce(undefined) // .svn for resolveRepoRoot
      .mockResolvedValueOnce(undefined); // package.json for resolveRepoRoot fallback

    expect(await resolveProjectContext()).toEqual({
      isRepoRoot: true,
      relativeProjectRoot: '.',
      relativeRepoRoot: '.',
      repoRoot: '/project',
      projectRoot: '/project',
      packageJson: { name: 'name' },
    });
  });
});

describe('fn:resolveRepoRoot', () => {
  it('should return undefined when no repository directories are found', async () => {
    vi.mocked(findUp)
      .mockResolvedValueOnce(undefined) // .git
      .mockResolvedValueOnce(undefined) // .hg
      .mockResolvedValueOnce(undefined) // .svn
      .mockResolvedValueOnce(undefined); // package.json

    const result = await resolveRepoRoot('/project');

    expect(result).toBeUndefined();
  });

  it('should return the parent directory when a meta directory is found', async () => {
    vi.mocked(findUp)
      .mockResolvedValueOnce('/project/.git') // .git found
      .mockResolvedValueOnce(undefined) // .hg
      .mockResolvedValueOnce(undefined) // .svn
      .mockResolvedValueOnce('/package.json'); // package.json

    const result = await resolveRepoRoot('/project/subdir');

    expect(result).toBe('/project');
  });

  it('should return the parent directory when package.json is found in parent', async () => {
    vi.mocked(findUp)
      .mockResolvedValueOnce(undefined) // .git
      .mockResolvedValueOnce(undefined) // .hg
      .mockResolvedValueOnce(undefined) // .svn
      .mockResolvedValueOnce('/package.json'); // package.json

    const result = await resolveRepoRoot('/project/subdir');

    expect(result).toBe('/');
  });
});
