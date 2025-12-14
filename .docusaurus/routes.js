import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/site_docusaurus/blog',
    component: ComponentCreator('/site_docusaurus/blog', '76c'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/archive',
    component: ComponentCreator('/site_docusaurus/blog/archive', '254'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/authors',
    component: ComponentCreator('/site_docusaurus/blog/authors', '466'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/site_docusaurus/blog/authors/all-sebastien-lorber-articles', '715'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/authors/yangshun',
    component: ComponentCreator('/site_docusaurus/blog/authors/yangshun', '83b'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/first-blog-post',
    component: ComponentCreator('/site_docusaurus/blog/first-blog-post', '30d'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/long-blog-post',
    component: ComponentCreator('/site_docusaurus/blog/long-blog-post', '02f'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/site_docusaurus/blog/mdx-blog-post', 'b45'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/tags',
    component: ComponentCreator('/site_docusaurus/blog/tags', 'c36'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/site_docusaurus/blog/tags/docusaurus', '060'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/tags/facebook',
    component: ComponentCreator('/site_docusaurus/blog/tags/facebook', '695'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/tags/hello',
    component: ComponentCreator('/site_docusaurus/blog/tags/hello', '648'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/tags/hola',
    component: ComponentCreator('/site_docusaurus/blog/tags/hola', '1c3'),
    exact: true
  },
  {
    path: '/site_docusaurus/blog/welcome',
    component: ComponentCreator('/site_docusaurus/blog/welcome', '6f5'),
    exact: true
  },
  {
    path: '/site_docusaurus/markdown-page',
    component: ComponentCreator('/site_docusaurus/markdown-page', '9c1'),
    exact: true
  },
  {
    path: '/site_docusaurus/docs',
    component: ComponentCreator('/site_docusaurus/docs', '3f8'),
    routes: [
      {
        path: '/site_docusaurus/docs',
        component: ComponentCreator('/site_docusaurus/docs', '06b'),
        routes: [
          {
            path: '/site_docusaurus/docs',
            component: ComponentCreator('/site_docusaurus/docs', '3b0'),
            routes: [
              {
                path: '/site_docusaurus/docs/category/tutorial---basics',
                component: ComponentCreator('/site_docusaurus/docs/category/tutorial---basics', '002'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/site_docusaurus/docs/category/tutorial---extras',
                component: ComponentCreator('/site_docusaurus/docs/category/tutorial---extras', '22c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/site_docusaurus/docs/intro',
                component: ComponentCreator('/site_docusaurus/docs/intro', '6a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/site_docusaurus/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/site_docusaurus/docs/tutorial-basics/congratulations', 'a1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/site_docusaurus/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/site_docusaurus/docs/tutorial-basics/create-a-blog-post', '20b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/site_docusaurus/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/site_docusaurus/docs/tutorial-basics/create-a-document', 'bf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/site_docusaurus/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/site_docusaurus/docs/tutorial-basics/create-a-page', '329'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/site_docusaurus/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/site_docusaurus/docs/tutorial-basics/deploy-your-site', '451'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/site_docusaurus/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/site_docusaurus/docs/tutorial-basics/markdown-features', 'de2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/site_docusaurus/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/site_docusaurus/docs/tutorial-extras/manage-docs-versions', '63a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/site_docusaurus/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/site_docusaurus/docs/tutorial-extras/translate-your-site', 'b3d'),
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
    path: '/site_docusaurus/',
    component: ComponentCreator('/site_docusaurus/', 'c59'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
