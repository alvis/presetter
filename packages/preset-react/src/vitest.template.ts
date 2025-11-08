import { asset } from 'presetter-types';

import { mergeConfig } from 'vitest/config';

import type { ViteUserConfig } from 'vitest/config';

export default asset<{ default: ViteUserConfig }>((current, context) => {
  const { variables } = context;

  return {
    default: mergeConfig(current?.default ?? {}, {
      test: {
        coverage: {
          include: [`${variables.source!}/**/*.tsx`],
        },
      },
    }),
  };
});
