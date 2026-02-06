// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }]
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],

    icon: {
    serverBundle: {
      collections: ['uil', 'mdi'] // <!--- this
    }
  },  

  //I18N
  i18n: {
    lazy:true,
    types:'composition',
    langDir:'locales/',
    strategy:'no_prefix',
    defaultLocale:'fr',

    locales: [
      { code: 'en', iso: 'en-US' ,file: 'en.json' },
      { code: 'fr', iso: 'fr-FR' ,file: 'fr.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true
    }
    
  },

  //TAILWIND
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;',
          sassOptions: {
            quietDeps: true
          }
        }
      }
    },    
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      // autoprefixer: {},
    },
  },

  //NUXT IMG
  
  //Probleme [failed to resolve component Logo] (stackoverflow)
  chainWebpack(config) {
    config.module
      .rule('js')
      .use('babel-loader')
      .tap((options) => {
        return {
          rootMode: 'upward',
        }
      })
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          prettify: false,
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('b-icon'),
          },
        }
      })
    config.externals(['vue', 'vuetify', 'vuex', 'vue-router'])
  },


})