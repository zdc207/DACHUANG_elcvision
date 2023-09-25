<script setup lang='ts'>
defineProps<{
  index: string
  title: string
}>()

defineOptions({
  name: 'SectionHeader',
})
</script>

<template>
  <div class="center-y text-white dark:text-[#03dbf6]">
    <div class="h-8 w-8 center bg-[#189692] dark:bg-[#4e6b8d]">
      {{ index }}
    </div>
    <div class="h-8 w-full center-y bg-[#189692] pl-2 opacity-70 dark:bg-[#2a3c55] dark:opacity-100">
      {{ title }}
    </div>
  </div>
</template>
