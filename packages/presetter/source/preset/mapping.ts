/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of helpers for mapping content to the target project
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { resolve } from 'node:path';

import resolvePackage from 'resolve-pkg';

import type { ResolvedPresetContext, Template } from 'presetter-types';

/**
 * compute the output paths of all configuration files to be generated
 * @param template resolved template map
 * @param context resolved context about the target project and customization
 * @returns mapping of configuration symlinks to its real path
 */
export async function getDestinationMap(
  template: Record<string, Template>,
  context: ResolvedPresetContext<'noSymlinks'>,
): Promise<Record<string, string>> {
  const {
    custom: { noSymlinks },
    target: { root, name },
  } = context;
  // make sure we use the path of presetter under the target project, not the one via npx
  const presetterDir = resolvePackage('presetter', { cwd: root });
  const outDir = resolve(presetterDir!, '..', '.presetter', name);

  const relativePaths = [...Object.keys(template)];

  return Object.fromEntries([
    ...relativePaths.map((relativePath): [string, string] => [
      relativePath,
      resolve(
        // output on the project root if it's specified as not a symlink
        noSymlinks.includes(relativePath) ? context.target.root : outDir,
        relativePath,
      ),
    ]),
  ]);
}
