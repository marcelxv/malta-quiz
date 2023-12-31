// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['./assets/css/main.less'],
  modules: ['@pinia/nuxt', '@nuxt/content'],
  head: {
    htmlAttrs: {
      lang: 'en'
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})
