import { readFileSync } from 'node:fs';
import { dirname, posix, relative, resolve } from 'node:path';

import { globby } from 'globby';

import { bootstrap } from '../preset';

import type { PackageJson } from 'type-fest';

interface ResolveProjectRootsOptions {
  readonly projects: readonly string[];
  readonly packages: readonly string[];
}

interface BootstrapFailure {
  /** the project root that failed to bootstrap */
  readonly root: string;
  /** the reason why the project failed to bootstrap */
  readonly error: Error;
}

const DEFAULT_LIST_DELIMITER = ',';
const NEGATION_PREFIX = '!';
const WORKSPACE_GLOB_OPTIONS = {
  gitignore: true,
  ignore: ['**/node_modules/**'],
};

/**
 * bootstrap every given project root, carrying on past any failure
 * @param roots the project roots to be bootstrapped
 */
export async function bootstrapProjects(
  roots: readonly string[],
): Promise<void> {
  const failures: BootstrapFailure[] = [];

  // NOTE: run sequentially so that the progress printed by bootstrap stays in a deterministic order
  for (const root of roots) {
    try {
      await bootstrap(root);
    } catch (error) {
      failures.push({ root, error: error as Error });
    }
  }

  if (failures.length > 0) {
    // NOTE: report everything at the end so that a single broken project doesn't hide the rest of the run
    throw new AggregateError(
      failures.map(
        ({ root, error }) =>
          new Error(
            `failed to bootstrap ${relative(process.cwd(), root) || '.'}`,
            { cause: error },
          ),
      ),
      `failed to bootstrap ${failures.length} of ${roots.length} projects`,
    );
  }
}

/**
 * resolve target project roots from path globs and package-name globs
 * @param options resolution inputs
 * @param options.projects path globs (e.g. `presets/next`, `packages/*`, `!presets/node`)
 * @param options.packages package-name globs (e.g. `@presetter/preset-*`, `!@presetter/preset-node`)
 * @returns deduped absolute project root paths
 */
export async function resolveProjectRoots(
  options: ResolveProjectRootsOptions,
): Promise<string[]> {
  const { projects, packages } = options;

  // NOTE: name patterns are rewritten into path patterns so that both flags contribute to
  // a single pattern list, which is what lets an exclusion given on either flag subtract a
  // root selected by either flag
  const patterns = [...projects, ...(await resolveNamePatterns(packages))];

  const selecting: string[] = [];
  const subtracting: string[] = [];

  for (const pattern of patterns) {
    const [prefix, directory] = splitNegation(pattern);

    // NOTE: a pattern carrying nothing but `!` would otherwise become `package.json` and
    // silently subtract the repo root
    if (!directory) {
      continue;
    }
    const manifest = posix.join(directory, 'package.json');
    (prefix === NEGATION_PREFIX ? subtracting : selecting).push(manifest);
  }

  const roots = new Set(await resolveRoots(selecting));

  // NOTE: both sides are compared as resolved absolute paths rather than handed to globby
  // as `!` patterns, whose matching is positional and stays blind to a pattern written
  // relative to the working directory when its counterpart is absolute
  for (const root of await resolveRoots(subtracting)) {
    roots.delete(root);
  }

  return [...roots];
}

/**
 * resolve the project roots behind a list of manifest patterns
 * @param patterns manifest globs carrying no negation prefix
 * @returns absolute project root paths
 */
async function resolveRoots(patterns: readonly string[]): Promise<string[]> {
  if (patterns.length === 0) {
    return [];
  }

  const files = await globby(patterns, WORKSPACE_GLOB_OPTIONS);

  return files.map((file) => resolve(dirname(file)));
}

/**
 * rewrite package-name globs into path globs, keeping any `!` prefix
 * @param patterns package-name globs, each optionally prefixed with `!`
 * @returns path globs pointing at the project roots declaring a matching name
 */
async function resolveNamePatterns(
  patterns: readonly string[],
): Promise<string[]> {
  if (patterns.length === 0) {
    return [];
  }

  const manifests = await globby('**/package.json', WORKSPACE_GLOB_OPTIONS);
  const names = new Map(
    manifests.map((path) => [posix.dirname(path), readPackageName(path)]),
  );

  return patterns.flatMap((pattern) => {
    const [prefix, name] = splitNegation(pattern);
    const isMatchingName = compileNameMatcher([name]);

    return [...names]
      .filter(
        ([, declared]) => declared !== undefined && isMatchingName(declared),
      )
      .map(([directory]) => `${prefix}${directory}`);
  });
}

/**
 * split a pattern into its negation prefix and the pattern it negates
 * @param pattern a raw pattern, optionally prefixed with `!`
 * @returns the `!` prefix (empty when the pattern selects) and the trimmed remainder
 */
function splitNegation(pattern: string): [prefix: string, body: string] {
  const isNegated = pattern.startsWith(NEGATION_PREFIX);

  return [
    isNegated ? NEGATION_PREFIX : '',
    (isNegated ? pattern.slice(NEGATION_PREFIX.length) : pattern).trim(),
  ];
}

/**
 * read the package name declared by a manifest
 * @param path path to a package.json file
 * @returns the declared name, or undefined when the manifest declares none
 */
function readPackageName(path: string): string | undefined {
  const { name } = JSON.parse(
    readFileSync(path, { encoding: 'utf8' }),
  ) as PackageJson;

  return name;
}

/**
 * expand each entry by splitting on a delimiter and trimming the parts
 * @param values raw flag values, each possibly containing the delimiter
 * @param delimiter delimiter character (defaults to `,`)
 * @returns flattened, trimmed, non-empty values
 */
export function expandDelimitedValues(
  values: readonly string[],
  delimiter: string = DEFAULT_LIST_DELIMITER,
): string[] {
  return values.flatMap((value) =>
    value
      .split(delimiter)
      .map((part) => part.trim())
      .filter(Boolean),
  );
}

/**
 * compile a list of package-name globs into a single predicate
 * @param patterns package-name globs (`*` matches anything except `/`)
 * @returns predicate returning true when a name matches any pattern
 */
function compileNameMatcher(
  patterns: readonly string[],
): (name: string) => boolean {
  const expressions = patterns.map((pattern) => {
    const escaped = pattern
      .replace(/[.+?^${}()|[\]\\]/g, String.raw`\$&`)
      .replace(/\*/g, '[^/]*');

    return new RegExp(`^${escaped}$`);
  });

  return (name) => expressions.some((expression) => expression.test(name));
}
