# Presetter Website

Docusaurus documentation site for Presetter.

## Local Development

Create a local env file, then run the site from this directory:

```bash
cp .env.template .env
npm run dev
```

Build the static site with:

```bash
npm run build
```

Run the Lighthouse CI checks with:

```bash
npm run test:lighthouse
```

## Environment

Search is optional. Leave any value unset to build without search.

| Name                     | Required for search | Description                         |
| ------------------------ | ------------------- | ----------------------------------- |
| `ALGOLIA_APP_ID`         | Yes                 | Algolia application ID.             |
| `ALGOLIA_SEARCH_API_KEY` | Yes                 | Public Algolia search-only API key. |
| `ALGOLIA_INDEX_NAME`     | Yes                 | Algolia index used by DocSearch.    |

Local values belong in `.env`; committed defaults belong in `.env.template`.
