/* v8 ignore start */

/** an auxiliary type for representing a file path */
export type Path = string;

/** any values that are not a function, array or object */
export type Primitive = string | number | boolean | null | undefined;
/** array of non-function values */
export type PrimitiveArray = PrimitiveEntity[] | readonly PrimitiveEntity[];
/** object of non-function values */
export type PrimitiveObject = { [Key in string]: PrimitiveEntity };
/** any values that are not a function */
export type PrimitiveEntity = Primitive | PrimitiveObject | PrimitiveArray;
