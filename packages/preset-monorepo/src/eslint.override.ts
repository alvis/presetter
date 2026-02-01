import { asset } from 'presetter-types';

import type { Linter } from 'eslint';

export default asset<{ default: Linter.Config[] }>((current, { variables }) => {
  // NOTE: no rules for non-project-specific files
  return {
    default: [
     ...current!.default,
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
