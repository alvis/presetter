import { asset } from 'presetter-types';

import type { Linter } from 'eslint';

export default asset<{ default: Linter.Config[] }>((_, { variables }) => {
  // NOTE: no rules for non-project-specific files
  return {
    default: [
      {
        ignores: [
          `**/${variables.generated}/**`,
          `**/${variables.types}/**`,
          `**/${variables.output}/**`,
          '**/node_modules/**',
        ],
      },
    ] as Linter.Config[],
  };
});
