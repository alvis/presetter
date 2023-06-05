/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Collection of helpers for parsing configuration
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import type { PresetContext } from 'presetter-types';

/** syntax for an apply directive */
export type ApplyDirective = `@apply ${string}` | `@apply ${string}[${string}]`;

/** syntax for an import directive */
export type ImportDirective =
  | `@import ${string}`
  | `@import ${string}[${string}]`;

/** context that pass down to all parsers */
interface ConfigResolutionContext extends PresetContext {
  /** a set of packages to be used in the output */
  packages: Set<string>;
}

/** syntax for an apply directive */
const applyRegex =
  /^@apply ((\.+\/|@)?[a-zA-Z]+[a-zA-Z0-9_/.-]*[a-zA-Z0-9_]+)(\[([a-zA-Z]+[a-zA-Z0-9_.]*)\])?$/;

/** syntax for an import directive */
const importRegex =
  /^@import ((\.+\/|@)?[a-zA-Z]+[a-zA-Z0-9_/.-]*[a-zA-Z0-9_]+)(\[([a-zA-Z]+[a-zA-Z0-9_.]*)\])?$/;

/**
 * indicate whether the given value is an apply directive
 * @param value value to be tested
 * @returns true if the value is an apply directive
 */
export function isApplyDirective(value: unknown): value is ApplyDirective {
  return typeof value === 'string' && !!applyRegex.exec(value);
}

/**
 * indicate whether the given value is an import directive
 * @param value value to be tested
 * @returns true if the value is an import directive
 */
export function isImportDirective(value: unknown): value is ImportDirective {
  return typeof value === 'string' && !!importRegex.exec(value);
}

/**
 * indicate whether the given value is a directive
 * @param value value to be tested
 * @returns true if the value is a directive
 */
export function isDirective(
  value: unknown,
): value is ApplyDirective | ImportDirective {
  return isApplyDirective(value) || isImportDirective(value);
}

/**
 * resolve directives from configuration options
 * @param config configuration options
 * @param context background context about the configuration
 * @returns resolved configuration options with directive replaced
 */
export function resolveDirective(
  config: Record<string, unknown>,
  context: PresetContext,
): {
  importMap: Record<string, string>;
  stringifiedConfig: string;
} {
  const packages = new Set<string>();
  const stringifiedConfig = stringifyConfigObject(config, {
    ...context,
    packages,
  });

  const importMap = Object.fromEntries(
    [...packages.values()].map((packageName, key) => [
      packageName,
      `import${key}`,
    ]),
  );

  return { importMap, stringifiedConfig };
}

/**
 * resolve an apply directive
 * @param directiveMeta a potential directive in the form of [directive, options]
 * @param context shared context passed from the upstream
 * @returns resolved string or null if no directive is found
 */
function resolveApplyDirective(
  directiveMeta: unknown[],
  context: ConfigResolutionContext,
): string | null {
  const [directive, ...args] = directiveMeta;
  const { packages } = context;

  if (typeof directive === 'string') {
    const match = applyRegex.exec(directive);

    if (match) {
      const [_, packageName, _prefix, _importBracket, importName] = match;
      const resolvedArgs = args.map((arg) => stringifyValue(arg, context));
      const argsExpression = `[${resolvedArgs.join(', ')}]`;

      const resolvedName = registerUsage(packages, packageName, importName);

      return `${resolvedName}(...(${argsExpression} as const))`;
    }
  }

  // return null for a non-match
  return null;
}

/**
 * resolve an import directive
 * @param directive a potential directive string
 * @param context shared context passed from the upstream
 * @returns resolved string or null if no directive is found
 */
function resolveImportDirective(
  directive: string,
  context: ConfigResolutionContext,
): string | null {
  const { packages } = context;
  const match = importRegex.exec(directive);

  if (match) {
    const [_, packageName, _prefix, _importBracket, importName] = match;

    return registerUsage(packages, packageName, importName);
  }

  // return null for a non-match
  return null;
}

/**
 * stringify a value which has a type object
 * @param value the value to be stringified
 * @param context shared context passed from the upstream
 * @returns stringified value
 */
function stringifyObjectValue(
  value: Record<string, any> | any[] | null,
  context: ConfigResolutionContext,
): string {
  if (Array.isArray(value)) {
    return (
      resolveApplyDirective(value, context) ??
      stringifyConfigArray(value, context)
    );
  } else if (value !== null) {
    return stringifyConfigObject(value, context);
  } else {
    return 'null';
  }
}

/**
 * stringify an array
 * @param config an object to be parsed
 * @param context shared context passed from the upstream
 * @returns stringified object
 */
function stringifyConfigArray(
  config: unknown[],
  context: ConfigResolutionContext,
): string {
  const values: string[] = config.map((value) =>
    stringifyValue(value, context),
  );

  return `[${values.join(', ')}]`;
}

/**
 * stringify an object
 * @param config an object to be parsed
 * @param context shared context passed from the upstream
 * @returns stringified object
 */
function stringifyConfigObject(
  config: Record<string, any>,
  context: ConfigResolutionContext,
): string {
  const values: string[] = Object.entries(config).map(([key, value]) => {
    return `${JSON.stringify(key)}: ${stringifyValue(value, context)}`;
  });

  return `{${values.join(', ')}}`;
}

/**
 * stringify a value
 * @param value the value to be stringified
 * @param context shared context passed from the upstream
 * @returns stringified value
 */
function stringifyValue(
  value: unknown,
  context: ConfigResolutionContext,
): string {
  switch (typeof value) {
    case 'string':
      return resolveImportDirective(value, context) ?? JSON.stringify(value);
    case 'object':
      return stringifyObjectValue(value, context);
    case 'boolean':
    case 'number':
    default:
      return JSON.stringify(value);
  }
}

/**
 * add the needed package name to the registry and return its resolved name
 * @param packages package registry
 * @param packageName name of the package to be imported
 * @param importName named import to be used
 * @returns resolved symbol
 */
function registerUsage(
  packages: Set<string>,
  packageName: string,
  importName?: string,
): string {
  // add package and import to the register
  packages.add(packageName);

  // replace the directive with the value path
  const packageKey = [...packages.values()].findIndex(
    (name) => name === packageName,
  );

  const named = importName ? `.${importName}` : '';

  return `import${packageKey}${named}`;
}
