import { asset } from '@presetter/types';

import type { TsConfigJson } from 'type-fest';

export default asset<TsConfigJson>((_, { variables }) => {
  return {
    include: ['**/*.ts'],
    references: [],
    compilerOptions: {
      module: 'ESNext',
      strictNullChecks: true,
      skipLibCheck: true,
      target: variables.target as NonNullable<
        TsConfigJson['compilerOptions']
      >['target'],
      moduleResolution: 'bundler',
    },
  };
});
