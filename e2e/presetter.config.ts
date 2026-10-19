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

import esm from '@presetter/preset-esm';
import strict from '@presetter/preset-strict';

import { asset, mergeByKey, preset } from 'presetter';

import type { ViteUserConfig } from 'vitest/config';

export default preset('@presetter/e2e', {
  extends: [esm, strict],
  override: {
    assets: {
      // start the local registry for E2E only.
      'vitest.config.ts': asset<{ default: ViteUserConfig }>({
        default: {
          test: {
            projects: mergeByKey('test.name', [
              { test: { name: 'E2E', globalSetup: 'setup.ts' } },
            ]),
          },
        },
      }),
    },
  },
});
