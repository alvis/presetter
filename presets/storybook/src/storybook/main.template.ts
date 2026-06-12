import { join } from 'node:path';

import { asset, merge } from 'presetter';

import type { StorybookConfig } from 'storybook/internal/types';

export default asset<{ default: StorybookConfig }>(
  (current, { variables, projectRoot }) => ({
    default: merge(
      {
        // NOTE: story globs MUST be relative to the Storybook config dir
        // (`.storybook`), not absolute. `@storybook/addon-vitest` resolves them
        // via `path.join(configDir, storyPath)` to decide which files to
        // transform into Vitest tests; an absolute glob mangles that join
        // (`.storybook/<abs-path>`), matches nothing, and every story reports `0 test`.
        stories: [
          join(
            projectRoot,
            variables.source!,
            '**',
            '*.stories.@(ts|tsx|js|jsx|mdx)',
          ),
        ],
      },
      current,
    ),
  }),
);
