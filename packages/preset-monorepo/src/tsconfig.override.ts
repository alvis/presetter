import { asset } from 'presetter';

import type { TsConfigJson } from 'type-fest';

export default asset<TsConfigJson>((_, { variables }) => {
  return {
    files: [],
    references: [],
    compilerOptions: {
      module: 'ESNext',
      target: variables.target as NonNullable<
        TsConfigJson['compilerOptions']
      >['target'],
      moduleResolution: 'bundler',
      baseUrl: '.',
    },
  };
});
