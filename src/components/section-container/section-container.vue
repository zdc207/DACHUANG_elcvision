<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-25 13:33:03
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-10-01 18:55:00
 * @FilePath: \power-system-visualization\src\components\section-container\section-container.vue
 * @Description:
-->
<script setup lang='ts'>
withDefaults(defineProps<{
  right?: boolean
}>(), {
  right: false,
})
</script>

<template>
  <div :class="!right ? 'contanier-border-left' : 'contanier-border-right'">
    <div />
    <div />
    <div />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.contanier-border-left{
 --uno:relative px-2 py-2  text-sm w-50% border-1 border-solid border-[#457482] rounded-br-6;

 > div:nth-child(1){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute top-0 left-0 ;
 }

 > div:nth-child(2){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute top-0 right-0 ;
 }

 > div:nth-child(3){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute bottom-0 left-0 ;
 }
}
.contanier-border-right{
 --uno:relative px-2 py-2  text-sm w-50% border-1 border-solid border-[#457482] rounded-bl-6;

 > div:nth-child(1){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute top-0 left-0 ;
 }

 > div:nth-child(2){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute top-0 right-0 ;
 }

 > div:nth-child(3){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute bottom-0 right-0 ;
 }
}
</style>
