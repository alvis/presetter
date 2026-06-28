# Changelog

All notable changes to this project will be documented in this file.
# 9.0.1 (2026-06-28)


### ⚙️ Continuous Integrations

* handle unpublished package errors (0e29559)
# 9.0.0 (2026-06-27)


### ♻️ Chores

* migrate all presetter-* to @presetter/* (b4b0b43)
* drop support on EOL node 20 (2df37fd)
* remove depreciated only-allow (4470ac0)
* update pnpm to 11.6 (098ebf8)
* build with typescript 7 (c361b9f)
* **e2e:** revert unintended version bump (22b15d7)
* omit template file from coverage (be82946)
* remove unnecessary dependencies (be28581)
* ignore tsconfck depreciation warning (e5d3552)
* change default branch to main (938973a)
* update presetter logo (7025962)
* add a script setting up npm trust (7bd83b5)
* remove outdated files (2937830)
* simplify package.json imports and exports (255cf2d)
* enhance package publishing logic (09f408a)


### ⚙️ Continuous Integrations

* release with provenance (7610f62)


### ✨ Features

* **preset-react:** add ESLint overrides for test JSX files (dffbc39)
* **presetter:** support list merging by key (62c9013)
* **preset-essentials:** update scripts naming (7dda54d)
* **preset/node:** add a node js preset (af776ab)
* **preset/bun:** add a preset for bun (5258331)
* **preset:** update typescript to v6 (cf186c2)
* **preset/essentials:** add lint-staged for pre-commit (9e9d1cb)
* **preset/essentials:** add pre-push hook (d286915)
* **preset/essentials:** update jsdoc standards (db4da74)
* **preset/essentials:** release with git-cliff (fdf0ed5)
* **docs:** add architecture overview document (027e774)
* **preset/monorepo:** support sub test configs (1b588c0)
* **preset/essential:** standardize test suffixes (6750e80)
* **preset/essentials:** enable noUncheckedIndex (89c08ac)
* **presetter:** bootstrap projects by package name (732111f)
* **preset/strict:** update eslint rules for better practices (389405e)
* **preset:** update default standard to ES2024 (517a5a1)
* **presetter:** add package info to bootstraping (368827d)
* **preset/storybook:** add storybook preset (3aaafe4)
* **example:** add next example (3832da9)


### 🐞 Bug Fixes

* **preset-monorepo:** include current config in ESLint override (4222ea4)
* **preset-essentials:** shorten integration test glob pattern (541173b)
* **preset-react:** remove DOM libs from tsconfig (63b70fa)
* remove build artifacts (c64846f)
* **preset/strict:** update sonar standards (72046bf)
* **preset/monorepo:** ignore type check on libaries (668a23d)
* **preset/node:** add the missing variables (a5cab27)
* **preset/monorepo:** remove coverage thresholds (af8f860)
* **preset/monorepo:** support multi-level vitest (d79b401)
* **preset/essentials:** support multi-level vitest (ae1bb2e)
* update dependencies (c820ec7)
* **preset/next:** update tsconfig for next (b660071)
* **preset/react:** remove unnecessary tsconfig (339e7bc)
* **preset/web:** migrate better-tailwindcss rule (6c280f8)
* **presets/essentials:** watch unit tests only (5810276)
* **preset/monorepo:** remove esm from monorepo (502cac6)
* **preset/web:** enable tailwindcss only if used (0dd362a)
* **preset/next:** add missing preset dependencies (faca100)
* **example:** fix examples (84a3d72)
* **preset/web:** add 'src/app' to common source directories (2201967)
* **e2e/helpers:** replace corepack with npx for installs (80fd166)
* **preset/rollup:** replace outdated plugin postcss with import-css (1fb96ab)
* **e2e:** ignore timeout (d633e07)
* **e2e:** update npm install command (b92b57f)
* **example:** add classname utility to next example (244cca6)
* **preset/monorepo:** prioritize monorepo release script (c26e467)


### 💎 Styles

* clean up stylistic issues on documentations (24834e4)
* fix styling issues (189b0cc)


### 📚 Documentation

* introduce a documentation site for presetter (223e0db)
* add overview video (13202a5)
* update project description and add video (3784445)


### 📦 Code Refactoring

* **preset/essentials:** use presetter's merge (1ed3dcc)
* **preset:** relocate typescript templates (1714a5a)
# 8.3.0 (2025-12-22)


### examples

* add some usage examples (ca844e7)


### ♻️ Chores

* add typecheck script to package.json files (ffddd81)
* remove claude local settings configuration (a147e8b)
* update pnpm to v10.25 (15b12af)
* add node v25 to test matrix (7cc7f27)


### ⚙️ Continuous Integrations

* change testing strategy to lts and latest node only (8d7551a)
* use trusted publisher method for publication (27adc32)


### ✨ Features

* **presetter:** attach preset binary paths (ade7445)
* **preset-essential:** use closest eslint config file (a5e6711)


### 🐞 Bug Fixes

* **preset-next:** add ProjectContext interface and default variables (80bc6bc)
* **preset-essentials:** reset mocks to defaults after each test (87e4896)
* **preset-monorepo:** include more test config files (add7d63)
* **preset-essentials:** skip node_modules in fixme (aa9f579)
* **preset-rollup:** correct output variable typo (eab7b1e)
* correct presetter-preset-essentials dependency (7d73f5e)
* **presetter:** replace depreciated mvdan-sh with sh-syntax (cfe9750)
* **preset-monorepo:** lint all source & test files (79970cf)
* update preset dependencies (abbddcc)


### 📚 Documentation

* **presetter:** document auto binary path resolution (8e1f6bf)


### 📦 Code Refactoring

* **preset-monorepo:** simplify project config pattern (29c2452)


### 🚨 Tests

* **e2e:** add end-to-end tests using examples (ec4ea88)
# 8.2.0 (2025-11-14)


### ♻️ Chores

* stop hoisting dependencies to the root (279b689)


### ✨ Features

* **preset-essentials:** update vitest to v4 (39696d2)
* **preset-web:** update storybook to v10 (d6ecc2c)
* **preset-next:** update next to v16 (7dddef3)


### 🐞 Bug Fixes

* **preset-next:** update type dependencies (5d32f0a)
* **web:** remove prettier-plugin-tailwindcss in favor of better-tailwindcss (0df5abf)


### 💎 Styles

* fix formatting issues (14d3019)
# 8.1.0 (2025-10-16)


### lint

* **preset-next:** resolve import style issues (871f7a2)


### ♻️ Chores

* update pnpm to v10.18 (70eec29)
* bump dependency versions (5177a08)


### 🐞 Bug Fixes

* **preset-essentials:** disable compat/compat rule for test files (0ac8f93)


### 📦 Code Refactoring

* **preset-essentials:** split import groups (ba7866c)
* **preset-react:** remove web preset dependency (2e6fcf1)
* **preset-react,web:** move types to web preset (ed0e940)
* centralize dependencies in pnpm workspace catalogs (4bb0ef7)
# 8.0.12 (2025-09-14)


### 🐞 Bug Fixes

* **preset-monorepo:** add .prettierrc.json for project-level overrides (adbf8f0)
* **preset-web:** add tailwind classname activators (2218edd)


### 📦 Code Refactoring

* **preset-web:** externalize prettier config (ff0e0b2)
# 8.0.11 (2025-08-04)


### 🐞 Bug Fixes

* **preset:** use target variable in tsconfig (d7aeb5f)


### 🗑 Reverts

* load types from generated files (6cf0142)
# 8.0.10 (2025-08-03)


### 🐞 Bug Fixes

* **presetter:** resolve repoRoot by vcs folders (1d2f9bc)
# 8.0.9 (2025-08-03)
# 8.0.8 (2025-07-30)


### 🐞 Bug Fixes

* **preset-next:** include DEFAULT_VARIABLES in preset (59ba22c)
# 8.0.7 (2025-07-30)


### 🐞 Bug Fixes

* **preset-essentials:** lint source and test files by default (681091a)
* **preset-web:** change tailwindcss rules to warn only (28e4a5e)
* **preset-next:** include typecheck on config files (5622e37)


### 📦 Code Refactoring

* **preset-next:** set default output as dist (c4d9696)
# 8.0.6 (2025-07-30)


### ✨ Features

* **preset-essentials:** add typecheck script (d98031b)


### 🐞 Bug Fixes

* **presetter:** parse {@} correctly with no global args (0b53631)


### 📦 Code Refactoring

* **preset-essentials:** use default path in eslint (37a356e)
# 8.0.5 (2025-07-30)


### ♻️ Chores

* move pnpm custom configs from .npmrc to pnpm-workspace.yaml (ea1c54d)


### 🐞 Bug Fixes

* **preset-next:** add missed @tailwindcss/postcss (146819b)
# 8.0.4 (2025-07-30)


### ✨ Features

* **presetter:** support {@:--default-arg} default args syntax (37445d0)
* **preset-next:** introduce a new nextjs preset (26164d5)


### 🐞 Bug Fixes

* **preset-essentials:** run prettier before eslint (748e6f3)
* **preset-essentials:** add tooling files override rules (c4b90a3)
* **preset-web:** consider additional classes by default (b969cfb)


### 🚀 Performance Improvements

* **preset-essentials:** disable unsafe assignment rule (0d635e3)
# 8.0.3 (2025-07-20)


### ♻️ Chores

* update dependencies (c1091ad)


### 🐞 Bug Fixes

* **preset-web:** avoid using import.meta.resolve for relative import (252adb2)
# 8.0.2 (2025-07-20)


### ♻️ Chores

* migrate code climate to qlty (1a84a15)
* use eslint cache (f4086a8)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration (0d6a6f5)
* **preset-essentials:** recursively detect tailwind import (8d7b51e)
* **tailwind:** follow modular import resolution (ce99a00)


### 🐞 Bug Fixes

* **preset-essentials:** follow browserslist settings in package.json (c852d05)
* **preset-essentials:** allow lint to accept file paths (e7d3dab)
* **preset-strict:** remove sonar/void-use to avoid false positivity (6ec3fa3)
* **preset-web:** add name for tailwindcss eslint rules (3df1175)
* **preset-web:** try to load main css under .storybook (77d7b85)
* **preset-essentials:** load type files at build (2a24163)
* **preset-strict:** use eslint cache (2b45f48)


### 📦 Code Refactoring

* **preset-essentials:** use build-in for type import sorting (9af4f25)
* **preset-essentials:** separate tailwind related logic (a24f7bd)


### 🚨 Tests

* **preset-web:** refactor content mocking to reduce switch cases (1d0133e)
# 8.0.1 (2025-06-27)


### ♻️ Chores

* add --access public to publish to generate provenance signature for the new preset (6b15d9d)
# 8.0.0 (2025-06-27)


### ♻️ Chores

* remove unused left-behind packages (1f04cd2)
* add Node.js 24 to test matrix (803f9b4)
* use preset-monorepo for this monorepo (50076dd)
* update pnpm to v10.12 (0069d4b)
* update dependencies (a932944)
* **preset-react:** remove unused types (801210a)


### ✨ Features

* **preset-web:** add storybook for web testing (11279ac)
* **preset-essentials:** add typescript target (c3b610f)
* **preset-essentials:** exclude type files in coverage (67ff205)
* **preset-essentials:** instruct eslint to use cache (7f63337)
* **preset-essentials:** add project name to vitest config (75a4351)
* upgrade to storybook v9 and tailwind v4 (bc7f8d0)
* replace path aliases with subpath imports (9cbb00d)
* standardize source directories to src (7815add)
* **preset-essentials:** add scripts for various test types (63a0e23)
* **preset-essentials:** add env compatibility check (2a86824)
* **preset-monorepo:** introduce a monorepo preset (d2e5607)


### 🐞 Bug Fixes

* **preset-essentials:** correct tsconfig root path (1eebe8b)
* **preset-strict:** relax eslint max file lines to 300 (dc4c9b1)
* **preset-essentials:** include all sources from the repo root (744b0c5)
* **preset-essentials:** load types from various roots (ff9ec74)
* **preset-strict:** add sort-package-json (593d1ef)
* **preset-react:** resolve various type issues (ce782c0)
* **preset-strict:** remove some sonar rules due to performance issues (3878577)
* **preset-essentials:** include custom types in npm package (c03bd29)
* **preset-essentials:** type check all test files (1923017)
* **preset-essentials:** load types from generated files (39e370f)
* **preset-essentials:** allow certain types in template literals (3474e5f)
* **preset-web:** look for entry css file for tailwind v4 (294e195)
* **preset-react:** remove path alias (ee928d6)
* **preset-react:** remove incompatible addons to storybook v9 (303dc3a)
* **preset-strict:** resolve type issues (21ba18d)
* **presetter:** normalize project roots before bootstraping (7541317)
* **preset-web:** fix a typo on prettier config file (8eaaf66)
* **preset:** include ts files in hidden folders (40237d3)


### 💎 Styles

* **preset-web:** remove unused types (45fb81a)


### 📚 Documentation

* update READMEs to reflect recent changes (1c23de6)
* update README files (6f38a03)
* update monorepo README (3637e69)
* **preset-essentials:** fix a typo with prettier config file (24df92a)


### 📦 Code Refactoring

* **presetter:** use immutable object (5b67def)
* **presetter:** remove read-pkg-up (eccf0af)
* **presetter:** consolidate and enhance project context API (4db436a)
* **preset:** simplify eslint templates (5761edd)
* **presetter:** use .notation for asset exports (02ff7e9)
* **presetter:** remove auto peerDeps install and drop npm <7 support (bda9238)
* **presetter:** remove unnecessary xception dependency (3c844fe)


### 🚨 Tests

* **presetter:** simplify tests on preset resolution (370bf80)
* resolve type issues among tests (f83e923)
* resolve type issues (8b6f95d)
# 7.3.0 (2025-04-21)


### 🐞 Bug Fixes

* **preset:** include accumulated eslint configs (00a4d72)
* **preset-essentials:** set rootDir for typecheck (e9f8872)
* **preset-strict:** disable alphabetical-sort rule (ea2dc25)
# 7.2.0 (2025-04-17)


### core

* update vulnerability workflow (e089e8c)


### ♻️ Chores

* use pnpm/action-setup instead of corepack (274ec9d)
* add node v23 to test matrix (ea04ad3)


### 🐞 Bug Fixes

* **preset-essentials:** group node submodules (fe96d1b)
* **preset-react:** remove @types/react (2366a54)
* **preset-essentials:** run zx sequentially (6e247f1)
* **presetter:** skip merging for content functions (d7832ad)
# 7.1.0 (2025-01-28)


### ✨ Features

* **preset-essentials:** replace shx with zx (3d82634)


### 🐞 Bug Fixes

* **preset-essentials:** update eslint to v9.18 (82392bb)
* **preset-essentials:** update eslint dependencies (0821bae)
# 7.0.2 (2025-01-24)


### 🐞 Bug Fixes

* resolve incorrect publishConfig (9348b0f)
# 7.0.1 (2025-01-24)


### 🐞 Bug Fixes

* remove development export upon publication (f6c1d12)
# 7.0.0 (2025-01-23)


### ✨ Features

* **preset-essentials:** update vitest to v3 (029edc1)
* **presetter:** add a project selector (506bc3c)
* **preset-essentials:** skip building on install (1544d17)


### 🐞 Bug Fixes

* **preset-essentials:** pass with no tests (5900f63)
# 6.2.0 (2025-01-10)


### ♻️ Chores

* update pnpm to v9.15 (b63cfa6)
* add conditional exports (8717aa9)


### ✨ Features

* **presetter:** support recursive bootstraping (c5058dc)


### 🐞 Bug Fixes

* **preset-react:** modernize module resolution (8a5350e)
# 6.1.0 (2024-12-24)


### ♻️ Chores

* run lint at the root level (02333e4)
* add lintstaged config (3641fdd)


### ✨ Features

* **preset-strict:** update sonar to v3 (57f9057)
* **preset-essentials:** eslint with .gitignore (4df3d23)
* **preset-essentials:** skip linting binary & definition files (1d95468)
* **preset-essentials:** add @/ import shortcut (ef75190)


### 🐞 Bug Fixes

* **preset-essentials:** run lint-staged pre-commit (e632e65)
* **presetter:** remove bracket in command (f7c1ee0)
* **preset-strict:** correct eslint rules (8acfe63)
* **preset-strict:** update eslint sonar rules (68e6465)
* **presetter:** implement our own module cache (da9fb20)
* **preset-essentials:** don't treat custom types as internal (f872626)
* **preset-essentials:** add @/ as internal alias (75f82d4)
* **preset-web:** auto find tailwind config file (1635988)


### 💎 Styles

* resolve styling issues (3955b60)
# 6.0.0 (2024-11-27)


### ♻️ Chores

* make all linting tasks run in parallel (d6747bb)
* remove all file headers (ea62451)
* update dependencies (5288e7a)


### ✨ Features

* **preset-esm:** update eslint to v9 (73d0c14)
* **preset-esm:** enforce `import type` specifier (fae292d)
* **preset-web:** upgrade to flat eslint config (6f66f94)
* **preset-react:** upgrade to flat eslint config (319bac5)
* **preset-esm:** enable test type-checking (6ca64e9)
* **presetter:** print command before running it (0fe859f)
* introduce presetter.config.ts (74e2326)
* **preset:** include test files in eslint (fab68c5)


### 🐞 Bug Fixes

* **preset-esm:** add 2 to the magic number list (d928cdb)
* **preset-esm:** correct import order (9eb1963)
* **preset-esm:** allow passing with no test (858f12f)
* **preset:** ensure eslint config is correct (71cd405)
* **preset-esm:** remove a rule covered by typescript (2fd6b2c)
* **preset-esm:** allow type {} to pass (bfc33d8)
* **preset-strict:** add & as an escape in no-secret rule (72f7f0d)
* **types:** remove usage of erroneous types (c73ad23)
* **preset:** pass eslint stage check if ignored (8b2e048)
* **preset-rollup:** replace rollup-plugin-ts (d45ea6c)


### 💎 Styles

* add spacing between import groups (6633d24)


### 📚 Documentation

* provide instructions for copilot (0674a49)


### 📦 Code Refactoring

* **presetter-types:** split types into files (3819692)
* simplify module spying (bb8eac1)
* **presetter:** update @npmcli dependencies (07ff069)
* **presetter:** restructure template helpers (253109e)
* separate esm preset from essentials (81b8b27)
# 5.0.0 (2024-07-31)


### ♻️ Chores

* drop node v18 and 19 support (7d04244)
* update pnpm to v9.6 to use catalog (607fc68)


### ✨ Features

* **esm:** update prettier to v3 (d8a8084)
* **preset-esm:** support json import (b1846c4)
* **preset-esm:** remove ts-node in favor of tsx (37e59f4)
* **preset-esm:** drop jest in favor of vitest (330d9fe)
* **presetter:** add debug mode via DEBUG (249549e)
* **preset-react:** skip storybook files at build (fb51459)


### 🐞 Bug Fixes

* update type-fest to avoid infinite recursion (1af2e5e)
* **preset-esm:** correct path in .npmignore (5c6ef6f)
* **preset:** update tools to the latest versions (b416f27)
* **presetter:** update presetter dependencies (3e71b87)
* **preset:** lessen eslint for real-world usage (907cb62)
* **presetter:** use tsx in esm mode (afff010)


### 📚 Documentation

* correct package names in README.md (42ea431)
* update badges (8e01243)
* correct path to preset-esm in README.md (50b90e6)
# 4.7.2 (2024-03-07)


### 🐞 Bug Fixes

* **preset-react:** correct typo in jest config (f5fd5aa)
# 4.7.1 (2024-03-06)


### ⚙️ Continuous Integrations

* update github actions specification (e1ff3d8)


### 🐞 Bug Fixes

* **preset-react:** ensure tsx files are transformed before testing (105f56d)
# 4.7.0 (2024-02-27)


### ✨ Features

* **preset-esm:** enable typescript incremental build (7e1d9af)


### 🐞 Bug Fixes

* **preset-esm:** explicit reference the base tsconfig file (5a72ff8)
* **preset-esm:** separate relative and internal import paths (35331e3)
* **preset-esm:** replace fixed source path in tsconfig.build.json (36cc3e7)
* **preset-rollup:** update rollup to v4 (cb01f6b)
* **preset-strict:** remove header rule (4a56d6c)
# 4.6.0 (2024-01-22)


### ✨ Features

* **presetter:** use hardlink if possible (2189d72)
* **preset-esm:** update gitignore for better coverage (cd691a6)


### 🐞 Bug Fixes

* **presetter:** ignore .presetter folder (bca2083)
* **preset-esm:** include generated source and bin (67ac8bc)
* **preset-esm:** leave comments on the compiled file for clarity (756dd2c)
# 4.5.0 (2024-01-04)


### ✨ Features

* **preset-esm:** add source map to .d.ts files (ba20774)
* **preset-esm:** add support to typescript's project reference (7610425)
* **preset-esm:** add build steps for artifact creation (ba270fe)


### 🐞 Bug Fixes

* **preser-esm:** ignore error from husky (feff15f)
* **preset-esm:** update tsx to v4 (f11cb3d)
* **preset-esm:** group types from node:<lib> (cdb4806)
* **preset-esm:** add generated source to jest's resolve map (4c0fb93)
* **preset-esm:** allow short circuit and ternary operations (463ae6f)
* **presetter:** move generated config to .presetter (063e53a)
# 4.4.2 (2023-10-27)


### ⚙️ Continuous Integrations

* release with provenance statements (f85e58a)


### 🐞 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script (3a6f54a)
* **preset-esm:** prepend any NODE_OPTIONS to jest (695e624)
* **preset-esm:** map # to source root (f452aa8)
# 4.4.1 (2023-10-06)


### 🐞 Bug Fixes

* **preset-esm:** resolve paths from anywhere (5cad767)
# 4.4.0 (2023-10-03)


### ✨ Features

* **preset-esm:** gitignore any dynamically generated content (b2bc235)
* **preset-esm:** add a shortcut path for generated content (43cab95)


### 🐞 Bug Fixes

* **preset-esm:** resolve path under root directoy (7648af5)


### 📚 Documentation

* add back missing configuration descriptions (62b706d)
# 4.3.1 (2023-10-03)


### 🐞 Bug Fixes

* **preset-esm:** update target for node 18 LTS (d754890)
* **preset-esm:** cover more import order cases (9a5b574)
# 4.3.0 (2023-09-20)


### ✨ Features

* **preset-esm:** upgrade @typescript-eslint to v6 (cd12de0)


### 🐞 Bug Fixes

* **preset-strict:** remove redundant thresholds (45b0521)
* **preset-esm:** correct type imports order (6f8fa98)


### 💎 Styles

* remove redundant types (07f8375)
# 4.2.0 (2023-09-13)


### ✨ Features

* **preset-esm:** support official decorators (1980d8d)


### 📦 Code Refactoring

* **preset-esm:** enable multiple husky setups (99b4807)
# 4.1.2 (2023-07-26)


### 🐞 Bug Fixes

* **presetter:** ignore empty command (77344b3)
# 4.1.1 (2023-07-14)


### 🐞 Bug Fixes

* **presetter:** capture all extra arguments after -- (fe96954)
# 4.1.0 (2023-07-13)


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure (313c0d1)


### 🐞 Bug Fixes

* **preset-react:** remove monorepo incompatible jest configuration (c554eb2)
# 4.0.1 (2023-06-21)


### 🐞 Bug Fixes

* **preset-esm:** make staging file path after -- (62ae558)
# 4.0.0 (2023-06-19)


### ♻️ Chores

* allow tests can be done individually (b86f6ee)
* make essential presets available before presetter (9feb4ac)
* use pnpm for workspace management (358d0d7)
* setup jest for this monorepo (26dbe54)


### ✨ Features

* drop support for node 12, 14 (ee5c261)
* **presetter:** run tasks without a temporary package.json (6c404b3)
* **presetter:** load presetterrc.json recursively (4725620)
* **presetter:** load presetterrc.json recursively (c6b3eb2)
* **preset-essentials:** make build-in modules imported first (aa2aedd)
* **preset-essentials:** update jest and ts-jest to v29 (b0f215b)
* **presetter:** add a force flag to the CLI (b065fa6)
* **types:** separate types from presetter (4ff3626)
* convert the whole project into ESM (381c84f)


### 🐞 Bug Fixes

* **presetter:** update @npm packages (2110af0)
* **presetter:** update existing symlinks upon bootstraping (ace88a8)
* **presetter:** update existing symlinks upon bootstraping (03b928f)
* **presetter:** stop any generated text templates being merged (449a41d)
* **preset-rollup:** inject NODE_ENV for build and develop stages (b09ade5)
* **preset-essentials:** ensure the exact path is also searched (ca08946)
* **presetter:** correct the wording for `use` (ee32c69)
* **presetter:** avoid infinite script running loop (99d5a58)
* **preset-react:** remove react exclusion from rollup (8f1d565)
* **presetter:** remove all insecure lodash usages (92b6f5b)
* **presetter:** import preset's entry file instead of directory (de6b818)
* **preset-esm:** run parent tasks only when they are available (1f0b1db)
* **presetter:** add primitive types that allow undefined values (915cf07)
* update outdated packages (bbaf33f)
* **preset-esm:** remove unnecessary jest configs (c1b2ee5)
* **preset-rollup:** make the rollup preset compatible with ESM (86154b8)


### 💎 Styles

* make any node build-in modules explicitly imported first (90730f2)


### 📚 Documentation

* **presetter:** fix missing documentation (256c71f)
* **presetter:** add missing return descriptions (5260a03)


### 📦 Code Refactoring

* **preset-rollup:** normalize config in functional way (f6b3815)


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments (5be8431)
* release with provenance statements (f1a58fc)
# 3.5.5 (2023-03-31)


### 🐞 Bug Fixes

* **preset-esm:** correct the configuration format for jest (14abda7)
# 3.5.4 (2023-03-30)


### 🐞 Bug Fixes

* **preset-essentials:** check type in test files (3bc1982)
* **preset-esm:** make jest work under pure esm environment (c443952)
# 3.5.3 (2023-03-26)


### 🐞 Bug Fixes

* **presetter:** make it compatible with other package managers (4bc27a9)


### 🛠 Builds

* **preset-strict:** remove source files from the final build (8e99425)
# 3.5.2 (2023-03-26)


### 🐞 Bug Fixes

* **presetter:** restore package.json upon SIGTERM (33b8c51)
# 3.5.1 (2023-03-18)


### 🐞 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs (0dc6cf7)
# 3.5.0 (2022-09-23)


### ⚙️ Continuous Integrations

* update github actions files (555c854)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node (723c139)


### 🐞 Bug Fixes

* **preset-react:** increase the line limit of a react comonpent (1ea89a2)


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra (8810c56)
* **rollup:** remove unnecessary async waits (9d9c4c3)


### 🛠 Builds

* move .presetterrc to the root (0eb17a0)
# 3.4.1 (2022-08-10)


### 🐞 Bug Fixes

* **preset-esm:** correct filenames in source maps (7867971)
* update packages (ec8307d)
* **presetter:** merge arrays only if the values are all primitive (961f30c)
* **preset-web:** remove graphql to avoid conflict between packages (d12a3f8)
* **preset-react:** correct test files' path pattern (a1c37ea)
* **preset-essentials:** correct test files' path pattern (1746203)
* **presetter:** make new keys merged in the end of an object (9832af0)


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts (9e46132)
# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options (df847a8)


### 🐞 Bug Fixes

* **presetter:** resolve presets as a tree not a list (0db5ff3)
* **presetter:** skip installation within presetter package (2a973af)
# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end (d3ec950)
* support dual commonjs/esm exports (a8c3ca1)


### 📚 Documentation

* update dependencies badges (94c084d)
# 3.2.0 (2022-05-18)


### ♻️ Chores

* update package dependencies (4e50e0d)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc (dd62e01)


### 🐞 Bug Fixes

* **preset-react:** mark testing-library rules as provided (3446e25)
* **preset-react:** allow react components to be bulkier (091b305)
* **preset-essentials:** add husky to the build toolset (2a24fa9)
* **preset-essentials:** allow type indexes (c735879)
* **preset-essentials:** mark # as an internal path prefix (e0feb56)


### 📦 Code Refactoring

* use American English (17315b7)
# 3.1.1 (2021-12-29)


### 🐞 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 (e9adbc0)
# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/preset:** support supplementary ignores from presets (58cbd64)
* **preset-essentials:** add dotenv to the build toolset (2e5ceb3)
* **preset-web:** add testing library to the build toolset (1dae1c2)
* **presetter/package:** support private registry (c4eed24)
* **preset-react:** use react-jsx transform for React v17+ (4d2b688)
* **preset-react:** add testing library to the build toolset (c7a9b78)


### 🐞 Bug Fixes

* **preset-react:** add back the missing DOM.Iterable to tsconfig.json (533d24d)
* **preset/lint:** update eslint to v8 (f8cfa4d)
* **preset:** lint code before committing (e7219b2)
* **preset-web:** update tailwindcss to v3 (ce9f102)


### 💎 Styles

* **presetter:** reorder types definitions for clarity (d7b54eb)
* **preset-react:** remove the unnecessary quotation mark (40caccf)
# 3.0.3 (2021-11-03)


### 🐞 Bug Fixes

* **presetter:** disable workspace for npm<7 environment (fbdaabf)
# 3.0.2 (2021-11-03)


### 🐞 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment (fcd8022)
# 3.0.1 (2021-10-14)


### 🐞 Bug Fixes

* **preset:** add back the missing gitignore entries (70ac386)
* **preset-web:** correct the eslint supplementary config template (1e11abf)
* **preset-essentials/lint:** run prettier at the end (b8faeb5)
* **presetter/preset:** don't read .presetterrc under `presetter use` (8b49b8b)
* **preset-strict:** correct the template paths for bootstrapping (f71bf8f)
* **preset-essentials:** warn for unused variables instead (3b9dca5)
* **presetter/preset:** ensure outputs are stored under the target (c638944)


### 📚 Documentation

* use full package name to improve clarity (d9414bd)
# 3.0.0 (2021-10-04)


### pref

* **preset/lint:** remove type checking for jest (2df0a23)
* **preset/lint:** make all stage linting run in parallel (9555f6d)


### ♻️ Chores

* **presetter:** adopt .json extension for presetterrc (b48edbd)
* clean up unused configurations (866c5ac)


### ⚙️ Continuous Integrations

* reduce the complexity of style and coverage checks (2df3587)


### ✨ Features

* **preset:** allow users to ignore certain template configs (f0a7947)
* **preset/lint:** add rules for import/export statements (17cbe1b)
* **presetter:** make target information available to preset (090c341)
* **preset:** use target's package name as part of the output path (2eaea0a)
* **preset:** allow users to add additional scripts (8409840)
* **presetter:** export types for other presets (c6d326d)
* **preset:** export types and utilities (0a2a7a3)
* **preset/lint:** use husky and lint-staged for quick precommit QA (3c7e04f)
* **preset/build:** add babel node to the build toolset (cc830bd)
* **preset/build:** add cross-env into the build toolset (2f119c1)
* **preset:** modularise preset helpers (9b9bef6)
* **preset/lint:** update eslint-plugin-sonarjs to v0.10 (b84f89d)
* **presetter:** use arborist for installing peer dependences (50ec8ae)
* **presetter:** add .presetterrc a .json extension by default (61c0aad)
* **preset/test:** update jest to v27 (85bde44)
* **preset/build:** add babel-plugin-module-resolver custom paths (d9b5ff6)
* **prefix/lint:** ensure that `import type` is always used (1c2b76f)
* **preset/lint:** update prettier to v2.4 (70a3b61)
* **preset/lint:** require file header with a summary (ab793f4)
* simplify preset with common features moved to presetter (044a132)
* **presetter/cli:** support multiple presets initialisation (6e6fd71)
* **presetter:** add a loader for potentially dynamic content (c17abc2)
* **presetter:** support dynamic symlinks creation (158a8ad)
* **preset:** provide a .gitignore template again (356fae1)
* **presetter:** allow preset to supply supplementary config (d4d85af)
* **preset-react:** provide a preset for a react project (a9577e2)
* **preset-web:** provide a preset for a web project (4f6c033)
* **presetter:** provider helpers for parsing directives in config (b3ee728)
* **preset-rollup:** provide a preset for code bundling via rollup (b0704b0)
* **presetter:** allow preset to further extends other presets (6eacf2f)
* **preset-strict:** extends preset-essentials for a stricter rules (d7a73f8)
* **presetter/preset:** show progress for `presetter use` (efe939b)


### 🐞 Bug Fixes

* **preset:** remove .gitignore as symlink is removed since git 2.32 (3d4098b)
* **presetter:** make runner resolution reliable (b7a529c)
* **preset/build:** explicitly declare loose mode to ignore warnings (b3fa0b4)
* **preset:** allow file path(s) to be specified to the lint script (1dc69da)
* **preset:** replace target value as long as the value is defined (0fdb597)
* **presetter:** warn for any invalid shell scripts (6f083e7)
* **presetter:** ensure all packages are there before bootstrapping (c6ad0f0)
* **presetter:** allow config files to be placed other than the root (4153314)
* **preset/build:** exclude node_modules at all levels (af17788)
* **preset:** ensure that an object in a list is correctly merged (46555e4)
* **presetter:** ensure that a list is attached uniquely (7091053)
* **presetter:** detect preset name reliably (44d586b)
* **presetter:** use the latest .presetterrc after setting it up (2820e21)
* **presetter:** merge any new presets to the existing .presetterrc (33b9d99)
* **presetter:** narrow types in directive's argument (c6de804)


### 💎 Styles

* **preset:** remove unused function documentation (87a54c4)
* clean up the code with better naming and order (bc17738)
* **presetter/script:** fix a typo in the test (ff3190d)
* **presetter:** reformat the messages for consistency (7c0f876)


### 📚 Documentation

* update status on eslint-plugin-sonarjs (0a43ed8)
* enrich README (8509f41)
* describe how a preset can be made (4735d54)


### 📦 Code Refactoring

* **preset/lint:** reorder rules with plugin first (c4840b5)
* **preset:** allow flexible template loading (356c857)
* **preset:** take the default out from the main function (237a1e4)
* **preset:** abstract away pupa from resolving the template (5b572e6)
* **presetter:** pass an empty config by default (d6a5d71)
* **preset:** relax rules to make it just an essential set (74b5bd8)
* rename presetter-preset to presetter-preset-essentials (b799587)


### 🚨 Tests

* **preset:** make sure all templates are used (50b6644)


### 🛠 Builds

* fully replace lerna with npm workspace (343ee59)
* use presetter-preset-strict wherever possible (4ff72a1)
# 2.1.0 (2021-07-04)


### ♻️ Chores

* update dependencies' version specifiers (8c018f1)
* update the minimum node requirement (fe7ac60)


### ✨ Features

* **preset/script:** add a script for continuous build (986556b)
* **preset:** always use the latest version of @types/node (eb3bd19)
* **preset:** update linting related packages (14f5c38)
* **preset:** update ts-node to v10 (3d67fac)


### 🐞 Bug Fixes

* upgrade tsc-alias and others to fix the corrupted build (ace317c)
* **preset/build:** explicitly declare loose mode to ignore warnings (e56308f)
* **preset:** update js-yaml to v4 (3ea456a)
* **preset:** update fs-extra to v10 (33ab272)
* **presetter:** update fs-extra to v10 (b5cacf4)


### 📚 Documentation

* remove duplicated log entries (b137e22)
* remove $ from the install examples for easier copy (884a084)
* give a facelift to the packages' READMEs (4d4de5f)
* add back the missing commit types (fa6643d)
* update the development environment requirement (a2b8c38)


### 🛠 Builds

* restrict update to package-lock on the root only (c425f96)
# 2.0.0 (2021-06-23)


### pref

* **preset:** replace tscpaths with tsc-alias for better support (6f510a1)


### ♻️ Chores

* use npm workspace for development (c5e2547)


### ⚙️ Continuous Integrations

* rename workflows for better clarity (9f66fed)
* extends tests to node 15 & 16 (0942ae7)


### 🐞 Bug Fixes

* make git ignore artifacts again for git>=2.32 (9f14500)


### 💎 Styles

* **presetter:** reformat the code by prettier (3ae4e23)


### 📦 Code Refactoring

* **presetter:** update yargs to v17 (5e65a8c)
# 1.3.0 (2021-05-20)


### ✨ Features

* **preset:** upgrade ts-node-dev to v1 (66eb2a0)
* **preset:** always use the latest version of typescript (96d9bc2)


### 🐞 Bug Fixes

* release via a NPM automation token (55f8887)
# 1.2.0 (2021-05-11)


### ♻️ Chores

* **preset:** update package-lock.json to v2 (777a83a)
* **preset:** update dependencies (b05c3ee)
* **presetter:** update dependencies (04c115a)
* update lerna to v4 (fdbc03a)
* update dependencies (2c08593)


### ⚙️ Continuous Integrations

* correct the job name for code test (8ea5115)


### ✨ Features

* **preset/lint:** re-enable sonar with npm v7 support (5e8a448)
* **preset/release:** update standard-version to v9 (093bade)
* **preset/ts:** upgrade typescript to 4.x (b7a5fac)
# 1.1.0 (2020-12-31)


### ♻️ Chores

* clear up package dependency declaration (df01ab5)
* replace the changelog preset to metahub (8da3c08)
* make sure the root version get updated with lerna version (b5695b0)
* **presetter:** add keywords to package.json (12b07f2)
* **preset:** add keywords to package.json (408a9bc)
* **presetter:** update dependency (8dd8813)


### ⚙️ Continuous Integrations

* update setup-node to v2 (834ab51)
* split test and code style check (46b6c6b)


### ✨ Features

* **preset/test:** make jest to display heap usage after each test (b884914)
* **preset/ts:** update typescript to v4.1 (ad2ae23)
* **preset/ts:** update ts-node to v9.x (b449432)
* **preset/test:** update ts-jest to v27 (66954a9)
* **presetter/preset:** support json configuration file extension (f93f593)
* **presetter/preset:** set the default preset to presetter-preset (13380ad)
* **presetter:** remove node engine restriction to support node 15+ (02042fd)
* **presetter:** support npm v7 (3ff5d08)
* **preset/script:** update changelog preset from angular to metahub (08aa456)


### 🐞 Bug Fixes

* **preset/script:** make sure prettier only takes those supported (c516a29)
* **presetter/preset:** correct test description (aae6c5d)
* **presetter:** convert potential numeric input into string (5ec80ec)
* **preset:** disable sonar temporarily for npm v7 support (933102b)
* **presetter/preset:** replaced the depreciated prepublish script (dd5ac38)


### 💎 Styles

* **presetter:** cleanup the code (ec581b4)
* **preset/script:** remove unused scripts (71c533d)
* **presetter:** enhance the readability of test description (9457c93)


### 📚 Documentation

* **presetter:** update the example for life cycle scripts (ef8439a)
* **preset:** update the file structure (5b6a7d8)


### 📦 Code Refactoring

* **presetter:** apply a stricter type check (6f581a0)
* **presetter:** simplify default options (f8fad12)
* **preset:** simplify default options (5500585)
* **presetter/task:** combine several typeguard helpers into one (b83d7bf)
* **preset:** reduce the complexity of the preset configurator (1b19fa4)


### 🚨 Tests

* **presetter:** change example paths for testing under windows (4c68423)


### 🛠 Builds

* **preset:** skip test on install (1f2b12b)
# 1.0.5 (2020-10-22)


### ✨ Features

* **preset/lint:** drop the doc requirement on the obvious (df74c0f)


### 🐞 Bug Fixes

* **preset/script:** allow prettier to pass when there is no match (efa76a6)
* **preset/script:** make release and publish using the right scripts (93d7995)


### 📚 Documentation

* **preset:** add some usage examples on the template scripts (1795629)


### 📦 Code Refactoring

* **preset/script:** remove an extra space (025835a)
# 1.0.4 (2020-10-04)


### ✨ Features

* **preset/build:** enable babel to emit decorator metadata like tsc (b304064)
# 1.0.3 (2020-09-30)


### ✨ Features

* **preset:** update development tools (d1ad635)
* **preset/script:** skip coverage and lint upon npm install (d2bedb1)
# 1.0.2 (2020-08-14)


### 🐞 Bug Fixes

* suggest to use prepublish instead of postinstall (80740d5)
* **presetter:** preserve client's package.json order upon initialisation (7ca037b)


### 📦 Code Refactoring

* **presetter:** remove unused imports (303842c)
* **presetter:** remove an unused field (002c070)
# 1.0.1 (2020-07-16)


### 🐞 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux (3b2c4c0)


### 📚 Documentation

* **preset:** fix .presetterrc example (6201d6e)
* **preset:** replace relative links with the absolute ones for npm (0538954)
# 1.0.0 (2020-07-16)


### init

* layout the foundation for the project (2cb8a31)
* **preset:** layout the foundation for presetter-preset (88a94e1)
* **presetter:** layout the foundation for presetter (f4f1deb)


### ⚙️ Continuous Integrations

* add automated tests via github actions (eff8d1f)
* release automatically via github actions (2e7b47d)


### ✨ Features

* **preset/git:** add a .gitignore template that ignores build artifacts (4f5b9d8)
* **preset/npm:** add a .npmignore template that only include lib (fa671a4)
* **preset/ts:** add typescript and configuration files (01719a6)
* **preset/build:** add some build utilities (867847c)
* **preset/release:** add standard-version for release management (24e6cbb)
* **preset/build:** add babel for script building (b3546ea)
* **preset/test:** add jest for testing (0a741e7)
* **preset/fmt:** add prettier for code formatting (8fa3c2e)
* **preset/lint:** add eslint for code linting (e82fb42)
* **preset/lint:** add leasot for identifying TODO items (1c4571b)
* **preset/test:** add ts-node and tsconfig-path for development (4878efe)
* **preset/build:** add tscpaths for translating relative path (2dc3771)
* **preset/script:** add a standard template for npm scripts (a322087)
* **preset/util:** provide common helpers (77bd428)
* **preset:** export contained configurations (27a8c9f)
* **presetter/pkg:** provider helpers for handling packages (32e48a8)
* **presetter/preset:** provide helpers for setting up a preset (7545351)
* **presetter/task:** provide helpers for task analysis (9a5c1e2)
* **presetter/err:** provider helpers for handling errors (1563650)
* **presetter/run:** provide a task runner (fca0c1d)
* **presetter/cli:** provide a command line interface for presetter (7403064)
* **cli:** link presetter CLI on the root (7bad25f)
* **preset/script:** add shortcuts for coverage and watch (67b0689)
* **preset/build:** adopt angular-emoji as the changelog preset (67699ab)
* **preset/script:** add shortcuts for prerelease (40668b5)
* **preset:** provide customisation on directories (cbb7a34)


### 📚 Documentation

* add an animated demo (503af15)
* **preset:** detail what this preset provide (a336d18)
* **presetter:** detail what presetter is (e7c241c)
* give an overview of presetter (cd7256b)


### 📦 Code Refactoring

* add a json extension to all rc files (18d7195)


### 🛠 Builds

* **preset:** add typescript to the project (7c24a75)
* **preset:** add prettier to the project (ee8b850)
* **preset:** add build pipeline to the project (cfa9d3a)
* **preset:** use npm for bootstrapping (ecae2f3)
* **presetter/cli:** add npm scripts for running project tasks (0890c29)
* adopt angular-emoji as the changelog template (91a9bd3)
