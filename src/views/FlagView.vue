<template>
  <div class="pt-16 text-center">
    <p class="text-h2">CSS Pride Flags</p>
    <p class="text-subtitle-1">Click to view code</p>
  </div>
  <div class="grid h-100">
    <FlagCard 
      v-for="item in flagStore.flags" 
      :key="item.flag" 
      :flag="item.flag" 
      :label="item.label" 
    />
  </div>
</template>

<script setup lang="ts">
import FlagCard from '@/components/FlagCard.vue'
import { useFlagStore } from '@/stores/flag'

const flagStore = useFlagStore()
</script>

<style scoped>
.grid {
  padding: 3rem 3.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-template-rows: repeat(auto-fill, 10rem);
  grid-gap: 2.5rem;

  overflow: auto;
}
</style>