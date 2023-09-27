// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/vite@4.3.8_@types+node@20.4.7_sass@1.68.0/node_modules/vite/dist/node/index.js";
import Vue from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.3.8_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Pages from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/vite-plugin-pages@0.30.1_vite@4.3.8/node_modules/vite-plugin-pages/dist/index.mjs";
import Layouts from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/vite-plugin-vue-layouts@0.8.0_vite@4.3.8_vue-router@4.2.1_vue@3.3.4/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/unplugin-vue-components@0.24.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/unplugin-auto-import@0.16.2_@vueuse+core@10.1.2/node_modules/unplugin-auto-import/dist/vite.js";
import VueI18n from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/@intlify+unplugin-vue-i18n@0.10.0_vue-i18n@9.2.2/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import Inspect from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/vite-plugin-inspect@0.7.27_vite@4.3.8/node_modules/vite-plugin-inspect/dist/index.mjs";
import VueDevTools from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/vite-plugin-vue-devtools@0.0.16_vite@4.3.8_vue@3.3.4/node_modules/vite-plugin-vue-devtools/dist/index.mjs";
import Unocss from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/unocss@0.52.1_postcss@8.4.23_vite@4.3.8/node_modules/unocss/dist/vite.mjs";
import VueMacros from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/unplugin-vue-macros@2.1.7_@vueuse+core@10.1.2_vite@4.3.8_vue@3.3.4/node_modules/unplugin-vue-macros/dist/vite.mjs";
import WebfontDownload from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/vite-plugin-webfont-dl@3.7.4_vite@4.3.8/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import { ElementPlusResolver } from "file:///C:/Users/86173/Documents/%E8%B5%84%E6%96%99/leo/%E5%A4%A7%E5%B1%8F/power-system-visualization/node_modules/.pnpm/unplugin-vue-components@0.24.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "C:\\Users\\86173\\Documents\\\u8D44\u6599\\leo\\\u5927\u5C4F\\power-system-visualization";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`,
      "#/": `${path.resolve(__vite_injected_original_dirname, "types")}/`,
      "timers": "rollup-plugin-node-polyfills/polyfills/timers"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "~/styles/element/index.scss" as *;'
      }
    }
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/]
        })
      }
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ["vue"]
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "@vueuse/head",
        "@vueuse/core",
        "pinia"
      ],
      dts: "types/auto-imports.d.ts",
      dirs: [
        "src/stores/**",
        "src/modules/**",
        "src/composables/**",
        "src/store/**",
        "src/api/**",
        "src/utils/**",
        "src/components/**",
        "src/constants/**",
        "src/types/**",
        "src/enums/**"
      ],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()]
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "types/components.d.ts",
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        }),
        (componentName) => {
          if (componentName.startsWith("Dv"))
            return { name: componentName.slice(2), from: "@kjgl77/datav-vue3" };
        }
      ],
      dirs: ["src/components", "src/pages/**"]
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools()
    // viteMockServe({
    //   mockPath: 'mock',
    //   ignore: /^_/,
    //   prodEnabled: true,
    //   localEnabled: false,
    //   injectCode: `
    //   import { setupProdMockServer } from '../mock/_createProductionServer';
    //      setupProdMockServer();
    //   `,
    // }),
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw4NjE3M1xcXFxEb2N1bWVudHNcXFxcXHU4RDQ0XHU2NTk5XFxcXGxlb1xcXFxcdTU5MjdcdTVDNEZcXFxccG93ZXItc3lzdGVtLXZpc3VhbGl6YXRpb25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDg2MTczXFxcXERvY3VtZW50c1xcXFxcdThENDRcdTY1OTlcXFxcbGVvXFxcXFx1NTkyN1x1NUM0RlxcXFxwb3dlci1zeXN0ZW0tdmlzdWFsaXphdGlvblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvODYxNzMvRG9jdW1lbnRzLyVFOCVCNSU4NCVFNiU5NiU5OS9sZW8vJUU1JUE0JUE3JUU1JUIxJThGL3Bvd2VyLXN5c3RlbS12aXN1YWxpemF0aW9uL3ZpdGUuY29uZmlnLnRzXCI7LypcclxuICogQEF1dGhvcjogTGVvIGwwMjQ5ODM0MDlAcXEuY29tXHJcbiAqIEBEYXRlOiAyMDIzLTA5LTE5IDIwOjIyOjU1XHJcbiAqIEBMYXN0RWRpdG9yczogTGVvIGwwMjQ5ODM0MDlAcXEuY29tXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjMtMDktMjYgMTY6MzI6NTlcclxuICogQEZpbGVQYXRoOiBcXHBvd2VyLXN5c3RlbS12aXN1YWxpemF0aW9uXFx2aXRlLmNvbmZpZy50c1xyXG4gKiBARGVzY3JpcHRpb246XHJcbiAqL1xyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXHJcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgVnVlSTE4biBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xyXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0J1xyXG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xyXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xyXG5cclxuLy8gQHRzLWV4cGVjdC1lcnJvciBmYWlsZWQgdG8gcmVzb2x2ZSB0eXBlc1xyXG5pbXBvcnQgVnVlTWFjcm9zIGZyb20gJ3VucGx1Z2luLXZ1ZS1tYWNyb3Mvdml0ZSdcclxuaW1wb3J0IFdlYmZvbnREb3dubG9hZCBmcm9tICd2aXRlLXBsdWdpbi13ZWJmb250LWRsJ1xyXG5cclxuLy8gZWxlbWVudC1wbHVzXHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXHJcblxyXG4vLyBtb2NrXHJcbi8vIGltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnfi8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXHJcbiAgICAgICcjLyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICd0eXBlcycpfS9gLFxyXG4gICAgICAndGltZXJzJzogJ3JvbGx1cC1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMvcG9seWZpbGxzL3RpbWVycycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0B1c2UgXCJ+L3N0eWxlcy9lbGVtZW50L2luZGV4LnNjc3NcIiBhcyAqOycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgVnVlTWFjcm9zKHtcclxuICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgIHZ1ZTogVnVlKHtcclxuICAgICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC9dLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2hhbm5vZXJ1L3ZpdGUtcGx1Z2luLXBhZ2VzXHJcbiAgICBQYWdlcyh7XHJcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJ10sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xyXG4gICAgTGF5b3V0cygpLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAndnVlJyxcclxuICAgICAgICAndnVlLXJvdXRlcicsXHJcbiAgICAgICAgJ3Z1ZS1pMThuJyxcclxuICAgICAgICAnQHZ1ZXVzZS9oZWFkJyxcclxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcclxuICAgICAgICAncGluaWEnLFxyXG4gICAgICBdLFxyXG4gICAgICBkdHM6ICd0eXBlcy9hdXRvLWltcG9ydHMuZC50cycsXHJcbiAgICAgIGRpcnM6IFtcclxuICAgICAgICAnc3JjL3N0b3Jlcy8qKicsXHJcbiAgICAgICAgJ3NyYy9tb2R1bGVzLyoqJyxcclxuICAgICAgICAnc3JjL2NvbXBvc2FibGVzLyoqJyxcclxuICAgICAgICAnc3JjL3N0b3JlLyoqJyxcclxuICAgICAgICAnc3JjL2FwaS8qKicsXHJcbiAgICAgICAgJ3NyYy91dGlscy8qKicsXHJcbiAgICAgICAgJ3NyYy9jb21wb25lbnRzLyoqJyxcclxuICAgICAgICAnc3JjL2NvbnN0YW50cy8qKicsXHJcbiAgICAgICAgJ3NyYy90eXBlcy8qKicsXHJcbiAgICAgICAgJ3NyYy9lbnVtcy8qKicsXHJcbiAgICAgIF0sXHJcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxyXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnXSxcclxuICAgICAgLy8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxyXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlL10sXHJcbiAgICAgIGR0czogJ3R5cGVzL2NvbXBvbmVudHMuZC50cycsXHJcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoe1xyXG4gICAgICAgIGltcG9ydFN0eWxlOiAnc2FzcycsXHJcbiAgICAgIH0pLCAoY29tcG9uZW50TmFtZSkgPT4ge1xyXG4gICAgICAgIGlmIChjb21wb25lbnROYW1lLnN0YXJ0c1dpdGgoJ0R2JykpXHJcbiAgICAgICAgICByZXR1cm4geyBuYW1lOiBjb21wb25lbnROYW1lLnNsaWNlKDIpLCBmcm9tOiAnQGtqZ2w3Ny9kYXRhdi12dWUzJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnLCAnc3JjL3BhZ2VzLyoqJ10sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5vY3NzXHJcbiAgICAvLyBzZWUgdW5vLmNvbmZpZy50cyBmb3IgY29uZmlnXHJcbiAgICBVbm9jc3MoKSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaW50bGlmeS9idW5kbGUtdG9vbHMvdHJlZS9tYWluL3BhY2thZ2VzL3VucGx1Z2luLXZ1ZS1pMThuXHJcbiAgICBWdWVJMThuKHtcclxuICAgICAgcnVudGltZU9ubHk6IHRydWUsXHJcbiAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcclxuICAgICAgZnVsbEluc3RhbGw6IHRydWUsXHJcbiAgICAgIGluY2x1ZGU6IFtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbG9jYWxlcy8qKicpXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1pbnNwZWN0XHJcbiAgICAvLyBWaXNpdCBodHRwOi8vbG9jYWxob3N0OjMzMzMvX19pbnNwZWN0LyB0byBzZWUgdGhlIGluc3BlY3RvclxyXG4gICAgSW5zcGVjdCgpLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWF0LWFnZW5jeS92aXRlLXBsdWdpbi13ZWJmb250LWRsXHJcbiAgICBXZWJmb250RG93bmxvYWQoKSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2ViZmFuc3Bsei92aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcclxuICAgIFZ1ZURldlRvb2xzKCksXHJcbiAgICAvLyB2aXRlTW9ja1NlcnZlKHtcclxuICAgIC8vICAgbW9ja1BhdGg6ICdtb2NrJyxcclxuICAgIC8vICAgaWdub3JlOiAvXl8vLFxyXG4gICAgLy8gICBwcm9kRW5hYmxlZDogdHJ1ZSxcclxuICAgIC8vICAgbG9jYWxFbmFibGVkOiBmYWxzZSxcclxuICAgIC8vICAgaW5qZWN0Q29kZTogYFxyXG4gICAgLy8gICBpbXBvcnQgeyBzZXR1cFByb2RNb2NrU2VydmVyIH0gZnJvbSAnLi4vbW9jay9fY3JlYXRlUHJvZHVjdGlvblNlcnZlcic7XHJcbiAgICAvLyAgICAgIHNldHVwUHJvZE1vY2tTZXJ2ZXIoKTtcclxuICAgIC8vICAgYCxcclxuICAgIC8vIH0pLFxyXG4gIF0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFRQSxPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sV0FBVztBQUNsQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFlBQVk7QUFHbkIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8scUJBQXFCO0FBRzVCLFNBQVMsMkJBQTJCO0FBekJwQyxJQUFNLG1DQUFtQztBQThCekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsTUFBTSxHQUFHLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDdEMsTUFBTSxHQUFHLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDeEMsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsTUFDUixTQUFTO0FBQUEsUUFDUCxLQUFLLElBQUk7QUFBQSxVQUNQLFNBQVMsQ0FBQyxRQUFRO0FBQUEsUUFDcEIsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLElBR0QsTUFBTTtBQUFBLE1BQ0osWUFBWSxDQUFDLEtBQUs7QUFBQSxJQUNwQixDQUFDO0FBQUE7QUFBQSxJQUdELFFBQVE7QUFBQTtBQUFBLElBR1IsV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxRQUNKO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2IsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBO0FBQUEsSUFHRCxXQUFXO0FBQUEsTUFDVCxZQUFZLENBQUMsS0FBSztBQUFBO0FBQUEsTUFFbEIsU0FBUyxDQUFDLFVBQVUsWUFBWTtBQUFBLE1BQ2hDLEtBQUs7QUFBQSxNQUNMLFdBQVc7QUFBQSxRQUFDLG9CQUFvQjtBQUFBLFVBQzlCLGFBQWE7QUFBQSxRQUNmLENBQUM7QUFBQSxRQUFHLENBQUMsa0JBQWtCO0FBQ3JCLGNBQUksY0FBYyxXQUFXLElBQUk7QUFDL0IsbUJBQU8sRUFBRSxNQUFNLGNBQWMsTUFBTSxDQUFDLEdBQUcsTUFBTSxxQkFBcUI7QUFBQSxRQUN0RTtBQUFBLE1BQ0E7QUFBQSxNQUNBLE1BQU0sQ0FBQyxrQkFBa0IsY0FBYztBQUFBLElBQ3pDLENBQUM7QUFBQTtBQUFBO0FBQUEsSUFJRCxPQUFPO0FBQUE7QUFBQSxJQUdQLFFBQVE7QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGlCQUFpQjtBQUFBLE1BQ2pCLGFBQWE7QUFBQSxNQUNiLFNBQVMsQ0FBQyxLQUFLLFFBQVEsa0NBQVcsWUFBWSxDQUFDO0FBQUEsSUFDakQsQ0FBQztBQUFBO0FBQUE7QUFBQSxJQUlELFFBQVE7QUFBQTtBQUFBLElBR1IsZ0JBQWdCO0FBQUE7QUFBQSxJQUdoQixZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVdkO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
