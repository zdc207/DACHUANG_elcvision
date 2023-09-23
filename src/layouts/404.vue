<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-23 11:06:47
 * @FilePath: \power-system-visualization\src\layouts\404.vue
 * @Description:
-->
<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button text-sm btn m="3 t8" @click="router.back()">
        back
      </button>
    </div>
  </main>
</template>
