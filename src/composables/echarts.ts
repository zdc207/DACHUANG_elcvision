/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-24 16:34:11
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-27 19:36:17
 * @FilePath: \power-system-visualization\src\composables\echarts.ts
 * @Description:
 */
import type { ECOption } from '~/components/app-echart/config'

export function useEcharts() {
  const options = ref<ECOption>()
  function setOptions(data: ECOption) {
    options.value = data
  }
  return {
    options,
    setOptions,
  }
}
