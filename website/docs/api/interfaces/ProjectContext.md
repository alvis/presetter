[**Presetter Types API v8.0.3**](../README.md)

---

[Presetter Types API](../README.md) / ProjectContext

# Interface: ProjectContext

Defined in: [context.ts:10](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L10)

input for a preset configurator providing context such as root and package information

## Extended by

- [`PresetContentContext`](PresetContentContext.md)

## Properties

### isRepoRoot

> **isRepoRoot**: `boolean`

Defined in: [context.ts:12](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L12)

indicate whether the current project root is also the repository root

---

### relativeProjectRoot

> **relativeProjectRoot**: `string`

Defined in: [context.ts:14](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L14)

relative project root to the repository root

---

### relativeRepoRoot

> **relativeRepoRoot**: `string`

Defined in: [context.ts:16](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L16)

relative repository root to the project root

---

### repoRoot

> **repoRoot**: `string`

Defined in: [context.ts:18](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L18)

path to the root of the repository (typicall the folder hosting .git)

---

### projectRoot

> **projectRoot**: `string`

Defined in: [context.ts:20](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L20)

the root directory containing the project's `presetter.config.ts`

---

### packageJson

> **packageJson**: `PackageJson`

Defined in: [context.ts:23](https://github.com/alvis/presetter/blob/master/packages/types/src/context.ts#L23)

normalized `package.json` data from the project
