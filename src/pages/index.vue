<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-27 18:03:50
 * @FilePath: \power-system-visualization\src\pages\index.vue
 * @Description:
-->
<script setup lang="tsx">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="h-full flex flex-col px-20 py-5 text">
    <my-header class="relative -top-4" />
    <my-container class="flex-1 text-[--text-color]" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style scoped lang="scss">

</style>
