import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Presetter Documentation',
  tagline: 'Configuration Management That Scales With Your Projects',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://alvis.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/presetter/',

  // GitHub pages deployment config.
  organizationName: 'alvis', // GitHub org/user name.
  projectName: 'presetter', // Repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Edit this page links
          editUrl: 'https://github.com/alvis/presetter/tree/master/website/',
          // Enable search indexing
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
          editUrl: 'https://github.com/alvis/presetter/tree/master/website/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          // SEO optimization
          blogTitle: 'Presetter Blog',
          blogDescription: 'News, updates, and guides about Presetter configuration management',
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
    image: 'img/presetter-logo.svg',
    // SEO metadata
    metadata: [
      {name: 'description', content: 'Presetter documentation - Configuration management that scales with your projects'},
      {name: 'keywords', content: 'presetter, typescript, configuration, preset, eslint, prettier, build, tooling'},
      {property: 'og:description', content: 'Comprehensive documentation for Presetter, a TypeScript configuration management system'},
      {property: 'og:image', content: 'https://alvis.github.io/presetter/img/presetter-logo.svg'},
      {property: 'og:type', content: 'website'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:image', content: 'https://alvis.github.io/presetter/img/presetter-logo.svg'},
    ],
    // Search configuration
    // Use built-in search for now, can be upgraded to Algolia later
    // Built-in search is enabled by default in Docusaurus
    navbar: {
      title: 'Presetter',
      logo: {
        alt: 'Presetter Logo',
        src: 'img/presetter-logo.svg',
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
          to: '/docs/api',
          label: 'API Reference',
          position: 'left',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/alvis/presetter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/',
            },
            {
              label: 'Tutorials',
              to: '/docs/tutorials/',
            },
            {
              label: 'API Reference',
              to: '/docs/api/',
            },
            {
              label: 'CLI Reference',
              to: '/docs/cli-reference/',
            },
          ],
        },
        {
          title: 'Presets',
          items: [
            {
              label: 'Available Presets',
              to: '/docs/presets/',
            },
            {
              label: 'React Preset',
              to: '/docs/presets/frameworks/react',
            },
            {
              label: 'ESM Preset',
              to: '/docs/presets/module-systems/esm',
            },
            {
              label: 'Monorepo Preset',
              to: '/docs/presets/quality/monorepo',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/alvis/presetter/issues',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/alvis/presetter/discussions',
            },
            {
              label: 'npm Package',
              href: 'https://www.npmjs.com/package/presetter',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/alvis/presetter',
            },
            {
              label: 'Changelog',
              href: 'https://github.com/alvis/presetter/releases',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alvis HT Tang. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'json', 'yaml', 'jsx', 'tsx'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'error-next-line',
          block: {start: 'error-start', end: 'error-end'},
        },
      ],
    },
    // Search configuration - using built-in search
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
    // TODO: Configure Algolia search later for production
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'presetter',
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;