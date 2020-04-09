export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Chainpoint is an open standard for anchoring data to a blockchain to create a timestamp proof of any data, file, or series of events.'
      },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@chainpnt' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Chainpoint - Blockchain Proof Standard' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Open standard for creating a timestamp proof of any data, file, or series of events.'
      },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://chainpoint.org/images/twitter-large.png?3' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/style.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/svg'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
