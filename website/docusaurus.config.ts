import { themes as prismThemes } from 'prism-react-renderer';

import packageJson from './package.json';

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const SITE_URL = 'https://presetter.dev';
const SITE_BASE_URL = '/';
const SITE_CANONICAL = `${SITE_URL}${SITE_BASE_URL}`;
const SITE_LOGO_URL = `${SITE_URL}/images/logo.svg`;
const SITE_DESCRIPTION =
  'Presetter is a configuration management system that scales with your TypeScript projects, composing presets for ESLint, Prettier, Vitest, build tooling and more.';
const AUTHOR_NAME = 'Alvis HT Tang';
const AUTHOR_URL = 'https://github.com/alvis';
const REPOSITORY_URL = 'https://github.com/alvis/presetter';
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_SEARCH_API_KEY = process.env.ALGOLIA_SEARCH_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;
const algoliaConfig =
  ALGOLIA_APP_ID && ALGOLIA_SEARCH_API_KEY && ALGOLIA_INDEX_NAME
    ? {
        appId: ALGOLIA_APP_ID,
        apiKey: ALGOLIA_SEARCH_API_KEY,
        indexName: ALGOLIA_INDEX_NAME,
        contextualSearch: true,
        searchPagePath: 'search',
      }
    : undefined;

/**
 * JSON-LD schema for the Presetter home page.
 * @see https://schema.org/SoftwareApplication
 */
const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': 'Presetter',
  'applicationCategory': 'DeveloperApplication',
  'applicationSubCategory': 'BuildTool',
  'operatingSystem': 'Cross-platform (Node.js 18+)',
  'url': SITE_CANONICAL,
  'image': SITE_LOGO_URL,
  'description': SITE_DESCRIPTION,
  'softwareVersion': packageJson.version,
  'license': 'https://opensource.org/licenses/MIT',
  'downloadUrl': 'https://www.npmjs.com/package/presetter',
  'codeRepository': REPOSITORY_URL,
  'programmingLanguage': 'TypeScript',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD',
  },
  'author': {
    '@type': 'Person',
    'name': AUTHOR_NAME,
    'url': AUTHOR_URL,
  },
  'maintainer': {
    '@type': 'Person',
    'name': AUTHOR_NAME,
    'url': AUTHOR_URL,
  },
} as const;

const config: Config = {
  title: 'Presetter Documentation',
  tagline: 'Configuration Management That Scales With Your Projects',
  favicon: 'images/logo.svg',

  // Expose a subset of site constants to the client so swizzled theme
  // components (e.g. DocItem/Layout) can build canonical URLs and emit
  // per-page structured data without hard-coding values.
  customFields: {
    siteUrl: SITE_URL,
    siteLogoUrl: SITE_LOGO_URL,
    authorName: AUTHOR_NAME,
    authorUrl: AUTHOR_URL,
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
      siteStorageNamespacing: true,
      fasterByDefault: false,
      mdx1CompatDisabledByDefault: true,
    }, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://presetter.dev',
  baseUrl: SITE_BASE_URL,

  // GitHub pages deployment config.
  organizationName: 'alvis', // GitHub org/user name.
  projectName: 'presetter', // Repo name.

  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: { onBrokenMarkdownLinks: 'warn' },
    // future.v4.mdx1CompatDisabledByDefault disables all three mdx1Compat
    // preprocessors (comments, headingIds, admonitions).  The admonitions
    // preprocessor converts the legacy ":::info Title text" syntax into the
    // ":::info[Title text]" bracket form that micromark-extension-directive v3
    // requires.  Without it, every ::: block is rendered as literal text.
    // Re-enable only the admonitions preprocessor; leave comments and
    // headingIds off because we do not rely on those legacy behaviours.
    mdx1Compat: { admonitions: true },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify(softwareApplicationSchema),
    },
  ],

  plugins: [],
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Edit this page links
          editUrl: 'https://github.com/alvis/presetter/tree/main/website/',
          breadcrumbs: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // SEO optimization
          routeBasePath: '/docs',
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/alvis/presetter/tree/main/website/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          // SEO optimization
          blogTitle: 'Presetter Blog',
          blogDescription:
            'News, updates, and guides about Presetter configuration management',
          postsPerPage: 5,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'images/logo.svg',
    // SEO metadata
    metadata: [
      {
        name: 'description',
        content:
          'Presetter documentation - Configuration management that scales with your projects',
      },
      {
        name: 'keywords',
        content:
          'presetter, typescript, configuration, preset, eslint, prettier, build, tooling',
      },
      {
        property: 'og:description',
        content:
          'Comprehensive documentation for Presetter, a TypeScript configuration management system',
      },
      {
        property: 'og:image',
        content: 'https://presetter.dev/images/logo.svg',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://presetter.dev/images/logo.svg',
      },
    ],
    ...(algoliaConfig ? { algolia: algoliaConfig } : {}),
    navbar: {
      title: 'Presetter',
      logo: {
        alt: 'Presetter Logo',
        src: 'images/logo.svg',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/tutorials',
          label: 'Tutorials',
          position: 'left',
        },
        {
          to: '/docs/api',
          label: 'API Reference',
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        ...(algoliaConfig
          ? [{ type: 'search' as const, position: 'right' as const }]
          : []),
        {
          href: REPOSITORY_URL,
          label: 'GitHub',
          position: 'right',
          className: 'navbar-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Presetter',
        src: 'images/logo.svg',
        href: '/',
        width: 54,
        height: 54,
      },
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting Started', to: '/docs/' },
            { label: 'Tutorials', to: '/docs/tutorials/' },
            { label: 'API Reference', to: '/docs/api/' },
            { label: 'CLI Reference', to: '/docs/cli-reference/' },
          ],
        },
        {
          title: 'Presets',
          items: [
            { label: 'Available Presets', to: '/docs/presets/' },
            { label: 'React Preset', to: '/docs/presets/frameworks/react' },
            { label: 'ESM Preset', to: '/docs/presets/module-systems/esm' },
            { label: 'Monorepo Preset', to: '/docs/presets/quality/monorepo' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Repository',
              href: REPOSITORY_URL,
              className: 'footer-github-link',
            },
            {
              label: 'Issues',
              href: `${REPOSITORY_URL}/issues`,
              className: 'footer-github-link',
            },
            {
              label: 'Discussions',
              href: `${REPOSITORY_URL}/discussions`,
              className: 'footer-github-link',
            },
            {
              label: 'npm Package',
              href: 'https://www.npmjs.com/package/presetter',
              className: 'footer-npm-link',
            },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            {
              label: 'Changelog',
              href: `${REPOSITORY_URL}/releases`,
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'json', 'yaml', 'jsx', 'tsx'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'error-next-line',
          block: { start: 'error-start', end: 'error-end' },
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    // Color mode configuration
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Table of contents configuration
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
