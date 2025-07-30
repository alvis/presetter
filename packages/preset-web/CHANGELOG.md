# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 8.0.8 (2025-07-30)



## 8.0.7 (2025-07-30)


### 🐛 Bug Fixes

* **preset-web:** change tailwindcss rules to warn only ([28e4a5e](https://github.com/alvis/presetter/commit/28e4a5ef67fff1b5e15a2133e4d7e1c94ac999a3))


### ♻️ Chores

* **release:** publish v8.0.7 ([f6dd8e1](https://github.com/alvis/presetter/commit/f6dd8e175824fc4dd98c715a0a4c368250fa646f))



## 8.0.6 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.6 ([de97a72](https://github.com/alvis/presetter/commit/de97a7215a2a9955c750404f1ba75908492299e3))



## 8.0.5 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.5 ([04edde7](https://github.com/alvis/presetter/commit/04edde7f36e9275115a484aed94eee9b96547e6a))



## 8.0.4 (2025-07-30)


### 🐛 Bug Fixes

* **preset-web:** consider additional classes by default ([b969cfb](https://github.com/alvis/presetter/commit/b969cfb769c981977e643df3714b64e1fbd0c884))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### 🐛 Bug Fixes

* **preset-web:** avoid using import.meta.resolve for relative import ([252adb2](https://github.com/alvis/presetter/commit/252adb27a584e736cda17e168185e9a0a051a23c))


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-essentials:** recursively detect tailwind import ([8d7b51e](https://github.com/alvis/presetter/commit/8d7b51e85084d9c8e40d20790cf295852ce8fa55))
* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))
* **tailwind:** follow modular import resolution ([ce99a00](https://github.com/alvis/presetter/commit/ce99a00edabb4e51dd5e738cdbc8196cffe9bcea))


### 🐛 Bug Fixes

* **preset-web:** add name for tailwindcss eslint rules ([3df1175](https://github.com/alvis/presetter/commit/3df1175131ab9b54d1c44f5263caf9958720bd0f))
* **preset-web:** try to load main css under .storybook ([77d7b85](https://github.com/alvis/presetter/commit/77d7b8539021bec337e06e012cbff46724300e82))


### 📦 Code Refactoring

* **preset-essentials:** separate tailwind related logic ([a24f7bd](https://github.com/alvis/presetter/commit/a24f7bd0295fd3643302701eaa9c825646a9b2d2))


### 🚨 Tests

* **preset-web:** refactor content mocking to reduce switch cases ([1d0133e](https://github.com/alvis/presetter/commit/1d0133ef2036bd51259b8378210c2a8d9e8d80fa))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### ✨ Features

* **preset-web:** add storybook for web testing ([11279ac](https://github.com/alvis/presetter/commit/11279ac4d49fe83af04460e3af691db93feb98a9))


### 🐛 Bug Fixes

* **preset-react:** remove incompatible addons to storybook v9 ([303dc3a](https://github.com/alvis/presetter/commit/303dc3a6050ecab7760912db2bda3ff42c53cb31))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **preset-web:** fix a typo on prettier config file ([8eaaf66](https://github.com/alvis/presetter/commit/8eaaf66c323e0871e4f75cc2cc4aca50ac696fca))
* **preset-web:** look for entry css file for tailwind v4 ([294e195](https://github.com/alvis/presetter/commit/294e19525500aeb354ffc9dd18393f37570c393e))


### 📦 Code Refactoring

* **preset:** simplify eslint templates ([5761edd](https://github.com/alvis/presetter/commit/5761edd0dbecb72de5d129ef20223afd6e54f1f9))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))


### 💎 Styles

* **preset-web:** remove unused types ([45fb81a](https://github.com/alvis/presetter/commit/45fb81a31355e1379306881188282626501d63ef))



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## 8.0.7 (2025-07-30)


### 🐛 Bug Fixes

* **preset-web:** change tailwindcss rules to warn only ([28e4a5e](https://github.com/alvis/presetter/commit/28e4a5ef67fff1b5e15a2133e4d7e1c94ac999a3))



## 8.0.6 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.6 ([de97a72](https://github.com/alvis/presetter/commit/de97a7215a2a9955c750404f1ba75908492299e3))



## 8.0.5 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.5 ([04edde7](https://github.com/alvis/presetter/commit/04edde7f36e9275115a484aed94eee9b96547e6a))



## 8.0.4 (2025-07-30)


### 🐛 Bug Fixes

* **preset-web:** consider additional classes by default ([b969cfb](https://github.com/alvis/presetter/commit/b969cfb769c981977e643df3714b64e1fbd0c884))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### 🐛 Bug Fixes

* **preset-web:** avoid using import.meta.resolve for relative import ([252adb2](https://github.com/alvis/presetter/commit/252adb27a584e736cda17e168185e9a0a051a23c))


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-essentials:** recursively detect tailwind import ([8d7b51e](https://github.com/alvis/presetter/commit/8d7b51e85084d9c8e40d20790cf295852ce8fa55))
* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))
* **tailwind:** follow modular import resolution ([ce99a00](https://github.com/alvis/presetter/commit/ce99a00edabb4e51dd5e738cdbc8196cffe9bcea))


### 🐛 Bug Fixes

* **preset-web:** add name for tailwindcss eslint rules ([3df1175](https://github.com/alvis/presetter/commit/3df1175131ab9b54d1c44f5263caf9958720bd0f))
* **preset-web:** try to load main css under .storybook ([77d7b85](https://github.com/alvis/presetter/commit/77d7b8539021bec337e06e012cbff46724300e82))


### 📦 Code Refactoring

* **preset-essentials:** separate tailwind related logic ([a24f7bd](https://github.com/alvis/presetter/commit/a24f7bd0295fd3643302701eaa9c825646a9b2d2))


### 🚨 Tests

* **preset-web:** refactor content mocking to reduce switch cases ([1d0133e](https://github.com/alvis/presetter/commit/1d0133ef2036bd51259b8378210c2a8d9e8d80fa))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### ✨ Features

* **preset-web:** add storybook for web testing ([11279ac](https://github.com/alvis/presetter/commit/11279ac4d49fe83af04460e3af691db93feb98a9))


### 🐛 Bug Fixes

* **preset-react:** remove incompatible addons to storybook v9 ([303dc3a](https://github.com/alvis/presetter/commit/303dc3a6050ecab7760912db2bda3ff42c53cb31))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **preset-web:** fix a typo on prettier config file ([8eaaf66](https://github.com/alvis/presetter/commit/8eaaf66c323e0871e4f75cc2cc4aca50ac696fca))
* **preset-web:** look for entry css file for tailwind v4 ([294e195](https://github.com/alvis/presetter/commit/294e19525500aeb354ffc9dd18393f37570c393e))


### 📦 Code Refactoring

* **preset:** simplify eslint templates ([5761edd](https://github.com/alvis/presetter/commit/5761edd0dbecb72de5d129ef20223afd6e54f1f9))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))


### 💎 Styles

* **preset-web:** remove unused types ([45fb81a](https://github.com/alvis/presetter/commit/45fb81a31355e1379306881188282626501d63ef))



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## 8.0.6 (2025-07-30)



## 8.0.5 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.5 ([04edde7](https://github.com/alvis/presetter/commit/04edde7f36e9275115a484aed94eee9b96547e6a))



## 8.0.4 (2025-07-30)


### 🐛 Bug Fixes

* **preset-web:** consider additional classes by default ([b969cfb](https://github.com/alvis/presetter/commit/b969cfb769c981977e643df3714b64e1fbd0c884))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### 🐛 Bug Fixes

* **preset-web:** avoid using import.meta.resolve for relative import ([252adb2](https://github.com/alvis/presetter/commit/252adb27a584e736cda17e168185e9a0a051a23c))


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-essentials:** recursively detect tailwind import ([8d7b51e](https://github.com/alvis/presetter/commit/8d7b51e85084d9c8e40d20790cf295852ce8fa55))
* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))
* **tailwind:** follow modular import resolution ([ce99a00](https://github.com/alvis/presetter/commit/ce99a00edabb4e51dd5e738cdbc8196cffe9bcea))


### 🐛 Bug Fixes

* **preset-web:** add name for tailwindcss eslint rules ([3df1175](https://github.com/alvis/presetter/commit/3df1175131ab9b54d1c44f5263caf9958720bd0f))
* **preset-web:** try to load main css under .storybook ([77d7b85](https://github.com/alvis/presetter/commit/77d7b8539021bec337e06e012cbff46724300e82))


### 📦 Code Refactoring

* **preset-essentials:** separate tailwind related logic ([a24f7bd](https://github.com/alvis/presetter/commit/a24f7bd0295fd3643302701eaa9c825646a9b2d2))


### 🚨 Tests

* **preset-web:** refactor content mocking to reduce switch cases ([1d0133e](https://github.com/alvis/presetter/commit/1d0133ef2036bd51259b8378210c2a8d9e8d80fa))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### ✨ Features

* **preset-web:** add storybook for web testing ([11279ac](https://github.com/alvis/presetter/commit/11279ac4d49fe83af04460e3af691db93feb98a9))


### 🐛 Bug Fixes

* **preset-react:** remove incompatible addons to storybook v9 ([303dc3a](https://github.com/alvis/presetter/commit/303dc3a6050ecab7760912db2bda3ff42c53cb31))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **preset-web:** fix a typo on prettier config file ([8eaaf66](https://github.com/alvis/presetter/commit/8eaaf66c323e0871e4f75cc2cc4aca50ac696fca))
* **preset-web:** look for entry css file for tailwind v4 ([294e195](https://github.com/alvis/presetter/commit/294e19525500aeb354ffc9dd18393f37570c393e))


### 📦 Code Refactoring

* **preset:** simplify eslint templates ([5761edd](https://github.com/alvis/presetter/commit/5761edd0dbecb72de5d129ef20223afd6e54f1f9))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))


### 💎 Styles

* **preset-web:** remove unused types ([45fb81a](https://github.com/alvis/presetter/commit/45fb81a31355e1379306881188282626501d63ef))



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## 8.0.5 (2025-07-30)



## 8.0.4 (2025-07-30)


### 🐛 Bug Fixes

* **preset-web:** consider additional classes by default ([b969cfb](https://github.com/alvis/presetter/commit/b969cfb769c981977e643df3714b64e1fbd0c884))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### 🐛 Bug Fixes

* **preset-web:** avoid using import.meta.resolve for relative import ([252adb2](https://github.com/alvis/presetter/commit/252adb27a584e736cda17e168185e9a0a051a23c))


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-essentials:** recursively detect tailwind import ([8d7b51e](https://github.com/alvis/presetter/commit/8d7b51e85084d9c8e40d20790cf295852ce8fa55))
* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))
* **tailwind:** follow modular import resolution ([ce99a00](https://github.com/alvis/presetter/commit/ce99a00edabb4e51dd5e738cdbc8196cffe9bcea))


### 🐛 Bug Fixes

* **preset-web:** add name for tailwindcss eslint rules ([3df1175](https://github.com/alvis/presetter/commit/3df1175131ab9b54d1c44f5263caf9958720bd0f))
* **preset-web:** try to load main css under .storybook ([77d7b85](https://github.com/alvis/presetter/commit/77d7b8539021bec337e06e012cbff46724300e82))


### 📦 Code Refactoring

* **preset-essentials:** separate tailwind related logic ([a24f7bd](https://github.com/alvis/presetter/commit/a24f7bd0295fd3643302701eaa9c825646a9b2d2))


### 🚨 Tests

* **preset-web:** refactor content mocking to reduce switch cases ([1d0133e](https://github.com/alvis/presetter/commit/1d0133ef2036bd51259b8378210c2a8d9e8d80fa))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### ✨ Features

* **preset-web:** add storybook for web testing ([11279ac](https://github.com/alvis/presetter/commit/11279ac4d49fe83af04460e3af691db93feb98a9))


### 🐛 Bug Fixes

* **preset-react:** remove incompatible addons to storybook v9 ([303dc3a](https://github.com/alvis/presetter/commit/303dc3a6050ecab7760912db2bda3ff42c53cb31))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **preset-web:** fix a typo on prettier config file ([8eaaf66](https://github.com/alvis/presetter/commit/8eaaf66c323e0871e4f75cc2cc4aca50ac696fca))
* **preset-web:** look for entry css file for tailwind v4 ([294e195](https://github.com/alvis/presetter/commit/294e19525500aeb354ffc9dd18393f37570c393e))


### 📦 Code Refactoring

* **preset:** simplify eslint templates ([5761edd](https://github.com/alvis/presetter/commit/5761edd0dbecb72de5d129ef20223afd6e54f1f9))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))


### 💎 Styles

* **preset-web:** remove unused types ([45fb81a](https://github.com/alvis/presetter/commit/45fb81a31355e1379306881188282626501d63ef))



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## 8.0.4 (2025-07-30)


### 🐛 Bug Fixes

* **preset-web:** consider additional classes by default ([b969cfb](https://github.com/alvis/presetter/commit/b969cfb769c981977e643df3714b64e1fbd0c884))



## 8.0.3 (2025-07-20)


### 🐛 Bug Fixes

* **preset-web:** avoid using import.meta.resolve for relative import ([252adb2](https://github.com/alvis/presetter/commit/252adb27a584e736cda17e168185e9a0a051a23c))


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-essentials:** recursively detect tailwind import ([8d7b51e](https://github.com/alvis/presetter/commit/8d7b51e85084d9c8e40d20790cf295852ce8fa55))
* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))
* **tailwind:** follow modular import resolution ([ce99a00](https://github.com/alvis/presetter/commit/ce99a00edabb4e51dd5e738cdbc8196cffe9bcea))


### 🐛 Bug Fixes

* **preset-web:** add name for tailwindcss eslint rules ([3df1175](https://github.com/alvis/presetter/commit/3df1175131ab9b54d1c44f5263caf9958720bd0f))
* **preset-web:** try to load main css under .storybook ([77d7b85](https://github.com/alvis/presetter/commit/77d7b8539021bec337e06e012cbff46724300e82))


### 📦 Code Refactoring

* **preset-essentials:** separate tailwind related logic ([a24f7bd](https://github.com/alvis/presetter/commit/a24f7bd0295fd3643302701eaa9c825646a9b2d2))


### 🚨 Tests

* **preset-web:** refactor content mocking to reduce switch cases ([1d0133e](https://github.com/alvis/presetter/commit/1d0133ef2036bd51259b8378210c2a8d9e8d80fa))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### ✨ Features

* **preset-web:** add storybook for web testing ([11279ac](https://github.com/alvis/presetter/commit/11279ac4d49fe83af04460e3af691db93feb98a9))


### 🐛 Bug Fixes

* **preset-react:** remove incompatible addons to storybook v9 ([303dc3a](https://github.com/alvis/presetter/commit/303dc3a6050ecab7760912db2bda3ff42c53cb31))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **preset-web:** fix a typo on prettier config file ([8eaaf66](https://github.com/alvis/presetter/commit/8eaaf66c323e0871e4f75cc2cc4aca50ac696fca))
* **preset-web:** look for entry css file for tailwind v4 ([294e195](https://github.com/alvis/presetter/commit/294e19525500aeb354ffc9dd18393f37570c393e))


### 📦 Code Refactoring

* **preset:** simplify eslint templates ([5761edd](https://github.com/alvis/presetter/commit/5761edd0dbecb72de5d129ef20223afd6e54f1f9))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))


### 💎 Styles

* **preset-web:** remove unused types ([45fb81a](https://github.com/alvis/presetter/commit/45fb81a31355e1379306881188282626501d63ef))



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## 8.0.3 (2025-07-20)


### 🐛 Bug Fixes

* **preset-web:** avoid using import.meta.resolve for relative import ([252adb2](https://github.com/alvis/presetter/commit/252adb27a584e736cda17e168185e9a0a051a23c))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-essentials:** recursively detect tailwind import ([8d7b51e](https://github.com/alvis/presetter/commit/8d7b51e85084d9c8e40d20790cf295852ce8fa55))
* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))
* **tailwind:** follow modular import resolution ([ce99a00](https://github.com/alvis/presetter/commit/ce99a00edabb4e51dd5e738cdbc8196cffe9bcea))


### 🐛 Bug Fixes

* **preset-web:** add name for tailwindcss eslint rules ([3df1175](https://github.com/alvis/presetter/commit/3df1175131ab9b54d1c44f5263caf9958720bd0f))
* **preset-web:** try to load main css under .storybook ([77d7b85](https://github.com/alvis/presetter/commit/77d7b8539021bec337e06e012cbff46724300e82))


### 📦 Code Refactoring

* **preset-essentials:** separate tailwind related logic ([a24f7bd](https://github.com/alvis/presetter/commit/a24f7bd0295fd3643302701eaa9c825646a9b2d2))


### 🚨 Tests

* **preset-web:** refactor content mocking to reduce switch cases ([1d0133e](https://github.com/alvis/presetter/commit/1d0133ef2036bd51259b8378210c2a8d9e8d80fa))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### ✨ Features

* **preset-web:** add storybook for web testing ([11279ac](https://github.com/alvis/presetter/commit/11279ac4d49fe83af04460e3af691db93feb98a9))


### 🐛 Bug Fixes

* **preset-react:** remove incompatible addons to storybook v9 ([303dc3a](https://github.com/alvis/presetter/commit/303dc3a6050ecab7760912db2bda3ff42c53cb31))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **preset-web:** fix a typo on prettier config file ([8eaaf66](https://github.com/alvis/presetter/commit/8eaaf66c323e0871e4f75cc2cc4aca50ac696fca))
* **preset-web:** look for entry css file for tailwind v4 ([294e195](https://github.com/alvis/presetter/commit/294e19525500aeb354ffc9dd18393f37570c393e))


### 📦 Code Refactoring

* **preset:** simplify eslint templates ([5761edd](https://github.com/alvis/presetter/commit/5761edd0dbecb72de5d129ef20223afd6e54f1f9))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))


### 💎 Styles

* **preset-web:** remove unused types ([45fb81a](https://github.com/alvis/presetter/commit/45fb81a31355e1379306881188282626501d63ef))



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-essentials:** recursively detect tailwind import ([8d7b51e](https://github.com/alvis/presetter/commit/8d7b51e85084d9c8e40d20790cf295852ce8fa55))
* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))
* **tailwind:** follow modular import resolution ([ce99a00](https://github.com/alvis/presetter/commit/ce99a00edabb4e51dd5e738cdbc8196cffe9bcea))


### 🐛 Bug Fixes

* **preset-web:** add name for tailwindcss eslint rules ([3df1175](https://github.com/alvis/presetter/commit/3df1175131ab9b54d1c44f5263caf9958720bd0f))
* **preset-web:** try to load main css under .storybook ([77d7b85](https://github.com/alvis/presetter/commit/77d7b8539021bec337e06e012cbff46724300e82))


### 📦 Code Refactoring

* **preset-essentials:** separate tailwind related logic ([a24f7bd](https://github.com/alvis/presetter/commit/a24f7bd0295fd3643302701eaa9c825646a9b2d2))


### 🚨 Tests

* **preset-web:** refactor content mocking to reduce switch cases ([1d0133e](https://github.com/alvis/presetter/commit/1d0133ef2036bd51259b8378210c2a8d9e8d80fa))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### ✨ Features

* **preset-web:** add storybook for web testing ([11279ac](https://github.com/alvis/presetter/commit/11279ac4d49fe83af04460e3af691db93feb98a9))


### 🐛 Bug Fixes

* **preset-react:** remove incompatible addons to storybook v9 ([303dc3a](https://github.com/alvis/presetter/commit/303dc3a6050ecab7760912db2bda3ff42c53cb31))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **preset-web:** fix a typo on prettier config file ([8eaaf66](https://github.com/alvis/presetter/commit/8eaaf66c323e0871e4f75cc2cc4aca50ac696fca))
* **preset-web:** look for entry css file for tailwind v4 ([294e195](https://github.com/alvis/presetter/commit/294e19525500aeb354ffc9dd18393f37570c393e))


### 📦 Code Refactoring

* **preset:** simplify eslint templates ([5761edd](https://github.com/alvis/presetter/commit/5761edd0dbecb72de5d129ef20223afd6e54f1f9))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))


### 💎 Styles

* **preset-web:** remove unused types ([45fb81a](https://github.com/alvis/presetter/commit/45fb81a31355e1379306881188282626501d63ef))



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## 8.0.1 (2025-06-27)



# 8.0.0 (2025-06-27)


### ✨ Features

* **preset-web:** add storybook for web testing ([11279ac](https://github.com/alvis/presetter/commit/11279ac4d49fe83af04460e3af691db93feb98a9))


### 🐛 Bug Fixes

* **preset-react:** remove incompatible addons to storybook v9 ([303dc3a](https://github.com/alvis/presetter/commit/303dc3a6050ecab7760912db2bda3ff42c53cb31))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **preset-web:** fix a typo on prettier config file ([8eaaf66](https://github.com/alvis/presetter/commit/8eaaf66c323e0871e4f75cc2cc4aca50ac696fca))
* **preset-web:** look for entry css file for tailwind v4 ([294e195](https://github.com/alvis/presetter/commit/294e19525500aeb354ffc9dd18393f37570c393e))


### 📦 Code Refactoring

* **preset:** simplify eslint templates ([5761edd](https://github.com/alvis/presetter/commit/5761edd0dbecb72de5d129ef20223afd6e54f1f9))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))


### 💎 Styles

* **preset-web:** remove unused types ([45fb81a](https://github.com/alvis/presetter/commit/45fb81a31355e1379306881188282626501d63ef))



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 8.0.0 (2025-06-27)


### ✨ Features

* **preset-web:** add storybook for web testing ([11279ac](https://github.com/alvis/presetter/commit/11279ac4d49fe83af04460e3af691db93feb98a9))


### 🐛 Bug Fixes

* **preset-react:** remove incompatible addons to storybook v9 ([303dc3a](https://github.com/alvis/presetter/commit/303dc3a6050ecab7760912db2bda3ff42c53cb31))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **preset-web:** fix a typo on prettier config file ([8eaaf66](https://github.com/alvis/presetter/commit/8eaaf66c323e0871e4f75cc2cc4aca50ac696fca))
* **preset-web:** look for entry css file for tailwind v4 ([294e195](https://github.com/alvis/presetter/commit/294e19525500aeb354ffc9dd18393f37570c393e))


### 📦 Code Refactoring

* **preset:** simplify eslint templates ([5761edd](https://github.com/alvis/presetter/commit/5761edd0dbecb72de5d129ef20223afd6e54f1f9))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### 💎 Styles

* **preset-web:** remove unused types ([45fb81a](https://github.com/alvis/presetter/commit/45fb81a31355e1379306881188282626501d63ef))



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 7.3.0 (2025-04-21)


### 🐛 Bug Fixes

* **preset:** include accumulated eslint configs ([00a4d72](https://github.com/alvis/presetter/commit/00a4d72f29743b1da6f36ae031adfa815e32e075))



# 7.2.0 (2025-04-17)


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 7.2.0 (2025-04-17)



# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 7.1.0 (2025-01-28)


### 🐛 Bug Fixes

* **preset-essentials:** update eslint dependencies ([0821bae](https://github.com/alvis/presetter/commit/0821baea29156361c04237a0c5216012655fe15c))



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


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


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


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## 7.0.1 (2025-01-24)


### 🐛 Bug Fixes

* remove development export upon publication ([f6c1d12](https://github.com/alvis/presetter/commit/f6c1d12ac22271a8f6bf38ceab5a4138974284e7))



# 7.0.0 (2025-01-23)


### ♻️ Chores

* **release:** publish v7.0.0 ([1bf4cf9](https://github.com/alvis/presetter/commit/1bf4cf996ff1af7591f8f49a662a038ee248ec0a))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 7.0.0 (2025-01-23)



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **preset-web:** auto find tailwind config file ([1635988](https://github.com/alvis/presetter/commit/1635988203b3aaede733cafd0398efea82d6a00e))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **preset-web:** upgrade to flat eslint config ([6f66f94](https://github.com/alvis/presetter/commit/6f66f944dd471c7b54ebdc66da34926fd03d289c))


### 🐛 Bug Fixes

* **preset:** ensure eslint config is correct ([71cd405](https://github.com/alvis/presetter/commit/71cd40531484a3fb955af9a21a3a00ae4220d274))


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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))


### 🐛 Bug Fixes

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


### ♻️ Chores

* **release:** publish v4.7.0 ([8548e01](https://github.com/alvis/presetter/commit/8548e017290d36016cc3d3482ae2e78d2251e873))



# 4.6.0 (2024-01-22)


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


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


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### ♻️ Chores

* **release:** publish v4.1.0 ([4ea80b1](https://github.com/alvis/presetter/commit/4ea80b13ff3d3d2671a0670dc1e5e6f7ded674ff))



## 4.0.1 (2023-06-21)


### ♻️ Chores

* **release:** publish v4.0.1 ([b6c7dcf](https://github.com/alvis/presetter/commit/b6c7dcf6314692a81cd0a858d36596fc68656eaf))



# 4.0.0 (2023-06-19)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
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

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* **release:** publish v3.2.0 ([aef9950](https://github.com/alvis/presetter/commit/aef9950d4605d07f8fda87c331ca5bc7a6bb2c2d))



## 3.1.1 (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


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

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### ♻️ Chores

* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))



## [4.7.2](https://github.com/alvis/presetter/compare/v4.7.1...v4.7.2) (2024-03-07)



## [4.7.1](https://github.com/alvis/presetter/compare/v4.7.0...v4.7.1) (2024-03-06)



# [4.7.0](https://github.com/alvis/presetter/compare/v4.6.0...v4.7.0) (2024-02-27)



# [4.6.0](https://github.com/alvis/presetter/compare/v4.5.0...v4.6.0) (2024-01-22)



# [4.5.0](https://github.com/alvis/presetter/compare/v4.4.2...v4.5.0) (2024-01-04)



## [4.4.2](https://github.com/alvis/presetter/compare/v4.4.1...v4.4.2) (2023-10-27)



## [4.4.1](https://github.com/alvis/presetter/compare/v4.4.0...v4.4.1) (2023-10-06)



# [4.4.0](https://github.com/alvis/presetter/compare/v4.3.1...v4.4.0) (2023-10-03)



## [4.3.1](https://github.com/alvis/presetter/compare/v4.3.0...v4.3.1) (2023-10-03)



# [4.3.0](https://github.com/alvis/presetter/compare/v4.2.0...v4.3.0) (2023-09-20)



# [4.2.0](https://github.com/alvis/presetter/compare/v4.1.2...v4.2.0) (2023-09-13)



## [4.1.2](https://github.com/alvis/presetter/compare/v4.1.1...v4.1.2) (2023-07-26)



## [4.1.1](https://github.com/alvis/presetter/compare/v4.1.0...v4.1.1) (2023-07-14)



# [4.1.0](https://github.com/alvis/presetter/compare/v4.0.1...v4.1.0) (2023-07-13)


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))



## [4.0.1](https://github.com/alvis/presetter/compare/v4.0.0...v4.0.1) (2023-06-21)



# [4.0.0](https://github.com/alvis/presetter/compare/v3.5.5...v4.0.0) (2023-06-18)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx



## [3.5.5](https://github.com/alvis/presetter/compare/v3.5.4...v3.5.5) (2023-03-31)



## [3.5.4](https://github.com/alvis/presetter/compare/v3.5.3...v3.5.4) (2023-03-30)



## [3.5.3](https://github.com/alvis/presetter/compare/v3.5.2...v3.5.3) (2023-03-26)



## [3.5.2](https://github.com/alvis/presetter/compare/v3.5.1...v3.5.2) (2023-03-26)



## [3.5.1](https://github.com/alvis/presetter/compare/v3.5.0...v3.5.1) (2023-03-18)



# [3.5.0](https://github.com/alvis/presetter/compare/v3.4.1...v3.5.0) (2022-09-23)


### 🛠 Builds

* move .presetterrc to the root ([0eb17a0](https://github.com/alvis/presetter/commit/0eb17a058fa245faae96dcb017184460dae08b46))



## [3.4.1](https://github.com/alvis/presetter/compare/v3.4.0...v3.4.1) (2022-08-10)


### 🐛 Bug Fixes

* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))



# [3.4.0](https://github.com/alvis/presetter/compare/v3.3.0...v3.4.0) (2022-08-02)


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))



# [3.3.0](https://github.com/alvis/presetter/compare/v3.2.0...v3.3.0) (2022-07-12)


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))



# [3.2.0](https://github.com/alvis/presetter/compare/v3.1.1...v3.2.0) (2022-05-18)


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))



## [3.1.1](https://github.com/alvis/presetter/compare/v3.1.0...v3.1.1) (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))



# [3.1.0](https://github.com/alvis/presetter/compare/v3.0.3...v3.1.0) (2021-12-28)


### ✨ Features

* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))


### 🐛 Bug Fixes

* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))



## [3.0.3](https://github.com/alvis/presetter/compare/v3.0.2...v3.0.3) (2021-11-03)



## [3.0.2](https://github.com/alvis/presetter/compare/v3.0.1...v3.0.2) (2021-11-03)



## [3.0.1](https://github.com/alvis/presetter/compare/v3.0.0...v3.0.1) (2021-10-14)


### 🐛 Bug Fixes

* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))



# [3.0.0](https://github.com/alvis/presetter/compare/v2.1.0...v3.0.0) (2021-10-04)


### ✨ Features

* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))
