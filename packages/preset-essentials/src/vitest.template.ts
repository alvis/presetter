/* v8 ignore start */

import { asset } from 'presetter-types';

import { mergeConfig } from 'vitest/config';

import type { ViteUserConfig } from 'vitest/config';

export default asset<{ default: ViteUserConfig }>((current, context) => {
  const { packageJson, variables } = context;

  return {
    default: mergeConfig(current?.default ?? {}, {
      esbuild: { target: 'es2022' }, // required for using `using` statement
      test: {
        name: `${packageJson.name!}:UNIT`,
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
          exclude: [
            // exclude type files
            `${variables.source!}/**/types/**`,
            `${variables.source!}/**/types.ts`,
          ],
          provider: 'v8',
          reporter: ['text', 'html', 'clover', 'json', 'lcov'],
        },
      },
    }),
  };
});
