[**Presetter Types API v8.0.3**](../README.md)

---

[Presetter Types API](../README.md) / PresetGenerator

# Type Alias: PresetGenerator()

> **PresetGenerator** = (`context`) => `Promisable`\<`Omit`\<[`PresetDefinition`](../interfaces/PresetDefinition.md), `"id"`\>\>

Defined in: [preset.ts:19](https://github.com/alvis/presetter/blob/master/packages/types/src/preset.ts#L19)

defines a generator function for presets that accepts a context and returns a preset definition or an array of them

## Parameters

### context

[`ProjectContext`](../interfaces/ProjectContext.md)

## Returns

`Promisable`\<`Omit`\<[`PresetDefinition`](../interfaces/PresetDefinition.md), `"id"`\>\>
