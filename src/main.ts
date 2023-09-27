/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-27 10:53:14
 * @FilePath: \power-system-visualization\src\main.ts
 * @Description:
 */
/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-19 20:59:16
 * @FilePath: \power-system-visualization\src\main.ts
 * @Description:
 */

import type { App } from 'vue'
import appVue from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/index.scss'
import 'uno.css'
import { setupDirectives } from './directives'
import { setupModules } from './modules'

function setup() {
  const app = createApp(appVue)

  setupApp(app)
  app.mount('#app')

  function setupApp(app: App) {
    setupDirectives(app)
    setupModules(app)
  }
}

// mock
import('./mocks/browser').then(async ({ worker }) => {
  await worker.start({
    onUnhandledRequest: 'bypass',
  })
  setup()
})
