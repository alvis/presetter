# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [4.6.0](https://github.com/alvis/presetter/compare/v4.5.0...v4.6.0) (2024-01-22)


### ✨ Features

* **preset-esm:** update gitignore for better coverage ([cd691a6](https://github.com/alvis/presetter/commit/cd691a66e97ac88a5ebe487604c3ae408edfeefe))
* **presetter:** use hardlink if possible ([2189d72](https://github.com/alvis/presetter/commit/2189d72059e34841dd05f9e87d23d8b54425f0e6))


### 🐛 Bug Fixes

* **preset-esm:** include generated source and bin ([67ac8bc](https://github.com/alvis/presetter/commit/67ac8bc53e4b155dab0cc50a982021651fa2e06a))
* **preset-esm:** leave comments on the compiled file for clarity ([756dd2c](https://github.com/alvis/presetter/commit/756dd2c640e9ee66a7b5b20b2e9d00225bbedfe8))
* **presetter:** ignore .presetter folder ([bca2083](https://github.com/alvis/presetter/commit/bca20832dc6b19103fda846238294f503b8daf52))



# [4.5.0](https://github.com/alvis/presetter/compare/v4.4.2...v4.5.0) (2024-01-04)


### ✨ Features

* **preset-esm:** add build steps for artifact creation ([ba270fe](https://github.com/alvis/presetter/commit/ba270fe5c63dc1a8db5393d20405276b948748c0))
* **preset-esm:** add source map to .d.ts files ([ba20774](https://github.com/alvis/presetter/commit/ba207747228d24ed9d3fd7a6e5ccae929ec82059))
* **preset-esm:** add support to typescript's project reference ([7610425](https://github.com/alvis/presetter/commit/761042536af23a55b1f93539becc19e4e76093a2))


### 🐛 Bug Fixes

* **preser-esm:** ignore error from husky ([feff15f](https://github.com/alvis/presetter/commit/feff15f079c1de047be89d775e534095daebb93d))
* **preset-esm:** add generated source to jest's resolve map ([4c0fb93](https://github.com/alvis/presetter/commit/4c0fb93847a98cee73f5818cba71d47a6f212fcc))
* **preset-esm:** allow short circuit and ternary operations ([463ae6f](https://github.com/alvis/presetter/commit/463ae6fd6c22946f0f5c014d466837c78668a5ac))
* **preset-esm:** group types from node:<lib> ([cdb4806](https://github.com/alvis/presetter/commit/cdb48061b894e1c9958d77837bc94ca24549c41d))
* **preset-esm:** update tsx to v4 ([f11cb3d](https://github.com/alvis/presetter/commit/f11cb3d89424bf9e338a3360235494cb55bbc765))
* **presetter:** move generated config to .presetter ([063e53a](https://github.com/alvis/presetter/commit/063e53a49fd562475c1ef4346d028d10717e329f))



## [4.4.2](https://github.com/alvis/presetter/compare/v4.4.1...v4.4.2) (2023-10-27)


### 🐛 Bug Fixes

* **preset-esm:** map # to source root ([f452aa8](https://github.com/alvis/presetter/commit/f452aa85088e30ddf6113ec162801347ed80f52a))
* **preset-esm:** prepend any NODE_OPTIONS to jest ([695e624](https://github.com/alvis/presetter/commit/695e62430bf09a2ca9888abbf95d7c63028c8048))
* **presetter:** ignore any {unknown} variable in template script ([3a6f54a](https://github.com/alvis/presetter/commit/3a6f54a13c83dc7b90878c5aa986622c926b36f0))


### ⚙️ Continuous Integrations

* release with provenance statements ([f85e58a](https://github.com/alvis/presetter/commit/f85e58acf63815bbb16ec65391e993b4f5952050))



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
* **preset-strict:** remove redundant thresholds ([45b0521](https://github.com/alvis/presetter/commit/45b0521f1c95ec3b9796936e996c682f64590da6))


### 💎 Styles

* remove redundant types ([07f8375](https://github.com/alvis/presetter/commit/07f8375c73ace9b9bc4f26ec86669760430c172c))



# [4.2.0](https://github.com/alvis/presetter/compare/v4.1.2...v4.2.0) (2023-09-13)


### ✨ Features

* **preset-esm:** support official decorators ([1980d8d](https://github.com/alvis/presetter/commit/1980d8d324db9688dd489c5ed3d5b85763d561c0))


### 📦 Code Refactoring

* **preset-esm:** enable multiple husky setups ([99b4807](https://github.com/alvis/presetter/commit/99b4807fea962640f07cf0fb6d9f94da881fa0e5))



## [4.1.2](https://github.com/alvis/presetter/compare/v4.1.1...v4.1.2) (2023-07-26)


### 🐛 Bug Fixes

* **presetter:** ignore empty command ([77344b3](https://github.com/alvis/presetter/commit/77344b3efaf2aa47d304c60dd869d080d80d836e))



## [4.1.1](https://github.com/alvis/presetter/compare/v4.1.0...v4.1.1) (2023-07-14)


### 🐛 Bug Fixes

* **presetter:** capture all extra arguments after -- ([fe96954](https://github.com/alvis/presetter/commit/fe969546ebca38c3cc7caecc5845ec33722447b2))



# [4.1.0](https://github.com/alvis/presetter/compare/v4.0.1...v4.1.0) (2023-07-13)


### ✨ Features

* **preset-esm:** make bootstrap part of the setup procedure ([313c0d1](https://github.com/alvis/presetter/commit/313c0d1df0ba41318a8b3f68e6a50dc1f2dc04fa))


### 🐛 Bug Fixes

* **preset-react:** remove monorepo incompatible jest configuration ([c554eb2](https://github.com/alvis/presetter/commit/c554eb2afdec35d5c1728de3b5065042b3b4b386))



## [4.0.1](https://github.com/alvis/presetter/compare/v4.0.0...v4.0.1) (2023-06-21)


### 🐛 Bug Fixes

* **preset-esm:** make staging file path after -- ([62ae558](https://github.com/alvis/presetter/commit/62ae558bcd343d74f996f3007485133f2a47c13d))



# [4.0.0](https://github.com/alvis/presetter/compare/v3.5.5...v4.0.0) (2023-06-18)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* drop support for node 12, 14 ([ee5c261](https://github.com/alvis/presetter/commit/ee5c26193a50a66c24c0b86e32f5f6f7984dc04f))
* **preset-essentials:** make build-in modules imported first ([aa2aedd](https://github.com/alvis/presetter/commit/aa2aeddbf328c89d9707a0e388995b5d3bfc7fba))
* **preset-essentials:** update jest and ts-jest to v29 ([b0f215b](https://github.com/alvis/presetter/commit/b0f215b70e15512d3e842669e9e23f8046196659))
* **presetter:** add a force flag to the CLI ([b065fa6](https://github.com/alvis/presetter/commit/b065fa6e6a86ea7157fa93f9960c964a0fed42b6))
* **presetter:** load presetterrc.json recursively ([c6b3eb2](https://github.com/alvis/presetter/commit/c6b3eb2bc721584c70862d395c17f09023b1f13b))
* **presetter:** load presetterrc.json recursively ([4725620](https://github.com/alvis/presetter/commit/47256203824c37a39eac707bfb84a75cd36c6f1a))
* **presetter:** run tasks without a temporary package.json ([6c404b3](https://github.com/alvis/presetter/commit/6c404b3d3ac4b7463961ac8898c7c4803c6ebe7c))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-esm:** remove unnecessary jest configs ([c1b2ee5](https://github.com/alvis/presetter/commit/c1b2ee5eedfcef4b11c230e6dba402be4c6e51bd))
* **preset-esm:** run parent tasks only when they are available ([1f0b1db](https://github.com/alvis/presetter/commit/1f0b1db19d5207085e52c6dba12335360da5bb6f))
* **preset-essentials:** ensure the exact path is also searched ([ca08946](https://github.com/alvis/presetter/commit/ca08946117ed11eef5844411ae4279a13e91cb39))
* **preset-react:** remove react exclusion from rollup ([8f1d565](https://github.com/alvis/presetter/commit/8f1d5658d01917e6f1216c8f9e74bb97ef1fec11))
* **preset-rollup:** inject NODE_ENV for build and develop stages ([b09ade5](https://github.com/alvis/presetter/commit/b09ade516250b8b5256d7f3d52ab1a30102607b5))
* **preset-rollup:** make the rollup preset compatible with ESM ([86154b8](https://github.com/alvis/presetter/commit/86154b8daaf7e3f97c1a93753416263fe7b086dc))
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
* release with provenance statements ([f1a58fc](https://github.com/alvis/presetter/commit/f1a58fcb565f3b391ae1757d3e71df4ec789f570))


### 📦 Code Refactoring

* **preset-rollup:** normalize config in functional way ([f6b3815](https://github.com/alvis/presetter/commit/f6b3815a13309791852ba2442e0a48e6531f8d45))


### ♻️ Chores

* allow tests can be done individually ([b86f6ee](https://github.com/alvis/presetter/commit/b86f6eef689f7783a2a19841eaadf6e581dbb649))
* make essential presets available before presetter ([9feb4ac](https://github.com/alvis/presetter/commit/9feb4acf20ef1f1745ec037c29b261250ab53853))
* setup jest for this monorepo ([26dbe54](https://github.com/alvis/presetter/commit/26dbe54e33a8c6c133627fdf1df8b20d131c155f))
* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### 💎 Styles

* make any node build-in modules explicitly imported first ([90730f2](https://github.com/alvis/presetter/commit/90730f2dfd27a6a6f1fbceb26ac5fb974e11508e))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
* Node 12 and 14 are no longer supported as they have approached EOF



## [3.5.5](https://github.com/alvis/presetter/compare/v3.5.4...v3.5.5) (2023-03-31)


### 🐛 Bug Fixes

* **preset-esm:** correct the configuration format for jest ([14abda7](https://github.com/alvis/presetter/commit/14abda712ee624fff762c4fb9434e7897695e4fd))



## [3.5.4](https://github.com/alvis/presetter/compare/v3.5.3...v3.5.4) (2023-03-30)


### 🐛 Bug Fixes

* **preset-esm:** make jest work under pure esm environment ([c443952](https://github.com/alvis/presetter/commit/c443952646b2ec70112d62fe2495bd9728ce3e1f))
* **preset-essentials:** check type in test files ([3bc1982](https://github.com/alvis/presetter/commit/3bc19825eedc8e3b8f16cb2f3a0078159a71f8a7))



## [3.5.3](https://github.com/alvis/presetter/compare/v3.5.2...v3.5.3) (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** make it compatible with other package managers ([4bc27a9](https://github.com/alvis/presetter/commit/4bc27a973d02d9da71b8e9aec102278b53c59fcd))


### 🛠 Builds

* **preset-strict:** remove source files from the final build ([8e99425](https://github.com/alvis/presetter/commit/8e99425619ef1d686d81dac3d57bb55a858a1521))



## [3.5.2](https://github.com/alvis/presetter/compare/v3.5.1...v3.5.2) (2023-03-26)


### 🐛 Bug Fixes

* **presetter:** restore package.json upon SIGTERM ([33b8c51](https://github.com/alvis/presetter/commit/33b8c5131ff10b2394908ee6f8fee1c702d4a804))



## [3.5.1](https://github.com/alvis/presetter/compare/v3.5.0...v3.5.1) (2023-03-18)


### 🐛 Bug Fixes

* **preset-essentials:** remove deprecated typescript configs ([0dc6cf7](https://github.com/alvis/presetter/commit/0dc6cf7c74544b95f6d53fce1531e3f206ed423d))



# [3.5.0](https://github.com/alvis/presetter/compare/v3.4.1...v3.5.0) (2022-09-23)


### ✨ Features

* **presetter:** take .presetterrc from any of the parent node ([723c139](https://github.com/alvis/presetter/commit/723c13964beaa61fad6e1d0ae4a66cf32d10ea9f))


### 🐛 Bug Fixes

* **preset-react:** increase the line limit of a react comonpent ([1ea89a2](https://github.com/alvis/presetter/commit/1ea89a2b85fe9de2a89218d58c8e3c19d93d2129))


### 🛠 Builds

* move .presetterrc to the root ([0eb17a0](https://github.com/alvis/presetter/commit/0eb17a058fa245faae96dcb017184460dae08b46))


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))
* **rollup:** remove unnecessary async waits ([9d9c4c3](https://github.com/alvis/presetter/commit/9d9c4c3b5131548512574634414214380cb501f2))


### ⚙️ Continuous Integrations

* update github actions files ([555c854](https://github.com/alvis/presetter/commit/555c8548c129eb6c8afa2aa40aae65f03933cbca))



## [3.4.1](https://github.com/alvis/presetter/compare/v3.4.0...v3.4.1) (2022-08-10)


### 🐛 Bug Fixes

* **preset-esm:** correct filenames in source maps ([7867971](https://github.com/alvis/presetter/commit/78679712c61ee89fbd20d9a823e3b3c10d4253be))
* **preset-essentials:** correct test files' path pattern ([1746203](https://github.com/alvis/presetter/commit/1746203448a077f9466367856e09b3e11a4db2c4))
* **preset-react:** correct test files' path pattern ([a1c37ea](https://github.com/alvis/presetter/commit/a1c37eac67dae1766c194da6369ab930de908b16))
* **preset-web:** remove graphql to avoid conflict between packages ([d12a3f8](https://github.com/alvis/presetter/commit/d12a3f890536fffde1b82a9ace829502604fddd6))
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


### 🐛 Bug Fixes

* **preset-essentials:** add husky to the build toolset ([2a24fa9](https://github.com/alvis/presetter/commit/2a24fa9a29d5ac685ef73ec9f485e186a9c7b6fa))
* **preset-essentials:** allow type indexes ([c735879](https://github.com/alvis/presetter/commit/c735879cb456886a4a3c7465db84dcdb75fd341a))
* **preset-essentials:** mark # as an internal path prefix ([e0feb56](https://github.com/alvis/presetter/commit/e0feb56ebf58386a323c24827a1d2eeaa62cd258))
* **preset-react:** allow react components to be bulkier ([091b305](https://github.com/alvis/presetter/commit/091b305af2e0dfaeb0f76cb49d8900181ad80bb2))
* **preset-react:** mark testing-library rules as provided ([3446e25](https://github.com/alvis/presetter/commit/3446e2535c17c56dabe7589458626d0246bbd67c))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## [3.1.1](https://github.com/alvis/presetter/compare/v3.1.0...v3.1.1) (2021-12-29)


### 🐛 Bug Fixes

* **preset-web:** update eslint-plugin-tailwindcss to v3 ([e9adbc0](https://github.com/alvis/presetter/commit/e9adbc089cd876ac64ec00c98cdee9133699d062))



# [3.1.0](https://github.com/alvis/presetter/compare/v3.0.3...v3.1.0) (2021-12-28)


### ✨ Features

* **preset-essentials:** add dotenv to the build toolset ([2e5ceb3](https://github.com/alvis/presetter/commit/2e5ceb3b62a4cc11289bba39407a12c31f0da290))
* **preset-react:** add testing library to the build toolset ([c7a9b78](https://github.com/alvis/presetter/commit/c7a9b78ed69d91d74c181e1eb143a31e9e0a7bc5))
* **preset-react:** use react-jsx transform for React v17+ ([4d2b688](https://github.com/alvis/presetter/commit/4d2b6880a6332d8ba041bbc58a07c6beded407f5))
* **preset-web:** add testing library to the build toolset ([1dae1c2](https://github.com/alvis/presetter/commit/1dae1c247559da9956e63bd6d00b709f389c7a95))
* **presetter/package:** support private registry ([c4eed24](https://github.com/alvis/presetter/commit/c4eed249cd0976d9599283c2beaf5d32fe090d46))
* **presetter/preset:** support supplementary ignores from presets ([58cbd64](https://github.com/alvis/presetter/commit/58cbd64e47ce633371517b54a35b467dfccac9f2))


### 🐛 Bug Fixes

* **preset-react:** add back the missing DOM.Iterable to tsconfig.json ([533d24d](https://github.com/alvis/presetter/commit/533d24d5613e97fe673e0047a0dd20167c28d906))
* **preset-web:** update tailwindcss to v3 ([ce9f102](https://github.com/alvis/presetter/commit/ce9f102ab95c45c066f12aa6197e4312654e1b93))
* **preset/lint:** update eslint to v8 ([f8cfa4d](https://github.com/alvis/presetter/commit/f8cfa4de68eaaf0fe7501f89b174b9c1262a7d1c))
* **preset:** lint code before committing ([e7219b2](https://github.com/alvis/presetter/commit/e7219b24e5293434ea2d588aa32496842c3535ce))


### 💎 Styles

* **preset-react:** remove the unnecessary quotation mark ([40caccf](https://github.com/alvis/presetter/commit/40caccf2ddcaed55bdf24ec55399dc70a3bd6ba5))
* **presetter:** reorder types definitions for clarity ([d7b54eb](https://github.com/alvis/presetter/commit/d7b54eb212a70bdae3b83764e4696966675da45d))



## [3.0.3](https://github.com/alvis/presetter/compare/v3.0.2...v3.0.3) (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** disable workspace for npm<7 environment ([fbdaabf](https://github.com/alvis/presetter/commit/fbdaabff70d57eb6cfca3dca368dba5f87ec19b7))



## [3.0.2](https://github.com/alvis/presetter/compare/v3.0.1...v3.0.2) (2021-11-03)


### 🐛 Bug Fixes

* **presetter:** declare the usage of read-pkg for npm<7 environment ([fcd8022](https://github.com/alvis/presetter/commit/fcd80223b93f941019b2126e2dbb06275224a04e))



## [3.0.1](https://github.com/alvis/presetter/compare/v3.0.0...v3.0.1) (2021-10-14)


### 🐛 Bug Fixes

* **preset-essentials/lint:** run prettier at the end ([b8faeb5](https://github.com/alvis/presetter/commit/b8faeb5c3bac23896c93b72fb4977705588ed70b))
* **preset-essentials:** warn for unused variables instead ([3b9dca5](https://github.com/alvis/presetter/commit/3b9dca54bfb95e942ce8997239164881d2eb2eeb))
* **preset-strict:** correct the template paths for bootstrapping ([f71bf8f](https://github.com/alvis/presetter/commit/f71bf8f390b0d3a7e5469fe5298464e6ab212b51))
* **preset-web:** correct the eslint supplementary config template ([1e11abf](https://github.com/alvis/presetter/commit/1e11abfe24b33cb15564bcbca2e2402ab74f64f6))
* **preset:** add back the missing gitignore entries ([70ac386](https://github.com/alvis/presetter/commit/70ac3865fccb823f8ad962609dd9d88e83b504a4))
* **presetter/preset:** don't read .presetterrc under `presetter use` ([8b49b8b](https://github.com/alvis/presetter/commit/8b49b8b0eb0296f6c6a3b30b98060e780b8fe6e8)), closes [#8](https://github.com/alvis/presetter/issues/8)
* **presetter/preset:** ensure outputs are stored under the target ([c638944](https://github.com/alvis/presetter/commit/c638944a2464f7fb6e23773e09dba2b565b004c2))


### 📚 Documentation

* use full package name to improve clarity ([d9414bd](https://github.com/alvis/presetter/commit/d9414bd2efddcc1092ac0a51915ef20e41dad129)), closes [#8](https://github.com/alvis/presetter/issues/8)



# [3.0.0](https://github.com/alvis/presetter/compare/v2.1.0...v3.0.0) (2021-10-04)


### ✨ Features

* **prefix/lint:** ensure that `import type` is always used ([1c2b76f](https://github.com/alvis/presetter/commit/1c2b76f6d19c1f742bd13d66f1ca1db2c15d7533))
* **preset-react:** provide a preset for a react project ([a9577e2](https://github.com/alvis/presetter/commit/a9577e27f02ec4f11fa8f876b09b8a7bca741688))
* **preset-rollup:** provide a preset for code bundling via rollup ([b0704b0](https://github.com/alvis/presetter/commit/b0704b0fe727c2724d7057d3803ecee49c230eff))
* **preset-strict:** extends preset-essentials for a stricter rules ([d7a73f8](https://github.com/alvis/presetter/commit/d7a73f880560b670379c45b55d9ef6b1946b73be))
* **preset-web:** provide a preset for a web project ([4f6c033](https://github.com/alvis/presetter/commit/4f6c033ebb030f7c9319e9764a032caeffbf786d))
* **preset/build:** add babel node to the build toolset ([cc830bd](https://github.com/alvis/presetter/commit/cc830bd2f64f18f57c8b799f21062e4f6f077d5d))
* **preset/build:** add babel-plugin-module-resolver custom paths ([d9b5ff6](https://github.com/alvis/presetter/commit/d9b5ff646593e65c410dd4cdd05dcfe2518c9fef))
* **preset/build:** add cross-env into the build toolset ([2f119c1](https://github.com/alvis/presetter/commit/2f119c16212e1d584a5268c33370d0131c715d53))
* **preset/lint:** add rules for import/export statements ([17cbe1b](https://github.com/alvis/presetter/commit/17cbe1b228a03cf6b68df62fd3bce42e556e060b))
* **preset/lint:** require file header with a summary ([ab793f4](https://github.com/alvis/presetter/commit/ab793f41b0e59df9911d7d87b4cbb0e1ad8b6c45))
* **preset/lint:** update eslint-plugin-sonarjs to v0.10 ([b84f89d](https://github.com/alvis/presetter/commit/b84f89da97a14bc0914527668a4d23aff79ed81b))
* **preset/lint:** update prettier to v2.4 ([70a3b61](https://github.com/alvis/presetter/commit/70a3b61f86abe77747ef1a8612a6b1ef8e8f2b68))
* **preset/lint:** use husky and lint-staged for quick precommit QA ([3c7e04f](https://github.com/alvis/presetter/commit/3c7e04ffb03c4b97c089a02ecb2a9747367ca0d1))
* **preset/test:** update jest to v27 ([85bde44](https://github.com/alvis/presetter/commit/85bde44b2036583292743b87bcb1c21e8407789a))
* **preset:** allow users to add additional scripts ([8409840](https://github.com/alvis/presetter/commit/84098407667d1dbb678c95d2873826e3674e7699))
* **preset:** allow users to ignore certain template configs ([f0a7947](https://github.com/alvis/presetter/commit/f0a7947940dcc4fee57ac45e7b4221732e6ea801))
* **preset:** export types and utilities ([0a2a7a3](https://github.com/alvis/presetter/commit/0a2a7a34ba32ca33ceb36930043ca6231aabbb12))
* **preset:** modularise preset helpers ([9b9bef6](https://github.com/alvis/presetter/commit/9b9bef63715de1013ea75f028f3d896edb97c414))
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
* **preset:** use target's package name as part of the output path ([2eaea0a](https://github.com/alvis/presetter/commit/2eaea0a5912a3183dfbd9cf44534658ede6c1c8e))
* simplify preset with common features moved to presetter ([044a132](https://github.com/alvis/presetter/commit/044a132b046f93434c86c3fda66a2ed8663f5bf1))


### 🐛 Bug Fixes

* **preset/build:** exclude node_modules at all levels ([af17788](https://github.com/alvis/presetter/commit/af17788f5bbac3fccdd424605d355f8906276cbe))
* **preset/build:** explicitly declare loose mode to ignore warnings ([b3fa0b4](https://github.com/alvis/presetter/commit/b3fa0b4bbc94d10bc2396da7769165d8d1700786))
* **preset:** allow file path(s) to be specified to the lint script ([1dc69da](https://github.com/alvis/presetter/commit/1dc69da7f9a08c164daae4bab9b575d390adc288))
* **preset:** ensure that an object in a list is correctly merged ([46555e4](https://github.com/alvis/presetter/commit/46555e41ec99d5f6980deaf3c39f7d220eece9a6))
* **preset:** remove .gitignore as symlink is removed since git 2.32 ([3d4098b](https://github.com/alvis/presetter/commit/3d4098b5d881f8f1137e95a7a2300961cb463179))
* **preset:** replace target value as long as the value is defined ([0fdb597](https://github.com/alvis/presetter/commit/0fdb59711e4aa8daa0a02244f6a2a14cec13df3d))
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

* **preset/lint:** reorder rules with plugin first ([c4840b5](https://github.com/alvis/presetter/commit/c4840b501987ab69f4f384075e5c928c4cda39b3))
* **preset:** abstract away pupa from resolving the template ([5b572e6](https://github.com/alvis/presetter/commit/5b572e6dfc6754239959f2fa83301906663eb299))
* **preset:** allow flexible template loading ([356c857](https://github.com/alvis/presetter/commit/356c857cf5acb304ecda63f2707f7356aaeec0f8))
* **preset:** relax rules to make it just an essential set ([74b5bd8](https://github.com/alvis/presetter/commit/74b5bd8e351abe95c6143b80045e4f71756aecdd))
* **preset:** take the default out from the main function ([237a1e4](https://github.com/alvis/presetter/commit/237a1e402e7a9dbe412e46c69856e563d845386a))
* **presetter:** pass an empty config by default ([d6a5d71](https://github.com/alvis/presetter/commit/d6a5d711904020b9c955894e703b1bbbcf698135))
* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))


### 📚 Documentation

* describe how a preset can be made ([4735d54](https://github.com/alvis/presetter/commit/4735d542a7412de5e78f2e590e5208c015c0be34))
* enrich README ([8509f41](https://github.com/alvis/presetter/commit/8509f410b200b32896cd74a9f2e51732d8a5cf6a))
* update status on eslint-plugin-sonarjs ([0a43ed8](https://github.com/alvis/presetter/commit/0a43ed80536e616a4c77de9c39dd314a6d2a0c60))


### 🚨 Tests

* **preset:** make sure all templates are used ([50b6644](https://github.com/alvis/presetter/commit/50b66446f10d91c725074728dee70f7509c5a445))


### ⚙️ Continuous Integrations

* reduce the complexity of style and coverage checks ([2df3587](https://github.com/alvis/presetter/commit/2df3587dcc5eb4eff4fe4077eefea9fe1b4ea7ed))


### ♻️ Chores

* clean up unused configurations ([866c5ac](https://github.com/alvis/presetter/commit/866c5ac1fc81a4348deb7627d3327189593a3a48))
* **presetter:** adopt .json extension for presetterrc ([b48edbd](https://github.com/alvis/presetter/commit/b48edbda9abad286e1512d9942842314e620fca7))


### 💎 Styles

* clean up the code with better naming and order ([bc17738](https://github.com/alvis/presetter/commit/bc17738c044e2870031f81b085cbe3346433b225))
* **preset:** remove unused function documentation ([87a54c4](https://github.com/alvis/presetter/commit/87a54c4fb9d8084f37a9e0e50dcd65cbd280f0ee))
* **presetter/script:** fix a typo in the test ([ff3190d](https://github.com/alvis/presetter/commit/ff3190d2a8f10e2bcc6a75caf2171261f5375c8d))
* **presetter:** reformat the messages for consistency ([7c0f876](https://github.com/alvis/presetter/commit/7c0f8769cae441f181e562d9a3bde66231581539))


### Breaking changes

* Now, presets only need to report the absolute paths of their
template files. All configuration generation is now performed by presetter. Due
to this change, multiple presets is now supported in a mix and match fashion.
* **preset:** Previously buildJSONConfig and buildListConfig assume that
templates are bundled with presetter-preset if the base path is not specified.
Now, the base path must be explicitly specified so that they can be more readily
reused by other presets.
* **presetter:** Now, presets will take the end project name and config as
the agrument instead of just the config.



# [2.1.0](https://github.com/alvis/presetter/compare/v2.0.0...v2.1.0) (2021-07-04)


### ✨ Features

* **preset/script:** add a script for continuous build ([986556b](https://github.com/alvis/presetter/commit/986556b6d112fd02e52c03e5e3f35b4b451a765a))
* **preset:** always use the latest version of [@types](https://github.com/types)/node ([eb3bd19](https://github.com/alvis/presetter/commit/eb3bd199e66077ac9024782cf36145af41810b80))
* **preset:** update linting related packages ([14f5c38](https://github.com/alvis/presetter/commit/14f5c388f506c1ed0188313dd203f67b5608d216))
* **preset:** update ts-node to v10 ([3d67fac](https://github.com/alvis/presetter/commit/3d67faceac445c3d36505fc7a72522ee265dbbbd))


### 🐛 Bug Fixes

* **preset/build:** explicitly declare loose mode to ignore warnings ([e56308f](https://github.com/alvis/presetter/commit/e56308fd0c93fa03a67d2d9ac6547e48a6b9ccea))
* **presetter:** update fs-extra to v10 ([b5cacf4](https://github.com/alvis/presetter/commit/b5cacf4ef06eee96d31c27dea133a4fbf5b62659))
* **preset:** update fs-extra to v10 ([33ab272](https://github.com/alvis/presetter/commit/33ab27261f66e2239ae307e234c87165b423ef8b))
* **preset:** update js-yaml to v4 ([3ea456a](https://github.com/alvis/presetter/commit/3ea456a581438945d77eacb14aa19306bde2b11f))
* upgrade tsc-alias and others to fix the corrupted build ([ace317c](https://github.com/alvis/presetter/commit/ace317cbee6ada92d8ec466906ab72dd7ca20838))


### 🛠 Builds

* restrict update to package-lock on the root only ([c425f96](https://github.com/alvis/presetter/commit/c425f965cc5c11be9c5f31c1393a67755458c061))


### 📚 Documentation

* add back the missing commit types ([fa6643d](https://github.com/alvis/presetter/commit/fa6643d4e079c4912dc02b9368ac44d985087aa1))
* give a facelift to the packages' READMEs ([4d4de5f](https://github.com/alvis/presetter/commit/4d4de5ffce8e6bc83d9d5d0cee05ec49a200124a))
* remove $ from the install examples for easier copy ([884a084](https://github.com/alvis/presetter/commit/884a084a972d7d64bcaafade624df7ac5c6efc17))
* remove duplicated log entries ([b137e22](https://github.com/alvis/presetter/commit/b137e223e8f689be4116f2e763a8719434adde5c))
* update the development environment requirement ([a2b8c38](https://github.com/alvis/presetter/commit/a2b8c383578ff21ffccfdbf6050546758441f82b))


### ♻️ Chores

* update dependencies' version specifiers ([8c018f1](https://github.com/alvis/presetter/commit/8c018f14ce64b6291d00ba19a4cb9b7d1d740f70))
* update the minimum node requirement ([fe7ac60](https://github.com/alvis/presetter/commit/fe7ac60a1895574d3128a3aed8d93962d76e9be0))





# [2.0.0](https://github.com/alvis/presetter/compare/v1.3.0...v2.0.0) (2021-06-23)


### 🐛 Bug Fixes

* make git ignore artifacts again for git>=2.32 ([9f14500](https://github.com/alvis/presetter/commit/9f14500d2d913a40069a714ceb3bc172fc2d980a))


### 📦 Code Refactoring

* **presetter:** update yargs to v17 ([5e65a8c](https://github.com/alvis/presetter/commit/5e65a8ca4d84f302e1b3a067be46f8b49925e3f2))


### ⚙️ Continuous Integrations

* extends tests to node 15 & 16 ([0942ae7](https://github.com/alvis/presetter/commit/0942ae7a14be734655cf5b84818eb6671fa0bfb0))
* rename workflows for better clarity ([9f66fed](https://github.com/alvis/presetter/commit/9f66fed5a32ed85d22a6ea7392bea274ae349111))


### ♻️ Chores

* use npm workspace for development ([c5e2547](https://github.com/alvis/presetter/commit/c5e25470c69c72ebbc769cfdf79ab5411bad23bc))


### 💎 Styles

* **presetter:** reformat the code by prettier ([3ae4e23](https://github.com/alvis/presetter/commit/3ae4e239d094e2791eb1be4ee51849a84d296e27))


### Breaking changes

* **presetter:** drop support on node 10 due to yargs 17





# [1.3.0](https://github.com/alvis/presetter/compare/v1.2.0...v1.3.0) (2021-05-20)


### ✨ Features

* **preset:** always use the latest version of typescript ([96d9bc2](https://github.com/alvis/presetter/commit/96d9bc2e97bfafb9f4404dea2c2a8133cf8983f4))
* **preset:** upgrade ts-node-dev to v1 ([66eb2a0](https://github.com/alvis/presetter/commit/66eb2a05104c46de7b23a51d948dcaf25d776dae))


### 🐛 Bug Fixes

* release via a NPM automation token ([55f8887](https://github.com/alvis/presetter/commit/55f888791dcd1835446316541dbc90e62cabee84))





# [1.2.0](https://github.com/alvis/presetter/compare/v1.1.0...v1.2.0) (2021-05-11)


### ✨ Features

* **preset/lint:** re-enable sonar with npm v7 support ([5e8a448](https://github.com/alvis/presetter/commit/5e8a4481a995ba2d8f181678d4058f449f92e912))
* **preset/release:** update standard-version to v9 ([093bade](https://github.com/alvis/presetter/commit/093bade545e300cf9e95c9d94ca8f17cebd784a5))
* **preset/ts:** upgrade typescript to 4.x ([b7a5fac](https://github.com/alvis/presetter/commit/b7a5facb90e3657d7ec1edcba329c55e011c7420))


### ⚙️ Continuous Integrations

* correct the job name for code test ([8ea5115](https://github.com/alvis/presetter/commit/8ea5115528600096bae99911288c34d8680da012))


### ♻️ Chores

* update dependencies ([2c08593](https://github.com/alvis/presetter/commit/2c08593b36c1827047054bf552034c54ec785e81))
* update lerna to v4 ([fdbc03a](https://github.com/alvis/presetter/commit/fdbc03a54d75bec27f6df9ba56b4b5dc0fc77771))
* **preset:** update dependencies ([b05c3ee](https://github.com/alvis/presetter/commit/b05c3eebfec0983b5c76690df09bcf7ceb5e38de))
* **preset:** update package-lock.json to v2 ([777a83a](https://github.com/alvis/presetter/commit/777a83a548b9c9bbfb735a6da7111d353ab1b2a5))
* **presetter:** update dependencies ([04c115a](https://github.com/alvis/presetter/commit/04c115a9560b4ec44f19fd986f9e55e8245d0d47))





# [1.1.0](https://github.com/alvis/presetter/compare/v1.0.5...v1.1.0) (2020-12-31)


### ✨ Features

* **preset/script:** update changelog preset from angular to metahub ([08aa456](https://github.com/alvis/presetter/commit/08aa4560169a31052f0ecae160d05e8d2f3fcc81))
* **preset/test:** make jest to display heap usage after each test ([b884914](https://github.com/alvis/presetter/commit/b884914548dbf64232a9c5e12cd4c15d91737f8e))
* **preset/test:** update ts-jest to v27 ([66954a9](https://github.com/alvis/presetter/commit/66954a9cb3a573943c08363804dc22e0c93cb8e0))
* **preset/ts:** update ts-node to v9.x ([b449432](https://github.com/alvis/presetter/commit/b449432f62301f5db8cdf4ecf8ef90eb099a2272))
* **preset/ts:** update typescript to v4.1 ([ad2ae23](https://github.com/alvis/presetter/commit/ad2ae23bb31d5f9d02557dfff1669099dbc3513a))
* **presetter:** remove node engine restriction to support node 15+ ([02042fd](https://github.com/alvis/presetter/commit/02042fde2f6156b31f2e18d91f135acd794e5312))
* **presetter:** support npm v7 ([3ff5d08](https://github.com/alvis/presetter/commit/3ff5d08d72c279eab34718b2b8876c7ce8851d1f))
* **presetter/preset:** set the default preset to presetter-preset ([13380ad](https://github.com/alvis/presetter/commit/13380ad50b3fab80f5019522066c536ba7940d28))
* **presetter/preset:** support json configuration file extension ([f93f593](https://github.com/alvis/presetter/commit/f93f5937dffe16eaadf63d29379dac71471f76a5))


### 🐛 Bug Fixes

* **preset:** disable sonar temporarily for npm v7 support ([933102b](https://github.com/alvis/presetter/commit/933102b8df6b31ab9652dfc924c80a046c93d9aa))
* **preset/script:** make sure prettier only takes those supported ([c516a29](https://github.com/alvis/presetter/commit/c516a29f3f3ce85515327e30fc3e2fc81ad23d20))
* **presetter:** convert potential numeric input into string ([5ec80ec](https://github.com/alvis/presetter/commit/5ec80ec8963ad2c4ed6e34aca05a17ebbeb6a4e7))
* **presetter/preset:** correct test description ([aae6c5d](https://github.com/alvis/presetter/commit/aae6c5dcf0bffb6fdf93c750714fc67e9886e7d6))
* **presetter/preset:** replaced the depreciated prepublish script ([dd5ac38](https://github.com/alvis/presetter/commit/dd5ac389ba2afc09d2529d9d8d2a1faa0bc5b90a))


### 🛠 Builds

* **preset:** skip test on install ([1f2b12b](https://github.com/alvis/presetter/commit/1f2b12b62fc051ad85a5a8ebefca92dbad92b239))


### 📦 Code Refactoring

* **preset:** reduce the complexity of the preset configurator ([1b19fa4](https://github.com/alvis/presetter/commit/1b19fa40c3c38beb646532dedcaa0424927c19c0))
* **preset:** simplify default options ([5500585](https://github.com/alvis/presetter/commit/5500585cd2a85d4010b43e12221c2aa0e3fb783f))
* **presetter:** apply a stricter type check ([6f581a0](https://github.com/alvis/presetter/commit/6f581a0efa6b4cda88faf6b5af1b35f05950e27f))
* **presetter:** simplify default options ([f8fad12](https://github.com/alvis/presetter/commit/f8fad124c64bc7f4fbf1b87db02756bfaae1cdf3))
* **presetter/task:** combine several typeguard helpers into one ([b83d7bf](https://github.com/alvis/presetter/commit/b83d7bff8d2883822ada64333c61e52e401e091c))


### 📚 Documentation

* **preset:** update the file structure ([5b6a7d8](https://github.com/alvis/presetter/commit/5b6a7d8dfae0be572dca7def89ebdd39344024b9))
* **presetter:** update the example for life cycle scripts ([ef8439a](https://github.com/alvis/presetter/commit/ef8439ad5750c3d69e1ca1dc43de4c050932f32c))


### 🚨 Tests

* **presetter:** change example paths for testing under windows ([4c68423](https://github.com/alvis/presetter/commit/4c6842390269b99b6e83da063d44de6886901092))


### ⚙️ Continuous Integrations

* split test and code style check ([46b6c6b](https://github.com/alvis/presetter/commit/46b6c6b3997a79ae49fdb2c8ca26b94c5b51f8b6))
* update setup-node to v2 ([834ab51](https://github.com/alvis/presetter/commit/834ab51d0f5bac02dcbed0814a71960e8eaa9ca6))


### ♻️ Chores

* **preset:** add keywords to package.json ([408a9bc](https://github.com/alvis/presetter/commit/408a9bcd23a511753c20e8ad3088bd04b7f4200c))
* **presetter:** add keywords to package.json ([12b07f2](https://github.com/alvis/presetter/commit/12b07f2832091b88dfffecb4efca0d19674dcde5))
* **presetter:** update dependency ([8dd8813](https://github.com/alvis/presetter/commit/8dd881338c599f0da36b03f56481815a47634894))
* clear up package dependency declaration ([df01ab5](https://github.com/alvis/presetter/commit/df01ab5a3b0934a2db4eed669e1f87a667384b3e))
* make sure the root version get updated with lerna version ([b5695b0](https://github.com/alvis/presetter/commit/b5695b058dbc064897643036c1767ab5b99a8bbc))
* replace the changelog preset to metahub ([8da3c08](https://github.com/alvis/presetter/commit/8da3c08b6e07c2ff0be8afd60444f341ed662288))


### 💎 Styles

* **preset/script:** remove unused scripts ([71c533d](https://github.com/alvis/presetter/commit/71c533d6962c4802d83b92534e33d07f9a36f26d))
* **presetter:** cleanup the code ([ec581b4](https://github.com/alvis/presetter/commit/ec581b41977452be007875331458b7517643824a))
* **presetter:** enhance the readability of test description ([9457c93](https://github.com/alvis/presetter/commit/9457c9330e9704f01074117de1250b47172ef40c))





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


### :computer: Continuous Integration

* add automated tests via github actions ([eff8d1f](https://github.com/alvis/presetter/commit/eff8d1f))
* release automatically via github actions ([2e7b47d](https://github.com/alvis/presetter/commit/2e7b47d))


### :construction_worker: Build

* adopt angular-emoji as the changelog template ([91a9bd3](https://github.com/alvis/presetter/commit/91a9bd3))
* **preset:** add build pipeline to the project ([cfa9d3a](https://github.com/alvis/presetter/commit/cfa9d3a))
* **preset:** add prettier to the project ([ee8b850](https://github.com/alvis/presetter/commit/ee8b850))
* **preset:** add typescript to the project ([7c24a75](https://github.com/alvis/presetter/commit/7c24a75))
* **preset:** use npm for bootstrapping ([ecae2f3](https://github.com/alvis/presetter/commit/ecae2f3))
* **presetter/cli:** add npm scripts for running project tasks ([0890c29](https://github.com/alvis/presetter/commit/0890c29))


### :package: Code Refactoring

* add a json extension to all rc files ([18d7195](https://github.com/alvis/presetter/commit/18d7195))


### :sparkles: Features

* **cli:** link presetter CLI on the root ([7bad25f](https://github.com/alvis/presetter/commit/7bad25f))
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
* **presetter/cli:** provide a command line interface for presetter ([7403064](https://github.com/alvis/presetter/commit/7403064))
* **presetter/err:** provider helpers for handling errors ([1563650](https://github.com/alvis/presetter/commit/1563650))
* **presetter/pkg:** provider helpers for handling packages ([32e48a8](https://github.com/alvis/presetter/commit/32e48a8))
* **presetter/preset:** provide helpers for setting up a preset ([7545351](https://github.com/alvis/presetter/commit/7545351))
* **presetter/run:** provide a task runner ([fca0c1d](https://github.com/alvis/presetter/commit/fca0c1d))
* **presetter/task:** provide helpers for task analysis ([9a5c1e2](https://github.com/alvis/presetter/commit/9a5c1e2))
