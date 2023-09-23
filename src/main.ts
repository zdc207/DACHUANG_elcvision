/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-22 20:37:14
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
import type { IMoudule } from '#/type'

const app = createApp(appVue)

installModule(app)

app.mount('#app')

function installModule(app: App) {
  Object.values(import.meta.glob<{ install: IMoudule }>('./modules/*.ts', { eager: true }))
    .forEach(i => i.install?.(app))
}
