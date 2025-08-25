export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui-pro', '@nuxtjs/i18n', '@nuxt/icon'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', file: 'locales/en.json' },
      { code: 'ro', file: 'locales/ro.json' }
    ]
  },
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