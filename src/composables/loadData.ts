/*
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-28 10:03:45
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-10-01 18:20:40
 * @FilePath: \power-system-visualization\src\composables\loadData.ts
 * @Description:
 */

import type { ECOption } from '~/components/app-echart/config'

type LoadData<T> = () => Promise<IResult<T>>
type InitialOptionsWithData<T> = (data: T) => ECOption

/**
 *
 * @param getData 获取数据的Api
 * @param initialOptionsWithData 传入回调函数 (res: T) => ECOption
 * @returns
 */
export function useLoadData<T>(getData: LoadData<T>, initialOptionsWithData: InitialOptionsWithData<T>) {
  const { locale } = useI18n()
  const { options, setOptions } = useEcharts()

  const data = ref<T>()

  loadData()

  async function loadData() {
    const res = await getData()
    data.value = res.data
    setOptions(initialOptionsWithData(data.value))
  }

  useIntervalFn(async () => {
    await loadData()
  }, 5000)

  watch(locale, () => {
    setOptions(initialOptionsWithData(data.value!))
  })

  return {
    data,
    options,
  }
}
