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

import { info } from 'console';
import execa from 'execa';
import { defaultsDeep } from 'lodash';
import readPackageDetail from 'read-pkg-up';

import type { NormalizedPackageJson } from 'read-pkg-up';

const NPM_VERSION_FOR_PEER_INSTALLATION = 7;

/** package detail */
export type Package = {
  /** path to the package.json */
  path: string;
  /** content of package.json */
  json: NormalizedPackageJson & { scripts: Record<string, string> };
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

  return (
    name === 'npm' &&
    major !== undefined &&
    parseInt(major) >= NPM_VERSION_FOR_PEER_INSTALLATION
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
  const json = defaultsDeep(detail.packageJson, {
    scripts: {},
  }) as Package['json'];

  return { path, json };
}

/**
 * install packages to the target project
 * @param args list of packages and other options
 * @param args.packages list of package@version
 * @param args.save type of dependency
 * @param args.lock indicate whether package-lock.json should be produced
 * @returns list of installed packages
 */
export async function installPackages(args: {
  packages: string[];
  save?: 'development' | 'peer' | 'production' | 'none';
  lock?: boolean;
}): Promise<Array<{ name: string; version: string }>> {
  const { packages, save = 'none', lock = false } = { ...args };

  if (!packages.length) {
    return [];
  }

  info(`installing packages:${packages.map((name) => '\n+ ' + name).join('')}`);
  const { stdout } = await execa(
    'npm',
    [
      'install',
      '--no-audit', // avoid unexpected exit due to audit warnings
      '--legacy-peer-deps', // ignore peer dependency warnings
      {
        development: '--save-dev',
        peer: '--save-peer',
        production: '--save',
        none: '--no-save',
      }[save],
      lock ? undefined : '--no-package-lock',
      ...packages,
    ].filter((arg): arg is string => !!arg),
  );

  return extractPackagesFromNPMOutput(stdout);
}

/**
 * extract package information from npm out
 * @param stdout output from npm
 * @returns list of installed packages
 */
function extractPackagesFromNPMOutput(
  stdout: string,
): Array<{ name: string; version: string }> {
  const installedPackages: RegExpExecArray[] = [];
  const regex = /\+ (.*)@(.*)/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(stdout))) {
    installedPackages.push(match);
  }

  return installedPackages.map(([, name, version]) => ({ name, version }));
}
