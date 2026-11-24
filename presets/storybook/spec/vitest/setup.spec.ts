import { join } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { detectSetupFiles } from '#vitest/setup';

vi.mock(
  'node:fs',
  () =>
    ({
      existsSync: (path) =>
        [
          join('/project', 'vitest.setup.sto.ts'),
          join('/project', 'vitest.setup.sto.mts'),
          join('/project', 'vitest.setup.sto.cts'),
          join('/project', 'vitest.setup.sto.js'),
          join('/project', 'vitest.setup.sto.mjs'),
          join('/project', 'vitest.setup.sto.cjs'),
          join('/project', 'vitest.setup.story.ts'),
          join('/project', 'spec/setup.sto.ts'),
          join('/project', 'spec/setup.story.ts'),
          join('/project', 'spec/vitest.setup.sto.ts'),
          join('/project', 'spec/vitest.setup.story.ts'),
          join('/project', 'vitest.global-setup.sto.ts'),
          join('/project', 'vitest.global-setup.sto.mts'),
          join('/project', 'vitest.global-setup.sto.cts'),
          join('/project', 'vitest.global-setup.sto.js'),
          join('/project', 'vitest.global-setup.sto.mjs'),
          join('/project', 'vitest.global-setup.sto.cjs'),
          join('/project', 'vitest.global-setup.story.ts'),
          join('/project', 'spec/global-setup.sto.ts'),
          join('/project', 'spec/global-setup.story.ts'),
          join('/project', 'spec/vitest.global-setup.sto.ts'),
          join('/project', 'spec/vitest.global-setup.story.ts'),
          join('/project', 'vitest.setup.ts'),
          join('/project', 'vitest.setup.unit.ts'),
          join('/project', 'stories/setup.story.ts'),
          join('/project', 'stories/global-setup.story.ts'),
        ].includes(String(path)),
    }) satisfies Partial<typeof import('node:fs')>,
);

describe('fn:detectSetupFiles', () => {
  it('should order STO files by base, suffix, then every supported extension, skipping other suffixes', () => {
    expect(detectSetupFiles('/project', 'spec', ['.sto', '.story'])).toEqual({
      file: [
        'vitest.setup.sto.ts',
        'vitest.setup.sto.mts',
        'vitest.setup.sto.cts',
        'vitest.setup.sto.js',
        'vitest.setup.sto.mjs',
        'vitest.setup.sto.cjs',
        'vitest.setup.story.ts',
        'spec/setup.sto.ts',
        'spec/setup.story.ts',
        'spec/vitest.setup.sto.ts',
        'spec/vitest.setup.story.ts',
      ].map((path) => join('/project', path)),
      project: [
        'vitest.global-setup.sto.ts',
        'vitest.global-setup.sto.mts',
        'vitest.global-setup.sto.cts',
        'vitest.global-setup.sto.js',
        'vitest.global-setup.sto.mjs',
        'vitest.global-setup.sto.cjs',
        'vitest.global-setup.story.ts',
        'spec/global-setup.sto.ts',
        'spec/global-setup.story.ts',
        'spec/vitest.global-setup.sto.ts',
        'spec/vitest.global-setup.story.ts',
      ].map((path) => join('/project', path)),
    });
  });

  it('should use a custom test directory while retaining root candidates', () => {
    expect(detectSetupFiles('/project', 'stories', ['.story'])).toEqual({
      file: [
        join('/project', 'vitest.setup.story.ts'),
        join('/project', 'stories/setup.story.ts'),
      ],
      project: [
        join('/project', 'vitest.global-setup.story.ts'),
        join('/project', 'stories/global-setup.story.ts'),
      ],
    });
  });

  it('should return empty lists when no candidates exist', () => {
    expect(detectSetupFiles('/empty', 'spec', ['.sto', '.story'])).toEqual({
      file: [],
      project: [],
    });
  });
});
