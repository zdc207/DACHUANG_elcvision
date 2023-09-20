/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-20 09:49:43
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

import App from './App.vue'
import type { IMoudule } from './types'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

Object.values(import.meta.glob<{ install: IMoudule }>('./modules/*.ts', { eager: true }))
  .forEach(i =>
    i.install?.(app),
  )
app.mount('#app')
