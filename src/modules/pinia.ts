/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-20 09:29:51
 * @FilePath: \power-system-visualization\src\modules\pinia.ts
 * @Description:
 */
import { createPinia } from 'pinia'
import type { App } from 'vue'
import type { IMoudule } from '~/types'

// Setup Pinia
// https://pinia.vuejs.org/
export const install: IMoudule = (app: App) => {
  const pinia = createPinia()
  app.use(pinia)
}
