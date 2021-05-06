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
        title: 'Projects Using Vue.js',
        collapsable: false,
        children: [
          '/projects-using-vue-js/open-source',
          '/projects-using-vue-js/commercial-products',
          '/projects-using-vue-js/apps-websites',
          '/projects-using-vue-js/interactive-experiences',
          '/projects-using-vue-js/enterprise-usage',
          '/projects-using-vue-js/a11y',
        ],
      },
      {
        title: 'Components and Libraries',
        collapsable: false,
        children: [
          '/components-and-libraries/ui-components',
          '/components-and-libraries/ui-layout',
          '/components-and-libraries/frameworks',
          '/components-and-libraries/ui-utilities',
          '/components-and-libraries/utilities',
          '/components-and-libraries/integrations',
          '/components-and-libraries/dev-tools',
          '/components-and-libraries/scaffold',
          '/components-and-libraries/runtime',
          '/components-and-libraries/prerendering',
        ],
      },
    ]
  }
};
