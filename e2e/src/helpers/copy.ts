/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Utility for copying example directories
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2024 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { cp, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';

import { PACKAGE_MANAGERS } from '#config';

import type { PackageManager } from '#types';

// EXPORTED FUNCTIONS //

/**
 * copies example directory to temp location with package manager specific setup
 *
 * convention: manager-specific files are stored in `.{manager}/` directories
 * and files in the override directory are copied to the root, overwriting any existing files
 * @param source source directory path
 * @param destination destination directory path
 * @param manager package manager to configure for
 */
export async function copyExample(
  source: string,
  destination: string,
  manager: PackageManager,
): Promise<void> {
  // clear the destination first
  await rm(destination, { force: true, recursive: true });

  // copy the entire example
  await cp(source, destination, { recursive: true, force: true });

  // apply manager-specific overrides from .{manager}/ directory
  const overrideDir = join(destination, `.${manager}`);
  if (await exists(overrideDir)) {
    await cp(overrideDir, destination, { recursive: true, force: true });
  }

  // remove all package manager override directories
  for (const pm of PACKAGE_MANAGERS) {
    await rm(join(destination, `.${pm}`), { force: true, recursive: true });
  }
}

// HELPER FUNCTIONS //

/**
 * checks if a path exists on the filesystem
 * @param path file or directory path to check
 * @returns true if path exists, false otherwise
 */
async function exists(path: string): Promise<boolean> {
  try {
    await stat(path);

    return true;
  } catch {
    return false;
  }
}
