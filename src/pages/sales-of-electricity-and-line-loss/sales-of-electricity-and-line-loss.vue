<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-28 12:33:29
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-10-02 10:22:45
 * @FilePath: \power-system-visualization\src\pages\sales-of-electricity-and-line-loss\sales-of-electricity-and-line-loss.vue
 * @Description:
-->
<script setup lang='ts'>
import echarts from '~/components/app-echart/config'

const { t } = useI18n()

const { data, options } = useLoadData(getSalesOfElectricityAndLineLossAPI, (res) => {
  return {
    color: ['#80FFA5', '#00DDFF'],
    title: {
      text: t('sales-of-electricity-and-line-loss.title-3'),
      left: 'center',
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
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [t('fujian'), t('zhejiang'), t('anhui'), t('shanghai'), t('jiangsu')],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: t('sales-of-electricity-and-line-loss.desc-1'),
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)',
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: res.data1,
      },
      {
        name: t('sales-of-electricity-and-line-loss.desc-2'),
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(0, 221, 255)',
            },
            {
              offset: 1,
              color: 'rgb(77, 119, 255)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: res.data2,
      },
    ],
  }
})
</script>

<template>
  <div v-if="data" class="h-full flex flex-col">
    <section-header index="6" :title="t('container.title-6')" />
    <div class="h-full flex flex-1 py-4">
      <div class="h-full w-50% center">
        <app-echart :options="options" width="250px" height="200px" />
      </div>
      <section-container right>
        <div class="h-full between">
          <div class="w-full text-left">
            <div class="between">
              <div>
                <div v-ellipsis>
                  {{ t("sales-of-electricity-and-line-loss.title-1") }}
                </div>
                <app-count-up :count="data?.values?.[0]" />
              </div>
              <app-count-up :count="data?.increment?.[`0`]" showfix :decimal-places="1" />
            </div>
            <div class="between py-2">
              <div>
                <div v-ellipsis>
                  {{ t("sales-of-electricity-and-line-loss.title-2") }}
                </div>
                <app-count-up :count="data?.values?.[1]" />
              </div>
              <app-count-up :count="data?.increment?.[`1`]" showfix :decimal-places="1" />
            </div>
            <div class="between">
              <div>
                <div v-ellipsis>
                  {{ t("sales-of-electricity-and-line-loss.title-3") }}
                </div>
                <app-count-up :count="data?.values?.[2]" />
              </div>
              <app-count-up :count="data?.increment?.[`2`]" showfix :decimal-places="1" />
            </div>
          </div>
        </div>
      </section-container>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
