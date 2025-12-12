/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Configuration constants for E2E testing infrastructure
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2024 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

import { detectExamples, detectPackages } from '#helpers/detect';

import type { PackageManager } from '#types';

// DIRECTORY PATHS //

/** monorepo root directory path */
export const ROOT_DIR = resolve(import.meta.dirname, '..', '..');

/** packages source directory path */
export const PACKAGES_DIR = resolve(ROOT_DIR, 'packages');

/** examples source directory path */
export const EXAMPLES_DIR = resolve(ROOT_DIR, 'examples');

/** temporary working directory path (outside monorepo for isolation) */
export const TEMP_DIR = resolve(tmpdir(), `presetter-e2e`);

// REGISTRY CONFIGURATION //

/** default Verdaccio port number */
export const VERDACCIO_PORT = 4873;

/** Verdaccio registry URL */
export const REGISTRY_URL = `http://localhost:${VERDACCIO_PORT}`;

/** Verdaccio storage directory path */
export const VERDACCIO_STORAGE_DIR = resolve(TEMP_DIR, 'verdaccio-storage');

// NOTE: verdaccio has been configured to accept anonymous publication so any username password combination will work, but we need to pass a user to pnpm otherwise it will complain
/** base64-encoded authentication credentials for Verdaccio */
export const VERDACCIO_AUTH =
  Buffer.from('username:password').toString('base64');

// PACKAGE DETECTION //

/** detected packages from packages directory */
export const packages = detectPackages();

/** supported package managers for E2E testing */
export const PACKAGE_MANAGERS: PackageManager[] = ['pnpm', 'npm'];

/** detected example configurations */
export const EXAMPLES = detectExamples();

// PACKAGE MANAGER ENVIRONMENT VARIABLES //

/** npm-specific environment variables for isolated testing */
export const NPM_ENV = {
  // point to non-existent .npmrc files to prevent reading any .npmrc which may cause false results
  NPM_CONFIG_USERCONFIG: join(TEMP_DIR, '.user.npmrc'),
  NPM_CONFIG_GLOBALCONFIG: join(TEMP_DIR, '.global.npmrc'),
  // disable interactive prompts
  CI: 'true',
};

/** pnpm-specific environment variables for isolated testing */
export const PNPM_ENV = {
  // point to non-existent .npmrc files to prevent reading any .npmrc which may cause false results
  PNPM_CONFIG_USERCONFIG: join(TEMP_DIR, '.user.npmrc'),
  PNPM_CONFIG_GLOBALCONFIG: join(TEMP_DIR, '.global.npmrc'),
  // disable interactive prompts
  CI: 'true',
};
