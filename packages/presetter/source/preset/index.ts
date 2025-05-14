/* v8 ignore start */

// NOTE on resolution steps
// STEP 1 build a dependency tree of presets
// STEP 2 resolve variables from the tree
//
// for template resolution
// STEP 3 resolve template content from resolved variables
//
// for script resolution
// STEP 3 resolve script content from resolved variables

export * from './bootstrap';
export * from './config';
export * from './project';
export * from './resolution';
export * from './scripts';
