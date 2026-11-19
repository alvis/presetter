---
sidebar_position: 3.5
title: Pre-release Builds
---

# Installing Pre-release Builds

Presetter publishes stable releases to npm under `latest`. Versions cut through a Release PR with a phase, shaped `<next version>-<phase>.<n>`, also go to npm under their phase dist-tag and install like any npm version, as `presetter@<phase>`. To try a change before it is released at all, install a **preview build**: the [preview workflow](https://github.com/alvis/presetter/blob/main/.github/workflows/preview.yaml) packs every public package of one commit as a tarball and attaches the tarballs to a GitHub prerelease. Preview builds are not published to npm, so you install them by URL. The rest of this page covers preview builds.

## How a Preview Build Is Named

Each preview build is a [GitHub prerelease](https://github.com/alvis/presetter/releases) with one tarball per package:

| Item | Shape |
| --- | --- |
| Version | `<next version>-<phase>-<commit date>-<sha>` |
| Tag | `v<version>` |
| Asset | package name without `@`, `/` replaced by `-`, then `-<phase>-<commit date>-<sha>.tgz` |
| Asset URL | `https://github.com/alvis/presetter/releases/download/<tag>/<asset>` |

A build made without a phase leaves `-<phase>` out of both the version and the asset name. The release notes list the URL of every tarball.

The snippets below use `next` builds and these placeholders:

- `<tag>`: the release tag
- `<version>`: the tag without its leading `v`
- `<date>`: the commit date in the tag, as `YYYY-MM-DD`
- `<sha>`: the short commit SHA at the end of the tag

:::warning Preview builds are temporary
Publishing a stable release deletes every preview build up to that version. The git tags stay, but the release and its tarballs are removed, so their URLs stop working. Switch to the stable release once it ships.
:::

## Keep Every Package on One Release

The tarballs depend on each other by URL. For example, `presetter` depends on `@presetter/types`, and `@presetter/preset-esm` depends on `@presetter/preset-essentials` and `@presetter/types`, each pointing at a sibling tarball from the same release. Every `@presetter/*` package in your dependency tree, including packages your project never lists, must therefore come from the same release. Never mix tarballs from two releases, or a tarball with a registry version.

## npm

Install the tarballs you need by URL. Each tarball brings its sibling tarballs, so npm needs no `overrides`:

```bash
npm install --save-dev \
  https://github.com/alvis/presetter/releases/download/<tag>/presetter-next-<date>-<sha>.tgz \
  https://github.com/alvis/presetter/releases/download/<tag>/presetter-preset-esm-next-<date>-<sha>.tgz
```

npm records the URLs in `package.json`:

```json title="package.json (partial)"
{
  "devDependencies": {
    "@presetter/preset-esm": "https://github.com/alvis/presetter/releases/download/<tag>/presetter-preset-esm-next-<date>-<sha>.tgz",
    "presetter": "https://github.com/alvis/presetter/releases/download/<tag>/presetter-next-<date>-<sha>.tgz"
  }
}
```

To set up a new project, run `use` afterwards. It keeps the declared URLs and installs only the missing setup packages:

```bash
npx presetter use @presetter/preset-esm
npm run build
npm run test
```

To upgrade, run the same `npm install --save-dev` with the new tag, date and SHA. npm replaces every `@presetter/*` package, including the ones your project does not list.

:::note Missing native binding
If `run build` or `run test` fails with `Cannot find native binding` after another `npm install` in the same project, npm dropped a platform-specific optional dependency ([npm/cli#4828](https://github.com/npm/cli/issues/4828)). This can happen with any npm project, including one installed from the registry, and `use` runs a second install. Delete `node_modules` and `package-lock.json`, then run `npm install` again.
:::

## Bun

Bun works the same way as npm: add the tarballs by URL and Bun fetches their siblings. Bun needs no `overrides` or `resolutions`:

```bash
bun add -d \
  https://github.com/alvis/presetter/releases/download/<tag>/presetter-next-<date>-<sha>.tgz \
  https://github.com/alvis/presetter/releases/download/<tag>/presetter-preset-esm-next-<date>-<sha>.tgz
bunx presetter use @presetter/preset-esm
bun run build
bun run test
```

To upgrade, run the same `bun add -d` with the new tag, date and SHA.

## pnpm

pnpm also installs the tarballs by URL, but it needs two things that npm and Bun do not:

- **`blockExoticSubdeps: false`**: pnpm 11 rejects URL specifiers in transitive dependencies (`ERR_PNPM_EXOTIC_SUBDEP`), and every tarball reaches its siblings through URLs.
- **Peers listed directly**: pnpm does not install a peer that is declared by URL. Add every `@presetter/*` package your presets peer on, for example `@presetter/preset-essentials` for `@presetter/preset-esm`. `pnpm peers check` reports any you miss.

```yaml title="pnpm-workspace.yaml"
blockExoticSubdeps: false
```

```bash
pnpm add -D \
  https://github.com/alvis/presetter/releases/download/<tag>/presetter-next-<date>-<sha>.tgz \
  https://github.com/alvis/presetter/releases/download/<tag>/presetter-preset-esm-next-<date>-<sha>.tgz \
  https://github.com/alvis/presetter/releases/download/<tag>/presetter-preset-essentials-next-<date>-<sha>.tgz
pnpm peers check
pnpm exec presetter use @presetter/preset-esm
pnpm run build
pnpm run test
```

To upgrade, run the same `pnpm add -D` with the new tag, date and SHA. The lockfile then drops the old build.

### Alternative: Pin the Version with Overrides

To keep a readable version in `package.json`, declare the exact pre-release version and let `overrides` in `pnpm-workspace.yaml` swap in the tarballs. Override every `@presetter/*` package you declare, and still list the peers directly:

```json title="package.json (partial)"
{
  "devDependencies": {
    "@presetter/preset-esm": "<version>",
    "@presetter/preset-essentials": "<version>",
    "@presetter/preset-strict": "<version>",
    "presetter": "<version>"
  }
}
```

```yaml title="pnpm-workspace.yaml"
blockExoticSubdeps: false
overrides:
  presetter: https://github.com/alvis/presetter/releases/download/<tag>/presetter-next-<date>-<sha>.tgz
  '@presetter/preset-esm': https://github.com/alvis/presetter/releases/download/<tag>/presetter-preset-esm-next-<date>-<sha>.tgz
  '@presetter/preset-essentials': https://github.com/alvis/presetter/releases/download/<tag>/presetter-preset-essentials-next-<date>-<sha>.tgz
  '@presetter/preset-strict': https://github.com/alvis/presetter/releases/download/<tag>/presetter-preset-strict-next-<date>-<sha>.tgz
```

Edit `package.json` by hand, then run `pnpm install`. `pnpm add presetter@<version>` fails with `ERR_PNPM_NO_MATCHING_VERSION`, because pnpm looks the version up on npm before it applies the overrides. To upgrade, replace the tag, version, date and SHA in both files and run `pnpm install`.

## Check the Installed Release

Confirm that every `@presetter/*` package resolved to the same release:

```bash
npm ls --all @presetter/types   # npm
bun why @presetter/types        # Bun
pnpm why @presetter/types       # pnpm
```

Each command should list one version, or one tarball URL, from the release you chose.

## Switch Back to a Stable Release

Install the registry versions over the URLs. `latest` is the newest stable release on npm:

```bash
npm install --save-dev presetter@latest @presetter/preset-esm@latest
bun add -d presetter@latest @presetter/preset-esm@latest
```

With pnpm:

1. Remove the peers you listed only for the preview build, such as `@presetter/preset-essentials`, with `pnpm remove`. pnpm installs registry peers itself.
2. Run `pnpm add -D presetter@latest @presetter/preset-esm@latest`.
3. Remove `blockExoticSubdeps` from `pnpm-workspace.yaml` and run `pnpm install`.

If you used overrides, edit the files instead: remove `blockExoticSubdeps` and `overrides` from `pnpm-workspace.yaml`, replace the pinned versions in `package.json` with stable ranges, drop the peers you listed only for the preview build, then run `pnpm install`. Do not use `pnpm add` here: once the overrides are gone, pnpm looks up the remaining preview versions on npm and fails with `ERR_PNPM_NO_MATCHING_VERSION`.

Afterwards, the lockfile no longer references any release tarball. `use` may have added setup packages, such as `vitest`, at versions picked for the preview build. If the stable release is an older major, check your package manager's peer warnings, for example with `pnpm peers check`, and align those versions.
