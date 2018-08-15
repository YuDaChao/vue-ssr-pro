module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-ssr-pro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** 引入iview样式
  */
  css: [
    { src: 'iview/dist/styles/iview.css'},
    { src: '~/assets/styles/reset.styl'}
  ],
  plugins: [
    '~/plugins/iview'
  ],

  /**
   * 路由中间件 每次路由发生变化前都会执行该中间件
   */
  router: {
    middleware: 'check-auth'
  },
  /*
  ** Build configuration
  */
  build: {
    // 提取css 只有在生产环境有效
    extractCSS: { allChunks: true },
    vendor: [
      '~/plugins/iview',
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

