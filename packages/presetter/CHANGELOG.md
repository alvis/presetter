# Changelog

All notable changes to this project will be documented in this file.
# 9.0.0 (2026-06-27)


### ♻️ Chores

* migrate all presetter-* to @presetter/* (b4b0b43)
* change default branch to main (938973a)
* update presetter logo (7025962)
* simplify package.json imports and exports (255cf2d)


### ✨ Features

* **presetter:** support list merging by key (62c9013)
* **preset-essentials:** update scripts naming (7dda54d)
* **preset:** update typescript to v6 (cf186c2)
* **preset/essentials:** enable noUncheckedIndex (89c08ac)
* **presetter:** bootstrap projects by package name (732111f)
* **presetter:** add package info to bootstraping (368827d)


### 💎 Styles

* clean up stylistic issues on documentations (24834e4)
* fix styling issues (189b0cc)


### 📚 Documentation

* update project description and add video (3784445)
# 8.3.0 (2025-12-22)


### ♻️ Chores

* add typecheck script to package.json files (ffddd81)


### ✨ Features

* **presetter:** attach preset binary paths (ade7445)


### 🐞 Bug Fixes

* **preset-essentials:** reset mocks to defaults after each test (87e4896)
* **presetter:** replace depreciated mvdan-sh with sh-syntax (cfe9750)


### 📚 Documentation

* **presetter:** document auto binary path resolution (8e1f6bf)
# 8.2.0 (2025-11-14)


### ✨ Features

* **preset-essentials:** update vitest to v4 (39696d2)


### 💎 Styles

* fix formatting issues (14d3019)
# 8.1.0 (2025-10-16)


### 📦 Code Refactoring

* centralize dependencies in pnpm workspace catalogs (4bb0ef7)
# 8.0.10 (2025-08-03)


### 🐞 Bug Fixes

* **presetter:** resolve repoRoot by vcs folders (1d2f9bc)
# 8.0.6 (2025-07-30)


### 🐞 Bug Fixes

* **presetter:** parse {@} correctly with no global args (0b53631)
# 8.0.4 (2025-07-30)


### ✨ Features

* **presetter:** support {@:--default-arg} default args syntax (37445d0)
# 8.0.3 (2025-07-20)


### ♻️ Chores

* update dependencies (c1091ad)
# 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration (0d6a6f5)
# 8.0.0 (2025-06-27)


### ♻️ Chores

* remove unused left-behind packages (1f04cd2)
* use preset-monorepo for this monorepo (50076dd)


### ✨ Features

* replace path aliases with subpath imports (9cbb00d)
* standardize source directories to src (7815add)


### 🐞 Bug Fixes

* **preset-essentials:** load types from various roots (ff9ec74)
* **preset-strict:** add sort-package-json (593d1ef)
* **presetter:** normalize project roots before bootstraping (7541317)


### 📚 Documentation

* update READMEs to reflect recent changes (1c23de6)
* update README files (6f38a03)


### 📦 Code Refactoring

* **presetter:** use immutable object (5b67def)
* **presetter:** remove read-pkg-up (eccf0af)
* **presetter:** consolidate and enhance project context API (4db436a)
* **presetter:** use .notation for asset exports (02ff7e9)
* **presetter:** remove auto peerDeps install and drop npm <7 support (bda9238)
* **presetter:** remove unnecessary xception dependency (3c844fe)


### 🚨 Tests

* **presetter:** simplify tests on preset resolution (370bf80)
* resolve type issues among tests (f83e923)
* resolve type issues (8b6f95d)
# 7.2.0 (2025-04-17)


### 🐞 Bug Fixes

* **presetter:** skip merging for content functions (d7832ad)
# 7.0.2 (2025-01-24)


### 🐞 Bug Fixes

* resolve incorrect publishConfig (9348b0f)
# 7.0.1 (2025-01-24)


### 🐞 Bug Fixes

* remove development export upon publication (f6c1d12)
# 7.0.0 (2025-01-23)


### ✨ Features

* **presetter:** add a project selector (506bc3c)
# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports (8717aa9)


### ✨ Features

* **presetter:** support recursive bootstraping (c5058dc)
# 6.1.0 (2024-12-24)


### 🐞 Bug Fixes

* **presetter:** remove bracket in command (f7c1ee0)
* **presetter:** implement our own module cache (da9fb20)


### 💎 Styles

* resolve styling issues (3955b60)
# 6.0.0 (2024-11-27)


### ♻️ Chores

* remove all file headers (ea62451)


### ✨ Features

* **preset-esm:** update eslint to v9 (73d0c14)
* **presetter:** print command before running it (0fe859f)
* introduce presetter.config.ts (74e2326)


### 🐞 Bug Fixes

* **types:** remove usage of erroneous types (c73ad23)


### 💎 Styles

* add spacing between import groups (6633d24)


### 📦 Code Refactoring

* **presetter:** update @npmcli dependencies (07ff069)
* **presetter:** restructure template helpers (253109e)
* separate esm preset from essentials (81b8b27)
# 5.0.0 (2024-07-31)


### ♻️ Chores

* update pnpm to v9.6 to use catalog (607fc68)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest (330d9fe)
* **presetter:** add debug mode via DEBUG (249549e)


### 🐞 Bug Fixes

* update type-fest to avoid infinite recursion (1af2e5e)
* **presetter:** update presetter dependencies (3e71b87)
* **presetter:** use tsx in esm mode (afff010)


### 📚 Documentation

* update badges (8e01243)
* correct path to preset-esm in README.md (50b90e6)
# 4.6.0 (2024-01-22)


### ✨ Features

* **presetter:** use hardlink if possible (2189d72)
# 4.5.0 (2024-01-04)


### 🐞 Bug Fixes

* **presetter:** move generated config to .presetter (063e53a)
# 4.4.2 (2023-10-27)


### 🐞 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script (3a6f54a)
# 4.3.0 (2023-09-20)


### 💎 Styles

* remove redundant types (07f8375)
# 4.1.2 (2023-07-26)


### 🐞 Bug Fixes

* **presetter:** ignore empty command (77344b3)
# 4.1.1 (2023-07-14)


### 🐞 Bug Fixes

* **presetter:** capture all extra arguments after -- (fe96954)
# 4.1.0 (2023-07-13)


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure (313c0d1)
# 4.0.0 (2023-06-19)


### ♻️ Chores

* use pnpm for workspace management (358d0d7)


### ✨ Features

* drop support for node 12, 14 (ee5c261)
* **presetter:** run tasks without a temporary package.json (6c404b3)
* **presetter:** load presetterrc.json recursively (4725620)
* **presetter:** load presetterrc.json recursively (c6b3eb2)
* **presetter:** add a force flag to the CLI (b065fa6)
* **types:** separate types from presetter (4ff3626)
* convert the whole project into ESM (381c84f)


### 🐞 Bug Fixes

* **presetter:** update @npm packages (2110af0)
* **presetter:** update existing symlinks upon bootstraping (ace88a8)
* **presetter:** update existing symlinks upon bootstraping (03b928f)
* **presetter:** stop any generated text templates being merged (449a41d)
* **presetter:** correct the wording for `use` (ee32c69)
* **presetter:** avoid infinite script running loop (99d5a58)
* **presetter:** remove all insecure lodash usages (92b6f5b)
* **presetter:** import preset's entry file instead of directory (de6b818)
* **presetter:** add primitive types that allow undefined values (915cf07)
* update outdated packages (bbaf33f)


### 💎 Styles

* make any node build-in modules explicitly imported first (90730f2)


### 📚 Documentation

* **presetter:** fix missing documentation (256c71f)
* **presetter:** add missing return descriptions (5260a03)


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments (5be8431)
# 3.5.3 (2023-03-26)


### 🐞 Bug Fixes

* **presetter:** make it compatible with other package managers (4bc27a9)
# 3.5.2 (2023-03-26)


### 🐞 Bug Fixes

* **presetter:** restore package.json upon SIGTERM (33b8c51)
# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node (723c139)


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra (8810c56)
# 3.4.1 (2022-08-10)


### 🐞 Bug Fixes

* update packages (ec8307d)
* **presetter:** merge arrays only if the values are all primitive (961f30c)
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


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc (dd62e01)


### 📦 Code Refactoring

* use American English (17315b7)
# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/preset:** support supplementary ignores from presets (58cbd64)
* **presetter/package:** support private registry (c4eed24)


### 🐞 Bug Fixes

* **preset/lint:** update eslint to v8 (f8cfa4d)


### 💎 Styles

* **presetter:** reorder types definitions for clarity (d7b54eb)
# 3.0.3 (2021-11-03)


### 🐞 Bug Fixes

* **presetter:** disable workspace for npm<7 environment (fbdaabf)
# 3.0.2 (2021-11-03)


### 🐞 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment (fcd8022)
# 3.0.1 (2021-10-14)


### 🐞 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` (8b49b8b)
* **presetter/preset:** ensure outputs are stored under the target (c638944)
# 3.0.0 (2021-10-04)


### ♻️ Chores

* **presetter:** adopt .json extension for presetterrc (b48edbd)


### ✨ Features

* **presetter:** make target information available to preset (090c341)
* **presetter:** export types for other presets (c6d326d)
* **preset/lint:** use husky and lint-staged for quick precommit QA (3c7e04f)
* **presetter:** use arborist for installing peer dependences (50ec8ae)
* **presetter:** add .presetterrc a .json extension by default (61c0aad)
* simplify preset with common features moved to presetter (044a132)
* **presetter/cli:** support multiple presets initialisation (6e6fd71)
* **presetter:** add a loader for potentially dynamic content (c17abc2)
* **presetter:** support dynamic symlinks creation (158a8ad)
* **preset:** provide a .gitignore template again (356fae1)
* **presetter:** allow preset to supply supplementary config (d4d85af)
* **presetter:** provider helpers for parsing directives in config (b3ee728)
* **presetter:** allow preset to further extends other presets (6eacf2f)
* **presetter/preset:** show progress for `presetter use` (efe939b)


### 🐞 Bug Fixes

* **preset:** remove .gitignore as symlink is removed since git 2.32 (3d4098b)
* **presetter:** make runner resolution reliable (b7a529c)
* **presetter:** warn for any invalid shell scripts (6f083e7)
* **presetter:** ensure all packages are there before bootstrapping (c6ad0f0)
* **presetter:** allow config files to be placed other than the root (4153314)
* **presetter:** ensure that a list is attached uniquely (7091053)
* **presetter:** detect preset name reliably (44d586b)
* **presetter:** use the latest .presetterrc after setting it up (2820e21)
* **presetter:** merge any new presets to the existing .presetterrc (33b9d99)
* **presetter:** narrow types in directive's argument (c6de804)


### 💎 Styles

* clean up the code with better naming and order (bc17738)
* **presetter/script:** fix a typo in the test (ff3190d)
* **presetter:** reformat the messages for consistency (7c0f876)


### 📦 Code Refactoring

* **presetter:** pass an empty config by default (d6a5d71)
* rename presetter-preset to presetter-preset-essentials (b799587)


### 🛠 Builds

* fully replace lerna with npm workspace (343ee59)
* use presetter-preset-strict wherever possible (4ff72a1)
# 2.1.0 (2021-07-04)


### ♻️ Chores

* update dependencies' version specifiers (8c018f1)
* update the minimum node requirement (fe7ac60)


### ✨ Features

* **preset:** update ts-node to v10 (3d67fac)


### 🐞 Bug Fixes

* **presetter:** update fs-extra to v10 (b5cacf4)


### 📚 Documentation

* remove $ from the install examples for easier copy (884a084)
* give a facelift to the packages' READMEs (4d4de5f)
# 2.0.0 (2021-06-23)


### ♻️ Chores

* use npm workspace for development (c5e2547)


### ⚙️ Continuous Integrations

* rename workflows for better clarity (9f66fed)


### 🐞 Bug Fixes

* make git ignore artifacts again for git>=2.32 (9f14500)


### 💎 Styles

* **presetter:** reformat the code by prettier (3ae4e23)


### 📦 Code Refactoring

* **presetter:** update yargs to v17 (5e65a8c)
# 1.2.0 (2021-05-11)


### ♻️ Chores

* **preset:** update package-lock.json to v2 (777a83a)
* **presetter:** update dependencies (04c115a)
* update dependencies (2c08593)
# 1.1.0 (2020-12-31)


### ♻️ Chores

* clear up package dependency declaration (df01ab5)
* **presetter:** add keywords to package.json (12b07f2)
* **presetter:** update dependency (8dd8813)


### ✨ Features

* **presetter/preset:** support json configuration file extension (f93f593)
* **presetter/preset:** set the default preset to presetter-preset (13380ad)
* **presetter:** remove node engine restriction to support node 15+ (02042fd)
* **presetter:** support npm v7 (3ff5d08)


### 🐞 Bug Fixes

* **presetter/preset:** correct test description (aae6c5d)
* **presetter:** convert potential numeric input into string (5ec80ec)
* **presetter/preset:** replaced the depreciated prepublish script (dd5ac38)


### 💎 Styles

* **presetter:** cleanup the code (ec581b4)
* **presetter:** enhance the readability of test description (9457c93)


### 📚 Documentation

* **presetter:** update the example for life cycle scripts (ef8439a)


### 📦 Code Refactoring

* **presetter:** apply a stricter type check (6f581a0)
* **presetter:** simplify default options (f8fad12)
* **presetter/task:** combine several typeguard helpers into one (b83d7bf)


### 🚨 Tests

* **presetter:** change example paths for testing under windows (4c68423)
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

* **presetter:** layout the foundation for presetter (f4f1deb)


### ✨ Features

* **presetter/pkg:** provider helpers for handling packages (32e48a8)
* **presetter/preset:** provide helpers for setting up a preset (7545351)
* **presetter/task:** provide helpers for task analysis (9a5c1e2)
* **presetter/err:** provider helpers for handling errors (1563650)
* **presetter/run:** provide a task runner (fca0c1d)
* **presetter/cli:** provide a command line interface for presetter (7403064)
* **preset/script:** add shortcuts for coverage and watch (67b0689)
* **preset:** provide customisation on directories (cbb7a34)


### 📚 Documentation

* **presetter:** detail what presetter is (e7c241c)


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks (0890c29)
