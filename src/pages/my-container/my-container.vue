<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-23 19:08:02
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-28 16:57:15
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
    <div class="grid grid-cols-16 h-full px-6 py-4">
      <div class="grid col-span-5 grid-rows-3 h-full">
        <social-condition />
        <power-grid-construction />
        <electricity-usage />
      </div>
      <div class="col-span-6">
        2
      </div>
      <div class="grid col-span-5 grid-rows-3 h-full">
        <management-improvement />
        <grid-reliability />
        <sales-of-electricity-and-line-loss />
      </div>
    </div>
  </dv-border-box12>
</template>
