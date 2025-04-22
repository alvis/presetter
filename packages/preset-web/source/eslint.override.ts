import storybook from 'eslint-plugin-storybook';

import type { Linter } from 'eslint';

export default [
  ...storybook.configs['flat/recommended'],
] satisfies Linter.Config[];
