---
sidebar_position: 2
title: presetter use
---

# presetter use

Adopt one or more preset packages in the project containing the nearest `package.json`.

```bash
npx presetter use @presetter/preset-esm @presetter/preset-strict
```

Preset arguments accept names, versions, ranges, or tags, such as `@presetter/preset-esm@^9`.

## What It Does

1. Install Presetter and requested presets as development dependencies.
2. Write `presetter.config.ts` with the requested stack and the project's package name.
3. Resolve `setup` through the stack's `extends` graph and final `override.setup` pass.
4. Install missing `dependencies`, `devDependencies`, and `peerDependencies`, and add declared package script delegates.
5. Bootstrap the tool configuration assets.

Only `use` applies setup. [`bootstrap`](./bootstrap) regenerates assets from an existing config without installing packages or changing package scripts.

## Package Manager Selection

Selection follows this order:

1. `package.json#packageManager`.
2. Exactly one lockfile family in the project root: npm (`package-lock.json` or `npm-shrinkwrap.json`), pnpm (`pnpm-lock.yaml`), or Bun (`bun.lock` or `bun.lockb`).
3. `--package-manager=npm|pnpm|bun`.
4. An interactive prompt.

```bash
# Choose a fallback for a fresh project
npx presetter use @presetter/preset-esm --package-manager=npm
pnpm dlx presetter use @presetter/preset-esm --package-manager=pnpm
bunx presetter use @presetter/preset-esm --package-manager=bun
```

The flag does not override a detected manager. Missing or conflicting lockfiles fall back to the flag or prompt. Non-interactive use without a selection fails. An unsupported `packageManager` value (including Yarn) fails before the fallback is considered; `yarn.lock` does not select a manager. The selected binary runs from PATH; Presetter does not enforce its version.

## Existing Configs and Reruns

An identical generated `presetter.config.ts` can be reused. A differing `.ts` config or any `.mts`, `.mjs`, or `.js` config stops adoption before installation or file writes. For an existing custom config, edit it and run `bootstrap`; use the [manual installation route](../introduction/installation#method-2-manual-setup) for setup packages and scripts.

Already declared packages keep their dependency sections and specifications. Runtime setup skips packages present in any dependency section; development setup skips existing runtime or development dependencies. Peer setup skips existing runtime and peer declarations when preserving them, and adds peers directly when a development dependency already exists. A differing specification is reported and preserved unless you pass `--force`:

```bash
npx presetter use @presetter/preset-esm --force
```

`--force` replaces conflicting package specifications; it does not overwrite custom config files or existing script commands. Matching scripts succeed, while differing local scripts are logged as skipped.

## Dependency Build Approval

If the package manager blocks dependency install scripts, `use` lists the pending builds and asks for approval. Declining, empty input, or EOF still writes the config and scripts, but skips bootstrap and prints the approval command. Run that command, then `presetter bootstrap` to finish setup.

## Declaring Setup in a Preset

```typescript
import { preset } from 'presetter';

export default preset('@acme/preset', {
  setup: {
    devDependencies: { vitest: '^5.0.0' },
    scripts: { test: 'run test --' },
  },
  scripts: { test: 'vitest run' },
});
```

Setup commands are literal: inline or generator-returned strings do not substitute `{variable}` placeholders. Use `scripts` for runtime templates and `setup.scripts` for package.json delegates.
