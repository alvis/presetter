/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   E2E spec that journals its own run, copied in as spec/index.spec.e2e.ts
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2026 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { appendFileSync } from 'node:fs';
import { EOL } from 'node:os';

import { it } from 'vitest';

it('should record the e2e run', () => {
  appendFileSync('steps.log', `E2E${EOL}`);
});
