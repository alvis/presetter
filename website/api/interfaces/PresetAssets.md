[**Presetter Types API v8.0.0**](../README.md)

***

[Presetter Types API](../README.md) / PresetAssets

# PresetAssets

Defined in: [asset.ts:11](https://github.com/alvis/presetter/blob/master/packages/types/src/asset.ts#L11)

defines the structure for preset assets, including JSON, YAML, JS, TS, or custom file formats

## Indexable

\[`list`: `` `${string}ignore` ``\]: [`PresetContent`](../type-aliases/PresetContent.md)\<`string`[]\>

defines ignored file patterns

\[`json`: `` `${string}.json` `` \| `` `${string}.yaml` ``\]: [`PresetContent`](../type-aliases/PresetContent.md)\<`JsonObject`\>

defines JSON or YAML content

\[`esm`: `` `${string}.js` `` \| `` `${string}.cjs` `` \| `` `${string}.mjs` `` \| `` `${string}.jsx` `` \| `` `${string}.ts` `` \| `` `${string}.cts` `` \| `` `${string}.mts` `` \| `` `${string}.tsx` ``\]: [`PresetContent`](../type-aliases/PresetContent.md)\<`Record`\<`string`, `any`\>\>

defines ES module content including JS, JSX, TS, and TSX formats

\[`file`: `string`\]: `undefined` \| `null` \| `string` \| `JsonObject` \| `string`[] \| [`PresetContentGenerator`](../type-aliases/PresetContentGenerator.md)\<`string`[]\> \| [`PresetContentGenerator`](../type-aliases/PresetContentGenerator.md)\<`JsonObject`\> \| `Record`\<`string`, `any`\> \| [`PresetContentGenerator`](../type-aliases/PresetContentGenerator.md)\<`Record`\<`string`, `any`\>\> \| [`PresetContentGenerator`](../type-aliases/PresetContentGenerator.md)\<`string`\>

defines other file contents, including file path, arrays, JSON objects, or arbitrary records
