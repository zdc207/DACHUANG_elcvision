<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-28 12:29:15
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-10-01 19:32:29
 * @FilePath: \power-system-visualization\src\pages\management-improvement\management-improvement.vue
 * @Description:
-->
<script setup lang='ts'>
import type { IManagementImprovement } from '#/index'

const { t } = useI18n()

const { options, data } = useLoadData<IManagementImprovement>(getManagementImprovementAPI, (res) => {
  return {
    grid: {
      left: '2%',
      right: '4%',
      top: '0%',
      bottom: '0%',
      containLabel: true,
    },
    series: [
      {
        type: 'gauge',
        radius: '90%',
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.3, '#fe6b93'],
              [0.7, '#12c4fd'],
              [1, '#9851eb'],
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: 'auto',
          },
        },
        axisTick: {
          distance: -10,
          lineStyle: {
            color: '#173950',
            width: 1,
          },
        },
        splitLine: {
          distance: -5,
          length: 5,
          lineStyle: {
            color: '#173950',
            width: 1,
          },
        },
        axisLabel: {
          color: 'inherit',
          distance: 20,
          fontSize: 12,
        },
        detail: {
          valueAnimation: true,
          formatter: '{value} %',
          color: 'inherit',
          fontSize: 16,
          offsetCenter: [0, '70%'],
        },
        title: {
          color: 'inherit',
          offsetCenter: [0, '40%'],
        },
        data: [
          {
            value: res.data,
            name: t('management-improvement.title-3'),
          },
        ],
      },
    ],
  }
})
</script>

<template>
  <div v-if="data" class="h-full flex flex-col">
    <section-header :title="t('container.title-4')" index="4" />
    <div class="h-full flex flex-1 py-4">
      <div class="h-full w-50% center">
        <app-echart :options="options" width="250px" height="200px" />
      </div>
      <section-container right>
        <div class="h-full w-full center">
          <div class="h-60% w-full between flex-col">
            <div class="w-full between">
              <div>
                <div v-ellipsis>
                  {{ t('management-improvement.title-1') }}
                </div>
                <app-count-up :count="data?.values?.[0]" :decimal-places="2" />
              </div>
              <app-count-up :count="data?.increment?.[0]" :decimal-places="1" showfix />
            </div>
            <div class="w-full between">
              <div>
                <div v-ellipsis>
                  {{ t('management-improvement.title-2') }}
                </div>
                <app-count-up :count="data?.values?.[1]" :decimal-places="2" />
              </div>
              <app-count-up :count="data?.increment?.[1]" :decimal-places="1" showfix />
            </div>
          </div>
        </div>
      </section-container>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
