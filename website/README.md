# Presetter Website

Docusaurus documentation site for Presetter.

## Local Development

From the repository root, install with the pinned package manager (postinstall builds the local tooling and generates ignored configs):

```bash
pnpm install --frozen-lockfile
pnpm --filter presetter-website dev
```

The local site opens at `http://localhost:3000`. No environment file is required when search is disabled.

Focused checks from the repository root:

```bash
pnpm --filter presetter-website typecheck
pnpm --filter presetter-website exec eslint --no-fix src spec
pnpm exec tsx --test website/spec/presetter-setup.spec.ts
pnpm --filter presetter-website build
```

Run Lighthouse from `website` with `pnpm test:lighthouse`.

## Environment

Search is optional. Leave any value unset to build without search.

| Name                     | Required for search | Description                         |
| ------------------------ | ------------------- | ----------------------------------- |
| `ALGOLIA_APP_ID`         | Yes                 | Algolia application ID.             |
| `ALGOLIA_SEARCH_API_KEY` | Yes                 | Public Algolia search-only API key. |
| `ALGOLIA_INDEX_NAME`     | Yes                 | Algolia index used by DocSearch.    |

Local values belong in `website/.env` and should stay out of version control.
