<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-20 11:11:08
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-23 12:15:37
 * @FilePath: \power-system-visualization\src\components\app-lang-select\app-lang-select.vue
 * @Description:
-->
<script setup lang='ts'>
defineOptions({
  name: 'AppLangSelect',
})

function handleCommand(command: string) {
  loadLanguageAsync(command)
}
</script>

<template>
  <el-dropdown @command="handleCommand">
    <div class="w-10 center">
      <div class="i-carbon-language h-30px w-30px text" />
    </div>
    <template #dropdown>
      <el-dropdown-menu v-for="lang in languages" :key="lang.value">
        <el-dropdown-item :command="lang.value">
          {{ lang.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
