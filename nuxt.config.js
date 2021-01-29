export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  mode: 'universal',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '日本電子専門学校 Webデザイン科 卒業・進級制作展CONNECT 2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/connect/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // SCSS file in the project
    '~/assets/css/setting.scss',
    '~/assets/css/style.scss',
    '~/assets/css/hover.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-prlx',
    '~/plugins/vue-scrollto',
    { src: '~/plugins/scrollmagic', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-animejs',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  // modules: ['nuxt-webfontloader'],

  // webfontloader: {
  //   google: {
  //     families: ['Anton:400'],
  //   },
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.output.publicPath = '/connect/_nuxt/'
    },
  },

  router: {
    base: '/connect/',
  },
}
