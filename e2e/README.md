# E2E Tests for Presetter

End-to-end tests that validate example projects and fresh-project adoption with presetter packages using a local Verdaccio registry.

## Why Verdaccio?

This e2e test infrastructure uses [Verdaccio](https://verdaccio.org/) as a local npm registry instead of installing packages from tarballs.

**Background**: pnpm does not properly install dependencies from tarballs when using the `file:` protocol. See [pnpm issue #10178](https://github.com/pnpm/pnpm/issues/10178) for details. This causes test failures when packages have interdependencies.

**Solution**: By publishing all packages to a local Verdaccio registry, we simulate the real npm registry behavior. pnpm correctly resolves `*` version specifiers from the local registry, ensuring all interdependencies are properly installed.

## Overview

The E2E test suite:

1. Starts a local Verdaccio registry on a random available port
2. Publishes all packages to the local registry
3. For each example project (standalone, bundled, dual-format, monorepo etc.):
   - Copies the example to a temporary directory
   - Writes `.npmrc` pointing to the local Verdaccio registry
   - Installs with pnpm and npm, plus any extra managers `EXAMPLE_MANAGERS` lists for the example (bun for the bun example), resolving `*` versions from the local registry
   - Executes validation scripts (lint, build, typecheck, test)
4. Creates minimal projects inline for npm, pnpm, and bun, runs `presetter use @presetter/preset-esm` against Verdaccio, exercises build approval over stdin (pnpm records `allowBuilds`, bun records `trustedDependencies`, and npm runs in advisory mode), and checks installed tools, package scripts, generated configs, and recorded approvals
5. Runs build, lint, typecheck, and test in each adopted project, then repeats `use` to verify idempotency
6. Reports results via vitest and stops Verdaccio on teardown

Corepack installs pnpm at latest on purpose, so E2E verifies compatibility with the newest releases. Fresh-project adoption records that version in `package.json#packageManager`; subsequent commands let Corepack select it from the project.

## Usage

```bash
# Run all E2E tests
pnpm --filter @presetter/e2e test:e2e

# Run with debug output
DEBUG=presetter:e2e pnpm --filter @presetter/e2e test:e2e

# Run specific example
pnpm --filter @presetter/e2e test:e2e -t "standalone"

# Run with verbose output
pnpm --filter @presetter/e2e test:e2e -- --reporter=verbose
```

## Examples Tested

| Example     | Package Manager | Scripts                      |
| ----------- | --------------- | ---------------------------- |
| standalone  | pnpm, npm       | lint, build, typecheck, test |
| bundled     | pnpm, npm       | lint, build, typecheck, test |
| dual-format | pnpm, npm       | lint, build, typecheck, test |
| monorepo    | pnpm, npm       | lint, build, test            |
| next        | pnpm, npm       | lint, build, typecheck, test |
| bun         | pnpm, npm, bun  | lint, build, typecheck, test |

## Monorepo Example

The monorepo example has special handling:

- `pnpm-package.json` - Used when testing with pnpm (with `pnpm-workspace.yaml`)
- `npm-package.json` - Used when testing with npm (with `workspaces` field)

When copying the example, the appropriate package.json variant is renamed to `package.json`.

## File Structure

```
e2e/
├── package.json          # Package configuration
├── presetter.config.ts   # Presetter preset configuration
├── setup.ts              # Global setup/teardown (Verdaccio lifecycle)
├── src/
│   ├── index.ts          # Barrel export
│   ├── types.ts          # TypeScript interfaces
│   ├── config.ts         # Configuration constants
│   ├── log.ts            # Debug logging utility
│   └── helpers/
│       ├── index.ts      # Helpers barrel export
│       ├── copy.ts       # Directory copy utilities (writes .npmrc)
│       ├── detect.ts     # Package/example auto-detection
│       ├── exec.ts       # Script execution utilities
│       ├── publish.ts    # Package publishing to Verdaccio
│       └── verdaccio.ts  # Verdaccio lifecycle management
├── examples.spec.e2e.ts  # Vitest E2E tests
├── use.spec.e2e.ts       # Fresh-project adoption with npm, pnpm, and bun
└── README.md             # This file
```

## Local Debugging

To debug test failures:

1. Enable debug logging:

   ```bash
   DEBUG=presetter:e2e pnpm --filter @presetter/e2e test:e2e
   ```

2. Check the temporary directory for:
   - Copied example projects
   - Verdaccio storage and configuration
   - Generated `.npmrc` files

3. The Verdaccio storage directory contains all published packages, useful for verifying package contents.

## CI Integration

E2E tests run on GitHub Actions for:

- **Operating Systems**: Ubuntu, macOS, Windows
- **Node.js Versions**: LTS and latest, within `^22.13.0 || ^24.0.0 || >=26.0.0`

See `.github/workflows/e2e.yaml` for the workflow configuration.
