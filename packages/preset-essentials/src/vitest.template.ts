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
          tsconfig: 'tsconfig.json',
        },
        watch: false,
        // auto reset mocks and stubs
        mockReset: true,
        unstubEnvs: true,
        unstubGlobals: true,
        coverage: {
          clean: true,
          include: [`${variables.source!}/**/*.ts`],
          exclude: [
            // exclude barrel files
            `${variables.source!}/**/index.ts`,
            // exclude type files
            `${variables.source!}/**/types/**`,
          ],
          provider: 'v8',
          reporter: ['text', 'html', 'clover', 'json', 'lcov'],
        },
      },
    }),
  };
});
