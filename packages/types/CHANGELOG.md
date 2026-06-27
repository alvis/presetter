# Changelog

All notable changes to this project will be documented in this file.
# 9.0.0 (2026-06-27)


### ♻️ Chores

* migrate all presetter-* to @presetter/* (b4b0b43)
* change default branch to main (938973a)
* update presetter logo (7025962)
* simplify package.json imports and exports (255cf2d)


### ✨ Features

* **preset-essentials:** update scripts naming (7dda54d)
* **preset:** update typescript to v6 (cf186c2)
* **preset:** update default standard to ES2024 (517a5a1)
# 8.3.0 (2025-12-22)


### ♻️ Chores

* add typecheck script to package.json files (ffddd81)


### ✨ Features

* **presetter:** attach preset binary paths (ade7445)
# 8.1.0 (2025-10-16)


### 📦 Code Refactoring

* centralize dependencies in pnpm workspace catalogs (4bb0ef7)
# 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration (0d6a6f5)
# 8.0.0 (2025-06-27)


### ✨ Features

* replace path aliases with subpath imports (9cbb00d)
* standardize source directories to src (7815add)


### 🐞 Bug Fixes

* **preset-strict:** add sort-package-json (593d1ef)


### 📚 Documentation

* update README files (6f38a03)


### 📦 Code Refactoring

* **presetter:** consolidate and enhance project context API (4db436a)
# 7.0.2 (2025-01-24)


### 🐞 Bug Fixes

* resolve incorrect publishConfig (9348b0f)
# 7.0.1 (2025-01-24)


### 🐞 Bug Fixes

* remove development export upon publication (f6c1d12)
# 6.0.0 (2024-11-27)


### ♻️ Chores

* remove all file headers (ea62451)


### ✨ Features

* **preset-esm:** update eslint to v9 (73d0c14)
* introduce presetter.config.ts (74e2326)


### 🐞 Bug Fixes

* **types:** remove usage of erroneous types (c73ad23)


### 📦 Code Refactoring

* **presetter-types:** split types into files (3819692)
# 5.0.0 (2024-07-31)


### ♻️ Chores

* update pnpm to v9.6 to use catalog (607fc68)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest (330d9fe)


### 🐞 Bug Fixes

* update type-fest to avoid infinite recursion (1af2e5e)
# 4.0.0 (2023-06-19)


### ♻️ Chores

* use pnpm for workspace management (358d0d7)


### ✨ Features

* **types:** separate types from presetter (4ff3626)
* convert the whole project into ESM (381c84f)


### 🐞 Bug Fixes

* **presetter:** add primitive types that allow undefined values (915cf07)
* update outdated packages (bbaf33f)
