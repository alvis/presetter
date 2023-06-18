# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [4.0.0](https://github.com/alvis/presetter/compare/v3.5.5...v4.0.0) (2023-06-18)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-rollup:** inject NODE_ENV for build and develop stages ([b09ade5](https://github.com/alvis/presetter/commit/b09ade516250b8b5256d7f3d52ab1a30102607b5))
* **preset-rollup:** make the rollup preset compatible with ESM ([86154b8](https://github.com/alvis/presetter/commit/86154b8daaf7e3f97c1a93753416263fe7b086dc))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### 📦 Code Refactoring

* **preset-rollup:** normalize config in functional way ([f6b3815](https://github.com/alvis/presetter/commit/f6b3815a13309791852ba2442e0a48e6531f8d45))


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


### 📦 Code Refactoring

* **presetter:** remove dependency on fs-extra ([8810c56](https://github.com/alvis/presetter/commit/8810c568d1cf1de275b055916b6aeac450b43403))
* **rollup:** remove unnecessary async waits ([9d9c4c3](https://github.com/alvis/presetter/commit/9d9c4c3b5131548512574634414214380cb501f2))



## [3.4.1](https://github.com/alvis/presetter/compare/v3.4.0...v3.4.1) (2022-08-10)


### 🐛 Bug Fixes

* **presetter:** merge arrays only if the values are all primitive ([961f30c](https://github.com/alvis/presetter/commit/961f30c8fcbf9ba6f6fbf9e4d90cf0cb8c5a1069))
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


### ♻️ Chores

* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## [3.1.1](https://github.com/alvis/presetter/compare/v3.1.0...v3.1.1) (2021-12-29)



# [3.1.0](https://github.com/alvis/presetter/compare/v3.0.3...v3.1.0) (2021-12-28)



## [3.0.3](https://github.com/alvis/presetter/compare/v3.0.2...v3.0.3) (2021-11-03)



## [3.0.2](https://github.com/alvis/presetter/compare/v3.0.1...v3.0.2) (2021-11-03)



## [3.0.1](https://github.com/alvis/presetter/compare/v3.0.0...v3.0.1) (2021-10-14)



# [3.0.0](https://github.com/alvis/presetter/compare/v2.1.0...v3.0.0) (2021-10-04)


### ✨ Features

* **preset-rollup:** provide a preset for code bundling via rollup ([b0704b0](https://github.com/alvis/presetter/commit/b0704b0fe727c2724d7057d3803ecee49c230eff))


### 🐛 Bug Fixes

* **presetter:** narrow types in directive's argument ([c6de804](https://github.com/alvis/presetter/commit/c6de8044d4d9f584e3ef4ef688f81c08db425d1c))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))
