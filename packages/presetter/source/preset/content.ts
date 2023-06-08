/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of helpers for content generation
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { resolveContext, resolveTemplate } from '../content';
import { linkFiles, writeFiles } from '../io';
import { getPresetGraph } from './graph';
import { getDestinationMap } from './mapping';

import type { PresetContext } from 'presetter-types';

/** collection of options for bootstrapping */
interface BootstrapOptions {
  /** whether to skip all checks */
  force?: boolean;
}

/**
 * generate files from templates and link them to the target project root
 * @param context context about the target project and any customization in .presetterrc
 * @param options collection of options
 */
export async function bootstrapContent(
  context: PresetContext,
  options?: BootstrapOptions,
): Promise<void> {
  const graph = await getPresetGraph(context);

  const resolvedContext = await resolveContext({ graph, context });
  const content = await resolveTemplate({ graph, context: resolvedContext });

  const destinationMap = await getDestinationMap(content, resolvedContext);

  writeFiles(context.target.root, content, destinationMap, options);
  linkFiles(context.target.root, destinationMap, options);
}
