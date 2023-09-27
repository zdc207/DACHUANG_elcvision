<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-27 16:11:22
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-27 20:45:01
 * @FilePath: \power-system-visualization\src\pages\power-grid-construction\power-grid-construction.vue
 * @Description:
-->
<script setup lang='ts'>
import echarts from '~/components/app-echart/config'
import type { IPowerGridConstruction } from '#/index'

const { t, locale } = useI18n()

const { options, setOptions } = useEcharts()

const data = ref({} as IPowerGridConstruction)

loadData()

async function loadData() {
  const res = await getPowerGridConstructionAPI()
  data.value = res.data
  setOptionsWithData(data.value)
}

useIntervalFn(async () => {
  loadData()
}, 5000)

watch(locale, () => {
  setOptionsWithData(data.value)
})

function setOptionsWithData(data: IPowerGridConstruction) {
  setOptions({
    grid: {
      left: '10%',
      right: '2%',
      top: '20%',
      bottom: '-10%',
      containLabel: true,
    },
    title: {
      text: t('power-grid-construction.title-3'),
      left: 'center',
      top: '10px',
      textStyle: {
        fontSize: '12px',
        width: 250,
        overflow: 'break',
        color: '#aed3dd',
      },

    },
    xAxis: {
      max(value) {
        return 120
      },
      show: false,
      type: 'value',
      boundaryGap: [0, 0.01],
      axisPointer: {
        show: true,
      },
    },
    yAxis: {
      type: 'category',
      data: [t('fujian'), t('zhejiang'), t('anhui'), t('shanghai'), t('jiangsu')],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: '#92b1bb',
      },
    },
    series: [
      {
        realtimeSort: true,
        type: 'bar',
        data: data?.province,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true,
          color: '#92b1bb',
        },
        barWidth: '12px',
        barGap: '100%',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#409ef7',
            },
            {
              offset: 1,
              color: '#11ccd6',
            },
          ]),
          borderRadius: [0, 9999, 9999, 0],
        },
      },
    ],
    tooltip: {
      show: true,
    },
    legend: {
      show: false,
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
  })
}
</script>

<template>
  <section-header index="2" :title="t('container.title-2')" />
  <div class="w-full flex">
    <section-container>
      <div class="h-full center">
        <div class="h-70% w-full between flex-col">
          <div class="between pb-2">
            <div>
              <div v-ellipsis>
                {{ t('power-grid-construction.title-1') }}
              </div>
              <app-count-up :count="data?.values?.[0]" :decimal-places="1" />
            </div>
            <app-count-up :count="data?.increment?.[0]" showfix :decimal-places="1" />
          </div>
          <div class="between">
            <div>
              <div v-ellipsis>
                {{ t('power-grid-construction.title-2') }}
              </div>
              <app-count-up :count="data?.values?.[1]" :decimal-places="1" />
            </div>
            <app-count-up :count="data?.increment?.[1]" showfix :decimal-places="1" />
          </div>
        </div>
      </div>
    </section-container>
    <div class="w-50%">
      <app-echart width="250px" height="180px" :options="options" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
