export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@sidebase/nuxt-auth',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  colorMode: {
    classSuffix: '',
  },
  auth: {
    origin: 'http://localhost:3000',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Todolist',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'description', content: 'Some todo app' }],
    },
  },
  build: { transpile: ['vue-toastification'] },
});
