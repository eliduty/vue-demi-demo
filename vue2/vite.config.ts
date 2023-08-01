import { resolve } from 'path';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import vueJsx from '@vitejs/plugin-vue2-jsx';
import libCss from 'vite-plugin-libcss';
// import dts from 'vite-plugin-dts';
import { baseBuildConfig } from '../vite.base.config';

export const viteVue2Config = defineConfig({
  ...(baseBuildConfig as UserConfig),
  plugins: [
    vue2(),
    vueJsx(),
    libCss(),
    // dts({
    // root: '..',
    // compilerOptions: {
    //   skipLibCheck: true
    // },
    // include: ['src/**'],
    // })
  ],
  server: {
    port: 2700,
    host: '0.0.0.0',
    open: true
  },
  resolve: {
    alias: {
      vue: resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),
      'vue-demi': resolve(__dirname, '../node_modules/vue-demi/lib/v2.7/index.mjs')
    }
  },
  build: {
    ...(baseBuildConfig as UserConfig).build,
    outDir: resolve(__dirname, '../dist/v2.7')
  }
});

export default viteVue2Config;
