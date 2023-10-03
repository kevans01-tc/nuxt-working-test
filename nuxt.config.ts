// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    // ..
    '@tucowsinc/wavelo-nuxt-module',
  ],
  runtimeConfig: {
    public: {
      wnmOptions: {
        /** WaveloNuxtModule configuration options here **/
        showAuth: false,
      },
    },
  },
});
