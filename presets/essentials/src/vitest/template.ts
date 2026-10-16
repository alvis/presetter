import { asset } from '@presetter/types';
import { merge, mergeByKey } from 'presetter';

import type { ViteUserConfig } from 'vitest/config';

export default asset<{ default: ViteUserConfig }>((current, context) => {
  const { packageJson, variables } = context;

  return merge(current, {
    default: {
      test: {
        name: packageJson.name!,
        projects: merge(
          mergeByKey('test.name', [{ extends: true, test: { name: 'UNIT' } }]),
          ['vitest.config.*.ts'],
        ),
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
    },
  });
});
