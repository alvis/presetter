# Dual-Format Library Example

This example demonstrates how to use presetter with the Hybrid preset to compile TypeScript to both **ESM** and **CommonJS** formats without using a bundler.

## Setup

```typescript
// presetter.config.ts
export { default } from 'presetter-preset-hybrid';
```

## Output Formats

After building, you get two compiled formats:

| Format   | File            | Use Case                          |
| -------- | --------------- | --------------------------------- |
| ESM      | `lib/index.mjs` | Modern bundlers, Node.js ESM      |
| CommonJS | `lib/index.cjs` | Node.js require(), older bundlers |

## Hybrid vs Rollup

| Aspect          | Hybrid (this example)    | Rollup                   |
| --------------- | ------------------------ | ------------------------ |
| **Output**      | ESM + CJS                | ESM + CJS + UMD          |
| **Bundling**    | No (direct tsc output)   | Yes (tree-shaken bundle) |
| **Build Speed** | Faster                   | Slower                   |
| **Bundle Size** | Larger (unbundled)       | Smaller (optimized)      |
| **Use Case**    | Internal libs, monorepos | Published npm packages   |

## When to Use

Use `presetter-preset-hybrid` when you need:

- Dual ESM/CJS output without bundling overhead
- Faster builds for internal libraries
- Simpler build pipeline (just TypeScript compiler)
- Libraries consumed primarily by other TypeScript projects
