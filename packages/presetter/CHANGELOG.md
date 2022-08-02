# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [3.4.0](https://github.com/alvis/presetter/compare/v3.3.0...v3.4.0) (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))



# [3.3.0](https://github.com/alvis/presetter/compare/v3.2.0...v3.3.0) (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))



# [3.2.0](https://github.com/alvis/presetter/compare/v3.1.1...v3.2.0) (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))



## [3.1.1](https://github.com/alvis/presetter/compare/v3.1.0...v3.1.1) (2021-12-29)



# [3.1.0](https://github.com/alvis/presetter/compare/v3.0.3...v3.1.0) (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## [3.0.3](https://github.com/alvis/presetter/compare/v3.0.2...v3.0.3) (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))



## [3.0.2](https://github.com/alvis/presetter/compare/v3.0.1...v3.0.2) (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))



## [3.0.1](https://github.com/alvis/presetter/compare/v3.0.0...v3.0.1) (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))



# [3.0.0](https://github.com/alvis/presetter/compare/v2.1.0...v3.0.0) (2021-10-04)


### ✨ Features

* **preset/lint:** use husky and lint-staged for quick precommit QA ([3c7e04f](https://github.com/alvis/presetter/commit/3c7e04ffb03c4b97c089a02ecb2a9747367ca0d1))
* **preset:** provide a .gitignore template again ([356fae1](https://github.com/alvis/presetter/commit/356fae1cc5c590afa28cbd096e2e09e18334d9df))
* **presetter/cli:** support multiple presets initialisation ([6e6fd71](https://github.com/alvis/presetter/commit/6e6fd71a824beda802bfd653607b42d7640498a3))
* **presetter/preset:** show progress for `presetter use` ([efe939b](https://github.com/alvis/presetter/commit/efe939ba673e4b3c0f8426d74e0a8426d2587958))
* **presetter:** add .presetterrc a .json extension by default ([61c0aad](https://github.com/alvis/presetter/commit/61c0aaded5bd0b74907de573443d11df349fd7f6))
* **presetter:** add a loader for potentially dynamic content ([c17abc2](https://github.com/alvis/presetter/commit/c17abc2ae2b37f20732e15644830d77bd0404f89))
* **presetter:** allow preset to further extends other presets ([6eacf2f](https://github.com/alvis/presetter/commit/6eacf2fd4405d10bd878e29dc610a58bcdc4bf31))
* **presetter:** allow preset to supply supplementary config ([d4d85af](https://github.com/alvis/presetter/commit/d4d85af55053fb9c61ce81ec6486e3c478b18463))
* **presetter:** export types for other presets ([c6d326d](https://github.com/alvis/presetter/commit/c6d326d1a4fc967fdfe453f671a4e337d9ee4817))
* **presetter:** make target information available to preset ([090c341](https://github.com/alvis/presetter/commit/090c3410e62cfd43643e396438e7dda51476a107))
* **presetter:** provider helpers for parsing directives in config ([b3ee728](https://github.com/alvis/presetter/commit/b3ee728c61d6470c1b0a7371f10c2d3b7e25cf5e))
* **presetter:** support dynamic symlinks creation ([158a8ad](https://github.com/alvis/presetter/commit/158a8adf21d03b516f33bc02d1d9d1bd88b00dfc))
* **presetter:** use arborist for installing peer dependences ([50ec8ae](https://github.com/alvis/presetter/commit/50ec8ae0eae7138c08b54542a6c972d2822af142))
* simplify preset with common features moved to presetter ([044a132](https://github.com/alvis/presetter/commit/044a132b046f93434c86c3fda66a2ed8663f5bf1))


### 🐛 Bug Fixes

* **preset:** remove .gitignore as symlink is removed since git 2.32 ([3d4098b](https://github.com/alvis/presetter/commit/3d4098b5d881f8f1137e95a7a2300961cb463179))
* **presetter:** allow config files to be placed other than the root ([4153314](https://github.com/alvis/presetter/commit/4153314d9f7fa3d7c3902b6adda550eba150612b))
* **presetter:** detect preset name reliably ([44d586b](https://github.com/alvis/presetter/commit/44d586b934613924b4be4a465c539851939d5454))
* **presetter:** ensure all packages are there before bootstrapping ([c6ad0f0](https://github.com/alvis/presetter/commit/c6ad0f0be367d6a2780b5e1f10c0e34842c7a6de))
* **presetter:** ensure that a list is attached uniquely ([7091053](https://github.com/alvis/presetter/commit/7091053973c9a7e227877687f79c19db36dd092b))
* **presetter:** make runner resolution reliable ([b7a529c](https://github.com/alvis/presetter/commit/b7a529cd4101f956d54e492c9b996da6a4ecdca6))
* **presetter:** merge any new presets to the existing .presetterrc ([33b9d99](https://github.com/alvis/presetter/commit/33b9d99a0c9babdbe5e7d9c30a3609b6ed5ff9e0))
* **presetter:** narrow types in directive's argument ([c6de804](https://github.com/alvis/presetter/commit/c6de8044d4d9f584e3ef4ef688f81c08db425d1c))
* **presetter:** use the latest .presetterrc after setting it up ([2820e21](https://github.com/alvis/presetter/commit/2820e21bb1221a01a71c6efb3e8331c901f72ef3))
* **presetter:** warn for any invalid shell scripts ([6f083e7](https://github.com/alvis/presetter/commit/6f083e711ba7e3d6fbed9fc2b2848084aaf57d86))


### 🛠 Builds

* fully replace lerna with npm workspace ([343ee59](https://github.com/alvis/presetter/commit/343ee59894cd1dd7d83d7af25462377dc5179b2b))
* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* **presetter:** pass an empty config by default ([d6a5d71](https://github.com/alvis/presetter/commit/d6a5d711904020b9c955894e703b1bbbcf698135))
* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **presetter:** adopt .json extension for presetterrc ([b48edbd](https://github.com/alvis/presetter/commit/b48edbda9abad286e1512d9942842314e620fca7))


### 💎 Styles

* clean up the code with better naming and order ([bc17738](https://github.com/alvis/presetter/commit/bc17738c044e2870031f81b085cbe3346433b225))
* **presetter/script:** fix a typo in the test ([ff3190d](https://github.com/alvis/presetter/commit/ff3190d2a8f10e2bcc6a75caf2171261f5375c8d))
* **presetter:** reformat the messages for consistency ([7c0f876](https://github.com/alvis/presetter/commit/7c0f8769cae441f181e562d9a3bde66231581539))


### Breaking changes

* Now, presets only need to report the absolute paths of their
template files. All configuration generation is now performed by presetter. Due
to this change, multiple presets is now supported in a mix and match fashion.
* **presetter:** Now, presets will take the end project name and config as
the agrument instead of just the config.



# [2.1.0](https://github.com/alvis/presetter/compare/v2.0.0...v2.1.0) (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))





# [2.0.0](https://github.com/alvis/presetter/compare/v1.3.0...v2.0.0) (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17





# [1.3.0](https://github.com/alvis/presetter/compare/v1.2.0...v1.3.0) (2021-05-20)

**Note:** Version bump only for package presetter





# [1.2.0](https://github.com/alvis/presetter/compare/v1.1.0...v1.2.0) (2021-05-11)


### ♻️ Chores

* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))





# [1.1.0](https://github.com/alvis/presetter/compare/v1.0.5...v1.1.0) (2020-12-31)


### ✨ Features

* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))
* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))


### 🐛 Bug Fixes

* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))
* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))


### 📦 Code Refactoring

* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))
* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))





<a name="1.0.5"></a>
## [1.0.5](https://github.com/alvis/presetter/compare/v1.0.4...v1.0.5) (2020-10-22)

**Note:** Version bump only for package presetter





<a name="1.0.4"></a>
## [1.0.4](https://github.com/alvis/presetter/compare/v1.0.3...v1.0.4) (2020-10-04)

**Note:** Version bump only for package presetter





<a name="1.0.3"></a>
## [1.0.3](https://github.com/alvis/presetter/compare/v1.0.2...v1.0.3) (2020-09-30)

**Note:** Version bump only for package presetter





<a name="1.0.2"></a>
## [1.0.2](https://github.com/alvis/presetter/compare/v1.0.1...v1.0.2) (2020-08-14)


### :bug: Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037b))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5))


### :package: Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c))





<a name="1.0.1"></a>
## [1.0.1](https://github.com/alvis/presetter/compare/v1.0.0...v1.0.1) (2020-07-16)


### :bug: Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0))





<a name="1.0.0"></a>
# 1.0.0 (2020-07-16)


### :construction_worker: Build

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29))


### :sparkles: Features

* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34))
* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b0689))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/7403064))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/1563650))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2))
