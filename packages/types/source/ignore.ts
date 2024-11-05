/* v8 ignore start */

/** file name to be ignored or fields of config templates to be ignored */
export type IgnoreRule = string | number | Record<string, IgnorePath>;
/** field names of a config template to be ignored */
export type IgnorePath = string[] | number[] | { [key: string]: IgnorePath };
