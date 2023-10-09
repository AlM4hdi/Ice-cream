// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: ["@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Ice Cream Shop",
      short_name: "Ice Cream Shop",
      description: "This is a PWA app",
      theme_color: "#000000",
      icons: [
        {
          src: "CodeVue-logo-removebg-preview.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },
});
