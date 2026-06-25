---
sidebar_position: 1
title: Runtime Presets
description: Presets targeting specific JavaScript runtimes such as Node.js and Bun
---

# Runtime Presets

Runtime presets shape Presetter's TypeScript configuration and build scripts for a specific JavaScript runtime. They make the runtime's ambient types and build conventions a first-class concern of your project setup.

## Available Presets

### [@presetter/preset-node](./node)

Extends [`@presetter/preset-essentials`](../foundation/essentials) with a Node-tuned `tsconfig.json` (adds `types: ['node']`). Ideal for backend services and CLIs.

### [@presetter/preset-bun](./bun)

**Standalone** preset (does not extend essentials) for projects that run on Bun. Ships Bun ambient types and `bun build`-powered scripts, including single-binary compilation.

## Choosing a Runtime Preset

| Scenario | Preset |
|----------|--------|
| Node-based HTTP API, worker, or CLI | `@presetter/preset-node` |
| Bun-native service or compiled binary | `@presetter/preset-bun` |
| Browser-only app | See [Frameworks](../frameworks) |

Runtime presets compose with module-system presets (`preset-esm`, `preset-cjs`, `preset-hybrid`) and quality presets (`preset-strict`).
