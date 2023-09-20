import NProgress from 'nprogress'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { IMoudule } from '~/types'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  if (to.path !== from.path)
    NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export const install: IMoudule = (app: App) => {
  app.use(router)
}
