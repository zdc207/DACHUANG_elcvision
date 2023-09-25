<script setup lang='ts'></script>

<template>
  <div class="contanier-border">
    <div />
    <div />
    <div />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.contanier-border{
 --uno:relative px-2 py-2 mt-6 text-sm w-50% border-1 border-solid border-[#457482] rounded-br-6;

 > div:nth-child(1){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute top-0 left-0 ;
 }

 > div:nth-child(2){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute top-0 right-0 ;
 }

 > div:nth-child(3){
  --uno:h-1.5 w-1.5 bg-[#ffda67] absolute bottom-0 left-0 ;
 }
}
</style>
