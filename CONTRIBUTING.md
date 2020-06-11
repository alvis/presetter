# Contributing to Presetter

> Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md).
> By participating in this project you agree to abide by its terms.

- [The Essential](#the-essential)
- [Project Structure](#project-structure)
- [Development](#development)
- [Pull Request Submission](#pull-request-submission)
- [Useful Commands](#useful-commands)

## The Essential

Presetter relies on typescript and other tools for building and testing too.
Therefore, it's important that you have all the toolsets installed before making any change to the code.
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

| Package                             | Description                                                                                      |
| ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| [presetter](packages/presetter)     | The core of presetter containing all the logic and the CLI utility                               |
| [presetter-preset](packages/preset) | the preset for building presetter, containing declaration of typescript and other building tools |

---

## Development

We write code in [test-driven development (TDD)](https://en.wikipedia.org/wiki/test-driven_development) approach.

All tests are hosted under the `spec` folder, with the same structure as the `source` folder so that tests are easy to be located.
In general, each source file should have its own test file.

### Code Standard

This project employs code standard rules exported from [presetter-preset](packages/preset/templates/eslintrc.yaml),
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

BREAKING CHANGE: something will change the behaviour
```

List of types:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

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
$ npm run prerelease

# release as a stable version
$ npm run release
```

**NOTE**:
Upon releasing, automatically a versioning tag is issued and the change logs got updated.
When the commit is pushed to the origin, the automated CI/CD system will then
publish the package to npm automatically without any manual intervention.
