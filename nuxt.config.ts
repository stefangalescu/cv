// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
    inlineRouteRules: true,
  },

  devtools: { enabled: true },

  image: {
    domains: ['avatars.githubusercontent.com'],
    format: ['avif', 'webp'],
  },

  imports: {
    dirs: ['lib'],
    mergeExisting: true,
  },

  modules: ['@nuxt/image', '@nuxtjs/eslint-module', '@nuxtjs/google-fonts', '@nuxtjs/seo', '@nuxtjs/tailwindcss', 'radix-vue/nuxt', 'nuxt-icon', 'shadcn-nuxt'],

  googleFonts: {
    families: {
      Inter: {
        wght: '100..900',
      },
    },
    download: true,
    inject: true,
    preload: true,
    stylePath: 'assets/fonts.css',
    fontsDir: 'assets/fonts',
    fontsPath: 'fonts',
  },

  site: {
    name: 'Stefan Galescu | Full Stack Product Engineer',
    url: 'https://cv.stefangalescu.com',
  },

  ogImage: {
    enabled: false,
  },

  schemaOrg: {
    enabled: false,
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'Ui',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  $development: {
    site: {
      url: 'http://localhost:3000',
    },
  },
})
