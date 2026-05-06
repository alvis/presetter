import * as next from '@next/eslint-plugin-next';

import type { Linter } from 'eslint';

export default [next.configs.recommended] as Linter.Config[];
