/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of computing the final scripts
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { resolveContext, resolveScripts } from '../content';
import debug from '../debugger';
import { getContext } from './context';
import { getPresetGraph } from './graph';

/**
 * get the merged scripts templates
 * @returns scripts template
 */
export async function getScripts(): Promise<Record<string, string>> {
  const context = await getContext();
  const graph = await getPresetGraph(context);
  const resolvedContext = await resolveContext({ graph, context });

  const script = await resolveScripts({ graph, context: resolvedContext });

  debug('SCRIPT PROVIDED BY PRESET\n%O', script);

  return script;
}
