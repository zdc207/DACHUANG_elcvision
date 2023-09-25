import type { App } from 'vue'
import i18n from './i18n'
import pinia from './pinia'
import router from './router'

export function setupModules(app: App) {
  app.use(i18n)
  app.use(router)
  app.use(pinia)
}
