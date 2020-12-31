# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
