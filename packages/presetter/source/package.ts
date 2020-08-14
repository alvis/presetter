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

/** package detail */
export type Package = {
  /** path to the package.json */
  path: string;
  /** content of package.json */
  json: NormalizedPackageJson & { scripts: Record<string, string> };
};

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
  const { packages, save, lock } = {
    save: 'none',
    lock: false,
    ...args,
  };

  if (!packages.length) {
    return [];
  }

  info(`installing packages:${packages.map((name) => `\n+ ${name}`).join('')}`);
  const { stdout } = await execa(
    'npm',
    [
      'install',
      {
        development: '--save-dev',
        peer: '--save-peer',
        production: '--save',
        none: '--no-save',
      }[save],
      lock ? undefined : '--no-package-lock',
      ...packages,
    ].filter((arg) => !!arg),
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
