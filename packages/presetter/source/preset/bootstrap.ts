import { info } from 'node:console';
import { resolve } from 'node:path';

import { ensureFile } from '../io';
import { arePeerPackagesAutoInstalled, reifyDependencies } from '../package';
import { serialize } from '../serialization';

import { getContext } from './context';
import { resolveProjectPreset } from './project';
import { resolveAssets } from './resolution';

/**
 * generate files from templates and place them to the target project root
 */
export async function bootstrap(): Promise<void> {
  const context = await getContext();

  // install all related packages first
  if (!arePeerPackagesAutoInstalled()) {
    await reifyDependencies({ root: context.root });
  }

  // generate configurations
  const node = await resolveProjectPreset(context);
  const assets = await resolveAssets(node, context);

  for (const [name, asset] of Object.entries(assets)) {
    if (asset === null) {
      info(`Skipping ${name}`);
    } else {
      const destination = resolve(context.root, name);

      info(`Generating ${name}`);

      ensureFile(destination, serialize(destination, asset));
    }
  }
}
