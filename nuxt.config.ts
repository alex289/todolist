export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@sidebase/nuxt-auth'],
  colorMode: {
    classSuffix: '',
  },
});
