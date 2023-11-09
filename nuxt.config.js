// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/css/main.less'],
  modules: ['@pinia/nuxt', '@nuxt/content'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})
