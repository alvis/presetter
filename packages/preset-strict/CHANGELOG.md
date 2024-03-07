# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
