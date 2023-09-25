/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-25 11:25:03
 * @FilePath: \power-system-visualization\vite.config.ts
 * @Description:
 */
import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Inspect from 'vite-plugin-inspect'
import VueDevTools from 'vite-plugin-vue-devtools'
import Unocss from 'unocss/vite'

// @ts-expect-error failed to resolve types
import VueMacros from 'unplugin-vue-macros/vite'
import WebfontDownload from 'vite-plugin-webfont-dl'

// element-plus
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// mock
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '#/': `${path.resolve(__dirname, 'types')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "~/styles/element/index.scss" as *;',
      },
    },
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/],
        }),
      },
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
        'pinia',
      ],
      dts: 'types/auto-imports.d.ts',
      dirs: [
        'src/stores/**',
        'src/modules/**',
        'src/composables/**',
        'src/store/**',
        'src/api/**',
        'src/utils/**',
        'src/components/**',
        'src/constants/**',
        'src/types/**',
        'src/enums/**',
      ],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'types/components.d.ts',
      resolvers: [ElementPlusResolver({
        importStyle: 'sass',
      }), (componentName) => {
        if (componentName.startsWith('Dv'))
          return { name: componentName.slice(2), from: '@kjgl77/datav-vue3' }
      },
      ],
      dirs: ['src/components', 'src/pages/**'],
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),

    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),
    viteMockServe({
      mockPath: 'mock',
    }),
  ],
})
