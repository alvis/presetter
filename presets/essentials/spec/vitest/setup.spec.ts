import { join } from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { detectSetupFiles } from '#vitest/setup';

vi.mock(
  'node:fs',
  () =>
    ({
      existsSync: (path) =>
        [
          join('/project', 'vitest.setup.ts'),
          join('/project', 'vitest.setup.mts'),
          join('/project', 'vitest.setup.cts'),
          join('/project', 'vitest.setup.js'),
          join('/project', 'vitest.setup.mjs'),
          join('/project', 'vitest.setup.cjs'),
          join('/project', 'vitest.setup.unit.ts'),
          join('/project', 'spec/setup.ts'),
          join('/project', 'spec/setup.unit.ts'),
          join('/project', 'spec/vitest.setup.ts'),
          join('/project', 'spec/vitest.setup.unit.ts'),
          join('/project', 'vitest.global-setup.ts'),
          join('/project', 'vitest.global-setup.mts'),
          join('/project', 'vitest.global-setup.cts'),
          join('/project', 'vitest.global-setup.js'),
          join('/project', 'vitest.global-setup.mjs'),
          join('/project', 'vitest.global-setup.cjs'),
          join('/project', 'vitest.global-setup.unit.ts'),
          join('/project', 'spec/global-setup.ts'),
          join('/project', 'spec/global-setup.unit.ts'),
          join('/project', 'spec/vitest.global-setup.ts'),
          join('/project', 'spec/vitest.global-setup.unit.ts'),
          join('/project', 'vitest.setup.int.ts'),
          join('/project', 'vitest.setup.integration.ts'),
          join('/project', 'spec/setup.int.ts'),
          join('/project', 'spec/setup.integration.ts'),
          join('/project', 'spec/vitest.setup.int.ts'),
          join('/project', 'spec/vitest.setup.integration.ts'),
          join('/project', 'vitest.global-setup.int.ts'),
          join('/project', 'vitest.global-setup.integration.ts'),
          join('/project', 'spec/global-setup.int.ts'),
          join('/project', 'spec/global-setup.integration.ts'),
          join('/project', 'spec/vitest.global-setup.int.ts'),
          join('/project', 'spec/vitest.global-setup.integration.ts'),
          join('/project', 'vitest.setup.e2e.ts'),
          join('/project', 'spec/setup.e2e.ts'),
          join('/project', 'spec/vitest.setup.e2e.ts'),
          join('/project', 'vitest.global-setup.e2e.ts'),
          join('/project', 'spec/global-setup.e2e.ts'),
          join('/project', 'spec/vitest.global-setup.e2e.ts'),
          join('/project', 'tests/setup.ts'),
          join('/project', 'tests/vitest.setup.unit.ts'),
          join('/project', 'tests/global-setup.ts'),
          join('/project', 'tests/vitest.global-setup.unit.ts'),
        ].includes(String(path)),
    }) satisfies Partial<typeof import('node:fs')>,
);

describe('fn:detectSetupFiles', () => {
  it('should order UNIT files by base, suffix, then every supported extension', () => {
    expect(detectSetupFiles('/project', 'spec', ['', '.unit'])).toEqual({
      file: [
        'vitest.setup.ts',
        'vitest.setup.mts',
        'vitest.setup.cts',
        'vitest.setup.js',
        'vitest.setup.mjs',
        'vitest.setup.cjs',
        'vitest.setup.unit.ts',
        'spec/setup.ts',
        'spec/setup.unit.ts',
        'spec/vitest.setup.ts',
        'spec/vitest.setup.unit.ts',
      ].map((path) => join('/project', path)),
      project: [
        'vitest.global-setup.ts',
        'vitest.global-setup.mts',
        'vitest.global-setup.cts',
        'vitest.global-setup.js',
        'vitest.global-setup.mjs',
        'vitest.global-setup.cjs',
        'vitest.global-setup.unit.ts',
        'spec/global-setup.ts',
        'spec/global-setup.unit.ts',
        'spec/vitest.global-setup.ts',
        'spec/vitest.global-setup.unit.ts',
      ].map((path) => join('/project', path)),
    });
  });

  it('should detect both INT suffixes without including unsuffixed files', () => {
    expect(
      detectSetupFiles('/project', 'spec', ['.int', '.integration']),
    ).toEqual({
      file: [
        join('/project', 'vitest.setup.int.ts'),
        join('/project', 'vitest.setup.integration.ts'),
        join('/project', 'spec/setup.int.ts'),
        join('/project', 'spec/setup.integration.ts'),
        join('/project', 'spec/vitest.setup.int.ts'),
        join('/project', 'spec/vitest.setup.integration.ts'),
      ],
      project: [
        join('/project', 'vitest.global-setup.int.ts'),
        join('/project', 'vitest.global-setup.integration.ts'),
        join('/project', 'spec/global-setup.int.ts'),
        join('/project', 'spec/global-setup.integration.ts'),
        join('/project', 'spec/vitest.global-setup.int.ts'),
        join('/project', 'spec/vitest.global-setup.integration.ts'),
      ],
    });
  });

  it('should detect only E2E suffixes', () => {
    expect(detectSetupFiles('/project', 'spec', ['.e2e'])).toEqual({
      file: [
        join('/project', 'vitest.setup.e2e.ts'),
        join('/project', 'spec/setup.e2e.ts'),
        join('/project', 'spec/vitest.setup.e2e.ts'),
      ],
      project: [
        join('/project', 'vitest.global-setup.e2e.ts'),
        join('/project', 'spec/global-setup.e2e.ts'),
        join('/project', 'spec/vitest.global-setup.e2e.ts'),
      ],
    });
  });

  it('should use a custom test directory while retaining root candidates', () => {
    expect(detectSetupFiles('/project', 'tests', ['.unit'])).toEqual({
      file: [
        join('/project', 'vitest.setup.unit.ts'),
        join('/project', 'tests/vitest.setup.unit.ts'),
      ],
      project: [
        join('/project', 'vitest.global-setup.unit.ts'),
        join('/project', 'tests/vitest.global-setup.unit.ts'),
      ],
    });
  });

  it('should return empty lists when no candidates exist', () => {
    expect(detectSetupFiles('/empty', 'spec', ['', '.unit'])).toEqual({
      file: [],
      project: [],
    });
  });
});
