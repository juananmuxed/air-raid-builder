import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import { sassMigratorQuasar } from 'rollup-plugin-sass-migrator';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),

    quasar({
      autoImportComponentCase: 'pascal',
      sassVariables: 'src/quasar-variables.sass',
    }),

    AutoImport({
      imports: [
        'vue',
      ],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),

    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),

    sassMigratorQuasar(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/main.scss";',
      },
    },
  },
});
