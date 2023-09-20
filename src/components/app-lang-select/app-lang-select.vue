<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-20 11:11:08
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-20 12:38:25
 * @FilePath: \power-system-visualization\src\components\app-lang-select\app-lang-select.vue
 * @Description:
-->
<script setup lang='ts'>
function handleCommand(command: string) {
  loadLanguageAsync(command)
}
</script>

<template>
  <el-dropdown @command="handleCommand">
    <div class="center w-10">
      <div class="i-carbon-language" />
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
