import { info } from 'node:console';
import { dirname } from 'node:path';

import { readPackage } from 'read-pkg';
import { writePackage } from 'write-pkg';

import {
  arePeerPackagesAutoInstalled,
  getPackage,
  reifyDependencies,
} from '../package';

import { bootstrapContent } from './content';
import { getContext } from './context';
import { updatePresetterRC } from './presetterRC';

import type { PackageJson } from 'read-pkg';

/** collection of options for bootstrapping */
interface BootstrapOptions {
  /** whether to skip all checks */
  force?: boolean;
}

/**
 * bootstrap the preset to the current project root
 * @param options collection of options
 */
export async function bootstrapPreset(
  options?: BootstrapOptions,
): Promise<void> {
  const context = await getContext();

  // install all related packages first
  if (!arePeerPackagesAutoInstalled()) {
    await reifyDependencies({ root: context.target.root });
  }

  // generate configurations
  await bootstrapContent(context, options);
}

/**
 *  adopt a preset to the project
 * @param uris list of name or git url of the preset
 */
export async function setupPreset(...uris: string[]): Promise<void> {
  // NOTE: comparing packages before and after installation is the only reliable way
  // to extract the name of the preset in case it's given as a git url or file path etc.
  const { path } = await getPackage();
  const root = dirname(path);
  const packageBefore = (await readPackage({ cwd: root })).devDependencies;

  // install presetter & the preset
  info(`Installing ${uris.join(' ')}... it may take a few moment...`);
  await reifyDependencies({
    root,
    add: ['presetter', ...uris],
    saveAs: 'dev',
    lockFile: true,
  });

  // extract the name of the installed preset
  const packageAfter = (await readPackage({ cwd: root })).devDependencies;
  const newPackages = getNewPackages({ ...packageBefore }, { ...packageAfter });
  const preset = newPackages.filter((name) => name !== 'presetter');

  info('Updating .presetterrc.json & package.json');
  // update .presetterrc.json
  await updatePresetterRC(root, { preset });

  // bootstrap configuration files with the new .presetterrc.json
  const context = await getContext();
  await bootstrapContent(context);

  // insert post install script if not preset
  const json = context.target.package;
  const scripts = { prepare: 'presetter bootstrap', ...json.scripts };
  const patched = { ...json, scripts };
  await writePackage(root, patched as PackageJson & Record<string, string>);

  info('Done. Enjoy coding!');
}

/**
 * get a list of new packages installed by comparing the before and after state of devDependencies in package.json
 * @param before before state of devDependencies in package.json
 * @param after after state of devDependencies in package.json
 * @returns list of new package names
 */
function getNewPackages(
  before: Record<string, string>,
  after: Record<string, string>,
): string[] {
  return Object.keys(after).filter((name): name is string => !before[name]);
}
