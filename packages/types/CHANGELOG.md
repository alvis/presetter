# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.1.1](https://github.com/alvis/presetter/compare/v4.1.0...v4.1.1) (2023-07-14)



# [4.1.0](https://github.com/alvis/presetter/compare/v4.0.1...v4.1.0) (2023-07-13)



## [4.0.1](https://github.com/alvis/presetter/compare/v4.0.0...v4.0.1) (2023-06-21)



# [4.0.0](https://github.com/alvis/presetter/compare/v3.5.5...v4.0.0) (2023-06-18)


### ✨ Features

* convert the whole project into ESM ([381c84f](https://github.com/alvis/presetter/commit/381c84f59605faf9ce6c2b3f81c2eea81bfebc61))
* **types:** separate types from presetter ([4ff3626](https://github.com/alvis/presetter/commit/4ff3626d915649208067b2235645e8534508f341))


### 🐛 Bug Fixes

* **presetter:** add primitive types that allow undefined values ([915cf07](https://github.com/alvis/presetter/commit/915cf0708b320fc57754156eef4d6baf696c4a60))
* update outdated packages ([bbaf33f](https://github.com/alvis/presetter/commit/bbaf33f0eaeaeca2c296cfc68207b4ff4632674f))


### ♻️ Chores

* use pnpm for workspace management ([358d0d7](https://github.com/alvis/presetter/commit/358d0d77cdc2b37affb36931f13568464f1a46ab))


### Breaking changes

* - by default, client project emit ESM and for clarity preset-essentials has been renamed to preset-esm
- ts-node is removed in favor of a more powerful and less buggy tsx
