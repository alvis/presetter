[**Presetter Types API v8.0.0**](../README.md)

***

[Presetter Types API](../README.md) / PresetContentContext

# PresetContentContext

Defined in: [context.ts:29](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L29)

supplementary context available for a content resolver

## Extends

- [`ProjectContext`](ProjectContext.md)

## Properties

### isRepoRoot

> **isRepoRoot**: `boolean`

Defined in: [context.ts:12](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L12)

indicate whether the current project root is also the repository root

#### Inherited from

[`ProjectContext`](ProjectContext.md).[`isRepoRoot`](ProjectContext.md#isreporoot)

***

### relativeProjectRoot

> **relativeProjectRoot**: `string`

Defined in: [context.ts:14](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L14)

relative project root to the repository root

#### Inherited from

[`ProjectContext`](ProjectContext.md).[`relativeProjectRoot`](ProjectContext.md#relativeprojectroot)

***

### relativeRepoRoot

> **relativeRepoRoot**: `string`

Defined in: [context.ts:16](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L16)

relative repository root to the project root

#### Inherited from

[`ProjectContext`](ProjectContext.md).[`relativeRepoRoot`](ProjectContext.md#relativereporoot)

***

### repoRoot

> **repoRoot**: `string`

Defined in: [context.ts:18](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L18)

path to the root of the repository (typicall the folder hosting .git)

#### Inherited from

[`ProjectContext`](ProjectContext.md).[`repoRoot`](ProjectContext.md#reporoot)

***

### projectRoot

> **projectRoot**: `string`

Defined in: [context.ts:20](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L20)

the root directory containing the project's `presetter.config.ts`

#### Inherited from

[`ProjectContext`](ProjectContext.md).[`projectRoot`](ProjectContext.md#projectroot)

***

### packageJson

> **packageJson**: `PackageJson`

Defined in: [context.ts:23](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L23)

normalized `package.json` data from the project

#### Inherited from

[`ProjectContext`](ProjectContext.md).[`packageJson`](ProjectContext.md#packagejson)

***

### variables

> **variables**: [`Variables`](../type-aliases/Variables.md)

Defined in: [context.ts:30](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L30)
