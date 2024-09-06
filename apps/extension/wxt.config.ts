import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  // use to add custom permissions and other manifest fields
  manifest: {
    permissions: ["storage"],
  },
});
