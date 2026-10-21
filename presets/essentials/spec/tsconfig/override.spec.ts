import { describe, expect, it } from 'vitest';

import override from '#tsconfig/override';

import type {
  PresetContentContext,
  PresetContentGenerator,
} from '@presetter/types';
import type { PackageJson, TsConfigJson } from 'type-fest';

const generate = override as PresetContentGenerator<TsConfigJson>;

const current = {
  compilerOptions: { strict: true, types: ['vitest/globals', 'node'] },
} satisfies TsConfigJson;

function createContext(packageJson: PackageJson): PresetContentContext {
  return {
    isRepoRoot: true,
    relativeProjectRoot: '.',
    relativeRepoRoot: '.',
    repoRoot: '/path/to/project',
    projectRoot: '/path/to/project',
    packageJson,
    variables: {},
  };
}

describe('fn:override', () => {
  it('should add every @types development dependency to the existing types', async () => {
    const result = await generate(
      current,
      createContext({
        devDependencies: {
          '@types/babel__core': '*',
          '@types/node': '*',
          'vitest': '*',
        },
      }),
    );

    expect(result).toEqual({
      compilerOptions: {
        strict: true,
        types: ['vitest/globals', 'node', 'babel__core'],
      },
    });
  });

  it('should leave the config unchanged without @types development dependencies', async () => {
    const result = await generate(
      current,
      createContext({
        dependencies: { '@types/node': '*' },
        devDependencies: { vitest: '*' },
      }),
    );

    expect(result).toBe(current);
  });
});
