# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-strict:** update sonar to v3 ([57f9057](https://github.com/alvis/presetter/commit/57f905732330fd3b33b6febace84a5d7b7a5d2dc))


### 🐛 Bug Fixes

* **preset-strict:** correct eslint rules ([8acfe63](https://github.com/alvis/presetter/commit/8acfe632acd66148e5a75dcde78d49085f37f99e))
* **preset-strict:** update eslint sonar rules ([68e6465](https://github.com/alvis/presetter/commit/68e646599ccd3b80e9aa32ab8890be67213edf89))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))


### 🐛 Bug Fixes

* **preset-strict:** add & as an escape in no-secret rule ([72f7f0d](https://github.com/alvis/presetter/commit/72f7f0d6f18afd32930d13100079de29da518c78))
* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))
* **preset:** pass eslint stage check if ignored ([8b2e048](https://github.com/alvis/presetter/commit/8b2e048abf4ca55b86da6377e8d570a256e3bd00))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))
* simplify module spying ([bb8eac1](https://github.com/alvis/presetter/commit/bb8eac1bde9cdab77f2a25161b0ac195b7e37b9f))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))


### 🐛 Bug Fixes

* **preset:** lessen eslint for real-world usage ([907cb62](https://github.com/alvis/presetter/commit/907cb62c9cc473cf8aa7d2dd55ee3a785337d326))
* **preset:** update tools to the latest versions ([b416f27](https://github.com/alvis/presetter/commit/b416f2794e80760369de07edd013b1e9eae274e7))


### 📚 Documentation

* correct path to preset-esm in README.md ([50b90e6](https://github.com/alvis/presetter/commit/50b90e6e4681fda590daeadcc732485df3453bc5))
* update badges ([8e01243](https://github.com/alvis/presetter/commit/8e01243104d4f4841f8c4eff7bf1b8ee67d8d28d))


### ♻️ Chores

* **release:** publish v5.0.0 ([b14893d](https://github.com/alvis/presetter/commit/b14893d46c68aa66d9de6fd098e96a34d2810203))
* update pnpm to v9.6 to use catalog ([607fc68](https://github.com/alvis/presetter/commit/607fc686b7d57fb22e4c769561a7b453cf4cf750))


### Breaking changes

* **preset-esm:** jest is completely removed from preset-esm



## 4.7.2 (2024-03-07)


### ♻️ Chores

* **release:** publish v4.7.2 ([7d8fe75](https://github.com/alvis/presetter/commit/7d8fe75c0944e0bbd9311fd6082956da0d1b5b9c))



## 4.7.1 (2024-03-06)


### ♻️ Chores

* **release:** publish v4.7.1 ([b8f09a2](https://github.com/alvis/presetter/commit/b8f09a2f081a87c382fd825d74b4a318112aedba))



# 4.7.0 (2024-02-27)


### 🐛 Bug Fixes

* **preset-strict:** remove header rule ([4a56d6c](https://github.com/alvis/presetter/commit/4a56d6ccdedf4626baf0552aa902a70a173c6a22))


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **preset-esm:** allow short circuit and ternary operations ([463ae6f](https://github.com/alvis/presetter/commit/463ae6fd6c22946f0f5c014d466837c78668a5ac))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### ♻️ Chores

* **release:** publish v4.4.2 ([b380a99](https://github.com/alvis/presetter/commit/b380a990b235102ce988b59237dd00a138602d71))



## 4.4.1 (2023-10-06)


### ♻️ Chores

* **release:** publish v4.4.1 ([b383245](https://github.com/alvis/presetter/commit/b3832456a2aec9cd2c55240007d490e3b8c00090))



# 4.4.0 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.4.0 ([227ede5](https://github.com/alvis/presetter/commit/227ede5ca13bc496b5cbae1631697fdfee3c5149))



## 4.3.1 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.3.1 ([c73fa5a](https://github.com/alvis/presetter/commit/c73fa5a21570a39c4ecfb942e79ebaab4f7916d0))



# 4.3.0 (2023-09-20)


### 🐛 Bug Fixes

* **preset-strict:** remove redundant thresholds ([45b0521](https://github.com/alvis/presetter/commit/45b0521f1c95ec3b9796936e996c682f64590da6))


### ♻️ Chores

* **release:** publish v4.3.0 ([f088932](https://github.com/alvis/presetter/commit/f088932473eaeec728f37a09997d2a1d47931164))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### ♻️ Chores

* **release:** publish v4.1.1 ([3e3ae47](https://github.com/alvis/presetter/commit/3e3ae473b5e2ce99edb8f7f4f339ced297ffe1d5))



# 4.1.0 (2023-07-13)


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

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


### 🛠 Builds

* **preset-strict:** remove source files from the final build ([8e99425](https://github.com/alvis/presetter/commit/8e99425619ef1d686d81dac3d57bb55a858a1521))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


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

* **preset-strict:** correct the template paths for bootstrapping ([f71bf8f](https://github.com/alvis/presetter/commit/f71bf8f390b0d3a7e5469fe5298464e6ab212b51))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-strict:** extends preset-essentials for a stricter rules ([d7a73f8](https://github.com/alvis/presetter/commit/d7a73f880560b670379c45b55d9ef6b1946b73be))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-strict:** update sonar to v3 ([57f9057](https://github.com/alvis/presetter/commit/57f905732330fd3b33b6febace84a5d7b7a5d2dc))


### 🐛 Bug Fixes

* **preset-strict:** correct eslint rules ([8acfe63](https://github.com/alvis/presetter/commit/8acfe632acd66148e5a75dcde78d49085f37f99e))
* **preset-strict:** update eslint sonar rules ([68e6465](https://github.com/alvis/presetter/commit/68e646599ccd3b80e9aa32ab8890be67213edf89))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))


### 🐛 Bug Fixes

* **preset-strict:** add & as an escape in no-secret rule ([72f7f0d](https://github.com/alvis/presetter/commit/72f7f0d6f18afd32930d13100079de29da518c78))
* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))
* **preset:** pass eslint stage check if ignored ([8b2e048](https://github.com/alvis/presetter/commit/8b2e048abf4ca55b86da6377e8d570a256e3bd00))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))
* simplify module spying ([bb8eac1](https://github.com/alvis/presetter/commit/bb8eac1bde9cdab77f2a25161b0ac195b7e37b9f))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))


### 🐛 Bug Fixes

* **preset:** lessen eslint for real-world usage ([907cb62](https://github.com/alvis/presetter/commit/907cb62c9cc473cf8aa7d2dd55ee3a785337d326))
* **preset:** update tools to the latest versions ([b416f27](https://github.com/alvis/presetter/commit/b416f2794e80760369de07edd013b1e9eae274e7))


### 📚 Documentation

* correct path to preset-esm in README.md ([50b90e6](https://github.com/alvis/presetter/commit/50b90e6e4681fda590daeadcc732485df3453bc5))
* update badges ([8e01243](https://github.com/alvis/presetter/commit/8e01243104d4f4841f8c4eff7bf1b8ee67d8d28d))


### ♻️ Chores

* **release:** publish v5.0.0 ([b14893d](https://github.com/alvis/presetter/commit/b14893d46c68aa66d9de6fd098e96a34d2810203))
* update pnpm to v9.6 to use catalog ([607fc68](https://github.com/alvis/presetter/commit/607fc686b7d57fb22e4c769561a7b453cf4cf750))


### Breaking changes

* **preset-esm:** jest is completely removed from preset-esm



## 4.7.2 (2024-03-07)


### ♻️ Chores

* **release:** publish v4.7.2 ([7d8fe75](https://github.com/alvis/presetter/commit/7d8fe75c0944e0bbd9311fd6082956da0d1b5b9c))



## 4.7.1 (2024-03-06)


### ♻️ Chores

* **release:** publish v4.7.1 ([b8f09a2](https://github.com/alvis/presetter/commit/b8f09a2f081a87c382fd825d74b4a318112aedba))



# 4.7.0 (2024-02-27)


### 🐛 Bug Fixes

* **preset-strict:** remove header rule ([4a56d6c](https://github.com/alvis/presetter/commit/4a56d6ccdedf4626baf0552aa902a70a173c6a22))


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **preset-esm:** allow short circuit and ternary operations ([463ae6f](https://github.com/alvis/presetter/commit/463ae6fd6c22946f0f5c014d466837c78668a5ac))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### ♻️ Chores

* **release:** publish v4.4.2 ([b380a99](https://github.com/alvis/presetter/commit/b380a990b235102ce988b59237dd00a138602d71))



## 4.4.1 (2023-10-06)


### ♻️ Chores

* **release:** publish v4.4.1 ([b383245](https://github.com/alvis/presetter/commit/b3832456a2aec9cd2c55240007d490e3b8c00090))



# 4.4.0 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.4.0 ([227ede5](https://github.com/alvis/presetter/commit/227ede5ca13bc496b5cbae1631697fdfee3c5149))



## 4.3.1 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.3.1 ([c73fa5a](https://github.com/alvis/presetter/commit/c73fa5a21570a39c4ecfb942e79ebaab4f7916d0))



# 4.3.0 (2023-09-20)


### 🐛 Bug Fixes

* **preset-strict:** remove redundant thresholds ([45b0521](https://github.com/alvis/presetter/commit/45b0521f1c95ec3b9796936e996c682f64590da6))


### ♻️ Chores

* **release:** publish v4.3.0 ([f088932](https://github.com/alvis/presetter/commit/f088932473eaeec728f37a09997d2a1d47931164))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### ♻️ Chores

* **release:** publish v4.1.1 ([3e3ae47](https://github.com/alvis/presetter/commit/3e3ae473b5e2ce99edb8f7f4f339ced297ffe1d5))



# 4.1.0 (2023-07-13)


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

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


### 🛠 Builds

* **preset-strict:** remove source files from the final build ([8e99425](https://github.com/alvis/presetter/commit/8e99425619ef1d686d81dac3d57bb55a858a1521))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


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

* **preset-strict:** correct the template paths for bootstrapping ([f71bf8f](https://github.com/alvis/presetter/commit/f71bf8f390b0d3a7e5469fe5298464e6ab212b51))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-strict:** extends preset-essentials for a stricter rules ([d7a73f8](https://github.com/alvis/presetter/commit/d7a73f880560b670379c45b55d9ef6b1946b73be))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## 7.0.1 (2025-01-24)


### 🐛 Bug Fixes

* remove development export upon publication ([f6c1d12](https://github.com/alvis/presetter/commit/f6c1d12ac22271a8f6bf38ceab5a4138974284e7))



# 7.0.0 (2025-01-23)


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-strict:** update sonar to v3 ([57f9057](https://github.com/alvis/presetter/commit/57f905732330fd3b33b6febace84a5d7b7a5d2dc))


### 🐛 Bug Fixes

* **preset-strict:** correct eslint rules ([8acfe63](https://github.com/alvis/presetter/commit/8acfe632acd66148e5a75dcde78d49085f37f99e))
* **preset-strict:** update eslint sonar rules ([68e6465](https://github.com/alvis/presetter/commit/68e646599ccd3b80e9aa32ab8890be67213edf89))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))


### 🐛 Bug Fixes

* **preset-strict:** add & as an escape in no-secret rule ([72f7f0d](https://github.com/alvis/presetter/commit/72f7f0d6f18afd32930d13100079de29da518c78))
* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))
* **preset:** pass eslint stage check if ignored ([8b2e048](https://github.com/alvis/presetter/commit/8b2e048abf4ca55b86da6377e8d570a256e3bd00))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))
* simplify module spying ([bb8eac1](https://github.com/alvis/presetter/commit/bb8eac1bde9cdab77f2a25161b0ac195b7e37b9f))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))


### 🐛 Bug Fixes

* **preset:** lessen eslint for real-world usage ([907cb62](https://github.com/alvis/presetter/commit/907cb62c9cc473cf8aa7d2dd55ee3a785337d326))
* **preset:** update tools to the latest versions ([b416f27](https://github.com/alvis/presetter/commit/b416f2794e80760369de07edd013b1e9eae274e7))


### 📚 Documentation

* correct path to preset-esm in README.md ([50b90e6](https://github.com/alvis/presetter/commit/50b90e6e4681fda590daeadcc732485df3453bc5))
* update badges ([8e01243](https://github.com/alvis/presetter/commit/8e01243104d4f4841f8c4eff7bf1b8ee67d8d28d))


### ♻️ Chores

* **release:** publish v5.0.0 ([b14893d](https://github.com/alvis/presetter/commit/b14893d46c68aa66d9de6fd098e96a34d2810203))
* update pnpm to v9.6 to use catalog ([607fc68](https://github.com/alvis/presetter/commit/607fc686b7d57fb22e4c769561a7b453cf4cf750))


### Breaking changes

* **preset-esm:** jest is completely removed from preset-esm



## 4.7.2 (2024-03-07)


### ♻️ Chores

* **release:** publish v4.7.2 ([7d8fe75](https://github.com/alvis/presetter/commit/7d8fe75c0944e0bbd9311fd6082956da0d1b5b9c))



## 4.7.1 (2024-03-06)


### ♻️ Chores

* **release:** publish v4.7.1 ([b8f09a2](https://github.com/alvis/presetter/commit/b8f09a2f081a87c382fd825d74b4a318112aedba))



# 4.7.0 (2024-02-27)


### 🐛 Bug Fixes

* **preset-strict:** remove header rule ([4a56d6c](https://github.com/alvis/presetter/commit/4a56d6ccdedf4626baf0552aa902a70a173c6a22))


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **preset-esm:** allow short circuit and ternary operations ([463ae6f](https://github.com/alvis/presetter/commit/463ae6fd6c22946f0f5c014d466837c78668a5ac))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### ♻️ Chores

* **release:** publish v4.4.2 ([b380a99](https://github.com/alvis/presetter/commit/b380a990b235102ce988b59237dd00a138602d71))



## 4.4.1 (2023-10-06)


### ♻️ Chores

* **release:** publish v4.4.1 ([b383245](https://github.com/alvis/presetter/commit/b3832456a2aec9cd2c55240007d490e3b8c00090))



# 4.4.0 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.4.0 ([227ede5](https://github.com/alvis/presetter/commit/227ede5ca13bc496b5cbae1631697fdfee3c5149))



## 4.3.1 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.3.1 ([c73fa5a](https://github.com/alvis/presetter/commit/c73fa5a21570a39c4ecfb942e79ebaab4f7916d0))



# 4.3.0 (2023-09-20)


### 🐛 Bug Fixes

* **preset-strict:** remove redundant thresholds ([45b0521](https://github.com/alvis/presetter/commit/45b0521f1c95ec3b9796936e996c682f64590da6))


### ♻️ Chores

* **release:** publish v4.3.0 ([f088932](https://github.com/alvis/presetter/commit/f088932473eaeec728f37a09997d2a1d47931164))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### ♻️ Chores

* **release:** publish v4.1.1 ([3e3ae47](https://github.com/alvis/presetter/commit/3e3ae473b5e2ce99edb8f7f4f339ced297ffe1d5))



# 4.1.0 (2023-07-13)


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

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


### 🛠 Builds

* **preset-strict:** remove source files from the final build ([8e99425](https://github.com/alvis/presetter/commit/8e99425619ef1d686d81dac3d57bb55a858a1521))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


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

* **preset-strict:** correct the template paths for bootstrapping ([f71bf8f](https://github.com/alvis/presetter/commit/f71bf8f390b0d3a7e5469fe5298464e6ab212b51))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-strict:** extends preset-essentials for a stricter rules ([d7a73f8](https://github.com/alvis/presetter/commit/d7a73f880560b670379c45b55d9ef6b1946b73be))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 7.0.0 (2025-01-23)



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-strict:** update sonar to v3 ([57f9057](https://github.com/alvis/presetter/commit/57f905732330fd3b33b6febace84a5d7b7a5d2dc))


### 🐛 Bug Fixes

* **preset-strict:** correct eslint rules ([8acfe63](https://github.com/alvis/presetter/commit/8acfe632acd66148e5a75dcde78d49085f37f99e))
* **preset-strict:** update eslint sonar rules ([68e6465](https://github.com/alvis/presetter/commit/68e646599ccd3b80e9aa32ab8890be67213edf89))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))


### 🐛 Bug Fixes

* **preset-strict:** add & as an escape in no-secret rule ([72f7f0d](https://github.com/alvis/presetter/commit/72f7f0d6f18afd32930d13100079de29da518c78))
* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))
* **preset:** pass eslint stage check if ignored ([8b2e048](https://github.com/alvis/presetter/commit/8b2e048abf4ca55b86da6377e8d570a256e3bd00))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))
* simplify module spying ([bb8eac1](https://github.com/alvis/presetter/commit/bb8eac1bde9cdab77f2a25161b0ac195b7e37b9f))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))


### 🐛 Bug Fixes

* **preset:** lessen eslint for real-world usage ([907cb62](https://github.com/alvis/presetter/commit/907cb62c9cc473cf8aa7d2dd55ee3a785337d326))
* **preset:** update tools to the latest versions ([b416f27](https://github.com/alvis/presetter/commit/b416f2794e80760369de07edd013b1e9eae274e7))


### 📚 Documentation

* correct path to preset-esm in README.md ([50b90e6](https://github.com/alvis/presetter/commit/50b90e6e4681fda590daeadcc732485df3453bc5))
* update badges ([8e01243](https://github.com/alvis/presetter/commit/8e01243104d4f4841f8c4eff7bf1b8ee67d8d28d))


### ♻️ Chores

* **release:** publish v5.0.0 ([b14893d](https://github.com/alvis/presetter/commit/b14893d46c68aa66d9de6fd098e96a34d2810203))
* update pnpm to v9.6 to use catalog ([607fc68](https://github.com/alvis/presetter/commit/607fc686b7d57fb22e4c769561a7b453cf4cf750))


### Breaking changes

* **preset-esm:** jest is completely removed from preset-esm



## 4.7.2 (2024-03-07)


### ♻️ Chores

* **release:** publish v4.7.2 ([7d8fe75](https://github.com/alvis/presetter/commit/7d8fe75c0944e0bbd9311fd6082956da0d1b5b9c))



## 4.7.1 (2024-03-06)


### ♻️ Chores

* **release:** publish v4.7.1 ([b8f09a2](https://github.com/alvis/presetter/commit/b8f09a2f081a87c382fd825d74b4a318112aedba))



# 4.7.0 (2024-02-27)


### 🐛 Bug Fixes

* **preset-strict:** remove header rule ([4a56d6c](https://github.com/alvis/presetter/commit/4a56d6ccdedf4626baf0552aa902a70a173c6a22))


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **preset-esm:** allow short circuit and ternary operations ([463ae6f](https://github.com/alvis/presetter/commit/463ae6fd6c22946f0f5c014d466837c78668a5ac))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### ♻️ Chores

* **release:** publish v4.4.2 ([b380a99](https://github.com/alvis/presetter/commit/b380a990b235102ce988b59237dd00a138602d71))



## 4.4.1 (2023-10-06)


### ♻️ Chores

* **release:** publish v4.4.1 ([b383245](https://github.com/alvis/presetter/commit/b3832456a2aec9cd2c55240007d490e3b8c00090))



# 4.4.0 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.4.0 ([227ede5](https://github.com/alvis/presetter/commit/227ede5ca13bc496b5cbae1631697fdfee3c5149))



## 4.3.1 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.3.1 ([c73fa5a](https://github.com/alvis/presetter/commit/c73fa5a21570a39c4ecfb942e79ebaab4f7916d0))



# 4.3.0 (2023-09-20)


### 🐛 Bug Fixes

* **preset-strict:** remove redundant thresholds ([45b0521](https://github.com/alvis/presetter/commit/45b0521f1c95ec3b9796936e996c682f64590da6))


### ♻️ Chores

* **release:** publish v4.3.0 ([f088932](https://github.com/alvis/presetter/commit/f088932473eaeec728f37a09997d2a1d47931164))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### ♻️ Chores

* **release:** publish v4.1.1 ([3e3ae47](https://github.com/alvis/presetter/commit/3e3ae473b5e2ce99edb8f7f4f339ced297ffe1d5))



# 4.1.0 (2023-07-13)


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

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


### 🛠 Builds

* **preset-strict:** remove source files from the final build ([8e99425](https://github.com/alvis/presetter/commit/8e99425619ef1d686d81dac3d57bb55a858a1521))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


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

* **preset-strict:** correct the template paths for bootstrapping ([f71bf8f](https://github.com/alvis/presetter/commit/f71bf8f390b0d3a7e5469fe5298464e6ab212b51))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-strict:** extends preset-essentials for a stricter rules ([d7a73f8](https://github.com/alvis/presetter/commit/d7a73f880560b670379c45b55d9ef6b1946b73be))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 6.2.0 (2025-01-10)


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-strict:** update sonar to v3 ([57f9057](https://github.com/alvis/presetter/commit/57f905732330fd3b33b6febace84a5d7b7a5d2dc))


### 🐛 Bug Fixes

* **preset-strict:** correct eslint rules ([8acfe63](https://github.com/alvis/presetter/commit/8acfe632acd66148e5a75dcde78d49085f37f99e))
* **preset-strict:** update eslint sonar rules ([68e6465](https://github.com/alvis/presetter/commit/68e646599ccd3b80e9aa32ab8890be67213edf89))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))


### 🐛 Bug Fixes

* **preset-strict:** add & as an escape in no-secret rule ([72f7f0d](https://github.com/alvis/presetter/commit/72f7f0d6f18afd32930d13100079de29da518c78))
* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))
* **preset:** pass eslint stage check if ignored ([8b2e048](https://github.com/alvis/presetter/commit/8b2e048abf4ca55b86da6377e8d570a256e3bd00))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))
* simplify module spying ([bb8eac1](https://github.com/alvis/presetter/commit/bb8eac1bde9cdab77f2a25161b0ac195b7e37b9f))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))


### 🐛 Bug Fixes

* **preset:** lessen eslint for real-world usage ([907cb62](https://github.com/alvis/presetter/commit/907cb62c9cc473cf8aa7d2dd55ee3a785337d326))
* **preset:** update tools to the latest versions ([b416f27](https://github.com/alvis/presetter/commit/b416f2794e80760369de07edd013b1e9eae274e7))


### 📚 Documentation

* correct path to preset-esm in README.md ([50b90e6](https://github.com/alvis/presetter/commit/50b90e6e4681fda590daeadcc732485df3453bc5))
* update badges ([8e01243](https://github.com/alvis/presetter/commit/8e01243104d4f4841f8c4eff7bf1b8ee67d8d28d))


### ♻️ Chores

* **release:** publish v5.0.0 ([b14893d](https://github.com/alvis/presetter/commit/b14893d46c68aa66d9de6fd098e96a34d2810203))
* update pnpm to v9.6 to use catalog ([607fc68](https://github.com/alvis/presetter/commit/607fc686b7d57fb22e4c769561a7b453cf4cf750))


### Breaking changes

* **preset-esm:** jest is completely removed from preset-esm



## 4.7.2 (2024-03-07)


### ♻️ Chores

* **release:** publish v4.7.2 ([7d8fe75](https://github.com/alvis/presetter/commit/7d8fe75c0944e0bbd9311fd6082956da0d1b5b9c))



## 4.7.1 (2024-03-06)


### ♻️ Chores

* **release:** publish v4.7.1 ([b8f09a2](https://github.com/alvis/presetter/commit/b8f09a2f081a87c382fd825d74b4a318112aedba))



# 4.7.0 (2024-02-27)


### 🐛 Bug Fixes

* **preset-strict:** remove header rule ([4a56d6c](https://github.com/alvis/presetter/commit/4a56d6ccdedf4626baf0552aa902a70a173c6a22))


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **preset-esm:** allow short circuit and ternary operations ([463ae6f](https://github.com/alvis/presetter/commit/463ae6fd6c22946f0f5c014d466837c78668a5ac))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### ♻️ Chores

* **release:** publish v4.4.2 ([b380a99](https://github.com/alvis/presetter/commit/b380a990b235102ce988b59237dd00a138602d71))



## 4.4.1 (2023-10-06)


### ♻️ Chores

* **release:** publish v4.4.1 ([b383245](https://github.com/alvis/presetter/commit/b3832456a2aec9cd2c55240007d490e3b8c00090))



# 4.4.0 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.4.0 ([227ede5](https://github.com/alvis/presetter/commit/227ede5ca13bc496b5cbae1631697fdfee3c5149))



## 4.3.1 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.3.1 ([c73fa5a](https://github.com/alvis/presetter/commit/c73fa5a21570a39c4ecfb942e79ebaab4f7916d0))



# 4.3.0 (2023-09-20)


### 🐛 Bug Fixes

* **preset-strict:** remove redundant thresholds ([45b0521](https://github.com/alvis/presetter/commit/45b0521f1c95ec3b9796936e996c682f64590da6))


### ♻️ Chores

* **release:** publish v4.3.0 ([f088932](https://github.com/alvis/presetter/commit/f088932473eaeec728f37a09997d2a1d47931164))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### ♻️ Chores

* **release:** publish v4.1.1 ([3e3ae47](https://github.com/alvis/presetter/commit/3e3ae473b5e2ce99edb8f7f4f339ced297ffe1d5))



# 4.1.0 (2023-07-13)


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

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


### 🛠 Builds

* **preset-strict:** remove source files from the final build ([8e99425](https://github.com/alvis/presetter/commit/8e99425619ef1d686d81dac3d57bb55a858a1521))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


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

* **preset-strict:** correct the template paths for bootstrapping ([f71bf8f](https://github.com/alvis/presetter/commit/f71bf8f390b0d3a7e5469fe5298464e6ab212b51))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-strict:** extends preset-essentials for a stricter rules ([d7a73f8](https://github.com/alvis/presetter/commit/d7a73f880560b670379c45b55d9ef6b1946b73be))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 6.1.0 (2024-12-24)


### ✨ Features

* **preset-strict:** update sonar to v3 ([57f9057](https://github.com/alvis/presetter/commit/57f905732330fd3b33b6febace84a5d7b7a5d2dc))


### 🐛 Bug Fixes

* **preset-strict:** correct eslint rules ([8acfe63](https://github.com/alvis/presetter/commit/8acfe632acd66148e5a75dcde78d49085f37f99e))
* **preset-strict:** update eslint sonar rules ([68e6465](https://github.com/alvis/presetter/commit/68e646599ccd3b80e9aa32ab8890be67213edf89))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))


### 🐛 Bug Fixes

* **preset-strict:** add & as an escape in no-secret rule ([72f7f0d](https://github.com/alvis/presetter/commit/72f7f0d6f18afd32930d13100079de29da518c78))
* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))
* **preset:** pass eslint stage check if ignored ([8b2e048](https://github.com/alvis/presetter/commit/8b2e048abf4ca55b86da6377e8d570a256e3bd00))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))
* simplify module spying ([bb8eac1](https://github.com/alvis/presetter/commit/bb8eac1bde9cdab77f2a25161b0ac195b7e37b9f))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))


### 🐛 Bug Fixes

* **preset:** lessen eslint for real-world usage ([907cb62](https://github.com/alvis/presetter/commit/907cb62c9cc473cf8aa7d2dd55ee3a785337d326))
* **preset:** update tools to the latest versions ([b416f27](https://github.com/alvis/presetter/commit/b416f2794e80760369de07edd013b1e9eae274e7))


### 📚 Documentation

* correct path to preset-esm in README.md ([50b90e6](https://github.com/alvis/presetter/commit/50b90e6e4681fda590daeadcc732485df3453bc5))
* update badges ([8e01243](https://github.com/alvis/presetter/commit/8e01243104d4f4841f8c4eff7bf1b8ee67d8d28d))


### ♻️ Chores

* **release:** publish v5.0.0 ([b14893d](https://github.com/alvis/presetter/commit/b14893d46c68aa66d9de6fd098e96a34d2810203))
* update pnpm to v9.6 to use catalog ([607fc68](https://github.com/alvis/presetter/commit/607fc686b7d57fb22e4c769561a7b453cf4cf750))


### Breaking changes

* **preset-esm:** jest is completely removed from preset-esm



## 4.7.2 (2024-03-07)


### ♻️ Chores

* **release:** publish v4.7.2 ([7d8fe75](https://github.com/alvis/presetter/commit/7d8fe75c0944e0bbd9311fd6082956da0d1b5b9c))



## 4.7.1 (2024-03-06)


### ♻️ Chores

* **release:** publish v4.7.1 ([b8f09a2](https://github.com/alvis/presetter/commit/b8f09a2f081a87c382fd825d74b4a318112aedba))



# 4.7.0 (2024-02-27)


### 🐛 Bug Fixes

* **preset-strict:** remove header rule ([4a56d6c](https://github.com/alvis/presetter/commit/4a56d6ccdedf4626baf0552aa902a70a173c6a22))


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **preset-esm:** allow short circuit and ternary operations ([463ae6f](https://github.com/alvis/presetter/commit/463ae6fd6c22946f0f5c014d466837c78668a5ac))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### ♻️ Chores

* **release:** publish v4.4.2 ([b380a99](https://github.com/alvis/presetter/commit/b380a990b235102ce988b59237dd00a138602d71))



## 4.4.1 (2023-10-06)


### ♻️ Chores

* **release:** publish v4.4.1 ([b383245](https://github.com/alvis/presetter/commit/b3832456a2aec9cd2c55240007d490e3b8c00090))



# 4.4.0 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.4.0 ([227ede5](https://github.com/alvis/presetter/commit/227ede5ca13bc496b5cbae1631697fdfee3c5149))



## 4.3.1 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.3.1 ([c73fa5a](https://github.com/alvis/presetter/commit/c73fa5a21570a39c4ecfb942e79ebaab4f7916d0))



# 4.3.0 (2023-09-20)


### 🐛 Bug Fixes

* **preset-strict:** remove redundant thresholds ([45b0521](https://github.com/alvis/presetter/commit/45b0521f1c95ec3b9796936e996c682f64590da6))


### ♻️ Chores

* **release:** publish v4.3.0 ([f088932](https://github.com/alvis/presetter/commit/f088932473eaeec728f37a09997d2a1d47931164))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### ♻️ Chores

* **release:** publish v4.1.1 ([3e3ae47](https://github.com/alvis/presetter/commit/3e3ae473b5e2ce99edb8f7f4f339ced297ffe1d5))



# 4.1.0 (2023-07-13)


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

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


### 🛠 Builds

* **preset-strict:** remove source files from the final build ([8e99425](https://github.com/alvis/presetter/commit/8e99425619ef1d686d81dac3d57bb55a858a1521))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


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

* **preset-strict:** correct the template paths for bootstrapping ([f71bf8f](https://github.com/alvis/presetter/commit/f71bf8f390b0d3a7e5469fe5298464e6ab212b51))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-strict:** extends preset-essentials for a stricter rules ([d7a73f8](https://github.com/alvis/presetter/commit/d7a73f880560b670379c45b55d9ef6b1946b73be))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset:** include test files in eslint ([fab68c5](https://github.com/alvis/presetter/commit/fab68c5ced14613366e370f254c2f9362b855b17))


### 🐛 Bug Fixes

* **preset-strict:** add & as an escape in no-secret rule ([72f7f0d](https://github.com/alvis/presetter/commit/72f7f0d6f18afd32930d13100079de29da518c78))
* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))
* **preset:** pass eslint stage check if ignored ([8b2e048](https://github.com/alvis/presetter/commit/8b2e048abf4ca55b86da6377e8d570a256e3bd00))


### 📦 Code Refactoring

* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))
* simplify module spying ([bb8eac1](https://github.com/alvis/presetter/commit/bb8eac1bde9cdab77f2a25161b0ac195b7e37b9f))


### ♻️ Chores

* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))


### 🐛 Bug Fixes

* **preset:** lessen eslint for real-world usage ([907cb62](https://github.com/alvis/presetter/commit/907cb62c9cc473cf8aa7d2dd55ee3a785337d326))
* **preset:** update tools to the latest versions ([b416f27](https://github.com/alvis/presetter/commit/b416f2794e80760369de07edd013b1e9eae274e7))


### 📚 Documentation

* correct path to preset-esm in README.md ([50b90e6](https://github.com/alvis/presetter/commit/50b90e6e4681fda590daeadcc732485df3453bc5))
* update badges ([8e01243](https://github.com/alvis/presetter/commit/8e01243104d4f4841f8c4eff7bf1b8ee67d8d28d))


### ♻️ Chores

* **release:** publish v5.0.0 ([b14893d](https://github.com/alvis/presetter/commit/b14893d46c68aa66d9de6fd098e96a34d2810203))
* update pnpm to v9.6 to use catalog ([607fc68](https://github.com/alvis/presetter/commit/607fc686b7d57fb22e4c769561a7b453cf4cf750))


### Breaking changes

* **preset-esm:** jest is completely removed from preset-esm



## 4.7.2 (2024-03-07)


### ♻️ Chores

* **release:** publish v4.7.2 ([7d8fe75](https://github.com/alvis/presetter/commit/7d8fe75c0944e0bbd9311fd6082956da0d1b5b9c))



## 4.7.1 (2024-03-06)


### ♻️ Chores

* **release:** publish v4.7.1 ([b8f09a2](https://github.com/alvis/presetter/commit/b8f09a2f081a87c382fd825d74b4a318112aedba))



# 4.7.0 (2024-02-27)


### 🐛 Bug Fixes

* **preset-strict:** remove header rule ([4a56d6c](https://github.com/alvis/presetter/commit/4a56d6ccdedf4626baf0552aa902a70a173c6a22))


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **preset-esm:** allow short circuit and ternary operations ([463ae6f](https://github.com/alvis/presetter/commit/463ae6fd6c22946f0f5c014d466837c78668a5ac))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### ♻️ Chores

* **release:** publish v4.4.2 ([b380a99](https://github.com/alvis/presetter/commit/b380a990b235102ce988b59237dd00a138602d71))



## 4.4.1 (2023-10-06)


### ♻️ Chores

* **release:** publish v4.4.1 ([b383245](https://github.com/alvis/presetter/commit/b3832456a2aec9cd2c55240007d490e3b8c00090))



# 4.4.0 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.4.0 ([227ede5](https://github.com/alvis/presetter/commit/227ede5ca13bc496b5cbae1631697fdfee3c5149))



## 4.3.1 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.3.1 ([c73fa5a](https://github.com/alvis/presetter/commit/c73fa5a21570a39c4ecfb942e79ebaab4f7916d0))



# 4.3.0 (2023-09-20)


### 🐛 Bug Fixes

* **preset-strict:** remove redundant thresholds ([45b0521](https://github.com/alvis/presetter/commit/45b0521f1c95ec3b9796936e996c682f64590da6))


### ♻️ Chores

* **release:** publish v4.3.0 ([f088932](https://github.com/alvis/presetter/commit/f088932473eaeec728f37a09997d2a1d47931164))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### ♻️ Chores

* **release:** publish v4.1.1 ([3e3ae47](https://github.com/alvis/presetter/commit/3e3ae473b5e2ce99edb8f7f4f339ced297ffe1d5))



# 4.1.0 (2023-07-13)


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

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


### 🛠 Builds

* **preset-strict:** remove source files from the final build ([8e99425](https://github.com/alvis/presetter/commit/8e99425619ef1d686d81dac3d57bb55a858a1521))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


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

* **preset-strict:** correct the template paths for bootstrapping ([f71bf8f](https://github.com/alvis/presetter/commit/f71bf8f390b0d3a7e5469fe5298464e6ab212b51))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-strict:** extends preset-essentials for a stricter rules ([d7a73f8](https://github.com/alvis/presetter/commit/d7a73f880560b670379c45b55d9ef6b1946b73be))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))


### 🐛 Bug Fixes

* **preset:** lessen eslint for real-world usage ([907cb62](https://github.com/alvis/presetter/commit/907cb62c9cc473cf8aa7d2dd55ee3a785337d326))
* **preset:** update tools to the latest versions ([b416f27](https://github.com/alvis/presetter/commit/b416f2794e80760369de07edd013b1e9eae274e7))


### 📚 Documentation

* correct path to preset-esm in README.md ([50b90e6](https://github.com/alvis/presetter/commit/50b90e6e4681fda590daeadcc732485df3453bc5))
* update badges ([8e01243](https://github.com/alvis/presetter/commit/8e01243104d4f4841f8c4eff7bf1b8ee67d8d28d))


### ♻️ Chores

* update pnpm to v9.6 to use catalog ([607fc68](https://github.com/alvis/presetter/commit/607fc686b7d57fb22e4c769561a7b453cf4cf750))


### Breaking changes

* **preset-esm:** jest is completely removed from preset-esm



## 4.7.2 (2024-03-07)


### ♻️ Chores

* **release:** publish v4.7.2 ([7d8fe75](https://github.com/alvis/presetter/commit/7d8fe75c0944e0bbd9311fd6082956da0d1b5b9c))



## 4.7.1 (2024-03-06)


### ♻️ Chores

* **release:** publish v4.7.1 ([b8f09a2](https://github.com/alvis/presetter/commit/b8f09a2f081a87c382fd825d74b4a318112aedba))



# 4.7.0 (2024-02-27)


### 🐛 Bug Fixes

* **preset-strict:** remove header rule ([4a56d6c](https://github.com/alvis/presetter/commit/4a56d6ccdedf4626baf0552aa902a70a173c6a22))


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **preset-esm:** allow short circuit and ternary operations ([463ae6f](https://github.com/alvis/presetter/commit/463ae6fd6c22946f0f5c014d466837c78668a5ac))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### ♻️ Chores

* **release:** publish v4.4.2 ([b380a99](https://github.com/alvis/presetter/commit/b380a990b235102ce988b59237dd00a138602d71))



## 4.4.1 (2023-10-06)


### ♻️ Chores

* **release:** publish v4.4.1 ([b383245](https://github.com/alvis/presetter/commit/b3832456a2aec9cd2c55240007d490e3b8c00090))



# 4.4.0 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.4.0 ([227ede5](https://github.com/alvis/presetter/commit/227ede5ca13bc496b5cbae1631697fdfee3c5149))



## 4.3.1 (2023-10-03)


### ♻️ Chores

* **release:** publish v4.3.1 ([c73fa5a](https://github.com/alvis/presetter/commit/c73fa5a21570a39c4ecfb942e79ebaab4f7916d0))



# 4.3.0 (2023-09-20)


### 🐛 Bug Fixes

* **preset-strict:** remove redundant thresholds ([45b0521](https://github.com/alvis/presetter/commit/45b0521f1c95ec3b9796936e996c682f64590da6))


### ♻️ Chores

* **release:** publish v4.3.0 ([f088932](https://github.com/alvis/presetter/commit/f088932473eaeec728f37a09997d2a1d47931164))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### ♻️ Chores

* **release:** publish v4.1.1 ([3e3ae47](https://github.com/alvis/presetter/commit/3e3ae473b5e2ce99edb8f7f4f339ced297ffe1d5))



# 4.1.0 (2023-07-13)


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

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


### 🛠 Builds

* **preset-strict:** remove source files from the final build ([8e99425](https://github.com/alvis/presetter/commit/8e99425619ef1d686d81dac3d57bb55a858a1521))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))


### ♻️ Chores

* **release:** publish v3.3.0 ([7eaabf6](https://github.com/alvis/presetter/commit/7eaabf69d2908a447b2023fb4846ef4939f56d96))



# 3.2.0 (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))
* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


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

* **preset-strict:** correct the template paths for bootstrapping ([f71bf8f](https://github.com/alvis/presetter/commit/f71bf8f390b0d3a7e5469fe5298464e6ab212b51))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-strict:** extends preset-essentials for a stricter rules ([d7a73f8](https://github.com/alvis/presetter/commit/d7a73f880560b670379c45b55d9ef6b1946b73be))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## [4.7.2](https://github.com/alvis/presetter/compare/v4.7.1...v4.7.2) (2024-03-07)



## [4.7.1](https://github.com/alvis/presetter/compare/v4.7.0...v4.7.1) (2024-03-06)



# [4.7.0](https://github.com/alvis/presetter/compare/v4.6.0...v4.7.0) (2024-02-27)


### 🐛 Bug Fixes

* **preset-strict:** remove header rule ([4a56d6c](https://github.com/alvis/presetter/commit/4a56d6ccdedf4626baf0552aa902a70a173c6a22))



# [4.6.0](https://github.com/alvis/presetter/compare/v4.5.0...v4.6.0) (2024-01-22)



# [4.5.0](https://github.com/alvis/presetter/compare/v4.4.2...v4.5.0) (2024-01-04)


### 🐛 Bug Fixes

* **preset-esm:** allow short circuit and ternary operations ([463ae6f](https://github.com/alvis/presetter/commit/463ae6fd6c22946f0f5c014d466837c78668a5ac))



## [4.4.2](https://github.com/alvis/presetter/compare/v4.4.1...v4.4.2) (2023-10-27)



## [4.4.1](https://github.com/alvis/presetter/compare/v4.4.0...v4.4.1) (2023-10-06)



# [4.4.0](https://github.com/alvis/presetter/compare/v4.3.1...v4.4.0) (2023-10-03)



## [4.3.1](https://github.com/alvis/presetter/compare/v4.3.0...v4.3.1) (2023-10-03)



# [4.3.0](https://github.com/alvis/presetter/compare/v4.2.0...v4.3.0) (2023-09-20)


### 🐛 Bug Fixes

* **preset-strict:** remove redundant thresholds ([45b0521](https://github.com/alvis/presetter/commit/45b0521f1c95ec3b9796936e996c682f64590da6))



# [4.2.0](https://github.com/alvis/presetter/compare/v4.1.2...v4.2.0) (2023-09-13)



## [4.1.2](https://github.com/alvis/presetter/compare/v4.1.1...v4.1.2) (2023-07-26)



## [4.1.1](https://github.com/alvis/presetter/compare/v4.1.0...v4.1.1) (2023-07-14)



# [4.1.0](https://github.com/alvis/presetter/compare/v4.0.1...v4.1.0) (2023-07-13)



## [4.0.1](https://github.com/alvis/presetter/compare/v4.0.0...v4.0.1) (2023-06-21)



# [4.0.0](https://github.com/alvis/presetter/compare/v3.5.5...v4.0.0) (2023-06-18)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
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


### 🛠 Builds

* **preset-strict:** remove source files from the final build ([8e99425](https://github.com/alvis/presetter/commit/8e99425619ef1d686d81dac3d57bb55a858a1521))



## [3.5.2](https://github.com/alvis/presetter/compare/v3.5.1...v3.5.2) (2023-03-26)



## [3.5.1](https://github.com/alvis/presetter/compare/v3.5.0...v3.5.1) (2023-03-18)



# [3.5.0](https://github.com/alvis/presetter/compare/v3.4.1...v3.5.0) (2022-09-23)



## [3.4.1](https://github.com/alvis/presetter/compare/v3.4.0...v3.4.1) (2022-08-10)


### 🐛 Bug Fixes

* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))



# [3.4.0](https://github.com/alvis/presetter/compare/v3.3.0...v3.4.0) (2022-08-02)


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))



# [3.3.0](https://github.com/alvis/presetter/compare/v3.2.0...v3.3.0) (2022-07-12)


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))



# [3.2.0](https://github.com/alvis/presetter/compare/v3.1.1...v3.2.0) (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## [3.1.1](https://github.com/alvis/presetter/compare/v3.1.0...v3.1.1) (2021-12-29)



# [3.1.0](https://github.com/alvis/presetter/compare/v3.0.3...v3.1.0) (2021-12-28)


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))



## [3.0.3](https://github.com/alvis/presetter/compare/v3.0.2...v3.0.3) (2021-11-03)



## [3.0.2](https://github.com/alvis/presetter/compare/v3.0.1...v3.0.2) (2021-11-03)



## [3.0.1](https://github.com/alvis/presetter/compare/v3.0.0...v3.0.1) (2021-10-14)


### 🐛 Bug Fixes

* **preset-strict:** correct the template paths for bootstrapping ([f71bf8f](https://github.com/alvis/presetter/commit/f71bf8f390b0d3a7e5469fe5298464e6ab212b51))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))



# [3.0.0](https://github.com/alvis/presetter/compare/v2.1.0...v3.0.0) (2021-10-04)


### ✨ Features

* **preset-strict:** extends preset-essentials for a stricter rules ([d7a73f8](https://github.com/alvis/presetter/commit/d7a73f880560b670379c45b55d9ef6b1946b73be))
