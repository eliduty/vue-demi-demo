import { resolve } from 'path';
import { defineConfig } from 'vite';
import { isVue2 } from 'vue-demi';

const outputName = 'index';
// https://vitejs.dev/config/
export const baseBuildConfig = defineConfig({
  build: {
    outDir: resolve(__dirname, `./dist/${isVue2 ? 'v2' : 'v3'}`),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: 'index',
      fileName: format => `${outputName}.${format}.js`
    },
    rollupOptions: {
      external: ['vue', '@vue/composition-api/dist/vue-composition-api.mjs'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          '@vue/composition-api/dist/vue-composition-api.mjs': 'VueCompositionAPI'
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi', 'vue', 'vue2']
  }
});
