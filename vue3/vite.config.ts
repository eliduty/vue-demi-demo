import { resolve } from 'path';
import { defineConfig, type UserConfig } from 'vite';
import vue3 from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import libCss from 'vite-plugin-libcss';
// import dts from 'vite-plugin-dts';
import { baseBuildConfig } from '../vite.base.config';
export default defineConfig({
  ...(baseBuildConfig as UserConfig),
  plugins: [
    vue3(),
    vueJsx(),
    libCss(),
    // dts({
    //   root: '..',
    //   compilerOptions: {
    //     skipLibCheck: true
    //   },
    //   include: ['src/**']
    // })
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true
  },
  resolve: {
    alias: {
      vue: resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm-browser.js'),
      'vue-demi': resolve(__dirname, '../node_modules/vue-demi/lib/v3/index.mjs')
    }
  }
});
