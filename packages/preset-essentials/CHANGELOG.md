# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 8.0.1 (2025-06-27)



# 8.0.0 (2025-06-27)


### ✨ Features

* **preset-essentials:** add env compatibility check ([2a86824](https://github.com/alvis/presetter/commit/2a868245ed1c5deb31897d2c2f0144a2288d2fb2))
* **preset-essentials:** add project name to vitest config ([75a4351](https://github.com/alvis/presetter/commit/75a4351bab2710ace7c8fe175afbfe2c5629ac48))
* **preset-essentials:** add scripts for various test types ([63a0e23](https://github.com/alvis/presetter/commit/63a0e230c82b2184c9a9dd4e03cd8e802c5eae63))
* **preset-essentials:** add typescript target ([c3b610f](https://github.com/alvis/presetter/commit/c3b610f3447d145a9e3cc595572723c4f0869325))
* **preset-essentials:** exclude type files in coverage ([67ff205](https://github.com/alvis/presetter/commit/67ff2056aa63d220c07399312fa4332379073abc))
* **preset-essentials:** instruct eslint to use cache ([7f63337](https://github.com/alvis/presetter/commit/7f63337f17eb9360eb7101fa3333d534f73d49bb))


### 🐛 Bug Fixes

* **preset-essentials:** allow certain types in template literals ([3474e5f](https://github.com/alvis/presetter/commit/3474e5f2e2b652ffc2cb751fd99ca914967b8a07))
* **preset-essentials:** correct tsconfig root path ([1eebe8b](https://github.com/alvis/presetter/commit/1eebe8be0fb4e4ef8728769eef16143d68afa087))
* **preset-essentials:** include all sources from the repo root ([744b0c5](https://github.com/alvis/presetter/commit/744b0c5146c174520abb5acf71e9f9a32e0578d9))
* **preset-essentials:** include custom types in npm package ([c03bd29](https://github.com/alvis/presetter/commit/c03bd299b6e4d0fb05627aaf84e6c7ef3c99f7b3))
* **preset-essentials:** load types from generated files ([39e370f](https://github.com/alvis/presetter/commit/39e370f1a53c5f1126482eeabda2570a742eeb32))
* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-essentials:** type check all test files ([1923017](https://github.com/alvis/presetter/commit/19230174b037b40e410c7a7a59cc9595420651ef))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **preset:** include ts files in hidden folders ([40237d3](https://github.com/alvis/presetter/commit/40237d339c3e0f465a5ab21327b53bfc0c89e186))


### 📦 Code Refactoring

* **preset:** simplify eslint templates ([5761edd](https://github.com/alvis/presetter/commit/5761edd0dbecb72de5d129ef20223afd6e54f1f9))
* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))


### 📚 Documentation

* **preset-essentials:** fix a typo with prettier config file ([24df92a](https://github.com/alvis/presetter/commit/24df92a4ed16150786afbb40affe21bb36611162))
* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset-essentials:** set rootDir for typecheck ([e9f8872](https://github.com/alvis/presetter/commit/e9f887233b0c7fc70c8def2c92b643325e10fa02))
* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **preset-essentials:** group node submodules ([fe96d1b](https://github.com/alvis/presetter/commit/fe96d1b3a0c975dde4b5557757dd21c0e22c6664))
* **preset-essentials:** run zx sequentially ([6e247f1](https://github.com/alvis/presetter/commit/6e247f1d79d79f8e7d54380218f15ba0a1b2ae9c))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### ✨ Features

* **preset-essentials:** replace shx with zx ([3d82634](https://github.com/alvis/presetter/commit/3d826342c61744e50fc2f072f04e4f05bcf0782f))


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))
* **preset-essentials:** update eslint to v9.18 ([82392bb](https://github.com/alvis/presetter/commit/82392bbe5101e8167ba681308a8fd81e4162c5be))


### ♻️ Chores

* **release:** publish v7.1.0 ([1fb2c7a](https://github.com/alvis/presetter/commit/1fb2c7a8db4880379f0522f6aeab8cc966bbc31b))



## 7.0.2 (2025-01-24)


### 🐛 Bug Fixes

* resolve incorrect publishConfig ([9348b0f](https://github.com/alvis/presetter/commit/9348b0f9851662c7dc012288e9a11a6363cfe7b2))


### ♻️ Chores

* **release:** publish v7.0.2 ([a695a4a](https://github.com/alvis/presetter/commit/a695a4a7ba8c9e38685a9a6606bdd3887947ae82))



## 7.0.1 (2025-01-24)


### 🐛 Bug Fixes

* remove development export upon publication ([f6c1d12](https://github.com/alvis/presetter/commit/f6c1d12ac22271a8f6bf38ceab5a4138974284e7))


### ♻️ Chores

* **release:** publish v7.0.1 ([1a25398](https://github.com/alvis/presetter/commit/1a2539882e374300b2e44fb61e81c5540aa95ee8))



# 7.0.0 (2025-01-23)


### ✨ Features

* **preset-essentials:** skip building on install ([1544d17](https://github.com/alvis/presetter/commit/1544d174d195ea9450ad12d7927b5110b3c30359))
* **preset-essentials:** update vitest to v3 ([029edc1](https://github.com/alvis/presetter/commit/029edc1fd40448c50b5f6e32ed6ce8dca5f06e8d))


### 🐛 Bug Fixes

* **preset-essentials:** pass with no tests ([5900f63](https://github.com/alvis/presetter/commit/5900f63616372cb20bc0655bec20eb4239580842))


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))


### Breaking changes

* **preset-essentials:** Most tooling now supports
    TypeScript's project references. Skipping the
    build on install will save time on CI.
    However, this change will break any monorepo
    setup that needs packages to be built on
    install. If this is the case, modify the
    prepare script in presetter.config.ts to
    enable build upon install



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-essentials:** add @/ import shortcut ([ef75190](https://github.com/alvis/presetter/commit/ef75190a5274e3614dbbf09ff0281bd061d91185))
* **preset-essentials:** eslint with .gitignore ([4df3d23](https://github.com/alvis/presetter/commit/4df3d23e99f09aaaec225785a1d0341eaea4dfed))
* **preset-essentials:** skip linting binary & definition files ([1d95468](https://github.com/alvis/presetter/commit/1d954684eacbcb634da3a1d774e8810a1da4f5df))


### 🐛 Bug Fixes

* **preset-essentials:** add @/ as internal alias ([75f82d4](https://github.com/alvis/presetter/commit/75f82d4688dfae1f76e0664fd37273a08cb948f8))
* **preset-essentials:** don't treat custom types as internal ([f872626](https://github.com/alvis/presetter/commit/f8726261f9b318ee5f9800e4deaac73abee63650))
* **preset-essentials:** run lint-staged pre-commit ([e632e65](https://github.com/alvis/presetter/commit/e632e65c46ca6ce50ebdaeaef1ad6de0dbcc36fe))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))



# 6.0.0 (2024-11-27)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-essentials:** make build-in modules imported first ([aa2aedd](https://github.com/alvis/presetter/commit/aa2aeddbf328c89d9707a0e388995b5d3bfc7fba))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-essentials:** ensure the exact path is also searched ([ca08946](https://github.com/alvis/presetter/commit/ca08946117ed11eef5844411ae4279a13e91cb39))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.
* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### 🐛 Bug Fixes

* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))



## 3.0.3 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 8.0.0 (2025-06-27)


### ✨ Features

* **preset-essentials:** add env compatibility check ([2a86824](https://github.com/alvis/presetter/commit/2a868245ed1c5deb31897d2c2f0144a2288d2fb2))
* **preset-essentials:** add project name to vitest config ([75a4351](https://github.com/alvis/presetter/commit/75a4351bab2710ace7c8fe175afbfe2c5629ac48))
* **preset-essentials:** add scripts for various test types ([63a0e23](https://github.com/alvis/presetter/commit/63a0e230c82b2184c9a9dd4e03cd8e802c5eae63))
* **preset-essentials:** add typescript target ([c3b610f](https://github.com/alvis/presetter/commit/c3b610f3447d145a9e3cc595572723c4f0869325))
* **preset-essentials:** exclude type files in coverage ([67ff205](https://github.com/alvis/presetter/commit/67ff2056aa63d220c07399312fa4332379073abc))
* **preset-essentials:** instruct eslint to use cache ([7f63337](https://github.com/alvis/presetter/commit/7f63337f17eb9360eb7101fa3333d534f73d49bb))


### 🐛 Bug Fixes

* **preset-essentials:** allow certain types in template literals ([3474e5f](https://github.com/alvis/presetter/commit/3474e5f2e2b652ffc2cb751fd99ca914967b8a07))
* **preset-essentials:** correct tsconfig root path ([1eebe8b](https://github.com/alvis/presetter/commit/1eebe8be0fb4e4ef8728769eef16143d68afa087))
* **preset-essentials:** include all sources from the repo root ([744b0c5](https://github.com/alvis/presetter/commit/744b0c5146c174520abb5acf71e9f9a32e0578d9))
* **preset-essentials:** include custom types in npm package ([c03bd29](https://github.com/alvis/presetter/commit/c03bd299b6e4d0fb05627aaf84e6c7ef3c99f7b3))
* **preset-essentials:** load types from generated files ([39e370f](https://github.com/alvis/presetter/commit/39e370f1a53c5f1126482eeabda2570a742eeb32))
* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-essentials:** type check all test files ([1923017](https://github.com/alvis/presetter/commit/19230174b037b40e410c7a7a59cc9595420651ef))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **preset:** include ts files in hidden folders ([40237d3](https://github.com/alvis/presetter/commit/40237d339c3e0f465a5ab21327b53bfc0c89e186))


### 📦 Code Refactoring

* **preset:** simplify eslint templates ([5761edd](https://github.com/alvis/presetter/commit/5761edd0dbecb72de5d129ef20223afd6e54f1f9))
* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))


### 📚 Documentation

* **preset-essentials:** fix a typo with prettier config file ([24df92a](https://github.com/alvis/presetter/commit/24df92a4ed16150786afbb40affe21bb36611162))
* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset-essentials:** set rootDir for typecheck ([e9f8872](https://github.com/alvis/presetter/commit/e9f887233b0c7fc70c8def2c92b643325e10fa02))
* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **preset-essentials:** group node submodules ([fe96d1b](https://github.com/alvis/presetter/commit/fe96d1b3a0c975dde4b5557757dd21c0e22c6664))
* **preset-essentials:** run zx sequentially ([6e247f1](https://github.com/alvis/presetter/commit/6e247f1d79d79f8e7d54380218f15ba0a1b2ae9c))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### ✨ Features

* **preset-essentials:** replace shx with zx ([3d82634](https://github.com/alvis/presetter/commit/3d826342c61744e50fc2f072f04e4f05bcf0782f))


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))
* **preset-essentials:** update eslint to v9.18 ([82392bb](https://github.com/alvis/presetter/commit/82392bbe5101e8167ba681308a8fd81e4162c5be))


### ♻️ Chores

* **release:** publish v7.1.0 ([1fb2c7a](https://github.com/alvis/presetter/commit/1fb2c7a8db4880379f0522f6aeab8cc966bbc31b))



## 7.0.2 (2025-01-24)


### 🐛 Bug Fixes

* resolve incorrect publishConfig ([9348b0f](https://github.com/alvis/presetter/commit/9348b0f9851662c7dc012288e9a11a6363cfe7b2))


### ♻️ Chores

* **release:** publish v7.0.2 ([a695a4a](https://github.com/alvis/presetter/commit/a695a4a7ba8c9e38685a9a6606bdd3887947ae82))



## 7.0.1 (2025-01-24)


### 🐛 Bug Fixes

* remove development export upon publication ([f6c1d12](https://github.com/alvis/presetter/commit/f6c1d12ac22271a8f6bf38ceab5a4138974284e7))


### ♻️ Chores

* **release:** publish v7.0.1 ([1a25398](https://github.com/alvis/presetter/commit/1a2539882e374300b2e44fb61e81c5540aa95ee8))



# 7.0.0 (2025-01-23)


### ✨ Features

* **preset-essentials:** skip building on install ([1544d17](https://github.com/alvis/presetter/commit/1544d174d195ea9450ad12d7927b5110b3c30359))
* **preset-essentials:** update vitest to v3 ([029edc1](https://github.com/alvis/presetter/commit/029edc1fd40448c50b5f6e32ed6ce8dca5f06e8d))


### 🐛 Bug Fixes

* **preset-essentials:** pass with no tests ([5900f63](https://github.com/alvis/presetter/commit/5900f63616372cb20bc0655bec20eb4239580842))


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))


### Breaking changes

* **preset-essentials:** Most tooling now supports
    TypeScript's project references. Skipping the
    build on install will save time on CI.
    However, this change will break any monorepo
    setup that needs packages to be built on
    install. If this is the case, modify the
    prepare script in presetter.config.ts to
    enable build upon install



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-essentials:** add @/ import shortcut ([ef75190](https://github.com/alvis/presetter/commit/ef75190a5274e3614dbbf09ff0281bd061d91185))
* **preset-essentials:** eslint with .gitignore ([4df3d23](https://github.com/alvis/presetter/commit/4df3d23e99f09aaaec225785a1d0341eaea4dfed))
* **preset-essentials:** skip linting binary & definition files ([1d95468](https://github.com/alvis/presetter/commit/1d954684eacbcb634da3a1d774e8810a1da4f5df))


### 🐛 Bug Fixes

* **preset-essentials:** add @/ as internal alias ([75f82d4](https://github.com/alvis/presetter/commit/75f82d4688dfae1f76e0664fd37273a08cb948f8))
* **preset-essentials:** don't treat custom types as internal ([f872626](https://github.com/alvis/presetter/commit/f8726261f9b318ee5f9800e4deaac73abee63650))
* **preset-essentials:** run lint-staged pre-commit ([e632e65](https://github.com/alvis/presetter/commit/e632e65c46ca6ce50ebdaeaef1ad6de0dbcc36fe))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))



# 6.0.0 (2024-11-27)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-essentials:** make build-in modules imported first ([aa2aedd](https://github.com/alvis/presetter/commit/aa2aeddbf328c89d9707a0e388995b5d3bfc7fba))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-essentials:** ensure the exact path is also searched ([ca08946](https://github.com/alvis/presetter/commit/ca08946117ed11eef5844411ae4279a13e91cb39))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.
* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### 🐛 Bug Fixes

* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))



## 3.0.3 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset-essentials:** set rootDir for typecheck ([e9f8872](https://github.com/alvis/presetter/commit/e9f887233b0c7fc70c8def2c92b643325e10fa02))
* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **preset-essentials:** group node submodules ([fe96d1b](https://github.com/alvis/presetter/commit/fe96d1b3a0c975dde4b5557757dd21c0e22c6664))
* **preset-essentials:** run zx sequentially ([6e247f1](https://github.com/alvis/presetter/commit/6e247f1d79d79f8e7d54380218f15ba0a1b2ae9c))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### ✨ Features

* **preset-essentials:** replace shx with zx ([3d82634](https://github.com/alvis/presetter/commit/3d826342c61744e50fc2f072f04e4f05bcf0782f))


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))
* **preset-essentials:** update eslint to v9.18 ([82392bb](https://github.com/alvis/presetter/commit/82392bbe5101e8167ba681308a8fd81e4162c5be))


### ♻️ Chores

* **release:** publish v7.1.0 ([1fb2c7a](https://github.com/alvis/presetter/commit/1fb2c7a8db4880379f0522f6aeab8cc966bbc31b))



## 7.0.2 (2025-01-24)


### 🐛 Bug Fixes

* resolve incorrect publishConfig ([9348b0f](https://github.com/alvis/presetter/commit/9348b0f9851662c7dc012288e9a11a6363cfe7b2))


### ♻️ Chores

* **release:** publish v7.0.2 ([a695a4a](https://github.com/alvis/presetter/commit/a695a4a7ba8c9e38685a9a6606bdd3887947ae82))



## 7.0.1 (2025-01-24)


### 🐛 Bug Fixes

* remove development export upon publication ([f6c1d12](https://github.com/alvis/presetter/commit/f6c1d12ac22271a8f6bf38ceab5a4138974284e7))


### ♻️ Chores

* **release:** publish v7.0.1 ([1a25398](https://github.com/alvis/presetter/commit/1a2539882e374300b2e44fb61e81c5540aa95ee8))



# 7.0.0 (2025-01-23)


### ✨ Features

* **preset-essentials:** skip building on install ([1544d17](https://github.com/alvis/presetter/commit/1544d174d195ea9450ad12d7927b5110b3c30359))
* **preset-essentials:** update vitest to v3 ([029edc1](https://github.com/alvis/presetter/commit/029edc1fd40448c50b5f6e32ed6ce8dca5f06e8d))


### 🐛 Bug Fixes

* **preset-essentials:** pass with no tests ([5900f63](https://github.com/alvis/presetter/commit/5900f63616372cb20bc0655bec20eb4239580842))


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))


### Breaking changes

* **preset-essentials:** Most tooling now supports
    TypeScript's project references. Skipping the
    build on install will save time on CI.
    However, this change will break any monorepo
    setup that needs packages to be built on
    install. If this is the case, modify the
    prepare script in presetter.config.ts to
    enable build upon install



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-essentials:** add @/ import shortcut ([ef75190](https://github.com/alvis/presetter/commit/ef75190a5274e3614dbbf09ff0281bd061d91185))
* **preset-essentials:** eslint with .gitignore ([4df3d23](https://github.com/alvis/presetter/commit/4df3d23e99f09aaaec225785a1d0341eaea4dfed))
* **preset-essentials:** skip linting binary & definition files ([1d95468](https://github.com/alvis/presetter/commit/1d954684eacbcb634da3a1d774e8810a1da4f5df))


### 🐛 Bug Fixes

* **preset-essentials:** add @/ as internal alias ([75f82d4](https://github.com/alvis/presetter/commit/75f82d4688dfae1f76e0664fd37273a08cb948f8))
* **preset-essentials:** don't treat custom types as internal ([f872626](https://github.com/alvis/presetter/commit/f8726261f9b318ee5f9800e4deaac73abee63650))
* **preset-essentials:** run lint-staged pre-commit ([e632e65](https://github.com/alvis/presetter/commit/e632e65c46ca6ce50ebdaeaef1ad6de0dbcc36fe))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))



# 6.0.0 (2024-11-27)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-essentials:** make build-in modules imported first ([aa2aedd](https://github.com/alvis/presetter/commit/aa2aeddbf328c89d9707a0e388995b5d3bfc7fba))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-essentials:** ensure the exact path is also searched ([ca08946](https://github.com/alvis/presetter/commit/ca08946117ed11eef5844411ae4279a13e91cb39))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.
* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### 🐛 Bug Fixes

* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))



## 3.0.3 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **preset-essentials:** group node submodules ([fe96d1b](https://github.com/alvis/presetter/commit/fe96d1b3a0c975dde4b5557757dd21c0e22c6664))
* **preset-essentials:** run zx sequentially ([6e247f1](https://github.com/alvis/presetter/commit/6e247f1d79d79f8e7d54380218f15ba0a1b2ae9c))



# 7.1.0 (2025-01-28)


### ✨ Features

* **preset-essentials:** replace shx with zx ([3d82634](https://github.com/alvis/presetter/commit/3d826342c61744e50fc2f072f04e4f05bcf0782f))


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))
* **preset-essentials:** update eslint to v9.18 ([82392bb](https://github.com/alvis/presetter/commit/82392bbe5101e8167ba681308a8fd81e4162c5be))


### ♻️ Chores

* **release:** publish v7.1.0 ([1fb2c7a](https://github.com/alvis/presetter/commit/1fb2c7a8db4880379f0522f6aeab8cc966bbc31b))



## 7.0.2 (2025-01-24)


### 🐛 Bug Fixes

* resolve incorrect publishConfig ([9348b0f](https://github.com/alvis/presetter/commit/9348b0f9851662c7dc012288e9a11a6363cfe7b2))


### ♻️ Chores

* **release:** publish v7.0.2 ([a695a4a](https://github.com/alvis/presetter/commit/a695a4a7ba8c9e38685a9a6606bdd3887947ae82))



## 7.0.1 (2025-01-24)


### 🐛 Bug Fixes

* remove development export upon publication ([f6c1d12](https://github.com/alvis/presetter/commit/f6c1d12ac22271a8f6bf38ceab5a4138974284e7))


### ♻️ Chores

* **release:** publish v7.0.1 ([1a25398](https://github.com/alvis/presetter/commit/1a2539882e374300b2e44fb61e81c5540aa95ee8))



# 7.0.0 (2025-01-23)


### ✨ Features

* **preset-essentials:** skip building on install ([1544d17](https://github.com/alvis/presetter/commit/1544d174d195ea9450ad12d7927b5110b3c30359))
* **preset-essentials:** update vitest to v3 ([029edc1](https://github.com/alvis/presetter/commit/029edc1fd40448c50b5f6e32ed6ce8dca5f06e8d))


### 🐛 Bug Fixes

* **preset-essentials:** pass with no tests ([5900f63](https://github.com/alvis/presetter/commit/5900f63616372cb20bc0655bec20eb4239580842))


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))


### Breaking changes

* **preset-essentials:** Most tooling now supports
    TypeScript's project references. Skipping the
    build on install will save time on CI.
    However, this change will break any monorepo
    setup that needs packages to be built on
    install. If this is the case, modify the
    prepare script in presetter.config.ts to
    enable build upon install



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-essentials:** add @/ import shortcut ([ef75190](https://github.com/alvis/presetter/commit/ef75190a5274e3614dbbf09ff0281bd061d91185))
* **preset-essentials:** eslint with .gitignore ([4df3d23](https://github.com/alvis/presetter/commit/4df3d23e99f09aaaec225785a1d0341eaea4dfed))
* **preset-essentials:** skip linting binary & definition files ([1d95468](https://github.com/alvis/presetter/commit/1d954684eacbcb634da3a1d774e8810a1da4f5df))


### 🐛 Bug Fixes

* **preset-essentials:** add @/ as internal alias ([75f82d4](https://github.com/alvis/presetter/commit/75f82d4688dfae1f76e0664fd37273a08cb948f8))
* **preset-essentials:** don't treat custom types as internal ([f872626](https://github.com/alvis/presetter/commit/f8726261f9b318ee5f9800e4deaac73abee63650))
* **preset-essentials:** run lint-staged pre-commit ([e632e65](https://github.com/alvis/presetter/commit/e632e65c46ca6ce50ebdaeaef1ad6de0dbcc36fe))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))



# 6.0.0 (2024-11-27)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-essentials:** make build-in modules imported first ([aa2aedd](https://github.com/alvis/presetter/commit/aa2aeddbf328c89d9707a0e388995b5d3bfc7fba))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-essentials:** ensure the exact path is also searched ([ca08946](https://github.com/alvis/presetter/commit/ca08946117ed11eef5844411ae4279a13e91cb39))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.
* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### 🐛 Bug Fixes

* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))



## 3.0.3 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 7.1.0 (2025-01-28)


### ✨ Features

* **preset-essentials:** replace shx with zx ([3d82634](https://github.com/alvis/presetter/commit/3d826342c61744e50fc2f072f04e4f05bcf0782f))


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))
* **preset-essentials:** update eslint to v9.18 ([82392bb](https://github.com/alvis/presetter/commit/82392bbe5101e8167ba681308a8fd81e4162c5be))



## 7.0.2 (2025-01-24)


### 🐛 Bug Fixes

* resolve incorrect publishConfig ([9348b0f](https://github.com/alvis/presetter/commit/9348b0f9851662c7dc012288e9a11a6363cfe7b2))


### ♻️ Chores

* **release:** publish v7.0.2 ([a695a4a](https://github.com/alvis/presetter/commit/a695a4a7ba8c9e38685a9a6606bdd3887947ae82))



## 7.0.1 (2025-01-24)


### 🐛 Bug Fixes

* remove development export upon publication ([f6c1d12](https://github.com/alvis/presetter/commit/f6c1d12ac22271a8f6bf38ceab5a4138974284e7))


### ♻️ Chores

* **release:** publish v7.0.1 ([1a25398](https://github.com/alvis/presetter/commit/1a2539882e374300b2e44fb61e81c5540aa95ee8))



# 7.0.0 (2025-01-23)


### ✨ Features

* **preset-essentials:** skip building on install ([1544d17](https://github.com/alvis/presetter/commit/1544d174d195ea9450ad12d7927b5110b3c30359))
* **preset-essentials:** update vitest to v3 ([029edc1](https://github.com/alvis/presetter/commit/029edc1fd40448c50b5f6e32ed6ce8dca5f06e8d))


### 🐛 Bug Fixes

* **preset-essentials:** pass with no tests ([5900f63](https://github.com/alvis/presetter/commit/5900f63616372cb20bc0655bec20eb4239580842))


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))


### Breaking changes

* **preset-essentials:** Most tooling now supports
    TypeScript's project references. Skipping the
    build on install will save time on CI.
    However, this change will break any monorepo
    setup that needs packages to be built on
    install. If this is the case, modify the
    prepare script in presetter.config.ts to
    enable build upon install



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-essentials:** add @/ import shortcut ([ef75190](https://github.com/alvis/presetter/commit/ef75190a5274e3614dbbf09ff0281bd061d91185))
* **preset-essentials:** eslint with .gitignore ([4df3d23](https://github.com/alvis/presetter/commit/4df3d23e99f09aaaec225785a1d0341eaea4dfed))
* **preset-essentials:** skip linting binary & definition files ([1d95468](https://github.com/alvis/presetter/commit/1d954684eacbcb634da3a1d774e8810a1da4f5df))


### 🐛 Bug Fixes

* **preset-essentials:** add @/ as internal alias ([75f82d4](https://github.com/alvis/presetter/commit/75f82d4688dfae1f76e0664fd37273a08cb948f8))
* **preset-essentials:** don't treat custom types as internal ([f872626](https://github.com/alvis/presetter/commit/f8726261f9b318ee5f9800e4deaac73abee63650))
* **preset-essentials:** run lint-staged pre-commit ([e632e65](https://github.com/alvis/presetter/commit/e632e65c46ca6ce50ebdaeaef1ad6de0dbcc36fe))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))



# 6.0.0 (2024-11-27)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-essentials:** make build-in modules imported first ([aa2aedd](https://github.com/alvis/presetter/commit/aa2aeddbf328c89d9707a0e388995b5d3bfc7fba))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-essentials:** ensure the exact path is also searched ([ca08946](https://github.com/alvis/presetter/commit/ca08946117ed11eef5844411ae4279a13e91cb39))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.
* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### 🐛 Bug Fixes

* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))



## 3.0.3 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## 7.0.2 (2025-01-24)


### 🐛 Bug Fixes

* resolve incorrect publishConfig ([9348b0f](https://github.com/alvis/presetter/commit/9348b0f9851662c7dc012288e9a11a6363cfe7b2))



## 7.0.1 (2025-01-24)


### 🐛 Bug Fixes

* remove development export upon publication ([f6c1d12](https://github.com/alvis/presetter/commit/f6c1d12ac22271a8f6bf38ceab5a4138974284e7))


### ♻️ Chores

* **release:** publish v7.0.1 ([1a25398](https://github.com/alvis/presetter/commit/1a2539882e374300b2e44fb61e81c5540aa95ee8))



# 7.0.0 (2025-01-23)


### ✨ Features

* **preset-essentials:** skip building on install ([1544d17](https://github.com/alvis/presetter/commit/1544d174d195ea9450ad12d7927b5110b3c30359))
* **preset-essentials:** update vitest to v3 ([029edc1](https://github.com/alvis/presetter/commit/029edc1fd40448c50b5f6e32ed6ce8dca5f06e8d))


### 🐛 Bug Fixes

* **preset-essentials:** pass with no tests ([5900f63](https://github.com/alvis/presetter/commit/5900f63616372cb20bc0655bec20eb4239580842))


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))


### Breaking changes

* **preset-essentials:** Most tooling now supports
    TypeScript's project references. Skipping the
    build on install will save time on CI.
    However, this change will break any monorepo
    setup that needs packages to be built on
    install. If this is the case, modify the
    prepare script in presetter.config.ts to
    enable build upon install



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-essentials:** add @/ import shortcut ([ef75190](https://github.com/alvis/presetter/commit/ef75190a5274e3614dbbf09ff0281bd061d91185))
* **preset-essentials:** eslint with .gitignore ([4df3d23](https://github.com/alvis/presetter/commit/4df3d23e99f09aaaec225785a1d0341eaea4dfed))
* **preset-essentials:** skip linting binary & definition files ([1d95468](https://github.com/alvis/presetter/commit/1d954684eacbcb634da3a1d774e8810a1da4f5df))


### 🐛 Bug Fixes

* **preset-essentials:** add @/ as internal alias ([75f82d4](https://github.com/alvis/presetter/commit/75f82d4688dfae1f76e0664fd37273a08cb948f8))
* **preset-essentials:** don't treat custom types as internal ([f872626](https://github.com/alvis/presetter/commit/f8726261f9b318ee5f9800e4deaac73abee63650))
* **preset-essentials:** run lint-staged pre-commit ([e632e65](https://github.com/alvis/presetter/commit/e632e65c46ca6ce50ebdaeaef1ad6de0dbcc36fe))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))



# 6.0.0 (2024-11-27)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-essentials:** make build-in modules imported first ([aa2aedd](https://github.com/alvis/presetter/commit/aa2aeddbf328c89d9707a0e388995b5d3bfc7fba))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-essentials:** ensure the exact path is also searched ([ca08946](https://github.com/alvis/presetter/commit/ca08946117ed11eef5844411ae4279a13e91cb39))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.
* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### 🐛 Bug Fixes

* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))



## 3.0.3 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## 7.0.1 (2025-01-24)


### 🐛 Bug Fixes

* remove development export upon publication ([f6c1d12](https://github.com/alvis/presetter/commit/f6c1d12ac22271a8f6bf38ceab5a4138974284e7))



# 7.0.0 (2025-01-23)


### ✨ Features

* **preset-essentials:** skip building on install ([1544d17](https://github.com/alvis/presetter/commit/1544d174d195ea9450ad12d7927b5110b3c30359))
* **preset-essentials:** update vitest to v3 ([029edc1](https://github.com/alvis/presetter/commit/029edc1fd40448c50b5f6e32ed6ce8dca5f06e8d))


### 🐛 Bug Fixes

* **preset-essentials:** pass with no tests ([5900f63](https://github.com/alvis/presetter/commit/5900f63616372cb20bc0655bec20eb4239580842))


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))


### Breaking changes

* **preset-essentials:** Most tooling now supports
    TypeScript's project references. Skipping the
    build on install will save time on CI.
    However, this change will break any monorepo
    setup that needs packages to be built on
    install. If this is the case, modify the
    prepare script in presetter.config.ts to
    enable build upon install



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-essentials:** add @/ import shortcut ([ef75190](https://github.com/alvis/presetter/commit/ef75190a5274e3614dbbf09ff0281bd061d91185))
* **preset-essentials:** eslint with .gitignore ([4df3d23](https://github.com/alvis/presetter/commit/4df3d23e99f09aaaec225785a1d0341eaea4dfed))
* **preset-essentials:** skip linting binary & definition files ([1d95468](https://github.com/alvis/presetter/commit/1d954684eacbcb634da3a1d774e8810a1da4f5df))


### 🐛 Bug Fixes

* **preset-essentials:** add @/ as internal alias ([75f82d4](https://github.com/alvis/presetter/commit/75f82d4688dfae1f76e0664fd37273a08cb948f8))
* **preset-essentials:** don't treat custom types as internal ([f872626](https://github.com/alvis/presetter/commit/f8726261f9b318ee5f9800e4deaac73abee63650))
* **preset-essentials:** run lint-staged pre-commit ([e632e65](https://github.com/alvis/presetter/commit/e632e65c46ca6ce50ebdaeaef1ad6de0dbcc36fe))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))



# 6.0.0 (2024-11-27)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-essentials:** make build-in modules imported first ([aa2aedd](https://github.com/alvis/presetter/commit/aa2aeddbf328c89d9707a0e388995b5d3bfc7fba))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-essentials:** ensure the exact path is also searched ([ca08946](https://github.com/alvis/presetter/commit/ca08946117ed11eef5844411ae4279a13e91cb39))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.
* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### 🐛 Bug Fixes

* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))



## 3.0.3 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 7.0.0 (2025-01-23)


### ✨ Features

* **preset-essentials:** skip building on install ([1544d17](https://github.com/alvis/presetter/commit/1544d174d195ea9450ad12d7927b5110b3c30359))
* **preset-essentials:** update vitest to v3 ([029edc1](https://github.com/alvis/presetter/commit/029edc1fd40448c50b5f6e32ed6ce8dca5f06e8d))


### 🐛 Bug Fixes

* **preset-essentials:** pass with no tests ([5900f63](https://github.com/alvis/presetter/commit/5900f63616372cb20bc0655bec20eb4239580842))


### Breaking changes

* **preset-essentials:** Most tooling now supports
    TypeScript's project references. Skipping the
    build on install will save time on CI.
    However, this change will break any monorepo
    setup that needs packages to be built on
    install. If this is the case, modify the
    prepare script in presetter.config.ts to
    enable build upon install



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-essentials:** add @/ import shortcut ([ef75190](https://github.com/alvis/presetter/commit/ef75190a5274e3614dbbf09ff0281bd061d91185))
* **preset-essentials:** eslint with .gitignore ([4df3d23](https://github.com/alvis/presetter/commit/4df3d23e99f09aaaec225785a1d0341eaea4dfed))
* **preset-essentials:** skip linting binary & definition files ([1d95468](https://github.com/alvis/presetter/commit/1d954684eacbcb634da3a1d774e8810a1da4f5df))


### 🐛 Bug Fixes

* **preset-essentials:** add @/ as internal alias ([75f82d4](https://github.com/alvis/presetter/commit/75f82d4688dfae1f76e0664fd37273a08cb948f8))
* **preset-essentials:** don't treat custom types as internal ([f872626](https://github.com/alvis/presetter/commit/f8726261f9b318ee5f9800e4deaac73abee63650))
* **preset-essentials:** run lint-staged pre-commit ([e632e65](https://github.com/alvis/presetter/commit/e632e65c46ca6ce50ebdaeaef1ad6de0dbcc36fe))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))



# 6.0.0 (2024-11-27)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-essentials:** make build-in modules imported first ([aa2aedd](https://github.com/alvis/presetter/commit/aa2aeddbf328c89d9707a0e388995b5d3bfc7fba))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-essentials:** ensure the exact path is also searched ([ca08946](https://github.com/alvis/presetter/commit/ca08946117ed11eef5844411ae4279a13e91cb39))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.
* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### 🐛 Bug Fixes

* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))



## 3.0.3 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-essentials:** add @/ import shortcut ([ef75190](https://github.com/alvis/presetter/commit/ef75190a5274e3614dbbf09ff0281bd061d91185))
* **preset-essentials:** eslint with .gitignore ([4df3d23](https://github.com/alvis/presetter/commit/4df3d23e99f09aaaec225785a1d0341eaea4dfed))
* **preset-essentials:** skip linting binary & definition files ([1d95468](https://github.com/alvis/presetter/commit/1d954684eacbcb634da3a1d774e8810a1da4f5df))


### 🐛 Bug Fixes

* **preset-essentials:** add @/ as internal alias ([75f82d4](https://github.com/alvis/presetter/commit/75f82d4688dfae1f76e0664fd37273a08cb948f8))
* **preset-essentials:** don't treat custom types as internal ([f872626](https://github.com/alvis/presetter/commit/f8726261f9b318ee5f9800e4deaac73abee63650))
* **preset-essentials:** run lint-staged pre-commit ([e632e65](https://github.com/alvis/presetter/commit/e632e65c46ca6ce50ebdaeaef1ad6de0dbcc36fe))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))



# 6.0.0 (2024-11-27)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-essentials:** make build-in modules imported first ([aa2aedd](https://github.com/alvis/presetter/commit/aa2aeddbf328c89d9707a0e388995b5d3bfc7fba))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-essentials:** ensure the exact path is also searched ([ca08946](https://github.com/alvis/presetter/commit/ca08946117ed11eef5844411ae4279a13e91cb39))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.
* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### 🐛 Bug Fixes

* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))



## 3.0.3 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-essentials:** add @/ import shortcut ([ef75190](https://github.com/alvis/presetter/commit/ef75190a5274e3614dbbf09ff0281bd061d91185))
* **preset-essentials:** eslint with .gitignore ([4df3d23](https://github.com/alvis/presetter/commit/4df3d23e99f09aaaec225785a1d0341eaea4dfed))
* **preset-essentials:** skip linting binary & definition files ([1d95468](https://github.com/alvis/presetter/commit/1d954684eacbcb634da3a1d774e8810a1da4f5df))


### 🐛 Bug Fixes

* **preset-essentials:** add @/ as internal alias ([75f82d4](https://github.com/alvis/presetter/commit/75f82d4688dfae1f76e0664fd37273a08cb948f8))
* **preset-essentials:** don't treat custom types as internal ([f872626](https://github.com/alvis/presetter/commit/f8726261f9b318ee5f9800e4deaac73abee63650))
* **preset-essentials:** run lint-staged pre-commit ([e632e65](https://github.com/alvis/presetter/commit/e632e65c46ca6ce50ebdaeaef1ad6de0dbcc36fe))



# 6.0.0 (2024-11-27)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-essentials:** make build-in modules imported first ([aa2aedd](https://github.com/alvis/presetter/commit/aa2aeddbf328c89d9707a0e388995b5d3bfc7fba))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-essentials:** ensure the exact path is also searched ([ca08946](https://github.com/alvis/presetter/commit/ca08946117ed11eef5844411ae4279a13e91cb39))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.
* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### 🐛 Bug Fixes

* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))



## 3.0.3 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 6.0.0 (2024-11-27)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-essentials:** make build-in modules imported first ([aa2aedd](https://github.com/alvis/presetter/commit/aa2aeddbf328c89d9707a0e388995b5d3bfc7fba))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-essentials:** ensure the exact path is also searched ([ca08946](https://github.com/alvis/presetter/commit/ca08946117ed11eef5844411ae4279a13e91cb39))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.
* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### 🐛 Bug Fixes

* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))



## 3.0.3 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 5.0.0 (2024-07-31)


### ✨ Features

* **esm:** update prettier to v3 ([d8a8084](https://github.com/alvis/presetter/commit/d8a80848e9efa25a45ebc06db6c0e7cbb811bc2a))
* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **preset-esm:** remove ts-node in favor of tsx ([37e59f4](https://github.com/alvis/presetter/commit/37e59f470f834030f147fb91a9a207b17e2ece1c))
* **preset-esm:** support json import ([b1846c4](https://github.com/alvis/presetter/commit/b1846c4a5cd4cd5db2f2bcce1f020cbbcb3e2770))


### 🐛 Bug Fixes

* **preset-esm:** correct path in .npmignore ([5c6ef6f](https://github.com/alvis/presetter/commit/5c6ef6fcdc99ce705e953ac8ca0f2c29a637f511))
* **preset:** lessen eslint for real-world usage ([907cb62](https://github.com/alvis/presetter/commit/907cb62c9cc473cf8aa7d2dd55ee3a785337d326))
* **preset:** update tools to the latest versions ([b416f27](https://github.com/alvis/presetter/commit/b416f2794e80760369de07edd013b1e9eae274e7))


### 📚 Documentation

* correct path to preset-esm in README.md ([50b90e6](https://github.com/alvis/presetter/commit/50b90e6e4681fda590daeadcc732485df3453bc5))
* update badges ([8e01243](https://github.com/alvis/presetter/commit/8e01243104d4f4841f8c4eff7bf1b8ee67d8d28d))


### ♻️ Chores

* update pnpm to v9.6 to use catalog ([607fc68](https://github.com/alvis/presetter/commit/607fc686b7d57fb22e4c769561a7b453cf4cf750))


### Breaking changes

* **preset-esm:** jest is completely removed from preset-esm
* **preset-esm:** ts-node is no longer available



## 4.7.2 (2024-03-07)


### ♻️ Chores

* **release:** publish v4.7.2 ([7d8fe75](https://github.com/alvis/presetter/commit/7d8fe75c0944e0bbd9311fd6082956da0d1b5b9c))



## 4.7.1 (2024-03-06)


### 🐛 Bug Fixes

* **preset-react:** ensure tsx files are transformed before testing ([105f56d](https://github.com/alvis/presetter/commit/105f56d098ce06317d9da5be804fc7a4706de76b))


### ♻️ Chores

* **release:** publish v4.7.1 ([b8f09a2](https://github.com/alvis/presetter/commit/b8f09a2f081a87c382fd825d74b4a318112aedba))



# 4.7.0 (2024-02-27)


### ✨ Features

* **preset-esm:** enable typescript incremental build ([7e1d9af](https://github.com/alvis/presetter/commit/7e1d9af48e8cb6568a4fc46ca28f3bed2398298c))


### 🐛 Bug Fixes

* **preset-esm:** explicit reference the base tsconfig file ([5a72ff8](https://github.com/alvis/presetter/commit/5a72ff8e637d07a58babc4dcb08a43506f3bac9b))
* **preset-esm:** replace fixed source path in tsconfig.build.json ([36cc3e7](https://github.com/alvis/presetter/commit/36cc3e712f5255b0b9043e319730656e711d9082))
* **preset-esm:** separate relative and internal import paths ([35331e3](https://github.com/alvis/presetter/commit/35331e3adfb17e482261e183b7cf885e7d4b5652))


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ✨ Features

* **preset-esm:** update gitignore for better coverage ([cd691a6](https://github.com/alvis/presetter/commit/cd691a66e97ac88a5ebe487604c3ae408edfeefe))
* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### 🐛 Bug Fixes

* **preset-esm:** include generated source and bin ([67ac8bc](https://github.com/alvis/presetter/commit/67ac8bc53e4b155dab0cc50a982021651fa2e06a))
* **preset-esm:** leave comments on the compiled file for clarity ([756dd2c](https://github.com/alvis/presetter/commit/756dd2c640e9ee66a7b5b20b2e9d00225bbedfe8))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### ✨ Features

* **preset-esm:** add build steps for artifact creation ([ba270fe](https://github.com/alvis/presetter/commit/ba270fe5c63dc1a8db5393d20405276b948748c0))
* **preset-esm:** add source map to .d.ts files ([ba20774](https://github.com/alvis/presetter/commit/ba207747228d24ed9d3fd7a6e5ccae929ec82059))
* **preset-esm:** add support to typescript's project reference ([7610425](https://github.com/alvis/presetter/commit/761042536af23a55b1f93539becc19e4e76093a2))


### 🐛 Bug Fixes

* **preser-esm:** ignore error from husky ([feff15f](https://github.com/alvis/presetter/commit/feff15f079c1de047be89d775e534095daebb93d))
* **preset-esm:** add generated source to jest's resolve map ([4c0fb93](https://github.com/alvis/presetter/commit/4c0fb93847a98cee73f5818cba71d47a6f212fcc))
* **preset-esm:** group types from node:<lib> ([cdb4806](https://github.com/alvis/presetter/commit/cdb48061b894e1c9958d77837bc94ca24549c41d))
* **preset-esm:** update tsx to v4 ([f11cb3d](https://github.com/alvis/presetter/commit/f11cb3d89424bf9e338a3360235494cb55bbc765))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **preset-esm:** map # to source root ([f452aa8](https://github.com/alvis/presetter/commit/f452aa85088e30ddf6113ec162801347ed80f52a))
* **preset-esm:** prepend any NODE_OPTIONS to jest ([695e624](https://github.com/alvis/presetter/commit/695e62430bf09a2ca9888abbf95d7c63028c8048))


### ♻️ Chores

* **release:** publish v4.4.2 ([b380a99](https://github.com/alvis/presetter/commit/b380a990b235102ce988b59237dd00a138602d71))



## 4.4.1 (2023-10-06)


### 🐛 Bug Fixes

* **preset-esm:** resolve paths from anywhere ([5cad767](https://github.com/alvis/presetter/commit/5cad76771f626c21ab300846d88eb8f00ef3bf4c))


### ♻️ Chores

* **release:** publish v4.4.1 ([b383245](https://github.com/alvis/presetter/commit/b3832456a2aec9cd2c55240007d490e3b8c00090))



# 4.4.0 (2023-10-03)


### ✨ Features

* **preset-esm:** add a shortcut path for generated content ([43cab95](https://github.com/alvis/presetter/commit/43cab9578750f9cce463877067d6fd8230d731d9))
* **preset-esm:** gitignore any dynamically generated content ([b2bc235](https://github.com/alvis/presetter/commit/b2bc235e9e6d9647e637435796d6e6c1436ff9ee))


### 🐛 Bug Fixes

* **preset-esm:** resolve path under root directoy ([7648af5](https://github.com/alvis/presetter/commit/7648af579eb81c35c7897f369df94812d4e3c8ba))


### ♻️ Chores

* **release:** publish v4.4.0 ([227ede5](https://github.com/alvis/presetter/commit/227ede5ca13bc496b5cbae1631697fdfee3c5149))



## 4.3.1 (2023-10-03)


### 🐛 Bug Fixes

* **preset-esm:** cover more import order cases ([9a5b574](https://github.com/alvis/presetter/commit/9a5b574b5b1974cce48ddfa8243585e08b0dd524))
* **preset-esm:** update target for node 18 LTS ([d754890](https://github.com/alvis/presetter/commit/d754890919f8379555a9307a12ad60a862ce637d)), closes [/node.green/#ES2023](https://github.com//node.green//issues/ES2023)


### ♻️ Chores

* **release:** publish v4.3.1 ([c73fa5a](https://github.com/alvis/presetter/commit/c73fa5a21570a39c4ecfb942e79ebaab4f7916d0))



# 4.3.0 (2023-09-20)


### ✨ Features

* **preset-esm:** upgrade [@typescript-eslint](https://github.com/typescript-eslint) to v6 ([cd12de0](https://github.com/alvis/presetter/commit/cd12de0a634cc5f7a1e09079111f07c8aefcda68))


### 🐛 Bug Fixes

* **preset-esm:** correct type imports order ([6f8fa98](https://github.com/alvis/presetter/commit/6f8fa9887401f2354b365974ef05cf02d68e3cf3))


### ♻️ Chores

* **release:** publish v4.3.0 ([f088932](https://github.com/alvis/presetter/commit/f088932473eaeec728f37a09997d2a1d47931164))



# 4.2.0 (2023-09-13)


### ✨ Features

* **preset-esm:** support official decorators ([1980d8d](https://github.com/alvis/presetter/commit/1980d8d324db9688dd489c5ed3d5b85763d561c0))


### 📦 Code Refactoring

* **preset-esm:** enable multiple husky setups ([99b4807](https://github.com/alvis/presetter/commit/99b4807fea962640f07cf0fb6d9f94da881fa0e5))


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### ♻️ Chores

* **release:** publish v4.1.1 ([3e3ae47](https://github.com/alvis/presetter/commit/3e3ae473b5e2ce99edb8f7f4f339ced297ffe1d5))



# 4.1.0 (2023-07-13)


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### 🐛 Bug Fixes

* **preset-esm:** make staging file path after -- ([62ae558](https://github.com/alvis/presetter/commit/62ae558bcd343d74f996f3007485133f2a47c13d))


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-esm:** remove unnecessary jest configs ([c1b2ee5](https://github.com/alvis/presetter/commit/c1b2ee5eedfcef4b11c230e6dba402be4c6e51bd))
* **preset-esm:** run parent tasks only when they are available ([1f0b1db](https://github.com/alvis/presetter/commit/1f0b1db19d5207085e52c6dba12335360da5bb6f))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## 3.5.5 (2023-03-31)


### 🐛 Bug Fixes

* **preset-esm:** correct the configuration format for jest ([14abda7](https://github.com/alvis/presetter/commit/14abda712ee624fff762c4fb9434e7897695e4fd))


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### 🐛 Bug Fixes

* **preset-esm:** make jest work under pure esm environment ([c443952](https://github.com/alvis/presetter/commit/c443952646b2ec70112d62fe2495bd9728ce3e1f))


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### 🛠 Builds

* move .presetterrc to the root ([0eb17a0](https://github.com/alvis/presetter/commit/0eb17a058fa245faae96dcb017184460dae08b46))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **preset-esm:** correct filenames in source maps ([7867971](https://github.com/alvis/presetter/commit/78679712c61ee89fbd20d9a823e3b3c10d4253be))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



## [4.7.2](https://github.com/alvis/presetter/compare/v4.7.1...v4.7.2) (2024-03-07)



## [4.7.1](https://github.com/alvis/presetter/compare/v4.7.0...v4.7.1) (2024-03-06)


### 🐛 Bug Fixes

* **preset-react:** ensure tsx files are transformed before testing ([105f56d](https://github.com/alvis/presetter/commit/105f56d098ce06317d9da5be804fc7a4706de76b))



# [4.7.0](https://github.com/alvis/presetter/compare/v4.6.0...v4.7.0) (2024-02-27)


### ✨ Features

* **preset-esm:** enable typescript incremental build ([7e1d9af](https://github.com/alvis/presetter/commit/7e1d9af48e8cb6568a4fc46ca28f3bed2398298c))


### 🐛 Bug Fixes

* **preset-esm:** explicit reference the base tsconfig file ([5a72ff8](https://github.com/alvis/presetter/commit/5a72ff8e637d07a58babc4dcb08a43506f3bac9b))
* **preset-esm:** replace fixed source path in tsconfig.build.json ([36cc3e7](https://github.com/alvis/presetter/commit/36cc3e712f5255b0b9043e319730656e711d9082))
* **preset-esm:** separate relative and internal import paths ([35331e3](https://github.com/alvis/presetter/commit/35331e3adfb17e482261e183b7cf885e7d4b5652))



# [4.6.0](https://github.com/alvis/presetter/compare/v4.5.0...v4.6.0) (2024-01-22)


### ✨ Features

* **preset-esm:** update gitignore for better coverage ([cd691a6](https://github.com/alvis/presetter/commit/cd691a66e97ac88a5ebe487604c3ae408edfeefe))
* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### 🐛 Bug Fixes

* **preset-esm:** include generated source and bin ([67ac8bc](https://github.com/alvis/presetter/commit/67ac8bc53e4b155dab0cc50a982021651fa2e06a))
* **preset-esm:** leave comments on the compiled file for clarity ([756dd2c](https://github.com/alvis/presetter/commit/756dd2c640e9ee66a7b5b20b2e9d00225bbedfe8))



# [4.5.0](https://github.com/alvis/presetter/compare/v4.4.2...v4.5.0) (2024-01-04)


### ✨ Features

* **preset-esm:** add build steps for artifact creation ([ba270fe](https://github.com/alvis/presetter/commit/ba270fe5c63dc1a8db5393d20405276b948748c0))
* **preset-esm:** add source map to .d.ts files ([ba20774](https://github.com/alvis/presetter/commit/ba207747228d24ed9d3fd7a6e5ccae929ec82059))
* **preset-esm:** add support to typescript's project reference ([7610425](https://github.com/alvis/presetter/commit/761042536af23a55b1f93539becc19e4e76093a2))


### 🐛 Bug Fixes

* **preser-esm:** ignore error from husky ([feff15f](https://github.com/alvis/presetter/commit/feff15f079c1de047be89d775e534095daebb93d))
* **preset-esm:** add generated source to jest's resolve map ([4c0fb93](https://github.com/alvis/presetter/commit/4c0fb93847a98cee73f5818cba71d47a6f212fcc))
* **preset-esm:** group types from node:<lib> ([cdb4806](https://github.com/alvis/presetter/commit/cdb48061b894e1c9958d77837bc94ca24549c41d))
* **preset-esm:** update tsx to v4 ([f11cb3d](https://github.com/alvis/presetter/commit/f11cb3d89424bf9e338a3360235494cb55bbc765))



## [4.4.2](https://github.com/alvis/presetter/compare/v4.4.1...v4.4.2) (2023-10-27)


### 🐛 Bug Fixes

* **preset-esm:** map # to source root ([f452aa8](https://github.com/alvis/presetter/commit/f452aa85088e30ddf6113ec162801347ed80f52a))
* **preset-esm:** prepend any NODE_OPTIONS to jest ([695e624](https://github.com/alvis/presetter/commit/695e62430bf09a2ca9888abbf95d7c63028c8048))



## [4.4.1](https://github.com/alvis/presetter/compare/v4.4.0...v4.4.1) (2023-10-06)


### 🐛 Bug Fixes

* **preset-esm:** resolve paths from anywhere ([5cad767](https://github.com/alvis/presetter/commit/5cad76771f626c21ab300846d88eb8f00ef3bf4c))



# [4.4.0](https://github.com/alvis/presetter/compare/v4.3.1...v4.4.0) (2023-10-03)


### ✨ Features

* **preset-esm:** add a shortcut path for generated content ([43cab95](https://github.com/alvis/presetter/commit/43cab9578750f9cce463877067d6fd8230d731d9))
* **preset-esm:** gitignore any dynamically generated content ([b2bc235](https://github.com/alvis/presetter/commit/b2bc235e9e6d9647e637435796d6e6c1436ff9ee))


### 🐛 Bug Fixes

* **preset-esm:** resolve path under root directoy ([7648af5](https://github.com/alvis/presetter/commit/7648af579eb81c35c7897f369df94812d4e3c8ba))



## [4.3.1](https://github.com/alvis/presetter/compare/v4.3.0...v4.3.1) (2023-10-03)


### 🐛 Bug Fixes

* **preset-esm:** cover more import order cases ([9a5b574](https://github.com/alvis/presetter/commit/9a5b574b5b1974cce48ddfa8243585e08b0dd524))
* **preset-esm:** update target for node 18 LTS ([d754890](https://github.com/alvis/presetter/commit/d754890919f8379555a9307a12ad60a862ce637d)), closes [/node.green/#ES2023](https://github.com//node.green//issues/ES2023)



# [4.3.0](https://github.com/alvis/presetter/compare/v4.2.0...v4.3.0) (2023-09-20)


### ✨ Features

* **preset-esm:** upgrade [@typescript-eslint](https://github.com/typescript-eslint) to v6 ([cd12de0](https://github.com/alvis/presetter/commit/cd12de0a634cc5f7a1e09079111f07c8aefcda68))


### 🐛 Bug Fixes

* **preset-esm:** correct type imports order ([6f8fa98](https://github.com/alvis/presetter/commit/6f8fa9887401f2354b365974ef05cf02d68e3cf3))



# [4.2.0](https://github.com/alvis/presetter/compare/v4.1.2...v4.2.0) (2023-09-13)


### ✨ Features

* **preset-esm:** support official decorators ([1980d8d](https://github.com/alvis/presetter/commit/1980d8d324db9688dd489c5ed3d5b85763d561c0))


### 📦 Code Refactoring

* **preset-esm:** enable multiple husky setups ([99b4807](https://github.com/alvis/presetter/commit/99b4807fea962640f07cf0fb6d9f94da881fa0e5))



## [4.1.2](https://github.com/alvis/presetter/compare/v4.1.1...v4.1.2) (2023-07-26)



## [4.1.1](https://github.com/alvis/presetter/compare/v4.1.0...v4.1.1) (2023-07-14)



# [4.1.0](https://github.com/alvis/presetter/compare/v4.0.1...v4.1.0) (2023-07-13)


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))



## [4.0.1](https://github.com/alvis/presetter/compare/v4.0.0...v4.0.1) (2023-06-21)


### 🐛 Bug Fixes

* **preset-esm:** make staging file path after -- ([62ae558](https://github.com/alvis/presetter/commit/62ae558bcd343d74f996f3007485133f2a47c13d))



# [4.0.0](https://github.com/alvis/presetter/compare/v3.5.5...v4.0.0) (2023-06-18)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-esm:** remove unnecessary jest configs ([c1b2ee5](https://github.com/alvis/presetter/commit/c1b2ee5eedfcef4b11c230e6dba402be4c6e51bd))
* **preset-esm:** run parent tasks only when they are available ([1f0b1db](https://github.com/alvis/presetter/commit/1f0b1db19d5207085e52c6dba12335360da5bb6f))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## [3.5.5](https://github.com/alvis/presetter/compare/v3.5.4...v3.5.5) (2023-03-31)



## [3.5.4](https://github.com/alvis/presetter/compare/v3.5.3...v3.5.4) (2023-03-30)


### 🐛 Bug Fixes

* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))



## [3.5.3](https://github.com/alvis/presetter/compare/v3.5.2...v3.5.3) (2023-03-26)



## [3.5.2](https://github.com/alvis/presetter/compare/v3.5.1...v3.5.2) (2023-03-26)



## [3.5.1](https://github.com/alvis/presetter/compare/v3.5.0...v3.5.1) (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))



# [3.5.0](https://github.com/alvis/presetter/compare/v3.4.1...v3.5.0) (2022-09-23)



## [3.4.1](https://github.com/alvis/presetter/compare/v3.4.0...v3.4.1) (2022-08-10)


### 🐛 Bug Fixes

* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))



# [3.4.0](https://github.com/alvis/presetter/compare/v3.3.0...v3.4.0) (2022-08-02)



# [3.3.0](https://github.com/alvis/presetter/compare/v3.2.0...v3.3.0) (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))



# [3.2.0](https://github.com/alvis/presetter/compare/v3.1.1...v3.2.0) (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## [3.1.1](https://github.com/alvis/presetter/compare/v3.1.0...v3.1.1) (2021-12-29)



# [3.1.0](https://github.com/alvis/presetter/compare/v3.0.3...v3.1.0) (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))



## [3.0.3](https://github.com/alvis/presetter/compare/v3.0.2...v3.0.3) (2021-11-03)



## [3.0.2](https://github.com/alvis/presetter/compare/v3.0.1...v3.0.2) (2021-11-03)



## [3.0.1](https://github.com/alvis/presetter/compare/v3.0.0...v3.0.1) (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))



# [3.0.0](https://github.com/alvis/presetter/compare/v2.1.0...v3.0.0) (2021-10-04)


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))



# [2.1.0](https://github.com/alvis/presetter/compare/v2.0.0...v2.1.0) (2021-07-04)


### ✨ Features

* **preset/script:** add a script for continuous build ([986556b](https://github.com/alvis/presetter/commit/986556b6d112fd02e52c03e5e3f35b4b451a765a))
* **preset:** always use the latest version of [@types](https://github.com/types)/node ([eb3bd19](https://github.com/alvis/presetter/commit/eb3bd199e66077ac9024782cf36145af41810b80))
* **preset:** update linting related packages ([14f5c38](https://github.com/alvis/presetter/commit/14f5c388f506c1ed0188313dd203f67b5608d216))
* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **preset/build:** explicitly declare loose mode to ignore warnings ([e56308f](https://github.com/alvis/presetter/commit/e56308fd0c93fa03a67d2d9ac6547e48a6b9ccea))
* **preset:** update fs-extra to v10 ([33ab272](https://github.com/alvis/presetter/commit/33ab27261f66e2239ae307e234c87165b423ef8b))
* **preset:** update js-yaml to v4 ([3ea456a](https://github.com/alvis/presetter/commit/3ea456a581438945d77eacb14aa19306bde2b11f))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))





# [2.0.0](https://github.com/alvis/presetter/compare/v1.3.0...v2.0.0) (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))





# [1.3.0](https://github.com/alvis/presetter/compare/v1.2.0...v1.3.0) (2021-05-20)


### ✨ Features

* **preset:** always use the latest version of typescript ([96d9bc2](https://github.com/alvis/presetter/commit/96d9bc2e97bfafb9f4404dea2c2a8133cf8983f4))
* **preset:** upgrade ts-node-dev to v1 ([66eb2a0](https://github.com/alvis/presetter/commit/66eb2a05104c46de7b23a51d948dcaf25d776dae))





# [1.2.0](https://github.com/alvis/presetter/compare/v1.1.0...v1.2.0) (2021-05-11)


### ✨ Features

* **preset/lint:** re-enable sonar with npm v7 support ([5e8a448](https://github.com/alvis/presetter/commit/5e8a4481a995ba2d8f181678d4058f449f92e912))
* **preset/release:** update standard-version to v9 ([093bade](https://github.com/alvis/presetter/commit/093bade545e300cf9e95c9d94ca8f17cebd784a5))
* **preset/ts:** upgrade typescript to 4.x ([b7a5fac](https://github.com/alvis/presetter/commit/b7a5facb90e3657d7ec1edcba329c55e011c7420))


### ♻️ Chores

* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))
* **preset:** update dependencies ([b05c3ee](https://github.com/alvis/presetter/commit/b05c3eebfec0983b5c76690df09bcf7ceb5e38de))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))





# [1.1.0](https://github.com/alvis/presetter/compare/v1.0.5...v1.1.0) (2020-12-31)


### ✨ Features

* **preset/script:** update changelog preset from angular to metahub ([08aa456](https://github.com/alvis/presetter/commit/08aa4560169a31052f0ecae160d05e8d2f3fcc81))
* **preset/test:** make jest to display heap usage after each test ([b884914](https://github.com/alvis/presetter/commit/b884914548dbf64232a9c5e12cd4c15d91737f8e))
* **preset/test:** update ts-jest to v27 ([66954a9](https://github.com/alvis/presetter/commit/66954a9cb3a573943c08363804dc22e0c93cb8e0))
* **preset/ts:** update ts-node to v9.x ([b449432](https://github.com/alvis/presetter/commit/b449432f62301f5db8cdf4ecf8ef90eb099a2272))
* **preset/ts:** update typescript to v4.1 ([ad2ae23](https://github.com/alvis/presetter/commit/ad2ae23bb31d5f9d02557dfff1669099dbc3513a))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))


### 🐛 Bug Fixes

* **preset:** disable sonar temporarily for npm v7 support ([933102b](https://github.com/alvis/presetter/commit/933102b8df6b31ab9652dfc924c80a046c93d9aa))
* **preset/script:** make sure prettier only takes those supported ([c516a29](https://github.com/alvis/presetter/commit/c516a29f3f3ce85515327e30fc3e2fc81ad23d20))


### 🛠 Builds

* **preset:** skip test on install ([1f2b12b](https://github.com/alvis/presetter/commit/1f2b12b62fc051ad85a5a8ebefca92dbad92b239))


### 📦 Code Refactoring

* **preset:** reduce the complexity of the preset configurator ([1b19fa4](https://github.com/alvis/presetter/commit/1b19fa40c3c38beb646532dedcaa0424927c19c0))
* **preset:** simplify default options ([5500585](https://github.com/alvis/presetter/commit/5500585cd2a85d4010b43e12221c2aa0e3fb783f))


### 📚 Documentation

* **preset:** update the file structure ([5b6a7d8](https://github.com/alvis/presetter/commit/5b6a7d8dfae0be572dca7def89ebdd39344024b9))


### ♻️ Chores

* **preset:** add keywords to package.json ([408a9bc](https://github.com/alvis/presetter/commit/408a9bcd23a511753c20e8ad3088bd04b7f4200c))
* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))


### 💎 Styles

* **preset/script:** remove unused scripts ([71c533d](https://github.com/alvis/presetter/commit/71c533d6962c4802d83b92534e33d07f9a36f26d))





<a name="1.0.5"></a>
## [1.0.5](https://github.com/alvis/presetter/compare/v1.0.4...v1.0.5) (2020-10-22)


### :bug: Bug Fixes

* **preset/script:** allow prettier to pass when there is no match ([efa76a6](https://github.com/alvis/presetter/commit/efa76a6))
* **preset/script:** make release and publish using the right scripts ([93d7995](https://github.com/alvis/presetter/commit/93d7995))


### :package: Code Refactoring

* **preset/script:** remove an extra space ([025835a](https://github.com/alvis/presetter/commit/025835a))


### :sparkles: Features

* **preset/lint:** drop the doc requirement on the obvious ([df74c0f](https://github.com/alvis/presetter/commit/df74c0f))





<a name="1.0.4"></a>
## [1.0.4](https://github.com/alvis/presetter/compare/v1.0.3...v1.0.4) (2020-10-04)


### :sparkles: Features

* **preset/babel:** enable babel to emit decorator metadata like tsc ([8f8f3e5](https://github.com/alvis/presetter/commit/8f8f3e5))





<a name="1.0.3"></a>
## [1.0.3](https://github.com/alvis/presetter/compare/v1.0.2...v1.0.3) (2020-09-30)


### :sparkles: Features

* **preset:** update development tools ([7426120](https://github.com/alvis/presetter/commit/7426120))
* **preset/script:** skip coverage and lint upon npm install ([02c809d](https://github.com/alvis/presetter/commit/02c809d))





<a name="1.0.0"></a>
# 1.0.0 (2020-07-16)


### :construction_worker: Build

* **preset:** add build pipeline to the project ([cfa9d3a](https://github.com/alvis/presetter/commit/cfa9d3a))
* **preset:** add prettier to the project ([ee8b850](https://github.com/alvis/presetter/commit/ee8b850))
* **preset:** add typescript to the project ([7c24a75](https://github.com/alvis/presetter/commit/7c24a75))
* **preset:** use npm for bootstrapping ([ecae2f3](https://github.com/alvis/presetter/commit/ecae2f3))


### :package: Code Refactoring

* add a json extension to all rc files ([18d7195](https://github.com/alvis/presetter/commit/18d7195))


### :sparkles: Features

* **preset:** export contained configurations ([27a8c9f](https://github.com/alvis/presetter/commit/27a8c9f))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34))
* **preset/build:** add babel for script building ([b3546ea](https://github.com/alvis/presetter/commit/b3546ea))
* **preset/build:** add some build utilities ([867847c](https://github.com/alvis/presetter/commit/867847c))
* **preset/build:** add tscpaths for translating relative path ([2dc3771](https://github.com/alvis/presetter/commit/2dc3771))
* **preset/build:** adopt angular-emoji as the changelog preset ([67699ab](https://github.com/alvis/presetter/commit/67699ab))
* **preset/fmt:** add prettier for code formatting ([8fa3c2e](https://github.com/alvis/presetter/commit/8fa3c2e))
* **preset/git:** add a .gitignore template that ignores build artifacts ([4f5b9d8](https://github.com/alvis/presetter/commit/4f5b9d8))
* **preset/lint:** add eslint for code linting ([e82fb42](https://github.com/alvis/presetter/commit/e82fb42))
* **preset/lint:** add leasot for identifying TODO items ([1c4571b](https://github.com/alvis/presetter/commit/1c4571b))
* **preset/npm:** add a .npmignore template that only include lib ([fa671a4](https://github.com/alvis/presetter/commit/fa671a4))
* **preset/release:** add standard-version for release management ([24e6cbb](https://github.com/alvis/presetter/commit/24e6cbb))
* **preset/script:** add a standard template for npm scripts ([a322087](https://github.com/alvis/presetter/commit/a322087))
* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b0689))
* **preset/script:** add shortcuts for prerelease ([40668b5](https://github.com/alvis/presetter/commit/40668b5))
* **preset/test:** add jest for testing ([0a741e7](https://github.com/alvis/presetter/commit/0a741e7))
* **preset/test:** add ts-node and tsconfig-path for development ([4878efe](https://github.com/alvis/presetter/commit/4878efe))
* **preset/ts:** add typescript and configuration files ([01719a6](https://github.com/alvis/presetter/commit/01719a6))
* **preset/util:** provide common helpers ([77bd428](https://github.com/alvis/presetter/commit/77bd428))
