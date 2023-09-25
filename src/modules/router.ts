/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 21:04:34
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-24 11:55:22
 * @FilePath: \power-system-visualization\src\modules\router.ts
 * @Description:
 */
import NProgress from 'nprogress'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createRouter, createWebHistory } from 'vue-router'

const routes = setupLayouts(generatedRoutes)

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

export default router
