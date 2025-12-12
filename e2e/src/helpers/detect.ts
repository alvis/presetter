/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Auto-detection utilities for packages and examples
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2024 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

import { EXAMPLES_DIR, PACKAGES_DIR } from '#config';

import type { PackageJson } from 'type-fest';

import type { Example, PackageInfo } from '#types';

// CONSTANTS //

/** valid script names to test in examples */
const VALID_SCRIPTS = ['lint', 'build', 'typecheck', 'test', 'coverage'];

// EXPORTED FUNCTIONS //

/**
 * detects all packages from packages/ directory
 * @returns array of PackageInfo objects with name and directory
 */
export function detectPackages(): PackageInfo[] {
  const entries = readdirSync(PACKAGES_DIR);

  return entries
    .filter((entry) => {
      const pkgPath = resolve(PACKAGES_DIR, entry, 'package.json');
      try {
        statSync(pkgPath);

        return true;
      } catch {
        return false;
      }
    })
    .map((dir) => {
      const pkgPath = resolve(PACKAGES_DIR, dir, 'package.json');
      const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8')) as PackageJson;

      return {
        name: pkg.name!,
        dir: resolve(PACKAGES_DIR, dir),
        tarball: `${pkg.name!.replace(/^@/, '').replace('/', '-')}-${pkg.version}.tgz`,
      };
    });
}

/**
 * detects all examples from examples/ directory
 * @returns array of Example configurations with available scripts
 */
export function detectExamples(): Example[] {
  const entries = readdirSync(EXAMPLES_DIR);

  return entries
    .filter((entry) => {
      const pkgPath = resolve(EXAMPLES_DIR, entry, 'package.json');
      try {
        statSync(pkgPath);

        return true;
      } catch {
        return false;
      }
    })
    .map((name) => {
      const exampleDir = resolve(EXAMPLES_DIR, name);
      const pkgPath = resolve(exampleDir, 'package.json');
      const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8')) as PackageJson;

      // get available scripts that match our test scripts
      const scripts = Object.keys(pkg.scripts ?? {}).filter((s) =>
        VALID_SCRIPTS.includes(s),
      );

      return { name, scripts };
    });
}
