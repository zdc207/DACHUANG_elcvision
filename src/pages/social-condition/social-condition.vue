<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-23 20:25:10
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-10-01 18:23:50
 * @FilePath: \power-system-visualization\src\pages\social-condition\social-condition.vue
 * @Description:
-->
<script setup lang='ts'>
import type { ISocialCondition } from '#/index'
import echarts from '~/components/app-echart/config'

const { t } = useI18n()

const { data, options } = useLoadData<ISocialCondition>(getSocialConditionAPI, (res) => {
  return {
    grid: {
      left: '0%',
      right: '0%',
      top: ' 0%',
      bottom: '0%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'item',
    },
    title: [
      {
        text: t('social-condition.title-4'),
        left: 'center',
        top: '0',
        textStyle: {
          fontSize: 12,
          color: '#aed3dd',
        },
      },
      {
        text: `${res?.increment?.reduce((pre, current) => (pre + current), 0).toFixed(2)}%`,
        left: 'center',
        top: 'center',
        textStyle: {
          fontSize: 14,
          color: '#aed3dd',
        },
        subtextStyle: {
          fontSize: 12,
          color: '#afcfdc',
        },
        itemGap: 0,
      },
    ],
    legend: {
      bottom: '0%',
      textStyle: {
        color: '#90acb9',
        fontSize: '12px',
      },
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 4,
    },
    series: [
      {
        name: t('social-condition.title-4'),
        type: 'pie',
        radius: ['30%', '50%'],
        avoidLabelOverlap: false,
        labelLine: {
          show: true,
          length: 6,
          length2: 6,
        },
        label: {
          color: '#afcfdc',
          fontSize: 12,
          overflow: 'break',
          position: 'outside',
          formatter: '{d} %',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 10,
            fontWeight: 'bold',
          },
        },
        data: [
          {
            name: t('social-condition.first-industry'),
            value: res?.industry?.[0],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: '#08d8d8', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#7affff', // 100% 处的颜色
                  },
                ],
                false,
              ),
            },
          },
          {
            name: t('social-condition.second-industry'),
            value: res?.industry?.[1],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: '#fa53fa', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#e793f8', // 100% 处的颜色
                  },
                ],
                false,
              ),
            },
          },
          {
            name: t('social-condition.third-industry'),
            value: res?.industry?.[2],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: '#7161fe', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#e388f2', // 100% 处的颜色
                  },

                ],
                false,
              ),
            },
          },
        ],
      },
    ],
  }
})
</script>

<template>
  <div v-if="data" class="h-full flex flex-col">
    <section-header index="1" :title="t('container.title-1')" />
    <div class="h-full flex flex-1 py-4">
      <section-container>
        <div class="h-full between">
          <div class="w-full text-left">
            <div class="between">
              <div>
                <div v-ellipsis>
                  {{ t("social-condition.title-1") }}
                </div>
                <app-count-up :count="data?.values?.[0]" />
              </div>
              <app-count-up :count="data?.increment?.[`0`]" showfix :decimal-places="1" />
            </div>
            <div class="between py-2">
              <div>
                <div v-ellipsis>
                  {{ t("social-condition.title-2") }}
                </div>
                <app-count-up :count="data?.values?.[1]" />
              </div>
              <app-count-up :count="data?.increment?.[`1`]" showfix :decimal-places="1" />
            </div>
            <div class="between">
              <div>
                <div v-ellipsis>
                  {{ t("social-condition.title-3") }}
                </div>
                <app-count-up :count="data?.values?.[2]" />
              </div>
              <app-count-up :count="data?.increment?.[`2`]" showfix :decimal-places="1" />
            </div>
          </div>
        </div>
      </section-container>
      <div class="h-full w-50% center">
        <app-echart :options="options" width="250px" height="200px" />
      </div>
    </div>
  </div>
</template>
