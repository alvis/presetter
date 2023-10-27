# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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


### 🐛 Bug Fixes

* **preset-react:** remove monorepo incompatible jest configuration ([c554eb2](https://github.com/alvis/presetter/commit/c554eb2afdec35d5c1728de3b5065042b3b4b386))



## [4.0.1](https://github.com/alvis/presetter/compare/v4.0.0...v4.0.1) (2023-06-21)



# [4.0.0](https://github.com/alvis/presetter/compare/v3.5.5...v4.0.0) (2023-06-18)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **preset-react:** remove react exclusion from rollup ([8f1d565](https://github.com/alvis/presetter/commit/8f1d5658d01917e6f1216c8f9e74bb97ef1fec11))
* **preset-rollup:** make the rollup preset compatible with ESM ([86154b8](https://github.com/alvis/presetter/commit/86154b8daaf7e3f97c1a93753416263fe7b086dc))
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


### 🐛 Bug Fixes

* **preset-react:** increase the line limit of a react comonpent ([1ea89a2](https://github.com/alvis/presetter/commit/1ea89a2b85fe9de2a89218d58c8e3c19d93d2129))


### 🛠 Builds

* move .presetterrc to the root ([0eb17a0](https://github.com/alvis/presetter/commit/0eb17a058fa245faae96dcb017184460dae08b46))



## [3.4.1](https://github.com/alvis/presetter/compare/v3.4.0...v3.4.1) (2022-08-10)


### 🐛 Bug Fixes

* **preset-react:** correct test files' path pattern ([a1c37ea](https://github.com/alvis/presetter/commit/a1c37eac67dae1766c194da6369ab930de908b16))
* update packages ([ec8307d](https://github.com/alvis/presetter/commit/ec8307d79468f8529b29a0f7b356b4368c03302c))



# [3.4.0](https://github.com/alvis/presetter/compare/v3.3.0...v3.4.0) (2022-08-02)


### 🐛 Bug Fixes

* **presetter:** resolve presets as a tree not a list ([0db5ff3](https://github.com/alvis/presetter/commit/0db5ff3b0020735591b3986c216578857dde3039))



# [3.3.0](https://github.com/alvis/presetter/compare/v3.2.0...v3.3.0) (2022-07-12)


### ✨ Features

* support dual commonjs/esm exports ([a8c3ca1](https://github.com/alvis/presetter/commit/a8c3ca11b99be251d6e35e14ec42dc3afdbd0741))


### 📚 Documentation

* update dependencies badges ([94c084d](https://github.com/alvis/presetter/commit/94c084ddc39821106c9077bd4c12d1a7da9529eb))



# [3.2.0](https://github.com/alvis/presetter/compare/v3.1.1...v3.2.0) (2022-05-18)


### ✨ Features

* **preset-essentials:** remove babel in favorite of tsc ([dd62e01](https://github.com/alvis/presetter/commit/dd62e01d2519ab755713a27db99d38203e50a992))


### 🐛 Bug Fixes

* **preset-react:** allow react components to be bulkier ([091b305](https://github.com/alvis/presetter/commit/091b305af2e0dfaeb0f76cb49d8900181ad80bb2))
* **preset-react:** mark testing-library rules as provided ([3446e25](https://github.com/alvis/presetter/commit/3446e2535c17c56dabe7589458626d0246bbd67c))


### 📦 Code Refactoring

* use American English ([17315b7](https://github.com/alvis/presetter/commit/17315b78a9d65fb6193a609dd27b4d34454df1bc))


### ♻️ Chores

* update package dependencies ([4e50e0d](https://github.com/alvis/presetter/commit/4e50e0d2fce1bea470fbea62fc1eba52dccb3aed))



## [3.1.1](https://github.com/alvis/presetter/compare/v3.1.0...v3.1.1) (2021-12-29)



# [3.1.0](https://github.com/alvis/presetter/compare/v3.0.3...v3.1.0) (2021-12-28)


### ✨ Features

* **preset-react:** add testing library to the build toolset ([c7a9b78](https://github.com/alvis/presetter/commit/c7a9b78ed69d91d74c181e1eb143a31e9e0a7bc5))
* **preset-react:** use react-jsx transform for React v17+ ([4d2b688](https://github.com/alvis/presetter/commit/4d2b6880a6332d8ba041bbc58a07c6beded407f5))


### 🐛 Bug Fixes

* **preset-react:** add back the missing DOM.Iterable to tsconfig.json ([533d24d](https://github.com/alvis/presetter/commit/533d24d5613e97fe673e0047a0dd20167c28d906))


### 💎 Styles

* **preset-react:** remove the unnecessary quotation mark ([40caccf](https://github.com/alvis/presetter/commit/40caccf2ddcaed55bdf24ec55399dc70a3bd6ba5))



## [3.0.3](https://github.com/alvis/presetter/compare/v3.0.2...v3.0.3) (2021-11-03)



## [3.0.2](https://github.com/alvis/presetter/compare/v3.0.1...v3.0.2) (2021-11-03)



## [3.0.1](https://github.com/alvis/presetter/compare/v3.0.0...v3.0.1) (2021-10-14)



# [3.0.0](https://github.com/alvis/presetter/compare/v2.1.0...v3.0.0) (2021-10-04)


### ✨ Features

* **preset-react:** provide a preset for a react project ([a9577e2](https://github.com/alvis/presetter/commit/a9577e27f02ec4f11fa8f876b09b8a7bca741688))


### 🛠 Builds

* use presetter-preset-strict wherever possible ([4ff72a1](https://github.com/alvis/presetter/commit/4ff72a1a9730dfd4ad99d0a63dd4b005041ce759))


### 📦 Code Refactoring

* rename presetter-preset to presetter-preset-essentials ([b799587](https://github.com/alvis/presetter/commit/b7995871d85a1ccb8d2e43ba9b3a7e305de7a99b))
