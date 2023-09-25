<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-25 12:45:45
 * @FilePath: \power-system-visualization\src\App.vue
 * @Description:
-->

<script setup lang="ts">
import autofit from 'autofit.js'

onMounted(() => {
  autofit.init()
})
</script>

<template>
  <RouterView />
</template>
