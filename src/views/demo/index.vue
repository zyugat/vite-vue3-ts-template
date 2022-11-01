<template>
  <div>
    {{ mainStore.$state }}
    <button @click="mainStore.changeCount(2)">changeCount</button>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store'

const mainStore = useMainStore()

// console.log(mainStore)
</script>

<style lang="scss" scoped></style>
