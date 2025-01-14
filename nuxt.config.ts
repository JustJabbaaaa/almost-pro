export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      secret: process.env.YOUTUBE_KEY,
    }
  },
  ssr: true,
  srcDir: 'src/',

  app: {
    baseURL: '/'
  },

  css: [
    'assets/scss/style.scss',
  ],

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    'nuxt-delay-hydration',
    '@nuxt/icon',
    'vue3-carousel-nuxt'
  ],

  site: {
    url: 'https://konkol00.github.io/',
  },

  build: {
    transpile: ['mdi-vue']
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-12-02'
})