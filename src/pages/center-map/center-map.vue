<script setup lang='ts'>
import echarts from '~/components/app-echart/config'
import mapJson from '~/assets/data/china.json'

const { t } = useI18n()

const { options, setOptions } = useEcharts()

onMounted(() => {
  echarts.registerMap('CN', mapJson as any)
  setOptions({
    xAxis: { show: false },
    yAxis: { show: false },
    series: [
      {
        type: 'map',
        map: 'CN',
        roam: false,
        aspectScale: 1,
        zoom: 1.2,
        selectedMode: false,
        label: {
          show: true,
          color: '#1cd8f5',
          fontSize: 16,
        },
        emphasis: {
          label: { color: '#1cd8f5' },
          itemStyle: {
            areaColor: '#0b2035',
          },
        },
        itemStyle: {
          areaColor: '#101d2c',
          borderColor: '#01c7e3',
          // emphasis: {
          //   label: { color: '#1cd8f5' },
          //   areaColor: '#0b2035',
          // },
          // select: {
          //   disabled: false,
          // },
        },
      },
    ],
  })
})
</script>

<template>
  <div class="h-full center">
    <div class="h-full w-90% flex flex-col">
      <div class="contanier-border">
        <div />
        <div />
        <div />
        <div />
        <div class="w-full center text-base">
          {{ t('center-title') }}
        </div>
      </div>
      <dv-border-box12 :color="['#5893a6', '#ffda67']" background-color="#1c3b4b" class="my-4 h-full center flex-1">
        <app-echart width="100%" height="100%" :options="options" />
      </dv-border-box12>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contanier-border{
 --uno:relative px-2 py-4  text-sm w-full border-1 border-solid border-[#5893a6] ;

 > div:nth-child(1){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute top-0 left-0 ;
 }

 > div:nth-child(2){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute top-0 right-0 ;
 }

 > div:nth-child(3){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute bottom-0 left-0 ;
 }

  > div:nth-child(4){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute bottom-0 right-0 ;
 }
}
</style>
