// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui-pro'],
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'tertiary',
        'neutral',
        'info',
        'success',
        'warning',
        'error'
      ]
    }
  }
})