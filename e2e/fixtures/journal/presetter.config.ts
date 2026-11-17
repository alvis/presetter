/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Presetter configuration that journals each scoped pretest step
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2026 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import esm from '@presetter/preset-esm';
import { preset } from 'presetter';

export default preset('presetter.config', {
  extends: [esm],
  scripts: {
    'pretest:unit:record': 'echo pretest:unit >> steps.log',
    'pretest:int:record': 'echo pretest:int >> steps.log',
    'pretest:e2e:build': 'echo pretest:e2e >> steps.log',
  },
});
