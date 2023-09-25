<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, markRaw } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { type EChartsType } from 'echarts/core'
import echarts, { type ECOption } from './config'

const props = withDefaults(defineProps<Props>(), {
  theme: null,
  loading: false,
  width: '500px',
  height: '400px',
})

defineOptions({
  name: 'AppEchart',
})

interface Props {
  options?: ECOption
  width?: string // 必须指定容器的宽高，否则无法显示。（容器内图表会自动获取父元素宽高）
  height?: string
  theme?: Object | string | null
  loading?: boolean // 受控
  onMouseover?: (...args: any[]) => void
  onMouseout?: (...args: any[]) => void
}

const chartRef = ref<HTMLDivElement>()
const chartInstance = ref<EChartsType>()

function draw() {
  if (chartInstance.value && props.options)
    chartInstance.value.setOption(props.options, { notMerge: true })
}

function init() {
  if (!chartRef.value)
    return

  // 校验 Dom 节点上是否已经挂载了 ECharts 实例，只有未挂载时才初始化
  chartInstance.value = echarts.getInstanceByDom(chartRef.value)
  if (!chartInstance.value) {
    chartInstance.value = markRaw(
      echarts.init(chartRef.value, props.theme, {
        renderer: 'canvas',
      }),
    )

    // 绑定鼠标事件：
    if (props.onMouseover && props.options) {
      chartInstance.value.on('mouseover', (event: object) => {
        props.onMouseover?.(event, chartInstance.value, props.options)
      })
    }
    if (props.onMouseout && props.options) {
      chartInstance.value.on('mouseout', (event: object) => {
        props.onMouseout?.(event, chartInstance.value, props.options)
      })
    }

    draw()
  }
}

// 窗口自适应并开启过渡动画
function resize() {
  if (chartInstance.value)
    chartInstance.value.resize({ animation: { duration: 300 } })
}

// 自适应防抖优化
const debouncedResize = useDebounceFn(resize, 500, { maxWait: 800 })

// 对父组件暴露获取 ECharts 实例的方法，可直接通过实例调用原生函数
defineExpose({
  getInstance: () => chartInstance.value,
  resize,
  draw,
})

watch(props, () => {
  draw()
})

// 展示 loading 动画
watch(
  () => props.loading,
  (loading) => {
    loading
      ? chartInstance.value?.showLoading()
      : chartInstance.value?.hideLoading()
  },
)

onMounted(() => {
  init()
  window.addEventListener('resize', debouncedResize)
})

onBeforeUnmount(() => {
  // 容器被销毁之后，销毁实例，避免内存泄漏
  chartInstance.value?.dispose()
  window.removeEventListener('resize', debouncedResize)
})
</script>

<template>
  <div
    id="echart"
    ref="chartRef"
    :style="{ width: props.width, height: props.height }"
  />
</template>
