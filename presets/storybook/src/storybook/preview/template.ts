import { asset } from 'presetter';

import type { ProjectAnnotations } from 'storybook/internal/csf';

export default asset<{ default: ProjectAnnotations }>({
  default: {
    parameters: {
      a11y: {
        test: 'error', // enable automatic vitest on a11y
        context: 'body',
        config: {
          rules: [
            {
              id: 'region',
              enabled: false,
            },
          ],
        },
        options: {},
      },
    },
  },
});
