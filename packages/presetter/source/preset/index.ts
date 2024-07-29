/* v8 ignore start */

/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of helpers for setting up a project
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

// NOTE on resolution steps
// STEP 1 build a dependency tree of presets
// STEP 2 resolve variables from the tree
//
// for template resolution
// STEP 3 resolve template content from resolved variables
// STEP 4 resolve noSimlinks from resolved variables
//
// for script resolution
// STEP 3 resolve script content from resolved variables

export * from './scripts';
export * from './setup';
export * from './unset';
