import * as next from '@next/eslint-plugin-next';

import type { Linter } from 'eslint';

export default [
  next.flatConfig.recommended as Linter.Config,
] satisfies Linter.Config[];
