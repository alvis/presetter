# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# 8.1.0 (2025-10-16)


### 📦 Code Refactoring

* centralize dependencies in pnpm workspace catalogs ([4bb0ef7](https://github.com/alvis/presetter/commit/4bb0ef77eaadf81dbb58a7526b4df3f6ff2af3a9))



## 8.0.12 (2025-09-14)


### ♻️ Chores

* **release:** publish v8.0.12 ([ee057ed](https://github.com/alvis/presetter/commit/ee057ed35f7f6a7fb563a004d29e53f54c59df12))



## 8.0.11 (2025-08-04)


### ♻️ Chores

* **release:** publish v8.0.11 ([a3f45aa](https://github.com/alvis/presetter/commit/a3f45aae60b2e571c01f36fcaa73f93b81e01f57))



## 8.0.10 (2025-08-03)


### 🐛 Bug Fixes

* **presetter:** resolve repoRoot by vcs folders ([1d2f9bc](https://github.com/alvis/presetter/commit/1d2f9bcccb6e492ef9016c3a2a2351cf020db0ac))


### ♻️ Chores

* **release:** publish v8.0.10 ([d3bfd8d](https://github.com/alvis/presetter/commit/d3bfd8d6c6739a7e875dc10841088bad449cfc5f))



## 8.0.9 (2025-08-03)


### ♻️ Chores

* **release:** publish v8.0.9 ([192bac6](https://github.com/alvis/presetter/commit/192bac6756a512a215213d3cbe1275521a8c3719))



## 8.0.8 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.8 ([83a149b](https://github.com/alvis/presetter/commit/83a149b44fc962f3dfd1a74c69cc80d2fecc48b9))



## 8.0.7 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.7 ([f6dd8e1](https://github.com/alvis/presetter/commit/f6dd8e175824fc4dd98c715a0a4c368250fa646f))



## 8.0.6 (2025-07-30)


### 🐛 Bug Fixes

* **presetter:** parse {@} correctly with no global args ([0b53631](https://github.com/alvis/presetter/commit/0b53631bd5456c35f7eb0b8a131c9de5539ea7c5))


### ♻️ Chores

* **release:** publish v8.0.6 ([de97a72](https://github.com/alvis/presetter/commit/de97a7215a2a9955c750404f1ba75908492299e3))



## 8.0.5 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.5 ([04edde7](https://github.com/alvis/presetter/commit/04edde7f36e9275115a484aed94eee9b96547e6a))



## 8.0.4 (2025-07-30)


### ✨ Features

* **presetter:** support {@:--default-arg} default args syntax ([37445d0](https://github.com/alvis/presetter/commit/37445d00c7850e2cd6c8194784f2dace9ab72306))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))
* update dependencies ([c1091ad](https://github.com/alvis/presetter/commit/c1091ad03166818ea76ff6bdf0624a1e9c8b6f03))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 8.0.12 (2025-09-14)



## 8.0.11 (2025-08-04)


### ♻️ Chores

* **release:** publish v8.0.11 ([a3f45aa](https://github.com/alvis/presetter/commit/a3f45aae60b2e571c01f36fcaa73f93b81e01f57))



## 8.0.10 (2025-08-03)


### 🐛 Bug Fixes

* **presetter:** resolve repoRoot by vcs folders ([1d2f9bc](https://github.com/alvis/presetter/commit/1d2f9bcccb6e492ef9016c3a2a2351cf020db0ac))


### ♻️ Chores

* **release:** publish v8.0.10 ([d3bfd8d](https://github.com/alvis/presetter/commit/d3bfd8d6c6739a7e875dc10841088bad449cfc5f))



## 8.0.9 (2025-08-03)


### ♻️ Chores

* **release:** publish v8.0.9 ([192bac6](https://github.com/alvis/presetter/commit/192bac6756a512a215213d3cbe1275521a8c3719))



## 8.0.8 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.8 ([83a149b](https://github.com/alvis/presetter/commit/83a149b44fc962f3dfd1a74c69cc80d2fecc48b9))



## 8.0.7 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.7 ([f6dd8e1](https://github.com/alvis/presetter/commit/f6dd8e175824fc4dd98c715a0a4c368250fa646f))



## 8.0.6 (2025-07-30)


### 🐛 Bug Fixes

* **presetter:** parse {@} correctly with no global args ([0b53631](https://github.com/alvis/presetter/commit/0b53631bd5456c35f7eb0b8a131c9de5539ea7c5))


### ♻️ Chores

* **release:** publish v8.0.6 ([de97a72](https://github.com/alvis/presetter/commit/de97a7215a2a9955c750404f1ba75908492299e3))



## 8.0.5 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.5 ([04edde7](https://github.com/alvis/presetter/commit/04edde7f36e9275115a484aed94eee9b96547e6a))



## 8.0.4 (2025-07-30)


### ✨ Features

* **presetter:** support {@:--default-arg} default args syntax ([37445d0](https://github.com/alvis/presetter/commit/37445d00c7850e2cd6c8194784f2dace9ab72306))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))
* update dependencies ([c1091ad](https://github.com/alvis/presetter/commit/c1091ad03166818ea76ff6bdf0624a1e9c8b6f03))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 8.0.11 (2025-08-04)



## 8.0.10 (2025-08-03)


### 🐛 Bug Fixes

* **presetter:** resolve repoRoot by vcs folders ([1d2f9bc](https://github.com/alvis/presetter/commit/1d2f9bcccb6e492ef9016c3a2a2351cf020db0ac))


### ♻️ Chores

* **release:** publish v8.0.10 ([d3bfd8d](https://github.com/alvis/presetter/commit/d3bfd8d6c6739a7e875dc10841088bad449cfc5f))



## 8.0.9 (2025-08-03)


### ♻️ Chores

* **release:** publish v8.0.9 ([192bac6](https://github.com/alvis/presetter/commit/192bac6756a512a215213d3cbe1275521a8c3719))



## 8.0.8 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.8 ([83a149b](https://github.com/alvis/presetter/commit/83a149b44fc962f3dfd1a74c69cc80d2fecc48b9))



## 8.0.7 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.7 ([f6dd8e1](https://github.com/alvis/presetter/commit/f6dd8e175824fc4dd98c715a0a4c368250fa646f))



## 8.0.6 (2025-07-30)


### 🐛 Bug Fixes

* **presetter:** parse {@} correctly with no global args ([0b53631](https://github.com/alvis/presetter/commit/0b53631bd5456c35f7eb0b8a131c9de5539ea7c5))


### ♻️ Chores

* **release:** publish v8.0.6 ([de97a72](https://github.com/alvis/presetter/commit/de97a7215a2a9955c750404f1ba75908492299e3))



## 8.0.5 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.5 ([04edde7](https://github.com/alvis/presetter/commit/04edde7f36e9275115a484aed94eee9b96547e6a))



## 8.0.4 (2025-07-30)


### ✨ Features

* **presetter:** support {@:--default-arg} default args syntax ([37445d0](https://github.com/alvis/presetter/commit/37445d00c7850e2cd6c8194784f2dace9ab72306))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))
* update dependencies ([c1091ad](https://github.com/alvis/presetter/commit/c1091ad03166818ea76ff6bdf0624a1e9c8b6f03))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 8.0.10 (2025-08-03)


### 🐛 Bug Fixes

* **presetter:** resolve repoRoot by vcs folders ([1d2f9bc](https://github.com/alvis/presetter/commit/1d2f9bcccb6e492ef9016c3a2a2351cf020db0ac))



## 8.0.9 (2025-08-03)


### ♻️ Chores

* **release:** publish v8.0.9 ([192bac6](https://github.com/alvis/presetter/commit/192bac6756a512a215213d3cbe1275521a8c3719))



## 8.0.8 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.8 ([83a149b](https://github.com/alvis/presetter/commit/83a149b44fc962f3dfd1a74c69cc80d2fecc48b9))



## 8.0.7 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.7 ([f6dd8e1](https://github.com/alvis/presetter/commit/f6dd8e175824fc4dd98c715a0a4c368250fa646f))



## 8.0.6 (2025-07-30)


### 🐛 Bug Fixes

* **presetter:** parse {@} correctly with no global args ([0b53631](https://github.com/alvis/presetter/commit/0b53631bd5456c35f7eb0b8a131c9de5539ea7c5))


### ♻️ Chores

* **release:** publish v8.0.6 ([de97a72](https://github.com/alvis/presetter/commit/de97a7215a2a9955c750404f1ba75908492299e3))



## 8.0.5 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.5 ([04edde7](https://github.com/alvis/presetter/commit/04edde7f36e9275115a484aed94eee9b96547e6a))



## 8.0.4 (2025-07-30)


### ✨ Features

* **presetter:** support {@:--default-arg} default args syntax ([37445d0](https://github.com/alvis/presetter/commit/37445d00c7850e2cd6c8194784f2dace9ab72306))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))
* update dependencies ([c1091ad](https://github.com/alvis/presetter/commit/c1091ad03166818ea76ff6bdf0624a1e9c8b6f03))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 8.0.9 (2025-08-03)



## 8.0.8 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.8 ([83a149b](https://github.com/alvis/presetter/commit/83a149b44fc962f3dfd1a74c69cc80d2fecc48b9))



## 8.0.7 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.7 ([f6dd8e1](https://github.com/alvis/presetter/commit/f6dd8e175824fc4dd98c715a0a4c368250fa646f))



## 8.0.6 (2025-07-30)


### 🐛 Bug Fixes

* **presetter:** parse {@} correctly with no global args ([0b53631](https://github.com/alvis/presetter/commit/0b53631bd5456c35f7eb0b8a131c9de5539ea7c5))


### ♻️ Chores

* **release:** publish v8.0.6 ([de97a72](https://github.com/alvis/presetter/commit/de97a7215a2a9955c750404f1ba75908492299e3))



## 8.0.5 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.5 ([04edde7](https://github.com/alvis/presetter/commit/04edde7f36e9275115a484aed94eee9b96547e6a))



## 8.0.4 (2025-07-30)


### ✨ Features

* **presetter:** support {@:--default-arg} default args syntax ([37445d0](https://github.com/alvis/presetter/commit/37445d00c7850e2cd6c8194784f2dace9ab72306))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))
* update dependencies ([c1091ad](https://github.com/alvis/presetter/commit/c1091ad03166818ea76ff6bdf0624a1e9c8b6f03))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 8.0.8 (2025-07-30)



## 8.0.7 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.7 ([f6dd8e1](https://github.com/alvis/presetter/commit/f6dd8e175824fc4dd98c715a0a4c368250fa646f))



## 8.0.6 (2025-07-30)


### 🐛 Bug Fixes

* **presetter:** parse {@} correctly with no global args ([0b53631](https://github.com/alvis/presetter/commit/0b53631bd5456c35f7eb0b8a131c9de5539ea7c5))


### ♻️ Chores

* **release:** publish v8.0.6 ([de97a72](https://github.com/alvis/presetter/commit/de97a7215a2a9955c750404f1ba75908492299e3))



## 8.0.5 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.5 ([04edde7](https://github.com/alvis/presetter/commit/04edde7f36e9275115a484aed94eee9b96547e6a))



## 8.0.4 (2025-07-30)


### ✨ Features

* **presetter:** support {@:--default-arg} default args syntax ([37445d0](https://github.com/alvis/presetter/commit/37445d00c7850e2cd6c8194784f2dace9ab72306))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))
* update dependencies ([c1091ad](https://github.com/alvis/presetter/commit/c1091ad03166818ea76ff6bdf0624a1e9c8b6f03))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 8.0.7 (2025-07-30)



## 8.0.6 (2025-07-30)


### 🐛 Bug Fixes

* **presetter:** parse {@} correctly with no global args ([0b53631](https://github.com/alvis/presetter/commit/0b53631bd5456c35f7eb0b8a131c9de5539ea7c5))


### ♻️ Chores

* **release:** publish v8.0.6 ([de97a72](https://github.com/alvis/presetter/commit/de97a7215a2a9955c750404f1ba75908492299e3))



## 8.0.5 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.5 ([04edde7](https://github.com/alvis/presetter/commit/04edde7f36e9275115a484aed94eee9b96547e6a))



## 8.0.4 (2025-07-30)


### ✨ Features

* **presetter:** support {@:--default-arg} default args syntax ([37445d0](https://github.com/alvis/presetter/commit/37445d00c7850e2cd6c8194784f2dace9ab72306))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))
* update dependencies ([c1091ad](https://github.com/alvis/presetter/commit/c1091ad03166818ea76ff6bdf0624a1e9c8b6f03))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 8.0.6 (2025-07-30)


### 🐛 Bug Fixes

* **presetter:** parse {@} correctly with no global args ([0b53631](https://github.com/alvis/presetter/commit/0b53631bd5456c35f7eb0b8a131c9de5539ea7c5))



## 8.0.5 (2025-07-30)


### ♻️ Chores

* **release:** publish v8.0.5 ([04edde7](https://github.com/alvis/presetter/commit/04edde7f36e9275115a484aed94eee9b96547e6a))



## 8.0.4 (2025-07-30)


### ✨ Features

* **presetter:** support {@:--default-arg} default args syntax ([37445d0](https://github.com/alvis/presetter/commit/37445d00c7850e2cd6c8194784f2dace9ab72306))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))
* update dependencies ([c1091ad](https://github.com/alvis/presetter/commit/c1091ad03166818ea76ff6bdf0624a1e9c8b6f03))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 8.0.5 (2025-07-30)



## 8.0.4 (2025-07-30)


### ✨ Features

* **presetter:** support {@:--default-arg} default args syntax ([37445d0](https://github.com/alvis/presetter/commit/37445d00c7850e2cd6c8194784f2dace9ab72306))


### ♻️ Chores

* **release:** publish v8.0.4 ([827fd65](https://github.com/alvis/presetter/commit/827fd651873c42089cc48ccada6ec79be36880fa))



## 8.0.3 (2025-07-20)


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))
* update dependencies ([c1091ad](https://github.com/alvis/presetter/commit/c1091ad03166818ea76ff6bdf0624a1e9c8b6f03))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 8.0.4 (2025-07-30)


### ✨ Features

* **presetter:** support {@:--default-arg} default args syntax ([37445d0](https://github.com/alvis/presetter/commit/37445d00c7850e2cd6c8194784f2dace9ab72306))



## 8.0.3 (2025-07-20)


### ♻️ Chores

* **release:** publish v8.0.3 ([f926256](https://github.com/alvis/presetter/commit/f926256f0685e73ed5fb0cea916f9b6bc30edb4e))
* update dependencies ([c1091ad](https://github.com/alvis/presetter/commit/c1091ad03166818ea76ff6bdf0624a1e9c8b6f03))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 8.0.3 (2025-07-20)


### ♻️ Chores

* update dependencies ([c1091ad](https://github.com/alvis/presetter/commit/c1091ad03166818ea76ff6bdf0624a1e9c8b6f03))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))


### ♻️ Chores

* **release:** publish v8.0.2 ([b07ed63](https://github.com/alvis/presetter/commit/b07ed6354cd3abb496633d395e1f8f49ed1bbf84))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 8.0.2 (2025-07-20)


### ✨ Features

* **preset-strict:** warn for node import without engine declaration ([0d6a6f5](https://github.com/alvis/presetter/commit/0d6a6f564afc42d7f626f67b84d5d769f307c01f))



## 8.0.1 (2025-06-27)


### ♻️ Chores

* **release:** publish v8.0.1 ([e9be80d](https://github.com/alvis/presetter/commit/e9be80d020026abd3b3b86b77c1c2d4b6210ea55))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 8.0.1 (2025-06-27)



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* **release:** publish v8.0.0 ([3fb7b25](https://github.com/alvis/presetter/commit/3fb7b25edf5e1c46129b06393b97ae0c024df1dc))
* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



# 8.0.0 (2025-06-27)


### 🐛 Bug Fixes

* **preset-essentials:** load types from various roots ([ff9ec74](https://github.com/alvis/presetter/commit/ff9ec7488a530954f7e5c0e50e66f2713f378abd))
* **preset-strict:** add sort-package-json ([593d1ef](https://github.com/alvis/presetter/commit/593d1efa561502595af765a0119e1efa61e278ad))
* **presetter:** normalize project roots before bootstraping ([7541317](https://github.com/alvis/presetter/commit/75413171c33e400d47fa184d440d040d32431cd5))


### 📦 Code Refactoring

* **presetter:** remove auto peerDeps install and drop npm <7 support ([bda9238](https://github.com/alvis/presetter/commit/bda9238559a0d885b269de499a29bd7bba2bed28))
* **presetter:** remove read-pkg-up ([eccf0af](https://github.com/alvis/presetter/commit/eccf0af0b7901abc689cd31bbccef0d08daf626a))
* **presetter:** remove unnecessary xception dependency ([3c844fe](https://github.com/alvis/presetter/commit/3c844feedef27ef02ccebb86ade8e04eb5baaf6f))
* **presetter:** use .notation for asset exports ([02ff7e9](https://github.com/alvis/presetter/commit/02ff7e9c46bab0bda59af4988a63aa903237aa50))
* **presetter:** use immutable object ([5b67def](https://github.com/alvis/presetter/commit/5b67defa817c6912d7d586c76be8d81e9e0ffcd0))


### 📚 Documentation

* update README files ([6f38a03](https://github.com/alvis/presetter/commit/6f38a0365d194745f2818f413742a4d09d3a5731))
* update READMEs to reflect recent changes ([1c23de6](https://github.com/alvis/presetter/commit/1c23de6c0b88acace15e826ea87df87e7843cf0c))


### 🚨 Tests

* **presetter:** simplify tests on preset resolution ([370bf80](https://github.com/alvis/presetter/commit/370bf8019a6e88aca97cbff561d59626c8da3961))
* resolve type issues ([8b6f95d](https://github.com/alvis/presetter/commit/8b6f95d63345d19e46cbd8b39a0ae837ac7a777f))
* resolve type issues among tests ([f83e923](https://github.com/alvis/presetter/commit/f83e9234a8407d51659745650cc62e55b42b1db7))


### ♻️ Chores

* remove unused left-behind packages ([1f04cd2](https://github.com/alvis/presetter/commit/1f04cd22948cc6b78e4d57f5fe12658a9fbb20d7))
* use preset-monorepo for this monorepo ([50076dd](https://github.com/alvis/presetter/commit/50076dd0bb779b73328c29bcf5cbf1c19c42f153))


### Breaking changes

* **presetter:** Drops support for npm versions below 7, which do not support auto peer dependency installation.



# 7.3.0 (2025-04-21)


### ♻️ Chores

* **release:** publish v7.3.0 ([22f79f3](https://github.com/alvis/presetter/commit/22f79f3418f5ac2b44ba04b69ef32f475f954699))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



# 7.3.0 (2025-04-21)



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))


### ♻️ Chores

* **release:** publish v7.2.0 ([e61558d](https://github.com/alvis/presetter/commit/e61558d849b1154594dd4e37ac9f700b34d8ab4e))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



# 7.2.0 (2025-04-17)


### 🐛 Bug Fixes

* **presetter:** skip merging for content functions ([d7832ad](https://github.com/alvis/presetter/commit/d7832ad6eb76b8a45f10eed5c8d6e7ad269a7c58))



# 7.1.0 (2025-01-28)


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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



# 7.1.0 (2025-01-28)



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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



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

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## 7.0.1 (2025-01-24)


### 🐛 Bug Fixes

* remove development export upon publication ([f6c1d12](https://github.com/alvis/presetter/commit/f6c1d12ac22271a8f6bf38ceab5a4138974284e7))



# 7.0.0 (2025-01-23)


### ✨ Features

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))


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

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



# 7.0.0 (2025-01-23)


### ✨ Features

* **presetter:** add a project selector ([506bc3c](https://github.com/alvis/presetter/commit/506bc3ce515869bb0a67cab1c4d5ea9d8d1ab3f9))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))
* **release:** publish v6.2.0 ([5ca15d8](https://github.com/alvis/presetter/commit/5ca15d88a8c5dd4db5767e19051af15f2dadb647))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



# 6.2.0 (2025-01-10)


### ✨ Features

* **presetter:** support recursive bootstraping ([c5058dc](https://github.com/alvis/presetter/commit/c5058dc33f6524e874859e84523a8a0ca04e7978))


### ♻️ Chores

* add conditional exports ([8717aa9](https://github.com/alvis/presetter/commit/8717aa96a56a0a2ae2d7ceb15665ba28b125706b))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### ♻️ Chores

* **release:** publish v6.1.0 ([0f64b05](https://github.com/alvis/presetter/commit/0f64b0511487e274fadce0ca651e21bd467545bf))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



# 6.1.0 (2024-12-24)


### 🐛 Bug Fixes

* **presetter:** implement our own module cache ([da9fb20](https://github.com/alvis/presetter/commit/da9fb2025032b30498d57f4e2c186db8c35f0f37))
* **presetter:** remove bracket in command ([f7c1ee0](https://github.com/alvis/presetter/commit/f7c1ee0c155f3a60604b190f260588a85fd291cb))


### 💎 Styles

* resolve styling issues ([3955b60](https://github.com/alvis/presetter/commit/3955b6070bdb530721432221bf2422acd84d11ca))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* **release:** publish v6.0.0 ([c798b9b](https://github.com/alvis/presetter/commit/c798b9b7249e2108e22a7e486ec78da61f0bab2e))
* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



# 6.0.0 (2024-11-27)


### ✨ Features

* introduce presetter.config.ts ([74e2326](https://github.com/alvis/presetter/commit/74e23263780146e24db0c36bef71ff6edc5a66fa))
* **preset-esm:** update eslint to v9 ([73d0c14](https://github.com/alvis/presetter/commit/73d0c14dd18d32c9572ac6811f96851ef6c65428))
* **presetter:** print command before running it ([0fe859f](https://github.com/alvis/presetter/commit/0fe859f129617d6e56885d9814d02f280f9bfdf0))


### 🐛 Bug Fixes

* **types:** remove usage of erroneous types ([c73ad23](https://github.com/alvis/presetter/commit/c73ad235ef5d56d23829baccc8273d4674beba47))


### 📦 Code Refactoring

* **presetter:** restructure template helpers ([253109e](https://github.com/alvis/presetter/commit/253109e8f0f8f6fb7ce4e962b5f7e9050d68e743))
* **presetter:** update [@npmcli](https://github.com/npmcli) dependencies ([07ff069](https://github.com/alvis/presetter/commit/07ff0697f1781d03be86d1e80654f56f5e9e62fc))
* separate esm preset from essentials ([81b8b27](https://github.com/alvis/presetter/commit/81b8b27197b6c35239a585b890a1fdc23eef8a63))


### ♻️ Chores

* remove all file headers ([ea62451](https://github.com/alvis/presetter/commit/ea6245156ac79f124cdb3cbbc7f9692efbf6aa62))


### 💎 Styles

* add spacing between import groups ([6633d24](https://github.com/alvis/presetter/commit/6633d24a54e38aba200e6374fbad0377bec43acf))


### Breaking changes

* With the introduction of new presetter.config.ts,
the old legacy .presetterrc.json config format is
no longer supported.



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



# 5.0.0 (2024-07-31)


### ✨ Features

* **preset-esm:** drop jest in favor of vitest ([330d9fe](https://github.com/alvis/presetter/commit/330d9fef67f53078546313e33b0c31cab57bf490))
* **presetter:** add debug mode via DEBUG ([249549e](https://github.com/alvis/presetter/commit/249549e6bfae9308fb57989d0452ef5f95880ea5))


### 🐛 Bug Fixes

* **presetter:** update presetter dependencies ([3e71b87](https://github.com/alvis/presetter/commit/3e71b87602264a9aff1aca76c39a4b9b95922d03))
* **presetter:** use tsx in esm mode ([afff010](https://github.com/alvis/presetter/commit/afff010362d2d1a6f363fc731bbd5822d2ec6db6))
* update type-fest to avoid infinite recursion ([1af2e5e](https://github.com/alvis/presetter/commit/1af2e5ec44fa368de74aad709b24c074266a039e))


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


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### ♻️ Chores

* **release:** publish v4.6.0 ([099e453](https://github.com/alvis/presetter/commit/099e453fd53b7b21130af1db2cca417780611b16))



# 4.5.0 (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))


### ♻️ Chores

* **release:** publish v4.5.0 ([a1cf12f](https://github.com/alvis/presetter/commit/a1cf12f025d8d1b2b98804e8e861804261878954))



## 4.4.2 (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


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


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# 4.2.0 (2023-09-13)


### ♻️ Chores

* **release:** publish v4.2.0 ([a0fa974](https://github.com/alvis/presetter/commit/a0fa974b115d7fe00b607486f570813e2d1b29b9))



## 4.1.2 (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))


### ♻️ Chores

* **release:** publish v4.1.2 ([d678f42](https://github.com/alvis/presetter/commit/d678f4222630fcbb471ce2d1515e1c41b799db93))



## 4.1.1 (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))


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
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* **release:** publish v4.0.0 ([3d0a26d](https://github.com/alvis/presetter/commit/3d0a26d07ba89dc19ec665ee6fc616c215d0a319))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## 3.5.5 (2023-03-31)


### ♻️ Chores

* **release:** publish v3.5.5 ([14c1a3b](https://github.com/alvis/presetter/commit/14c1a3b7ddc807e8d0323afc02145bc886424c02))



## 3.5.4 (2023-03-30)


### ♻️ Chores

* **release:** publish v3.5.4 ([a3567cd](https://github.com/alvis/presetter/commit/a3567cd8e12dd7f8d2134c2204db09bb917c55c0))



## 3.5.3 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### ♻️ Chores

* **release:** publish v3.5.3 ([e9e7a78](https://github.com/alvis/presetter/commit/e9e7a783a017903f2eb4b51b619bc76bfac777a2))



## 3.5.2 (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))


### ♻️ Chores

* **release:** publish v3.5.2 ([1b134cf](https://github.com/alvis/presetter/commit/1b134cf5f2c9088f1335e0be762355958ed1a4b9))



## 3.5.1 (2023-03-18)


### ♻️ Chores

* **release:** publish v3.5.1 ([1e12a59](https://github.com/alvis/presetter/commit/1e12a59395c835efadf404dc65b7195b25433378))



# 3.5.0 (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))


### ♻️ Chores

* **release:** publish v3.5.0 ([42e1057](https://github.com/alvis/presetter/commit/42e1057e478b22adabdb13948beaa734ad583645))



## 3.4.1 (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))


### ♻️ Chores

* **release:** publish v3.4.1 ([89d06c0](https://github.com/alvis/presetter/commit/89d06c0f29795283b582e17e8a05ff0b9fe9e476))



# 3.4.0 (2022-08-02)


### ✨ Features

* **presetter:** add a template merge mode options ([df847a8](https://github.com/alvis/presetter/commit/df847a881aeef404a759f2fe9eb619fdc79396b7))


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))
* **presetter:** skip installation within presetter package ([2a973af](https://github.com/alvis/presetter/commit/2a973af69e2418d371c638be1dcbe1af48d07c4d))


### ♻️ Chores

* **release:** publish v3.4.0 ([2b0eee4](https://github.com/alvis/presetter/commit/2b0eee4a4a5cba4c275c9601af9c9447049722ac))



# 3.3.0 (2022-07-12)


### ✨ Features

* **presetter:** support scripts to be applied at the end ([d3ec950](https://github.com/alvis/presetter/commit/d3ec9503e4ffbcb903931b24ddf439123ac0aac5))
* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


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



## 3.1.1 (2021-12-29)


### ♻️ Chores

* **release:** publish v3.1.1 ([8e1aecb](https://github.com/alvis/presetter/commit/8e1aecbd95d08e3b9e185f37993b7af73f9ff365))



# 3.1.0 (2021-12-28)


### ✨ Features

* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))


### ♻️ Chores

* **release:** publish v3.1.0 ([113b374](https://github.com/alvis/presetter/commit/113b3744cc4e3f517667285a2ab4b7292364ae1a))


### 💎 Styles

* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## 3.0.3 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))


### ♻️ Chores

* **release:** publish v3.0.3 ([3c1640d](https://github.com/alvis/presetter/commit/3c1640dd1301371c78693a9f04e3dd71c0e2a921))



## 3.0.2 (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))


### ♻️ Chores

* **release:** publish v3.0.2 ([3c22351](https://github.com/alvis/presetter/commit/3c22351df97e51be70f90566e3248716d46bf6d1))



## 3.0.1 (2021-10-14)


### 🐛 Bug Fixes

* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### ♻️ Chores

* **release:** publish v3.0.1 ([fcdb544](https://github.com/alvis/presetter/commit/fcdb54439c1f77b5e57f74b5a21fe30b4a3ab20a))



# 3.0.0 (2021-10-04)


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
* **release:** publish v3.0.0 ([9bd9399](https://github.com/alvis/presetter/commit/9bd93991d4ea2ede7b1b7ee1bbea94f76f8f80bd))


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



# 2.1.0 (2021-07-04)


### ✨ Features

* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))


### 📚 Documentation

* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))


### ♻️ Chores

* **release:** publish v2.1.0 ([9f00a20](https://github.com/alvis/presetter/commit/9f00a20e790312ad19f00293e81f3e73b7f6ff4e))
* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))



# 2.0.0 (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* **release:** publish v2.0.0 ([df164b0](https://github.com/alvis/presetter/commit/df164b0a429f9efa25b4104f3f9bcf90430dec24))
* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17



# 1.3.0 (2021-05-20)


### ♻️ Chores

* **release:** publish v1.3.0 ([651e444](https://github.com/alvis/presetter/commit/651e4446756e812ad99d16fda9a29cbdc1338f8b))



# 1.2.0 (2021-05-11)


### ♻️ Chores

* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **release:** publish v1.2.0 ([cafa3e4](https://github.com/alvis/presetter/commit/cafa3e44039f40f28708f97f8e233345c2d6454a))
* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))



# 1.1.0 (2020-12-31)


### ✨ Features

* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))


### 🐛 Bug Fixes

* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))


### 📦 Code Refactoring

* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))


### 📚 Documentation

* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ♻️ Chores

* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* **release:** publish v1.1.0 ([5937ebf](https://github.com/alvis/presetter/commit/5937ebf4f019fb3bcf5098baf5f06bdff3dd1399))


### 💎 Styles

* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))



## 1.0.5 (2020-10-22)


### ♻️ Chores

* **release:** publish v1.0.5 ([f920009](https://github.com/alvis/presetter/commit/f920009d7a04974133e85b01c39a4ffca898707a))



## 1.0.4 (2020-10-04)


### ♻️ Chores

* **release:** publish v1.0.4 ([55947b3](https://github.com/alvis/presetter/commit/55947b3f7521be6f0fb0eebf391f1eb753c3cf79))



## 1.0.3 (2020-09-30)


### ♻️ Chores

* **release:** publish v1.0.3 ([4a3a8f7](https://github.com/alvis/presetter/commit/4a3a8f75da428721d89f52ebb7533b9091faf2b0))



## 1.0.2 (2020-08-14)


### 🐛 Bug Fixes

* **presetter:** preserve client's package.json order upon initialisation ([7ca037b](https://github.com/alvis/presetter/commit/7ca037bdc126410d2126c4dabcb80db67b91d61e))
* suggest to use prepublish instead of postinstall ([80740d5](https://github.com/alvis/presetter/commit/80740d5abcf4deaacbe3e7bb36ad988db24ca450))


### 📦 Code Refactoring

* **presetter:** remove an unused field ([002c070](https://github.com/alvis/presetter/commit/002c070515b5f2a860d95646cbd0379d8cde7447))
* **presetter:** remove unused imports ([303842c](https://github.com/alvis/presetter/commit/303842c953ded360ce12a5777bebe76dc9d92b06))


### ♻️ Chores

* **release:** publish v1.0.2 ([31537fd](https://github.com/alvis/presetter/commit/31537fd00d79f47744c635cf551fe5a483f67e91))



## 1.0.1 (2020-07-16)


### 🐛 Bug Fixes

* **presetter/cli:** make the CLI compatible on Linux ([3b2c4c0](https://github.com/alvis/presetter/commit/3b2c4c0e2482826b6b9349e77261a96d930da8d5))


### ♻️ Chores

* **release:** publish v1.0.1 ([d69a322](https://github.com/alvis/presetter/commit/d69a32285accffcc7e91049b961f76445e0f38b5))



# 1.0.0 (2020-07-16)


### ✨ Features

* **preset/script:** add shortcuts for coverage and watch ([67b0689](https://github.com/alvis/presetter/commit/67b06891bd2ddab5a2c7c805bd3706e5cdf97833))
* **preset:** provide customisation on directories ([cbb7a34](https://github.com/alvis/presetter/commit/cbb7a34af5278b5a975584077a5d2e57bca24aa7))
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/740306448a56ce2a0073c8378e5c53fb32f4943c))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/156365056575dbd7638aef21894e7cf1a478c670))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8615ffe44985f8953cd2e28bc05b09214b))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351d4edc84c176d268c0531afee82a988c90))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d74e2c22dee803620c4c0be6caba60f692))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2737e20596c8cff0458b053c34b39e0853))


### 🛠 Builds

* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29ca4ab6be742057d34d8b6e633e32eacff))


### ♻️ Chores

* **release:** publish v1.0.0 ([2ee55bd](https://github.com/alvis/presetter/commit/2ee55bd6a5ff0bd209fb17fc111fb8b506fa5397))



## [4.7.2](https://github.com/alvis/presetter/compare/v4.7.1...v4.7.2) (2024-03-07)



## [4.7.1](https://github.com/alvis/presetter/compare/v4.7.0...v4.7.1) (2024-03-06)



# [4.7.0](https://github.com/alvis/presetter/compare/v4.6.0...v4.7.0) (2024-02-27)



# [4.6.0](https://github.com/alvis/presetter/compare/v4.5.0...v4.6.0) (2024-01-22)


### ✨ Features

* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))



# [4.5.0](https://github.com/alvis/presetter/compare/v4.4.2...v4.5.0) (2024-01-04)


### 🐛 Bug Fixes

* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))



## [4.4.2](https://github.com/alvis/presetter/compare/v4.4.1...v4.4.2) (2023-10-27)


### 🐛 Bug Fixes

* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))



## [4.4.1](https://github.com/alvis/presetter/compare/v4.4.0...v4.4.1) (2023-10-06)



# [4.4.0](https://github.com/alvis/presetter/compare/v4.3.1...v4.4.0) (2023-10-03)



## [4.3.1](https://github.com/alvis/presetter/compare/v4.3.0...v4.3.1) (2023-10-03)



# [4.3.0](https://github.com/alvis/presetter/compare/v4.2.0...v4.3.0) (2023-09-20)


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# [4.2.0](https://github.com/alvis/presetter/compare/v4.1.2...v4.2.0) (2023-09-13)



## [4.1.2](https://github.com/alvis/presetter/compare/v4.1.1...v4.1.2) (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))



## [4.1.1](https://github.com/alvis/presetter/compare/v4.1.0...v4.1.1) (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))



# [4.1.0](https://github.com/alvis/presetter/compare/v4.0.1...v4.1.0) (2023-07-13)


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))



## [4.0.1](https://github.com/alvis/presetter/compare/v4.0.0...v4.0.1) (2023-06-21)



# [4.0.0](https://github.com/alvis/presetter/compare/v3.5.5...v4.0.0) (2023-06-18)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* **presetter:** avoid infinite script running loop ([99d5a58](https://github.com/alvis/presetter/commit/99d5a5844fb08b613bb4305dde0e94cf0c6cebff))
* **presetter:** correct the wording for `use` ([ee32c69](https://github.com/alvis/presetter/commit/ee32c6951e0d41ff34f5dadf737caaf8b441a412))
* **presetter:** import preset's entry file instead of directory ([de6b818](https://github.com/alvis/presetter/commit/de6b818b007b6f3cbeb916dacec084933fbef7c0))
* **presetter:** remove all insecure lodash usages ([92b6f5b](https://github.com/alvis/presetter/commit/92b6f5b6700635605dcdf771fcd4c67456aace43))
* **presetter:** stop any generated text templates being merged ([449a41d](https://github.com/alvis/presetter/commit/449a41df65dc6dc89ccbf92c5677faa374270101))
* **presetter:** update [@npm](https://github.com/npm) packages ([2110af0](https://github.com/alvis/presetter/commit/2110af0bf476806faded9f3c6649fc6ad943c091))
* **presetter:** update existing symlinks upon bootstraping ([03b928f](https://github.com/alvis/presetter/commit/03b928f38d83e78e452350eb3f0e4b48b5187b5d))
* **presetter:** update existing symlinks upon bootstraping ([ace88a8](https://github.com/alvis/presetter/commit/ace88a83ee0986f893a3a04b6bbfc5e2e8a5f2b1))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 🛠 Builds

* **presetter:** fix the coverage command to accept extra agruments ([5be8431](https://github.com/alvis/presetter/commit/5be8431c1496881cb418a09e3a6c8bdea0810a1f))


### ♻️ Chores

* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## [3.5.5](https://github.com/alvis/presetter/compare/v3.5.4...v3.5.5) (2023-03-31)



## [3.5.4](https://github.com/alvis/presetter/compare/v3.5.3...v3.5.4) (2023-03-30)



## [3.5.3](https://github.com/alvis/presetter/compare/v3.5.2...v3.5.3) (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))



## [3.5.2](https://github.com/alvis/presetter/compare/v3.5.1...v3.5.2) (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))



## [3.5.1](https://github.com/alvis/presetter/compare/v3.5.0...v3.5.1) (2023-03-18)



# [3.5.0](https://github.com/alvis/presetter/compare/v3.4.1...v3.5.0) (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))



## [3.4.1](https://github.com/alvis/presetter/compare/v3.4.0...v3.4.1) (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** make new keys merged in the end of an object ([9832af0](https://github.com/alvis/presetter/commit/9832af049c9a1da199b3f907122d214f04ea5106))
* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))


### 📦 Code Refactoring

* **presetter:** move mergeTemplate to template.ts ([9e46132](https://github.com/alvis/presetter/commit/9e46132d0ce70ec9f57c6b76a339a05231c40b1a))



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
