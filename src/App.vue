<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-30 19:43:33
 * @FilePath: \power-system-visualization\src\App.vue
 * @Description:
-->
<script setup lang="ts">
import autofit from 'autofit.js'

onMounted(() => {
  if (!isDark.value)
    toggleDark()

  autofit.init({
    el: '#body',

  }, false)
})
</script>

<template>
  <RouterView />
</template>
