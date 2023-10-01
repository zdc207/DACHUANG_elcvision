import type { App, Directive } from 'vue'

const ellipsisDirective: Directive = {
  updated(el: Element) {
    const ellipsisCcontainer = el.parentElement as HTMLDivElement
    const scrollingText = el as HTMLDivElement

    ellipsisCcontainer.classList.add('ellipsis-container')
    scrollingText.classList.add('scrolling-text')

    if (scrollingText.offsetWidth > ellipsisCcontainer.offsetWidth)
      scrollingText.style.animation = 'scrollText 10s linear infinite'
    else
      scrollingText.style.animation = 'none' // 如果文本没有溢出，停止滚动动画
  },
}

export function setupEllipsisDirective(app: App) {
  app.directive('ellipsis', ellipsisDirective)
}
