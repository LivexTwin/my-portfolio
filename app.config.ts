export default defineAppConfig({
  nuxtApp: {
    scrollBehavior(to: any, from: any, savedPosition: any) {
      // Always scroll to the top of the page
      return { left: 0, top: 0 };
    },
  },
});
