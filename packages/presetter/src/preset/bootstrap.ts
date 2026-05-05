import { info } from 'node:console';
import { resolve } from 'node:path';

import { resolveProjectContext } from '../context';
import { ensureFile } from '../io';
import { serialize } from '../serialization';

import { resolveProjectPreset } from './project';
import { resolveAssets } from './resolution';

/**
 * generate files from templates and place them to the target project root
 * @param cwd the current working directory
 */
export async function bootstrap(cwd?: string): Promise<void> {
  const context = await resolveProjectContext(cwd);
  const packageName = context.packageJson.name;

  if (!packageName) {
    throw new Error(
      `failed to bootstrap unnamed package at ${context.relativeProjectRoot}`,
    );
  }

  info(`Bootstrapping ${packageName} (${context.relativeProjectRoot})`);

  // generate configurations
  const node = await resolveProjectPreset(context);
  const assets = await resolveAssets(node, context);

  for (const [name, asset] of Object.entries(assets)) {
    if (asset === null) {
      info(`Skipping ${name}`);
    } else {
      const destination = resolve(context.projectRoot, name);

      info(`Generating ${name}`);

      ensureFile(destination, serialize(destination, asset));
    }
  }
}
