<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-28 12:30:08
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-10-02 10:19:31
 * @FilePath: \power-system-visualization\src\pages\grid-reliability\grid-reliability.vue
 * @Description:
-->
<script setup lang='ts'>
import type { IGridReliability } from '#/index'
import echarts from '~/components/app-echart/config'

const { t } = useI18n()
const { data, options } = useLoadData<IGridReliability>(getGridReliabilityAPI, (res) => {
  return {
    title: {
      text: t('grid-reliability.title-4'),
      textStyle: {
        color: '#aed3dd',
        fontSize: 12,
        width: 250,
        overflow: 'break',
      },
      left: 'center',
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '30%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    },
    yAxis: {
      type: 'value',
    },
    legend: {
      show: true,
      itemHeight: 12,
      itemWidth: 12,
      itemGap: 6,
      textStyle: {
        fontSize: 10,
        color: '#92b1bb',
      },
      top: '12%',
    },
    series: [
      {
        data: res.data1,
        type: 'bar',
        name: t('grid-reliability.title-5'),
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#2797f7',
            },
            {
              offset: 1,
              color: '#3e3f7e',
            },
          ]),
        },
      },
      {
        data: res.data2,
        type: 'bar',
        name: t('grid-reliability.title-6'),
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#b8429c',
            },
            {
              offset: 1,
              color: '#412557',
            },
          ]),
        },
      },
    ],
  }
})
</script>

<template>
  <div v-if="data" class="h-full flex flex-col">
    <section-header index="5" :title="t('container.title-5')" />
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
                  {{ t("grid-reliability.title-1") }}
                </div>
                <div class="center-y">
                  <app-count-up :count="data?.values?.[0]" />
                  <div>{{ t("grid-reliability.unit-1") }}</div>
                </div>
              </div>
            </div>
            <div class="between py-2">
              <div>
                <div v-ellipsis>
                  {{ t("grid-reliability.title-2") }}
                </div>
                <div class="center-y">
                  <app-count-up :count="data?.values?.[1]" />
                  <div>{{ t("grid-reliability.unit-2") }}</div>
                </div>
              </div>
            </div>
            <div class="between">
              <div>
                <div v-ellipsis>
                  {{ t("grid-reliability.title-3") }}
                </div>
                <div class="center-y">
                  <app-count-up :count="data?.values?.[2]" />
                  <div>{{ t("grid-reliability.unit-3") }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section-container>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
