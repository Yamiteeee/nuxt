// nuxt.config.ts
export default defineNuxtConfig({
  // Set the Nuxt compatibility date
  compatibilityDate: "2026-08-24",

  future: {
    compatibilityVersion: 4,
  },

  modules: ["@nuxt/icon"],

  devtools: { enabled: true },

  routeRules: {
    "/": { prerender: true },
  },

  app: {
    head: {
      title: "Inqri | Simple Lead Capture for Businesses",
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/InquiryTrackerLogo.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
});
