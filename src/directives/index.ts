/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-25 11:17:47
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-25 11:24:39
 * @FilePath: \power-system-visualization\src\directives\index.ts
 * @Description:
 */
import type { App } from 'vue'
import { setupEllipsisDirective } from './ellipsis'

export function setupDirectives(app: App) {
  setupEllipsisDirective(app)
}
