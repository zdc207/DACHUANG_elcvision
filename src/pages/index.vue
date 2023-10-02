<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-10-02 17:34:19
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
    <my-container class="relative flex-1 text-[#00706c] -top-1 dark:text-[--text-color]" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style scoped lang="scss">

</style>
