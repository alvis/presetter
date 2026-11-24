---
sidebar_position: 2
title: Continuous Integration
description: Run type checks, tests and lint in GitHub Actions with Presetter's shared quality action or reusable workflow
---

# Continuous Integration 🚦

Presetter ships a shared quality gate for pnpm repositories on GitHub Actions, so you don't have to copy CI between projects. It works for public and private, standalone and monorepo projects. One call runs, in order:

1. on pull requests, a conflict gate for the pull request and its stack
2. checkout
3. pnpm and Node.js setup
4. private registry authentication and `pnpm install`
5. change-scope detection
6. tool cache restore
7. type check
8. unit, integration and end-to-end tests
9. lint, then a check that lint left no rewritten files
10. tool cache save

The gate comes in two forms:

| Form              | Reference                                              | Use it when                                                                   |
| ----------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Reusable workflow | `alvis/presetter/.github/workflows/quality.yaml@<tag>` | the gate is the whole job, with no steps of your own                          |
| Composite action  | `alvis/presetter/.github/actions/quality@<tag>`        | you need your own steps before install or after lint, or the action's outputs |

The workflow is a thin wrapper: a single job that skips draft pull requests, picks the runner, cancels superseded runs, and calls the action released with it. Both forms take the same settings, with three differences: `checkout` belongs to the action only, `runner` and `timeout-minutes` to the workflow only, and the workflow takes `registry-tokens` and `test-env` as secrets rather than inputs. The [action](https://github.com/alvis/presetter/blob/main/.github/actions/quality/action.yaml) and the [workflow](https://github.com/alvis/presetter/blob/main/.github/workflows/quality.yaml) describe every input.

## Pin a Release Tag

Reference the gate at a Presetter release tag, `@vX.Y.Z`. The gate is available from v10.0.0, and the examples on this page use `@v10.0.0`; replace it with the [latest release](https://github.com/alvis/presetter/releases/latest).

Each release rewrites the workflow's reference to the action to that release's own tag, so `quality.yaml@vX.Y.Z` always runs `actions/quality@vX.Y.Z`. Don't pin a branch such as `@main`, and don't pin a [preview build](../introduction/pre-releases.md) tag: preview tags are not rewritten, so their workflow still calls the action of an earlier release.

## Standalone Project

With the defaults, a project needs only the triggers and the call:

```yaml title=".github/workflows/quality.yaml"
name: Quality

on:
  pull_request:
    types:
      - opened
      - reopened
      - synchronize
      - ready_for_review
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  # the conflict gate reads pull requests
  pull-requests: read

jobs:
  quality:
    uses: alvis/presetter/.github/workflows/quality.yaml@v10.0.0
```

This runs the `typecheck`, `test` and `lint` package scripts, and collects coverage on the `test` run. The workflow skips draft pull requests, so list `ready_for_review` to run when a draft is promoted. A manual `workflow_dispatch` runs everything in full.

## Monorepo

A pnpm workspace uses the same call. Set the scripts and arguments your root `package.json` provides:

```yaml title=".github/workflows/quality.yaml"
name: Quality

on:
  pull_request:
    types:
      - opened
      - reopened
      - synchronize
      - ready_for_review
  workflow_dispatch:

permissions:
  contents: read
  pull-requests: read

jobs:
  quality:
    uses: alvis/presetter/.github/workflows/quality.yaml@v10.0.0
    with:
      install-args: --child-concurrency 4
      # a root script; leave it out if the root has none
      integration-test-script: test:integration
      cache-paths: |
        .eslintcache
        */*/.eslintcache
      # workflow inputs reject null, so a skip is ''
      coverage-test-by: ''
```

Run the test and lint scripts from the repository root, as a root vitest config with [projects](https://vitest.dev/guide/projects) does: lint receives changed paths relative to the root, and vitest's `--changed` resolves the changes from the git repository.

## Use the Action for Your Own Steps

Call the action when the job needs steps around the gate, for example system packages before install, or a custom check after lint. Its outputs are `changed-files`, the files lint was scoped to, and `stack-target`, the branch the pull request's stack finally merges into.

```yaml title=".github/workflows/quality.yaml (job)"
jobs:
  quality:
    if: ${{ !github.event.pull_request.draft }}
    runs-on: ubuntu-latest
    timeout-minutes: 30
    permissions:
      contents: read
      pull-requests: read
    steps:
      - name: Code Checkout
        uses: actions/checkout@v7
        with:
          # changed-only pull requests need the history back to the merge bases
          fetch-depth: 0
          # keep the checkout token away from the scripts the gate runs
          persist-credentials: false
      - name: Native Build Dependencies
        run: sudo apt-get update && sudo apt-get install -y --no-install-recommends libcairo2-dev
      - id: quality
        name: Quality
        uses: alvis/presetter/.github/actions/quality@v10.0.0
        with:
          # the first step already checked out
          checkout: false
          integration-test-script: test:int
          coverage-test-by: null
      - name: Changed Files Report
        env:
          # one path per line; empty on a full run
          CHANGED_FILES: ${{ steps.quality.outputs.changed-files }}
        run: printf '%s\n' "${CHANGED_FILES:-full run}"
```

When you check out yourself and keep `changed-only`, use `fetch-depth: 0`. The action tries to fetch a missing base branch and history, and runs in full when it still finds no merge base. That fetch uses the checkout's credentials: on a private repository checked out with `persist-credentials: false`, it can't authenticate, so a shallow checkout there always runs in full.

## Choose the Runner

The workflow's `runner` input takes a runner label, or a JSON `runs-on` value for runner groups and label sets:

```yaml
with:
  runner: ubuntu-24.04
  # or a runner group: runner: '{"group":"small"}'
  # or a label set:    runner: '["self-hosted","linux"]'
```

`timeout-minutes` defaults to 30. Action callers set `runs-on` and `timeout-minutes` on their own job.

## Skip a Step

Every script input is optional, and an empty value skips its step:

| Caller   | Skip with      | Why                                           |
| -------- | -------------- | --------------------------------------------- |
| Action   | `null` or `''` | an action input set to `null` arrives empty   |
| Workflow | `''`           | reusable-workflow string inputs reject `null` |

```yaml title="action"
with:
  typecheck-script: null
  lint-test-script: null
```

```yaml title="workflow"
with:
  typecheck-script: ''
  lint-test-script: ''
```

The type check runs with `pnpm run --if-present`, so a missing `typecheck` script is also skipped. The test and lint scripts are not: if the project has no `test` or `lint` script, skip that step explicitly.

## Conflict Gate

On `pull_request` events, the action first checks that the pull request can merge, before it installs anything. It fails the job, so no test runs, when:

- the pull request conflicts with its base branch;
- the pull request sits in a stack, and any layer below it conflicts with its own base.

The gate reads each pull request's `mergeable` field through the GitHub API with `github.token`, and polls briefly while GitHub is still computing it. To find the stack, it walks down from the pull request's base: while the base isn't a stop branch and an open pull request has that base as its head branch, that pull request is the layer below. The error names the conflicting pull request. The branch where the walk stops is the stack's final target, the `stack-target` output; for a standalone pull request, it is the base itself. The gate also fails when more than one open pull request has the same head branch, as the layer below is then ambiguous, and when the walk loops back to a pull request it has already checked.

The gate needs `pull-requests: read`. Every API error fails the job, as an unread stack is not a checked one, and the error carries the API's own message: a 403 that names a missing permission asks you to grant `pull-requests: read`, while a rate limit asks you to rerun later. If GitHub still hasn't computed `mergeable` after polling, the gate warns and lets the run continue. GitHub itself doesn't start `pull_request` runs for a pull request that conflicts with its base, but the gate also covers stack layers and reruns.

### Long-Lived Branches

The walk always stops at the default branch. In a git-flow repository, also list long-lived branches such as `develop` in `stack-stop-branches`, one per line:

```yaml
with:
  stack-stop-branches: |
    main
    develop
```

Otherwise an open `develop` → `main` release pull request counts as the layer below every feature pull request into `develop`: a conflict in the release pull request refuses them all, and their integration tests scope to `main` instead of `develop`. With `develop` listed, the walk stops there and `develop` becomes the stack's final target. The action's default is the default branch; the workflow's is `''`, which stops only at the default branch, as workflow inputs reject `null`.

Set `conflict-gate: false` to turn the gate off. The job then reads no pull requests, needs no `pull-requests: read`, and scopes integration tests to the pull request's base branch.

## Changed-Only Pull Requests

On `pull_request` events with `changed-only` on (the default), the action finds the merge bases of the checked-out merge commit with the pull request's base branch and with the stack's final target, and scopes each step:

| Step              | Runs on                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| Type check        | the whole project                                                                                      |
| Unit tests        | `--changed <merge base with the base branch>`: the pull request's own change, above the layer below it |
| Integration tests | `--changed <merge base with the stack's final target>`: everything the stack brings to its target      |
| End-to-end tests  | the whole suite                                                                                        |
| Lint              | every file changed since the merge base with the base branch                                           |

Vitest's [`--changed`](https://vitest.dev/guide/cli#changed) runs the specs that the files changed since that commit reach. For a standalone pull request both bases are the same.

Every other event, including `push`, `workflow_dispatch` and `pull_request_target`, runs in full. A pull request also runs in full when:

- one of its changed files, deleted and renamed files included, matches a `full-run-paths` pattern (by default `pnpm-lock.yaml` and `pnpm-workspace.yaml`; `*` also crosses `/`);
- no merge base with its base branch is available;
- no changed files remain after deletions.

A match only in a lower layer of the stack, or a missing merge base with the stack's target, runs just the integration tests in full. A full run logs its reason as a notice. Set `lint-changed-files-args` to put a word before the changed paths on the lint run, and `changed-only: false` to always run in full.

## Coverage

Coverage is collected on one test run, chosen by `coverage-test-by`: `unit` (the default), `integration` or `end-to-end`. Pass `''` (or `null` to the action) to collect none. That run gets `coverage-test-args`, `--coverage` by default, after its other arguments.

On a changed-only pull request, a unit or integration coverage run also gets `--coverage.changed=<commit>`, with the same commit as its `--changed`, so coverage reports on the changed files your coverage config includes. A changed file that no selected spec imports counts as uncovered and can fail your thresholds. End-to-end runs are never scoped, so they collect coverage in full.

## Script Requirements

The action calls each script as:

```bash
# tests
pnpm run <script> -- <args> [--changed <commit>] <coverage args>
# lint
pnpm run <script> -- [<lint-changed-files-args> <changed files...>] <args>
```

Your scripts must handle that call:

- **Drop a duplicated leading `--`.** The `--` keeps the arguments apart from the package manager's own flags, but pnpm 11 also forwards it to the script: under pnpm 11.6, `pnpm run test -- --changed <commit>` with `"test": "vitest run"` runs `vitest run -- --changed <commit>`. Vitest treats everything after that `--` as non-options, so it ignores `--changed` and the coverage arguments and silently runs the whole suite. Presetter's `run` drops one leading `--`, so a Presetter script such as `"test": "run test --"` reaches vitest as `vitest … --changed <commit>`; other scripts need a runner that does the same.
- **Run vitest.** The changed-only test runs rely on vitest's `--changed` and `--coverage.changed`. A test script for another runner should set `changed-only: false`.
- **Pass when nothing is affected.** A pull request that reaches no spec, such as a docs-only change, leaves vitest's `--changed` with no test to run, which fails unless vitest runs with `--passWithNoTests`, as Presetter's `test` script does.
- **Lint any file type.** Lint receives every changed file, including YAML, JSON and Markdown. Run Prettier with `--ignore-unknown` and ESLint with `--no-warn-ignored`, as Presetter's essentials preset does.
- **Ignore what you don't format.** On a changed-only pull request, lint also receives changed files that a full lint never touches, such as Markdown, YAML, JSON and generated files like `CHANGELOG.md`. List generated and deliberately unformatted files in `.prettierignore`, or a pull request that touches them fails the drift check while the same tree passes on push.
- **Leave lint clean.** With `fail-on-lint-changes` on (the default), the run fails when lint rewrites a tracked file. Run `pnpm run lint` locally and commit the result.

## Private Registries

List each private registry in `registries`, one per line. Each registry authenticates by the first method that works:

1. **OIDC.** The action requests a GitHub ID token with the registry as its audience. By default it presents that token directly, once `<registry>/-/whoami` accepts it. If the registry instead trades the ID token for an install token, set `registry-oidc-path`; the action POSTs the ID token there and uses the `token` field of the response.
2. **Token.** The `<origin>=<token>` line for that registry in the `registry-tokens` secret.
3. **Anonymous.** The install continues with a warning, so pull requests from forks, which receive no secrets, still install public packages.

```yaml
jobs:
  quality:
    permissions:
      contents: read
      pull-requests: read
      id-token: write # OIDC; the token secret is the fallback
    uses: alvis/presetter/.github/workflows/quality.yaml@v10.0.0
    with:
      registries: |
        https://npm.example.com
        https://npm.internal.example.com oidc-path=/-/oidc/token audience=npm:{host}
    secrets:
      registry-tokens: |
        https://npm.example.com=${{ secrets.EXAMPLE_NPM_TOKEN }}
```

A registry line is `<origin> [oidc-path=<path>] [audience=<aud>]`. The options override `registry-oidc-path` and `registry-oidc-audience` for that registry. In an audience, `{origin}` stands for the registry origin, the default, and `{host}` for its hostname without the port. Action callers pass `registry-tokens` as an input, from secrets.

Tokens are masked in the log and never written to your repository. Authentication and install share one step: the tokens live only in that step's environment, and its temporary npmrc holds a `${…}` reference to them, never their value. The steps after install, including tests and lint, can't read them.

A registry that accepts GitHub ID tokens should check the `repository`, `ref` and `event_name` claims, so only the repositories, branches and events you trust can install.

## Permissions and Concurrency

The workflow sets no `permissions`: a called workflow can only narrow what its caller grants, so it runs with whatever the calling job grants. If you set `permissions`, grant `contents: read`, `pull-requests: read` when the gate runs on `pull_request` (the [conflict gate](#conflict-gate) reads pull requests), plus `id-token: write` for OIDC registry authentication.

The workflow does set `concurrency`, so a newer run cancels an older one on the same ref and you need no concurrency of your own. Its group is `<caller workflow>-quality-<ref>-<runner>-<node-version>`. That differs from a typical caller group such as `${{ github.workflow }}-${{ github.ref }}`, so the two can coexist if your workflow keeps its own; an identical group in caller and workflow would cancel the caller. Calls with different `runner` or `node-version` values, such as the legs of a matrix, don't cancel each other.

The action sets no `concurrency`. Action callers add it to their own job if newer pushes should cancel older runs.

## Secrets for Tests

Pass secrets that tests need through the `test-env` secret (the action input of the same name), one `KEY=VALUE` per line:

```yaml
secrets:
  test-env: |
    TEST_API_KEY=${{ secrets.TEST_API_KEY }}
    # blank lines and comments are ignored
    TEST_REGION=eu-west-1
```

Each value is masked and exported only to the test steps, never to install, type check or lint. A line that isn't a `KEY=VALUE` pair with a valid variable name fails the run without printing the line.

## `pull_request_target`

A `pull_request_target` run executes your base branch's workflow with access to secrets, and the action checks out the base branch, not the pull request's head. Such runs are not `pull_request` events, so they skip the conflict gate and always run in full. Never check out an untrusted head and run its scripts in a job that holds secrets or `id-token: write`.

## Related Resources

- [Essentials preset](../presets/foundation/essentials.md): the scripts the gate calls by default
- [Monorepo Setup](../tutorials/monorepo-setup.md): workspace layout and root scripts
- [Pre-release Builds](../introduction/pre-releases.md): preview tags, which are not for CI pins
