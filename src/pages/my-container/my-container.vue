<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-23 19:08:02
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-24 20:20:44
 * @FilePath: \power-system-visualization\src\pages\my-container\my-container.vue
 * @Description:
-->
<script setup lang='ts'>
defineOptions({
  name: 'MyContainer',
})
</script>

<template>
  <dv-border-box12 :dur="5">
    <div class="grid grid-cols-16 px-6 py-4">
      <div class="col-span-5">
        <social-condition />
      </div>
      <div class="col-span-6">
        2
      </div>
      <div class="col-span-5">
        3
      </div>
    </div>
  </dv-border-box12>
</template>
