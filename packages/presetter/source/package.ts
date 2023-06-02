/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Helpers for handling a package
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2019 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { homedir } from 'node:os';
import { resolve } from 'node:path';

import { Arborist } from '@npmcli/arborist';
import Config from '@npmcli/config';

import readPackageDetail from 'read-pkg-up';

import type { NormalizedPackageJson } from 'read-pkg-up';

const NPM_VERSION_FOR_PEER_INSTALLATION = 7;

/** package detail */
export type Package = {
  /** path to the package.json */
  path: string;
  /** content of package.json */
  json: NormalizedPackageJson;
};

/**
 * indicate whether peer packages would be installed automatically
 * @returns true for npm v7+
 */
export function arePeerPackagesAutoInstalled(): boolean {
  // NOTE npm_config_user_agent should be in the form of 'npm/7.3.0 node/v15.5.0 darwin x64'

  /* istanbul ignore next */
  const [clientID] =
    process.env['npm_config_user_agent']?.split(' ') ?? ([] as undefined[]);

  /* istanbul ignore next */
  const [name, version] = clientID?.split('/') ?? ([] as undefined[]);

  /* istanbul ignore next */
  const [major] = version?.split('.') ?? ([] as undefined[]);

  const isNPM = name === 'npm';
  const isNonNPM = name !== 'npm';

  return (
    // assume peer packages would be installed automatically if the client is not npm
    isNonNPM ||
    (isNPM &&
      major !== undefined &&
      parseInt(major) >= NPM_VERSION_FOR_PEER_INSTALLATION)
  );
}

/**
 * get scripts from the targeted project's package.json
 * @param root path to the project's root folder
 * @returns package detail
 */
export async function getPackage(root?: string): Promise<Package> {
  // try to find the target project's package.json
  const detail = await readPackageDetail({ cwd: root, normalize: true });

  // throw an error if there's no package.json found
  if (!detail) {
    throw new Error("failed to find target's package.json");
  }

  const path = detail.path;
  const json = detail.packageJson;

  return { path, json };
}

/**
 * reify packages for the target project
 * @param args list of packages and other options
 * @param args.root directory of the project package.json
 * @param args.add list of packages to be added
 * @param args.remove list of packages to be removed
 * @param args.saveAs type of dependency
 * @param args.lockFile indicate whether package-lock.json should be produced
 * @returns list of installed packages
 */
export async function reifyDependencies(args: {
  root: string;
  add?: string[];
  remove?: string[];
  saveAs?: 'dev' | 'peer' | 'optional' | 'prod';
  lockFile?: boolean;
}): Promise<Array<{ name: string; spec: string }>> {
  const {
    root,
    add = [],
    remove = [],
    saveAs = 'prod',
    lockFile = false,
  } = { ...args };

  // use arborist to install peer dependencies
  const config = await getNPMConfig();
  const workspacesEnabled = arePeerPackagesAutoInstalled(); // no workspace before npm 7
  const arborist = new Arborist({ path: root, workspacesEnabled, ...config });

  // don't write to the lockfile
  const actualTree = await arborist.reify({
    add,
    rm: remove,
    saveType: saveAs,
    save: lockFile,
    update: true,
  });

  return [...actualTree.edgesOut.values()].map((edge) => ({
    name: edge.name,
    spec: edge.spec,
  }));
}

/**
 * get the url of the package registry of the target project
 * @returns url of the registry
 */
async function getNPMConfig(): Promise<Record<string, string>> {
  // get npm config
  const config = new Config({
    definitions: {
      userconfig: { default: resolve(homedir(), '.npmrc'), type: String },
      registry: { default: 'https://registry.npmjs.org', type: String },
    },
    npmPath: '.',
    flatten: (
      config: Record<string, string>,
      flattenedConfig: Record<string, string>,
    ): void => {
      // NOTE: this function is called multiple time for flattening the configs at multiple levels, user, project, cli etc.

      // ensure that higher level configs are always in priority
      Object.assign(flattenedConfig, config);
    },
  });

  await config.load();

  return config.flat;
}
