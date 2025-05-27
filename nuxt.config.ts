// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui-pro",
    "@nuxt/image",
    "@nuxt/content",
    "nuxt-time",
    "@nuxtjs/seo",
  ],
  site: {
    url: "https://spaced.blog",
    name: "spaced.blog"
  },
  schemaOrg: {
    identity: 'Person'
  },
  seo: {
    meta: {
      title: "spaced.blog",
      description: "This is a site showcasing my astro photography hobby.",
      themeColor: [
        { content: '#18181b', media: '(prefers-color-scheme: dark)' },
        { content: 'white', media: '(prefers-color-scheme: light)' },
      ],
    }
  },
  css: ["~/assets/css/main.css"],
  image: {
    provider: "twicpics",
    twicpics: {
      baseURL: "https://ianswebpics.twic.pics/spaced.photos",
    }
  },
  ogImage: {
    defaults: {
      extension: 'jpeg',
    },
    fonts: [
      'Exo+2:400',
      'Exo+2:700',
      'Exo+2:ital:400'
    ]
  },
  uiPro: {
    license: process.env.NUXT_UI_PRO_LICENSE,
  },
});