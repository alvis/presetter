/**
 * StructuredDataScript — renders a single JSON-LD `<script>` tag into the document
 * head. Kept deliberately minimal so any swizzled theme component can emit
 * schema.org metadata without duplicating `<Head>` boilerplate.
 *
 * The payload is typed as `unknown` on purpose: each caller is responsible
 * for producing a schema object that conforms to its chosen schema.org type
 * (e.g. `SoftwareApplication`, `TechArticle`, `BlogPosting`). We stringify
 * here so callers can't accidentally inject raw HTML.
 */

import Head from '@docusaurus/Head';

import type { ReactElement } from 'react';

export type StructuredDataScriptProps = {
  /** A JSON-serialisable schema.org payload. Must include `@context` and `@type`. */
  readonly schema: Readonly<Record<string, unknown>>;
};

/**
 * Renders a JSON-LD script tag containing the provided schema.
 * @param props Component properties.
 * @param props.schema A JSON-serialisable schema.org payload.
 * @returns A React element that injects a `<script type="application/ld+json">` into `<head>`.
 */
export function StructuredDataScript({
  schema,
}: StructuredDataScriptProps): ReactElement {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
}
