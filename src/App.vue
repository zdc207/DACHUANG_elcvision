<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-19 20:22:55
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-20 13:32:11
 * @FilePath: \power-system-visualization\src\App.vue
 * @Description:
-->
<script setup lang="ts">
const size = ref<'large' | 'default' | 'small'> ('default')
const zIndex = ref(1000)
const locale = ref()

const { locale: currentLocale } = useI18n()

// 动态设置国际化语言
watch(currentLocale, () => {
  const path = `./../node_modules/element-plus/dist/locale/${currentLocale.value}.mjs`
  import(/* @vite-ignore */path).then((res) => {
    locale.value = res.default
  })
})
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex" :locale="locale">
    <RouterView />
  </el-config-provider>
</template>
