<template>
  <div class="mt-16 text-center">
    <p class="text-h2">CSS Pride Flags</p>
    <p class="text-subtitle-1">Click to view code</p>
  </div>
  <div class="grid h-100">
    <FlagCard 
      v-for="item in flags" 
      :key="item.flag" 
      :flag="item.flag" 
      :label="item.label" 
    />
  </div>
</template>

<script setup lang="ts">
import FlagCard from '@/components/FlagCard.vue'
import * as Flags from '@/components/flags'

const flags = [
  {
    label: 'Progress',
    flag: Flags.ProgressPrideFlag,
  },
  {
    label: 'Pride',
    flag: Flags.PrideFlag,
  },
  {
    label: '8-Stripe Pride',
    flag: Flags.GilbertBakerPrideFlag,
  },
  {
    label: 'Agender',
    flag: Flags.AgenderFlag,
  },
  {
    label: 'Aromantic',
    flag: Flags.AromanticFlag,
  },
  {
    label: 'Asexual',
    flag: Flags.AsexualFlag,
  },
  {
    label: 'Intersex',
    flag: Flags.IntersexFlag,
  },
  {
    label: 'Lesbian',
    flag: Flags.LesbianFlag,
  },
  {
    label: 'Transgender',
    flag: Flags.TransgenderFlag,
  },
]
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