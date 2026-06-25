/**
 * Swizzled (wrapped) `DocItem/Layout` — renders the default Docusaurus doc
 * layout and additionally injects a `schema.org` `TechArticle` JSON-LD
 * payload into the document head for every rendered docs page.
 *
 * This is a "wrap" swizzle: we do not reimplement the default layout, we
 * delegate to it so upstream Docusaurus improvements continue to land
 * without a merge conflict surface.
 * @see https://docusaurus.io/docs/swizzling#wrapping
 * @see https://schema.org/TechArticle
 */

import { useDoc } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme-original/DocItem/Layout';

import { StructuredDataScript } from '#components/seo/StructuredDataScript';

import type LayoutType from '@theme/DocItem/Layout';

import type { ComponentProps, ReactElement } from 'react';

/**
 * Site-level constants exposed via `customFields` in docusaurus.config.ts.
 * Typed locally so we can fail loudly (via runtime narrowing) if a deploy
 * forgets to plumb them through.
 */
type SiteCustomFields = {
  readonly siteUrl: string;
  readonly siteLogoUrl: string;
  readonly authorName: string;
  readonly authorUrl: string;
};

/**
 * Narrows the loosely typed `customFields` record into our expected shape.
 * @param customFields The raw `customFields` object from the site config.
 * @returns A typed `SiteCustomFields` object, or `null` if any field is missing.
 */
function readSiteCustomFields(
  customFields: Readonly<Record<string, unknown>>,
): SiteCustomFields | null {
  const { siteUrl, siteLogoUrl, authorName, authorUrl } = customFields;
  if (
    typeof siteUrl !== 'string' ||
    typeof siteLogoUrl !== 'string' ||
    typeof authorName !== 'string' ||
    typeof authorUrl !== 'string'
  ) {
    return null;
  }

  return { siteUrl, siteLogoUrl, authorName, authorUrl };
}

/**
 * Converts a Docusaurus `lastUpdatedAt` (milliseconds since epoch) to an
 * ISO 8601 string. Docusaurus constructs dates with `new Date(lastUpdatedAt)`
 * directly — see `@docusaurus/theme-classic` `LastUpdated/index.tsx` — so the
 * value is already in milliseconds and must not be multiplied.
 * @param lastUpdatedAt The Unix timestamp in milliseconds, or nullable.
 * @returns An ISO 8601 date string, or `undefined` if no timestamp was provided.
 */
function toIsoDate(
  lastUpdatedAt: number | null | undefined,
): string | undefined {
  if (typeof lastUpdatedAt !== 'number' || Number.isNaN(lastUpdatedAt)) {
    return undefined;
  }

  const date = new Date(lastUpdatedAt);
  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return date.toISOString();
}

type Schema = Record<string, unknown>;

/**
 * Builds a `TechArticle` schema.org payload for the currently rendered doc.
 * @param input Page metadata used to build the structured-data payload.
 * @param input.title Page title.
 * @param input.description Page description (frontmatter `description` or excerpt).
 * @param input.canonicalUrl Absolute canonical URL.
 * @param input.dateModified ISO 8601 last-modified date, or `undefined`.
 * @param input.site The resolved site-level custom fields.
 * @returns A JSON-LD payload ready to be stringified.
 */
function buildTechArticleSchema(input: {
  readonly title: string;
  readonly description: string;
  readonly canonicalUrl: string;
  readonly dateModified: string | undefined;
  readonly site: SiteCustomFields;
}): Schema {
  const { title, description, canonicalUrl, dateModified, site } = input;

  const schema: Schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': title,
    description,
    'inLanguage': 'en',
    'proficiencyLevel': 'Expert',
    'url': canonicalUrl,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    'image': site.siteLogoUrl,
    'author': {
      '@type': 'Person',
      'name': site.authorName,
      'url': site.authorUrl,
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Presetter',
      'url': site.siteUrl,
      'logo': {
        '@type': 'ImageObject',
        'url': site.siteLogoUrl,
      },
    },
    'isPartOf': {
      '@type': 'TechArticle',
      'name': 'Presetter Documentation',
      'url': `${site.siteUrl}/docs/`,
    },
  };

  if (dateModified !== undefined) {
    schema.dateModified = dateModified;
  }

  return schema;
}

/**
 * Wraps the default `DocItem/Layout` and injects a `TechArticle` JSON-LD
 * payload for the currently rendered doc.
 * @param props The props the default `DocItem/Layout` expects.
 * @returns The original layout plus a JSON-LD head tag.
 */
export default function DocumentationArticleLayout(
  props: ComponentProps<typeof LayoutType>,
): ReactElement {
  const { metadata, frontMatter } = useDoc();
  const { siteConfig } = useDocusaurusContext();

  const site = readSiteCustomFields(siteConfig.customFields ?? {});

  // if customFields aren't configured we still render the page correctly —
  // we just skip the structured-data augmentation rather than crash.
  if (!site) {
    return <Layout {...props} />;
  }

  const frontMatterDescription =
    typeof frontMatter.description === 'string'
      ? frontMatter.description
      : undefined;
  const description = frontMatterDescription ?? metadata.description;
  const canonicalUrl = `${site.siteUrl}${metadata.permalink}`;
  const dateModified = toIsoDate(metadata.lastUpdatedAt);

  const schema = buildTechArticleSchema({
    title: metadata.title,
    description,
    canonicalUrl,
    dateModified,
    site,
  });

  return (
    <>
      <StructuredDataScript schema={schema} />
      <Layout {...props} />
    </>
  );
}
