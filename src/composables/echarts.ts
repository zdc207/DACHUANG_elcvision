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
