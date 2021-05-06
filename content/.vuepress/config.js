module.exports = {
  title: 'Secret Network Wiki',
  description: 'A collection of tuorials and documentation for the Secret Network.',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#fff' }]
  ],
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/back-to-top': true,
  },
  base: '/',
  themeConfig: {
    activeHeaderLinks: false,
    algolia: {
      apiKey: 'b99936b745ef54d9428c2ba55c88c7a3',
      indexName: 'rmjordas_awesome_vue'
    },
    repo: 'secretdao/secretwiki',
    docsDir: 'content',
    editLinks: true,
    lastUpdated: 'Last Updated',
    nav: [],
    sidebar: [
      {
        title: 'Resources',
        collapsable: false,
        children: [
          '/resources/official-resources',
          '/resources/external-resources',
          '/resources/job-portal',
          '/resources/community',
          '/resources/conferences',
          '/resources/podcasts',
          '/resources/youtube-channels',
          '/resources/official-examples',
          '/resources/tutorials',
          '/resources/examples',
          '/resources/books',
          '/resources/blog-posts',
          '/resources/courses',
          '/resources/documentaries',
        ],
      },
      {
        title: 'Node Tutorials',
        collapsable: false,
        children: [
          '/linux/open-source',
          '/linux/commercial-products',
          '/linux/apps-websites',
          '/linux/interactive-experiences',
          '/linux/enterprise-usage',
          '/linux/a11y',
        ],
      },
      {
        title: 'Linux Tutorials',
        collapsable: false,
        children: [
          '/nodes/ui-components',
          '/nodes/ui-layout',
          '/nodes/frameworks',
          '/nodes/ui-utilities',
          '/nodes/utilities',
          '/nodes/integrations',
          '/nodes/dev-tools',
          '/nodes/scaffold',
          '/nodes/runtime',
          '/nodes/prerendering',
        ],
      },
    ]
  }
};
