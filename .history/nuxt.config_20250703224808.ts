// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vueuse/motion/nuxt", "@nuxt/image"],
  image: {
    q: 50,
    alias: {
      local: "/",
    },
    dir: "/",
    provider: "local",
  },
});
