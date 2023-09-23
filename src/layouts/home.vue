<script setup lang="ts">
const size = ref<'large' | 'default' | 'small'> ('default')
const zIndex = ref(1000)
const locale = ref()

const { locale: currentLocale } = useI18n()

// 动态设置国际化语言
watch(currentLocale, () => {
  const path = `/node_modules/element-plus/dist/locale/${currentLocale.value}.mjs`
  import(/* @vite-ignore */path).then((res) => {
    locale.value = res.default
  })
}, {
  immediate: true,
})
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex" :locale="locale">
    <dv-full-screen-container>
      <RouterView />
    </dv-full-screen-container>
  </el-config-provider>
</template>
