# Bundled Library Example

This example demonstrates how to use presetter with the Rollup preset to create a library that outputs **ESM**, **CommonJS**, and **UMD** bundles from a single source.

## Setup

```typescript
// presetter.config.ts
export { default } from 'presetter-preset-rollup';
```

## Output Formats

After building, you get three bundle formats:

| Format   | File               | Use Case                          |
| -------- | ------------------ | --------------------------------- |
| ESM      | `lib/index.mjs`    | Modern bundlers, Node.js ESM      |
| CommonJS | `lib/index.cjs`    | Node.js require(), older bundlers |
| UMD      | `lib/index.umd.js` | Browser `<script>` tags, AMD      |

## Package.json Exports

```json
{
  "exports": {
    "import": "./lib/index.mjs",
    "require": "./lib/index.cjs"
  },
  "main": "./lib/index.cjs",
  "module": "./lib/index.mjs",
  "browser": "./lib/index.umd.js"
}
```

## When to Use

Use `presetter-preset-rollup` when you need:

- A library consumable in multiple environments (Node.js, browsers, bundlers)
- Optimized, tree-shakeable bundles
- UMD builds for CDN distribution
