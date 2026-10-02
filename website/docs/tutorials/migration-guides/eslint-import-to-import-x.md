---
sidebar_position: 4
title: eslint-plugin-import to import-x
description: Migrate import rules, settings, plugins, and ESLint directives to import-x
---

# Migrating from eslint-plugin-import to import-x

Essentials now uses `eslint-plugin-import-x` ^4.17.0. This is a breaking configuration change: consumer-authored rules, settings, plugin registrations, and ESLint directives must use `import-x` instead of `import`.

Existing supported rule configurations retain their severities, options, file scopes, and override precedence. No additional import policies are enabled. Diagnostics and fixes use the published import-x implementation and may differ from the old plugin.

## Update custom configurations

If you declare the plugin directly, replace `eslint-plugin-import` with `eslint-plugin-import-x` ^4.17.0 and register it as follows. Presetter supplies this registration for generated configs.

```typescript
import importX from 'eslint-plugin-import-x';

export default [{ plugins: { 'import-x': importX } }];
```

Rename supported `import/<rule>` overrides to `import-x/<rule>`; for example, `import/order` becomes `import-x/order`. Keep their options unchanged. Use only the new namespace to avoid duplicate diagnostics and conflicting overrides.

Rename Presetter’s three import settings while retaining resolver entries and options:

```typescript
settings: {
  'import-x/internal-regex': '^(#|@/)',
  'import-x/external-module-folders': ['node_modules', 'types'],
  'import-x/resolver': { typescript: true, node: true },
}
```

Use a string for `internal-regex`: ESLint can merge repeated RegExp settings into an empty object when composing presets. The string preserves alias classification. Keep your configured types folder and TypeScript/Node resolver options; this migration does not switch to `resolver-next`. Check additional consumer-owned rules, settings, and options against the installed import-x release individually. Import-x supplies its built-in Node resolver; Essentials no longer declares `eslint-import-resolver-node`. Consumers using legacy Node resolver callbacks such as `packageFilter` must provide that resolver themselves.

## Update ESLint comments

Rename rule IDs in `eslint-disable`, `eslint-disable-next-line`, `eslint-disable-line`, `eslint-enable`, and inline `eslint` configuration comments, preserving their reasons and scope. For example:

```typescript
// eslint-disable-next-line import-x/no-deprecated -- Intentional compatibility usage.
```

## Update the Node-protocol rule

Strict replaces `import/enforce-node-protocol-usage` with `unicorn/prefer-node-protocol` at warning severity. Rename its overrides, suppressions, and inline configuration to the Unicorn rule. Remove the old `always`/`never` option: Unicorn prefers the `node:` prefix and accepts no equivalent option. Consumers managing their own plugin registrations must register `eslint-plugin-unicorn` as `unicorn`. No other Unicorn rules or configurations are enabled. Syntax coverage and fixes follow the published Unicorn implementation.

Strict’s engines-based `import-x/no-nodejs-modules` restriction and the existing `**/*.{config,spec}.ts` exemption remain unchanged.

Regenerate the ESLint config after updating Presetter, then run your project’s lint command to check the migrated customizations.
