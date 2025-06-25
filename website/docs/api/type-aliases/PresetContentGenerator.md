[**Presetter Types API v8.0.3**](../README.md)

---

[Presetter Types API](../README.md) / PresetContentGenerator

# Type Alias: PresetContentGenerator()\<T\>

> **PresetContentGenerator**\<`T`\> = (`current`, `context`) => `Promisable`\<`T` \| `null` \| `undefined`\>

Defined in: [content.ts:24](https://github.com/alvis/presetter/blob/master/packages/types/src/content.ts#L24)

generator function for preset content which accepts the current content and context

## Type Parameters

### T

`T`

## Parameters

### current

the current value of the content

`T` | `null` | `undefined`

### context

[`PresetContentContext`](../interfaces/PresetContentContext.md)

the current context of the preset generation

## Returns

`Promisable`\<`T` \| `null` \| `undefined`\>

the new or modified content or file path or null
