[**Presetter Types API v8.0.0**](../README.md)

***

[Presetter Types API](../README.md) / PresetDefinition

# PresetDefinition

Defined in: [preset.ts:26](https://github.com/alvis/presetter/blob/master/packages/types/src/preset.ts#L26)

defines a preset with optional name, variables, scripts, assets, and an override for a second-pass merge

## Properties

### extends?

> `optional` **extends**: [`Preset`](../type-aliases/Preset.md)[]

Defined in: [preset.ts:28](https://github.com/alvis/presetter/blob/master/packages/types/src/preset.ts#L28)

optional list of presets to extend

***

### id

> **id**: `string`

Defined in: [preset.ts:30](https://github.com/alvis/presetter/blob/master/packages/types/src/preset.ts#L30)

optional name, typically used for debugging purposes

***

### variables?

> `optional` **variables**: [`PresetContent`](../type-aliases/PresetContent.md)\<[`Variables`](../type-aliases/Variables.md)\>

Defined in: [preset.ts:33](https://github.com/alvis/presetter/blob/master/packages/types/src/preset.ts#L33)

substitution variables used within the preset

***

### scripts?

> `optional` **scripts**: [`PresetContent`](../type-aliases/PresetContent.md)\<[`Scripts`](../type-aliases/Scripts.md)\>

Defined in: [preset.ts:36](https://github.com/alvis/presetter/blob/master/packages/types/src/preset.ts#L36)

additional scripts to be executed within the preset

***

### assets?

> `optional` **assets**: [`PresetObject`](../type-aliases/PresetObject.md)\<[`PresetAssets`](PresetAssets.md)\>

Defined in: [preset.ts:39](https://github.com/alvis/presetter/blob/master/packages/types/src/preset.ts#L39)

collection of assets associated with the preset

***

### override?

> `optional` **override**: `object`

Defined in: [preset.ts:45](https://github.com/alvis/presetter/blob/master/packages/types/src/preset.ts#L45)

secondary pass for asset resolution, allowing modifications post initial asset formation
this can be used to append content to config files or handle conflicts in content

#### variables?

> `optional` **variables**: [`PresetContent`](../type-aliases/PresetContent.md)\<[`Variables`](../type-aliases/Variables.md)\>

plain object or generator function used in the second-pass merge to resolve variable conflicts

#### scripts?

> `optional` **scripts**: [`PresetContent`](../type-aliases/PresetContent.md)\<[`Scripts`](../type-aliases/Scripts.md)\>

plain object or generator function used in the second-pass merge to resolve script conflicts

#### assets?

> `optional` **assets**: [`PresetObject`](../type-aliases/PresetObject.md)\<[`PresetAssets`](PresetAssets.md)\>

asset content, allowing for modifications in the second-pass merge
