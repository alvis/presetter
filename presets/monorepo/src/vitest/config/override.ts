import { globSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

import { asset } from '@presetter/types';

import type { ProjectContext } from '@presetter/types';
import type { ViteUserConfig } from 'vitest/config';

export default asset<{ default: ViteUserConfig }>(
  (_, { projectRoot, variables }) => {
    // NOTE: no rules for non-project-specific files
    return {
      default: {
        test: {
          name: 'root',
          projects: [
            // Load unit configs inline so nested project names keep the *:UNIT selector.
            ...globSync(['*/vitest.config.ts', '*/*/vitest.config.ts'], {
              cwd: projectRoot,
            }).map((config) => {
              const root = dirname(config);
              const { name } = JSON.parse(
                readFileSync(join(projectRoot, root, 'package.json'), 'utf8'),
              ) as ProjectContext['packageJson'];

              return {
                extends: config,
                root,
                test: { name: `${name ?? root}:UNIT` },
              };
            }),
            '*/vitest.config.*.ts',
            '*/*/vitest.config.*.ts',
          ],
          watch: false,
          // NOTE: setting coverage here is needed in order to report coverage at the workspace level
          coverage: {
            include: [`**/${variables.source}/**/*.?(c|m)[jt]s?(x)`],
            exclude: [
              `**/${variables.source!}/**/index.ts`,
              `**/${variables.source}/**/types/**`,
            ],
            provider: 'v8',
            reporter: ['text', 'html', 'clover', 'json', 'lcov'],
            // NOTE: this is important to make sure exclusion rules in individual projects' vitest.config.ts are respected
            // see https://vitest.dev/config/#coverage-exclude-after-remap
            excludeAfterRemap: true,
          },
        },
      },
    };
  },
);
