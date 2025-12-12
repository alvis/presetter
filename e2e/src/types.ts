/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Type definitions for E2E testing infrastructure
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2024 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

/** Configuration for an example project */
export interface Example {
  /** Example directory name */
  name: string;
  /** Scripts to run during testing */
  scripts: string[];
}

/** Package information for building and packing */
export interface PackageInfo {
  /** Package name from package.json */
  name: string;
  /** Absolute path to package directory */
  dir: string;
}

/** Supported package managers */
export type PackageManager = 'npm' | 'pnpm';
