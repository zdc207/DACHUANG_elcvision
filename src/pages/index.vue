<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const { t } = useI18n()
</script>

<template>
  <div>
    {{ t('intro.hi', { name: "leo" }) }}
  </div>
  <div class="i-carbon-light dark:i-carbon-moon hover:cursor-pointer" @click="toggleDark()" />
  <app-lang-select />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
