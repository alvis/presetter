import { resolve } from 'node:path';

import type { PresetContentContext } from 'presetter-types';

export const context = {
  isRepoRoot: false,
  relativeProjectRoot: '.',
  relativeRepoRoot: '.',
  repoRoot: resolve('/path/to/project'),
  projectRoot: resolve('/path/to/project'),
  packageJson: {
    name: 'test-preset',
  },
  variables: {
    customAssetPath: 'path/to/custom/asset',
  },
} satisfies PresetContentContext;
