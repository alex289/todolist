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
});
