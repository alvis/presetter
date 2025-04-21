/* v8 ignore start */

import { asset } from 'presetter-types';
import tsconfigPaths from 'vite-tsconfig-paths';

import { mergeConfig } from 'vitest/config';

import type { ViteUserConfig } from 'vitest/config';

const plugins = [tsconfigPaths()];

export default asset<{ default: ViteUserConfig }>((current, { variables }) => {
  const { plugins: incomingPlugins = [], ...rest } = current?.default ?? {};

  return {
    default: mergeConfig(rest, {
      esbuild: { target: 'es2022' }, // required for using `using` statement
      plugins: [...new Set([...plugins, ...incomingPlugins])], // make sure there are no duplicates
      test: {
        passWithNoTests: true,
        typecheck: {
          enabled: true,
          tsconfig: 'tsconfig.build.json',
        },
        watch: false,
        // auto clear mocks and stubs
        clearMocks: true,
        unstubEnvs: true,
        unstubGlobals: true,
        coverage: {
          all: true,
          clean: true,
          ignoreEmptyLines: true,
          include: [`${variables.source!}/**`],
          provider: 'v8',
          reporter: ['text', 'html', 'clover', 'json', 'lcov'],
        },
      },
    }),
  };
});
