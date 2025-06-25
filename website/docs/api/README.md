**Presetter Types API v8.0.3**

---

# Presetter Types API v8.0.3

## Interfaces

- [PresetAssets](interfaces/PresetAssets.md)
- [ResolvedPresetAssets](interfaces/ResolvedPresetAssets.md)
- [ProjectContext](interfaces/ProjectContext.md)
- [PresetContentContext](interfaces/PresetContentContext.md)
- [PresetNode](interfaces/PresetNode.md)
- [PresetDefinition](interfaces/PresetDefinition.md)

## Type Aliases

- [ResolvedPresetAsset](type-aliases/ResolvedPresetAsset.md)
- [Path](type-aliases/Path.md)
- [Variables](type-aliases/Variables.md)
- [Scripts](type-aliases/Scripts.md)
- [PresetContent](type-aliases/PresetContent.md)
- [PresetContentGenerator](type-aliases/PresetContentGenerator.md)
- [PresetGraph](type-aliases/PresetGraph.md)
- [PresetObject](type-aliases/PresetObject.md)
- [PresetObjectGenerator](type-aliases/PresetObjectGenerator.md)
- [Preset](type-aliases/Preset.md)
- [PresetGenerator](type-aliases/PresetGenerator.md)

## Functions

### preset()

> **preset**(`id`, `preset`): [`Preset`](type-aliases/Preset.md)

Defined in: [guard.ts:10](https://github.com/alvis/presetter/blob/master/packages/types/src/guard.ts#L10)

a type guard utility for forming a preset

#### Parameters

##### id

`string`

name of the preset

##### preset

a preset definition or generator

[`PresetGenerator`](type-aliases/PresetGenerator.md) | `Omit`\<[`PresetDefinition`](interfaces/PresetDefinition.md), `"id"`\>

#### Returns

[`Preset`](type-aliases/Preset.md)

a preset object with the provided name

---

### asset()

> **asset**\<`T`\>(`asset`): [`PresetContent`](type-aliases/PresetContent.md)\<`T`\>

Defined in: [guard.ts:24](https://github.com/alvis/presetter/blob/master/packages/types/src/guard.ts#L24)

a utility for defining a preset asset

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### asset

[`PresetContent`](type-aliases/PresetContent.md)\<`T`\>

a preset content or generator function

#### Returns

[`PresetContent`](type-aliases/PresetContent.md)\<`T`\>

a preset content object
