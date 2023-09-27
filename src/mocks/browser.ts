/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-26 15:39:59
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-26 21:28:52
 * @FilePath: \power-system-visualization\src\mocks\browser.ts
 * @Description:
 */
import { setupWorker } from 'msw'

const handlers: any[] = []
function getHandlers() {
  const files = import.meta.glob('./modules/**.ts', { eager: true })
  for (const key in files)
    handlers.push(...((files[key] as any).default))
  for (const item of handlers)
    item.info.path = import.meta.env.VITE_BASE_URL + item.info.path
}

getHandlers()

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)
