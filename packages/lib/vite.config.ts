import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    open: true,
    host: "0.0.0.0",
  },

  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
    target: "es2015",
    outDir: resolve("dist"),
    lib: {
      entry: "components/index.ts",
      fileName: `index`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
