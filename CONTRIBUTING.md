# Contributing to Presetter

> Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md).
> By participating in this project you agree to abide by its terms.

- [The Essential](#the-essential)
- [Project Structure](#project-structure)
- [Development](#development)
- [Pull Request Submission](#pull-request-submission)
- [Useful Commands](#useful-commands)
  - [Getting npm to trust github actions](#getting-npm-to-trust-github-actions)

## The Essential

Presetter relies on typescript and other tools for building and testing too.
Therefore, it's important that you have all the tools installed before making any change to the code.
But setting up the code base is easy, just follow these steps:

1. Clone this repo
2. Run `npm link`

**NOTE**:
By running `npm link`, it makes the presetter CLI available globally,
so you easily run tests and lint your code during development.

---

## Project Structure

This repo is a monorepo. It contains the code for presetter and a simple preset.
Here's a quick guide to the content of the monorepo.

| Package                                                   | Description                                                                    |
| --------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [presetter](packages/presetter)                           | The core of presetter containing all the logic and the CLI utility             |
| [@presetter/preset-essentials](packages/preset-essentials) | A battery-loaded preset for building presetter, containing typescript and more |
| [@presetter/preset-strict](packages/preset-strict)         | An extension of @presetter/preset-essentials with stricter rules                |
| [@presetter/preset-react](packages/preset-react)           | An opinionated preset for building a React project                             |
| [@presetter/preset-rollup](packages/preset-rollup)         | An advanced preset for setting up rollup for code bundling                     |
| [@presetter/preset-web](packages/preset-web)               | An example pure bundle preset for building a web project                       |

---

## Development

We write code in [test-driven development (TDD)](https://en.wikipedia.org/wiki/test-driven_development) approach.

All tests are hosted under the `spec` folder, with the same structure as the `src` folder so that tests are easy to be located.
In general, each source file should have its own test file.

### Requirement

Since presetter 2.0, we have migrated to npm workspace.
This implies that you would need npm 7.20+ to start development.
If your system doesn't have npm 7.20+, you can achieve it by using [nvm](https://github.com/nvm-sh/nvm) with node 16.6+.

### Code Standard

This project employs code standard rules exported from [@presetter/preset-essentials](packages/preset-essentials/templates/eslintrc.yaml),
which mostly follow the recommended rules from

- [Eslint](https://eslint.org)
- [TypeScript ESLint](https://typescript-eslint.io).
- [Sonar](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [JSDoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

### Commit

To allow us to release in semantic versioning,
we adopt the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for commit messages.

A commit message should be structured as follows:

```
<type>(<package>): <subject>
<BLANK LINE>
<body>
```

Example

```
feat(presetter): new awesome feature

BREAKING CHANGE: something will change the behavior
```

List of types:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- build: Changes that affect the build system or external dependencies
- ci: Changes to our CI configuration files
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
- revert: Reverts a previous commit

---

## Pull Request Submission

This project follows [GitHub's standard forking model](https://guides.github.com/activities/forking/).
Please fork the project in order to submit pull requests.

Obviously, PRs must be mergeable, rebasing first against the latest master.
The number of commits will ideally be limited in number, unless extra commits can better show a progression of features.

**IMPORTANTLY**, make sure the following are achieved:

- commit messages must be worded clearly
- the reason for any PR must be clearly stated by either linking to an issue or giving a full description of what it achieves.
- all commits must follow the conventional commit standard
- a test must shipped with any PR, if possible
- 100% coverage must be maintained

---

## Useful Commands

The following contains some useful commands you would need during development.
**BE AWARE** that some of them are meant to run under individual package folder.

### Running Unit Tests

To reduce computation consumption,
it's recommended to perform unit tests within each package folder by running the following:

#### Run all tests

```shell
# Either under individual package folder or the project root for all packages
$ npm run test
```

#### Run all tests when there is any file changes

```shell
# Run watch only under individual package folder
$ npm run watch
```

#### Watch only some specific test files

```shell
# Run watch only under individual package folder
$ npm run watch -- spec/<file.spec.ts>
```

#### Coverage

Run the coverage script to make sure the coverage is 100% before committing,
then open `coverage/lcov-report/index.html` located in each individual package folder in your browser.

```shell
# Either under individual package folder or the project root for all packages
$ npm run coverage
```

### Building

To transpile typescript to javascript, run the following:

```shell
# Either under individual package folder or the project root for all packages
$ npm run build
```

### Linting

To check the code standard and fix fixable issues automatically, run the following:

```shell
# You can run lint either under individual package folder or the project root for all packages
$ npm run lint
```

### Local CLI Testing

If you want to test out presetter globally, you can build everything and make the CLI available globally by:

```shell
$ npm link
```

### Release

We follow semantic versioning and a release can be triggered by running either the following:

```shell
# bump the version and release as canary
$ npm run next

# release as a stable version
$ npm run release
```

All packages in the monorepo are released in lock-step at one version per cycle.

### Getting npm to trust github actions

Trusted publishing is configured through npm's GitHub Actions OIDC support.
Run the trust script from the repository root when the package set changes, the release workflow changes, or npm trusted publishing needs to be repaired.

```shell
$ npm run trust
```

The script requires `jq` and `npm` 11.16.0 or newer.
It signs in to npm if needed, opens the system browser for npm's web authentication flow, and then configures every package under `packages/**` and `presets/**` to trust the `alvis/presetter` GitHub repository with the `release.yaml` workflow.
When npm prompts for authentication, press Enter to open the browser and enable the 5-minute 2FA skip window so the bulk update can finish.

The script revokes any existing trusted publisher configuration for each package before creating the GitHub Actions trusted publisher with publish permission.
Because this mutates npm registry settings, only run it from an npm account that has write access to all published packages.

#### Flags

| Flag       | Purpose                                                                                      | Example                               |
| ---------- | -------------------------------------------------------------------------------------------- | ------------------------------------- |
| `--ignore` | Skip matching sub-packages by repo-relative path glob or package-name glob. Can be repeated. | `npm run release -- --ignore ./e2e/*` |

#### Environment variables

| Variable       | Purpose                                                                                                             | Example                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `VERSION`      | Force a specific version instead of letting `git-cliff` compute the next one from commits.                          | `VERSION=9.1.0 npm run release`               |
| `PRERELEASE`   | Append a prerelease identifier (e.g. `next`, `beta`). `npm run next` sets this to `next` automatically.             | `PRERELEASE=beta npm run release`             |
| `IGNORE_PATHS` | Comma-delimited list of path prefixes to exclude from lock-step version bumping in environment-driven release jobs. | `IGNORE_PATHS=examples,tools npm run release` |

`--ignore` can match any discovered sub-package by directory or `package.json` path (`./e2e/*`) or by package name (`@acme/e2e-*`). `IGNORE_PATHS` preserves the older path-prefix behavior (`examples` also skips `examples/monorepo/packages/core`). Paths are repo-relative, with no spaces.

**NOTE**:
Upon releasing, automatically a versioning tag is issued and the change logs got updated.
When the commit is pushed to the origin, the automated CI/CD system will then
publish the package to npm automatically without any manual intervention.
