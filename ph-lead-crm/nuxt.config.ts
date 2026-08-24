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
      title: "InquiryTracker PH | Simple Lead Capture for PH Local Businesses",
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/InquiryTrackerLogo.svg" },
      ],
    },
  },
});
