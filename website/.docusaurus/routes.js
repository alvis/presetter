import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/presetter/blog',
    component: ComponentCreator('/presetter/blog', '944'),
    exact: true
  },
  {
    path: '/presetter/blog/archive',
    component: ComponentCreator('/presetter/blog/archive', '223'),
    exact: true
  },
  {
    path: '/presetter/blog/authors',
    component: ComponentCreator('/presetter/blog/authors', '6dd'),
    exact: true
  },
  {
    path: '/presetter/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/presetter/blog/authors/all-sebastien-lorber-articles', 'c9c'),
    exact: true
  },
  {
    path: '/presetter/blog/authors/yangshun',
    component: ComponentCreator('/presetter/blog/authors/yangshun', 'f19'),
    exact: true
  },
  {
    path: '/presetter/blog/first-blog-post',
    component: ComponentCreator('/presetter/blog/first-blog-post', '84b'),
    exact: true
  },
  {
    path: '/presetter/blog/long-blog-post',
    component: ComponentCreator('/presetter/blog/long-blog-post', '43e'),
    exact: true
  },
  {
    path: '/presetter/blog/mdx-blog-post',
    component: ComponentCreator('/presetter/blog/mdx-blog-post', 'da1'),
    exact: true
  },
  {
    path: '/presetter/blog/tags',
    component: ComponentCreator('/presetter/blog/tags', 'd1b'),
    exact: true
  },
  {
    path: '/presetter/blog/tags/docusaurus',
    component: ComponentCreator('/presetter/blog/tags/docusaurus', '3d3'),
    exact: true
  },
  {
    path: '/presetter/blog/tags/facebook',
    component: ComponentCreator('/presetter/blog/tags/facebook', 'ce2'),
    exact: true
  },
  {
    path: '/presetter/blog/tags/hello',
    component: ComponentCreator('/presetter/blog/tags/hello', 'db3'),
    exact: true
  },
  {
    path: '/presetter/blog/tags/hola',
    component: ComponentCreator('/presetter/blog/tags/hola', 'db3'),
    exact: true
  },
  {
    path: '/presetter/blog/welcome',
    component: ComponentCreator('/presetter/blog/welcome', 'ad3'),
    exact: true
  },
  {
    path: '/presetter/markdown-page',
    component: ComponentCreator('/presetter/markdown-page', 'd9d'),
    exact: true
  },
  {
    path: '/presetter/docs',
    component: ComponentCreator('/presetter/docs', 'cf5'),
    routes: [
      {
        path: '/presetter/docs',
        component: ComponentCreator('/presetter/docs', '97b'),
        routes: [
          {
            path: '/presetter/docs',
            component: ComponentCreator('/presetter/docs', '2df'),
            routes: [
              {
                path: '/presetter/docs/',
                component: ComponentCreator('/presetter/docs/', 'edc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/advanced/',
                component: ComponentCreator('/presetter/docs/advanced/', '7fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/',
                component: ComponentCreator('/presetter/docs/api/', '264'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/interfaces/PresetAssets',
                component: ComponentCreator('/presetter/docs/api/interfaces/PresetAssets', '4c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/interfaces/PresetContentContext',
                component: ComponentCreator('/presetter/docs/api/interfaces/PresetContentContext', 'aad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/interfaces/PresetDefinition',
                component: ComponentCreator('/presetter/docs/api/interfaces/PresetDefinition', '598'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/interfaces/PresetNode',
                component: ComponentCreator('/presetter/docs/api/interfaces/PresetNode', 'c68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/interfaces/ProjectContext',
                component: ComponentCreator('/presetter/docs/api/interfaces/ProjectContext', '45b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/interfaces/ResolvedPresetAssets',
                component: ComponentCreator('/presetter/docs/api/interfaces/ResolvedPresetAssets', '0b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/type-aliases/Path',
                component: ComponentCreator('/presetter/docs/api/type-aliases/Path', '217'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/type-aliases/Preset',
                component: ComponentCreator('/presetter/docs/api/type-aliases/Preset', '8b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/type-aliases/PresetContent',
                component: ComponentCreator('/presetter/docs/api/type-aliases/PresetContent', '70d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/type-aliases/PresetContentGenerator',
                component: ComponentCreator('/presetter/docs/api/type-aliases/PresetContentGenerator', '987'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/type-aliases/PresetGenerator',
                component: ComponentCreator('/presetter/docs/api/type-aliases/PresetGenerator', 'bcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/type-aliases/PresetGraph',
                component: ComponentCreator('/presetter/docs/api/type-aliases/PresetGraph', '8d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/type-aliases/PresetObject',
                component: ComponentCreator('/presetter/docs/api/type-aliases/PresetObject', '2bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/type-aliases/PresetObjectGenerator',
                component: ComponentCreator('/presetter/docs/api/type-aliases/PresetObjectGenerator', '639'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/type-aliases/ResolvedPresetAsset',
                component: ComponentCreator('/presetter/docs/api/type-aliases/ResolvedPresetAsset', '0e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/type-aliases/Scripts',
                component: ComponentCreator('/presetter/docs/api/type-aliases/Scripts', '0d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/api/type-aliases/Variables',
                component: ComponentCreator('/presetter/docs/api/type-aliases/Variables', '20f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/cli-reference/',
                component: ComponentCreator('/presetter/docs/cli-reference/', '8a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/cli-reference/bootstrap',
                component: ComponentCreator('/presetter/docs/cli-reference/bootstrap', '20f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/cli-reference/run',
                component: ComponentCreator('/presetter/docs/cli-reference/run', 'e1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/cli-reference/run-p',
                component: ComponentCreator('/presetter/docs/cli-reference/run-p', 'ae3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/cli-reference/run-s',
                component: ComponentCreator('/presetter/docs/cli-reference/run-s', 'eb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/introduction/',
                component: ComponentCreator('/presetter/docs/introduction/', '914'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/introduction/comparison',
                component: ComponentCreator('/presetter/docs/introduction/comparison', '5a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/introduction/concepts',
                component: ComponentCreator('/presetter/docs/introduction/concepts', '77a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/introduction/configuration',
                component: ComponentCreator('/presetter/docs/introduction/configuration', '5d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/introduction/getting-started',
                component: ComponentCreator('/presetter/docs/introduction/getting-started', 'f31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/introduction/installation',
                component: ComponentCreator('/presetter/docs/introduction/installation', '290'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/',
                component: ComponentCreator('/presetter/docs/presets/', '816'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/bundling/',
                component: ComponentCreator('/presetter/docs/presets/bundling/', '93d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/bundling/rollup',
                component: ComponentCreator('/presetter/docs/presets/bundling/rollup', 'c17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/foundation/',
                component: ComponentCreator('/presetter/docs/presets/foundation/', '072'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/foundation/essentials',
                component: ComponentCreator('/presetter/docs/presets/foundation/essentials', '25f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/frameworks/',
                component: ComponentCreator('/presetter/docs/presets/frameworks/', 'cf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/frameworks/react',
                component: ComponentCreator('/presetter/docs/presets/frameworks/react', '5fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/frameworks/web',
                component: ComponentCreator('/presetter/docs/presets/frameworks/web', '705'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/module-systems/',
                component: ComponentCreator('/presetter/docs/presets/module-systems/', '0cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/module-systems/cjs',
                component: ComponentCreator('/presetter/docs/presets/module-systems/cjs', 'f15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/module-systems/esm',
                component: ComponentCreator('/presetter/docs/presets/module-systems/esm', '80d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/module-systems/hybrid',
                component: ComponentCreator('/presetter/docs/presets/module-systems/hybrid', 'b26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/quality/',
                component: ComponentCreator('/presetter/docs/presets/quality/', '35a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/quality/monorepo',
                component: ComponentCreator('/presetter/docs/presets/quality/monorepo', 'bd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/presets/quality/strict',
                component: ComponentCreator('/presetter/docs/presets/quality/strict', 'e53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/tutorials/',
                component: ComponentCreator('/presetter/docs/tutorials/', '175'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/tutorials/custom-presets',
                component: ComponentCreator('/presetter/docs/tutorials/custom-presets', 'c73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/tutorials/existing-project',
                component: ComponentCreator('/presetter/docs/tutorials/existing-project', '8e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/tutorials/migration-guides/',
                component: ComponentCreator('/presetter/docs/tutorials/migration-guides/', '189'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/tutorials/migration-guides/from-cra',
                component: ComponentCreator('/presetter/docs/tutorials/migration-guides/from-cra', 'dc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/tutorials/monorepo-setup',
                component: ComponentCreator('/presetter/docs/tutorials/monorepo-setup', '690'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/presetter/docs/tutorials/new-project',
                component: ComponentCreator('/presetter/docs/tutorials/new-project', '1f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/presetter/',
    component: ComponentCreator('/presetter/', 'ac8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
