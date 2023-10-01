<script setup lang='ts'>
import echarts from '~/components/app-echart/config'

const { t } = useI18n()

const { data, options } = useLoadData(getElectricityUsageAPI, (res) => {
  return {
    grid: {
      left: '2%',
      right: '4%',
      top: '30%',
      bottom: '0%',
      containLabel: true,
    },
    title: {
      text: t('electricity-usage.title-3'),
      left: 'center',
      top: '0',
      textStyle: {
        fontSize: '12px',
        width: 250,
        overflow: 'break',
        color: '#aed3dd',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      show: false,
    },
    xAxis: [
      {
        type: 'category',
        data: [t('fujian'), t('zhejiang'), t('anhui'), t('shanghai'), t('jiangsu')],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: t('electricity-usage.desc-1'),
        min: 0,
        max: 4000,
      },
      {
        type: 'value',
        name: t('electricity-usage.desc-2'),
        min: 0,
        max: 8,
      },
    ],
    series: [
      {
        name: t('electricity-usage.desc-1'),
        type: 'bar',
        tooltip: {
          valueFormatter(value) {
            return `${value as number} ml`
          },
        },
        data: res.electricity,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#db8195',
            },
            {
              offset: 1,
              color: '#603969',
            },
          ]),
        },
      },
      {
        name: t('electricity-usage.desc-2'),
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter(value) {
            return `${value as number} °C`
          },
        },
        itemStyle: {
          color: '#855661',
        },
        data: res.electricity.map(item => Math.ceil((item / 500))),
      },
    ],
  }
})
</script>

<template>
  <div class="h-full flex flex-col">
    <section-header index="3" :title="t('container.title-3')" />
    <div v-if="data" class="h-full flex flex-1 py-4">
      <section-container>
        <div class="h-full w-full center">
          <div class="h-60% w-full between flex-col">
            <div class="w-full between">
              <div>
                <div v-ellipsis>
                  {{ t('electricity-usage.title-1') }}
                </div>
                <app-count-up :count="data?.values?.[0]" :decimal-places="2" />
              </div>
              <app-count-up :count="data?.increment?.[0]" :decimal-places="1" showfix />
            </div>
            <div class="w-full between">
              <div>
                <div v-ellipsis>
                  {{ t('electricity-usage.title-2') }}
                </div>
                <app-count-up :count="data?.values?.[1]" />
              </div>
              <app-count-up :count="data?.increment?.[1]" :decimal-places="1" showfix />
            </div>
          </div>
        </div>
      </section-container>
      <div class="h-full w-50% center">
        <app-echart :options="options" height="200px" width="250px" />
      </div>
    </div>
  </div>
</template>
