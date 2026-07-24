import { basename } from 'node:path';

import { createJiti } from 'jiti';

import debug from '#debugger';
import { display } from '#utilities/display';

import { searchPresetterConfigs } from './search';

import type { Preset } from '@presetter/types';

const jiti = createJiti(import.meta.url, {
  moduleCache: false, // NOTE: disable module cache to fix a bug in jiti that importing the same file multiple times simtaneously would result in some of the imports resolved as undefined
  /* v8 ignore start */
  debug: !!process.env.DEBUG?.includes('presetter'),
  /* v8 ignore end */
});

const configs: Record<string, Promise<Preset>> = {};

/**
 * resolve the presetter configuration from the project root
 * @param root the root directory containing the project's package.json
 * @returns the resolved presetter configuration
 */
export async function resolvePresetterConfig(root: string): Promise<Preset> {
  const configPaths = await searchPresetterConfigs(root);

  if (configPaths.length === 0) {
    throw new Error(`no presetter configuration file found for ${root}`);
  }

  // NOTE: the priority is given to the configuration file closest to the project root, from mts, ts, mjs then js
  const closestConfigPath = configPaths[0]!;

  debug(`loading presetter configuration from ${closestConfigPath}`);

  // NOTE: load the preset with import cache as a fix to a bug in jiti that importing the same file multiple times simtaneously would result in some of the imports resolved as undefined
  return (configs[closestConfigPath] ??= loadPresetterConfig(
    closestConfigPath,
  ).catch((error: Error) => {
    // NOTE: a rejection must never be memoized, otherwise every project sharing the configuration inherits a stale failure
    delete configs[closestConfigPath];

    throw error;
  }));
}

/**
 * load a presetter configuration file and verify that it exports a preset
 * @param path the path to the presetter configuration file
 * @returns the preset exported by the configuration file
 */
async function loadPresetterConfig(path: string): Promise<Preset> {
  const content = await importDefault(path);

  if (!isPreset(content)) {
    throw new Error(
      `${basename(path)} at ${path} does not default-export a preset ` +
        `(expected an object or function with an "id", received ${display(content)})`,
    );
  }

  return content;
}

/**
 * import the default export of a configuration file, naming the file on failure
 * @param path the path to the presetter configuration file
 * @returns whatever the configuration file exports
 */
async function importDefault(path: string): Promise<unknown> {
  try {
    // NOTE: jiti falls back to the module namespace when the file has no default export, hence the validation in loadPresetterConfig
    return await jiti.import<unknown>(path, { default: true });
  } catch (cause) {
    throw new Error(`failed to load the presetter configuration at ${path}`, {
      cause,
    });
  }
}

/**
 * check whether a value loaded from a configuration file is a preset
 * @param content the value exported by the configuration file
 * @returns true if the value is an object or function carrying a string id
 */
function isPreset(content: unknown): content is Preset {
  if (
    (typeof content !== 'object' || content === null) &&
    typeof content !== 'function'
  ) {
    return false;
  }

  return 'id' in content && typeof content.id === 'string';
}
