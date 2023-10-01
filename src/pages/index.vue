<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-10-01 18:27:14
 * @FilePath: \power-system-visualization\src\pages\index.vue
 * @Description:
-->
<script setup lang="tsx">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="box-border h-full flex flex-col overflow-hidden px-20 text">
    <my-header class="relative -top-3" />
    <my-container class="relative flex-1 text-[--text-color] -top-1" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style scoped lang="scss">

</style>
