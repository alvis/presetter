/* v8 ignore start */

import { asset } from 'presetter-types';

import type { Linter } from 'eslint';

export default asset<{ default: Linter.Config[] }>(
  (current, { variables }) => ({
    default: [
      ...(current?.default ?? []),
      {
        name: 'presetter-preset-essentials:override:ignore-files',
        ignores: [
          `${variables.output!}/**`,
          `${variables.test!}/**`,
          `${variables.types!}/**`,
          `${variables.generated!}/**`,
        ],
      },
    ],
  }),
);
