// import colors from 'vuetify/es5/util/colors'
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
// import getDynamicRoutes from './utils/getDynamicRoutes.js'
// const colors = require('vuetify/es5/util/colors')
import api from './utils/api'

export default {
  mode: 'spa',
  generate: {
    // async routes() {
    //   const newsRoutes = await getDynamicRoutes()
    //   return newsRoutes.map(name => `/news/${name}`)
    // }
    fallback: false
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  // router: {
  //   base: '/'
  // },
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/style/app.styl',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/axios',
    { src: '~/plugins/breakpoint-fix.js', ssr: true },
    { src: '~/plugins/filters.js', ssr: true },
    { src: '~/plugins/vueExpandableImage.js', ssr: false },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  // proxy: {
  //   '/content-items/': {
  //     target: api.serverContentItems,
  //     pathRewrite: { '^/content-items': '' }
  //   },
  //   '/content-list/': {
  //     target: api.listServerItems,
  //     pathRewrite: { '^/content-list': '' }
  //   },
  //   // logLevel: 'debug'
  // },
  markdownit: {
    injected: true
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: '#323063',
      accent: '#ffc000',
      background: '#f0f1f3',
      secondary: '#ff8f00',
      secondaryDark: '#9b5700',
      // info: colors.teal.lighten1,
      // warning: colors.amber.base,
      // error: colors.deepOrange.accent4,
      // success: colors.green.accent3
    }
  },
  styleResources: {
    scss: [
      './assets/scss/global/*.scss'
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    babel: {
      presets({ isServer }) {
        return [
          ["@nuxt/babel-preset-app", {
            targets: isServer
              ? { node: "current" }
              : { browsers: ["last 2 versions"], ie: 11, firefox: 47, safari: 9, ios: 9 }
          }]
        ]
      }
    },
    postcss: {
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    plugins: [new VuetifyLoaderPlugin()],
    // loaders: {
    //   stylus: {
    //     import: ['~assets/style/variables.styl']
    //   }
    // },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // Setup url-loader
      const urlLoader = config.module.rules.find((rule) => {
        if (rule.use) return rule.use[0].loader === 'url-loader'
      });
      if (urlLoader) {
        urlLoader.test = /\.(png|jpe?g|gif)$/
      }
      // Setup SVG loader
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      });
    }
  }
}
