/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of helpers for unsetting a project
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { resolveContext, resolveTemplate } from '../content';
import { unlinkFiles } from '../io';
import { getContext } from './context';
import { getPresetGraph } from './graph';
import { getDestinationMap } from './mapping';

/**
 * uninstall the preset from the current project root
 */
export async function unsetPreset(): Promise<void> {
  const context = await getContext();
  const graph = await getPresetGraph(context);
  const resolvedContext = await resolveContext({ graph, context });
  const content = await resolveTemplate({ graph, context: resolvedContext });
  const configurationLink = await getDestinationMap(content, resolvedContext);

  unlinkFiles(context.target.root, configurationLink);
}
