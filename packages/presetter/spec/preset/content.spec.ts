import { resolve } from 'node:path';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  createDummyContext,
  makeResolveRelative,
  mockIO,
  mockModuleResolution,
} from './mock';

makeResolveRelative();
mockIO();
mockModuleResolution();

const { linkFiles, writeFiles } = await import('#io');

const { bootstrapContent } = await import('#preset/content');

describe('fn:bootstrapContent', () => {
  beforeEach(() => {
    vi.mocked(writeFiles).mockReset();
    vi.mocked(linkFiles).mockReset();
  });

  it('write configuration and link symlinks', async () => {
    await bootstrapContent(
      createDummyContext({ noSymlinks: ['path/to/file'] }),
      { force: false },
    );

    expect(writeFiles).toBeCalledWith(
      '/project',
      {
        'link/pointed/to/other': { template: true },
        'link/pointed/to/preset': { template: true },
        'link/rewritten/by/project': { template: true },
        'path/to/file': { template: true },
      },
      {
        'link/pointed/to/other': resolve(
          '/.presetter/client/link/pointed/to/other',
        ),
        'link/pointed/to/preset': resolve(
          '/.presetter/client/link/pointed/to/preset',
        ),
        'link/rewritten/by/project': resolve(
          '/.presetter/client/link/rewritten/by/project',
        ),
        'path/to/file': resolve('/project/path/to/file'),
      },
      { force: false },
    );
    expect(linkFiles).toBeCalledWith(
      '/project',
      {
        'path/to/file': resolve('/project/path/to/file'),
        'link/pointed/to/preset': resolve(
          '/.presetter/client/link/pointed/to/preset',
        ),
        'link/pointed/to/other': resolve(
          '/.presetter/client/link/pointed/to/other',
        ),
        'link/rewritten/by/project': resolve(
          '/.presetter/client/link/rewritten/by/project',
        ),
      },
      { force: false },
    );
  });

  it('ignore configuration', async () => {
    await bootstrapContent(
      createDummyContext({
        config: {
          'path/to/file': { name: 'path/to/file' },
          'link/pointed/to/preset': { name: 'link/pointed/to/preset' },
          'link/pointed/to/other': { name: 'link/pointed/to/other' },
          'link/rewritten/by/project': { name: 'link/rewritten/by/project' },
        },
        noSymlinks: ['path/to/file'],
        ignores: [
          'link/pointed/to/preset',
          'link/pointed/to/other',
          'link/rewritten/by/project',
          { 'path/to/file': ['name'] },
        ],
      }),
      { force: false },
    );

    expect(writeFiles).toBeCalledWith(
      '/project',
      { 'path/to/file': { template: true } },
      { 'path/to/file': resolve('/project/path/to/file') },
      { force: false },
    );
    expect(linkFiles).toBeCalledWith(
      '/project',
      {
        'path/to/file': resolve('/project/path/to/file'),
      },
      { force: false },
    );
  });

  it('honours ignore rules supplied by presets', async () => {
    await bootstrapContent(
      createDummyContext({
        preset: 'virtual:extension-preset',
      }),
      { force: false },
    );

    expect(writeFiles).toBeCalledWith(
      '/project',
      { 'path/to/file': { template: true } },
      { 'path/to/file': resolve('/project/path/to/file') },
      { force: false },
    );
    expect(linkFiles).toBeCalledWith(
      '/project',
      {
        'path/to/file': resolve('/project/path/to/file'),
      },
      { force: false },
    );
  });
});
