[**Presetter Types API v8.0.0**](../README.md)

***

[Presetter Types API](../README.md) / ResolvedPresetAssets

# ResolvedPresetAssets

Defined in: [asset.ts:42](https://github.com/alvis/presetter/blob/master/packages/types/src/asset.ts#L42)

defines the resolved structure for preset assets

## Indexable

\[`list`: `` `${string}ignore` ``\]: `undefined` \| `null` \| `string`[]

defines ignored file patterns

\[`json`: `` `${string}.json` `` \| `` `${string}.yaml` ``\]: `undefined` \| `null` \| `JsonObject`

defines JSON or YAML content

\[`esm`: `` `${string}.js` `` \| `` `${string}.cjs` `` \| `` `${string}.mjs` `` \| `` `${string}.jsx` `` \| `` `${string}.ts` `` \| `` `${string}.cts` `` \| `` `${string}.mts` `` \| `` `${string}.tsx` ``\]: `undefined` \| `Record`\<`string`, `any`\>

defines ES module content including JS, JSX, TS, and TSX formats

\[`file`: `string`\]: [`ResolvedPresetAsset`](../type-aliases/ResolvedPresetAsset.md)

defines other file contents, including file content, arrays, JSON objects, or arbitrary records
