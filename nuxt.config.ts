// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/style.css", "~/assets/css/main.css"],
  modules: ["@nuxt/image", "nuxt-icon"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: " A Molina - Portfolio",
      meta: [{ name: "Portfolio", content: "Anthony Molina" }],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Oxygen+Mono&family=VT323&display=swap",
          crossorigin: "",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js",
        },
      ],
    },
  },
});
