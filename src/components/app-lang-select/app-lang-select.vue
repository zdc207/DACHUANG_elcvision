<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-20 11:11:08
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-10-01 18:04:02
 * @FilePath: \power-system-visualization\src\components\app-lang-select\app-lang-select.vue
 * @Description:
-->
<script setup lang='ts'>
defineOptions({
  name: 'AppLangSelect',
})

const isShow = ref(false)

function handleCommand(command: string) {
  isShow.value = false
  loadLanguageAsync(command)
}
</script>

<template>
  <div class="app-lang-select relative z-1 flex flex-col items-center" @mouseover="isShow = true" @mouseout="isShow = false">
    <div class="i-carbon-language center icon-btn text" />
    <div v-show="isShow" class="relative h-fit center">
      <div class="absolute top-0 h-4 w-30 bg-transparent" />
      <div class="absolute top-4 border-1 border-[#5db5b2] dark:border-[#2e6099]">
        <div v-for="lang in languages" :key=" lang.value" class="lang-item" @click="handleCommand(lang.value)">
          {{ lang.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lang-item{
  --uno: center whitespace-nowrap bg-white dark:bg-[#101521]  px-4 py-2 text-sm hover:cursor-pointer dark:hover:bg-[#1e273b] hover:bg-light-6;
}
</style>
