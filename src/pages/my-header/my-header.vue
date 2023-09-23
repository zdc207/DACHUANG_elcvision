<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-09-22 17:37:25
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-09-23 17:54:14
 * @FilePath: \power-system-visualization\src\pages\my-header\my-header.vue
 * @Description:
-->
<script setup lang='ts'>
const { t } = useI18n()

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
const { toggle, isFullscreen } = useFullscreen()

const colorBtnTitle = computed(() => {
  return isDark.value ? t('header.change-color-light') : t('header.change-color-dark')
})

const fullScreenTitle = computed(() => {
  return isFullscreen.value ? t('header.exit-fullscreen') : t('header.fullscrenn')
})

const langBtnTitle = computed(() => {
  return t('header.change-language')
})
</script>

<template>
  <div class="between">
    <div class="center-y">
      <div :class="{ 'logo-light': !isDark, 'logo-night': isDark }" class="h-120px w-120px bg-[url(/src/assets/img/logo.png)] bg-no-repeat" />
      <div class="ml-4 flex-col justify-between">
        <div class="font-mono text-2xl font-bold tracking-1">
          {{ t("header.logo") }}
        </div>
        <div class="relative top-2 font-extralight tracking-widest italic underline decoration-[#ddd] underline-offset-8">
          {{ t("header.title") }}
        </div>
      </div>
    </div>
    <div class="center-y">
      <div class="w-80 center text-2xl font-bold tracking-0.5">
        {{ formatted }}
      </div>
      <div class="w-14 center" :title="colorBtnTitle">
        <div class="i-carbon-light dark:i-carbon-moon icon-btn" @click="toggleDark" />
      </div>
      <div class="w-14 center" :title="fullScreenTitle">
        <div class="i-carbon-ica-2d icon-btn" @click="toggle" />
      </div>
      <div class="w-14 center" :title="langBtnTitle">
        <app-lang-select />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
 .logo-light{
    background-position: 0 -140px;
  }
   .logo-night{
    background-position: 0 0;
  }
</style>
