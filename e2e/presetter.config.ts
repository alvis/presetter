/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Presetter configuration for E2E tests
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2024 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { preset } from 'presetter';
import esm from 'presetter-preset-esm';
import strict from 'presetter-preset-strict';

export default preset('presetter-e2e', {
  extends: [esm, strict],
  override: {
    assets: {
      'vitest.config.e2e.ts': {
        default: {
          test: {
            testTimeout: 300_000,
            hookTimeout: 300_000,
            include: ['specs/**/*.e2e.spec.ts'],
          },
        },
      },
    },
  },
});
