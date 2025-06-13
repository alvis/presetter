/* v8 ignore start */

import type { JsonObject } from 'type-fest';

import type { Path } from './auxiliaries';
import type { PresetContent } from './content';

/**
 * defines the structure for preset assets, including JSON, YAML, JS, TS, or custom file formats
 */
export interface PresetAssets {
  /** defines ignored file patterns */
  [list: `${Path}ignore`]: PresetContent<string[]>;

  /** defines JSON or YAML content */
  [json: `${Path}.json` | `${Path}.yaml`]: PresetContent<JsonObject>;

  /** defines ES module content including JS, JSX, TS, and TSX formats */
  [
    esm:
      | `${Path}.js`
      | `${Path}.cjs`
      | `${Path}.mjs`
      | `${Path}.jsx`
      | `${Path}.ts`
      | `${Path}.cts`
      | `${Path}.mts`
      | `${Path}.tsx`
  ]: PresetContent<Record<string, any>>;

  /** defines other file contents, including file path, arrays, JSON objects, or arbitrary records */
  [file: Path]:
    | PresetContent<Path>
    | PresetContent<string[]>
    | PresetContent<JsonObject>
    | PresetContent<Record<string, any>>;
}

/**
 * defines the resolved structure for preset assets
 */
export interface ResolvedPresetAssets {
  /** defines ignored file patterns */
  [list: `${Path}ignore`]: string[] | null | undefined;

  /** defines JSON or YAML content */
  [json: `${Path}.json` | `${Path}.yaml`]: JsonObject | null | undefined;

  /** defines ES module content including JS, JSX, TS, and TSX formats */
  [
    esm:
      | `${Path}.js`
      | `${Path}.cjs`
      | `${Path}.mjs`
      | `${Path}.jsx`
      | `${Path}.ts`
      | `${Path}.cts`
      | `${Path}.mts`
      | `${Path}.tsx`
  ]: Record<string, any> | undefined;

  /** defines other file contents, including file content, arrays, JSON objects, or arbitrary records */
  [file: Path]: ResolvedPresetAsset;
}

/**
 * union of possible types of a resolved asset
 */
export type ResolvedPresetAsset =
  | Buffer // for binary content
  | Record<string, any> // for dynamic ts/js content
  | string[] // for ignore list
  | JsonObject // for json/yaml content
  | null // for ignored content
  | undefined; // for no change
