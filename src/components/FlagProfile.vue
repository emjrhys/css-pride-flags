<template>
  <div class="py-8 d-flex flex-column align-center">
    <v-card class="w-100" max-width="600">
      <v-img height="200">
        <component :is="flagComponent" class="h-100 w-100"></component>
      </v-img>
      <v-card-title class="text-h4 mb-1">
        {{ props.label }} Pride Flag
      </v-card-title>
      <!-- <v-card-text class="text-body-2 overflow-auto">
      </v-card-text> -->
    </v-card>
    <v-card
      class="w-100 mt-4"
      max-width="600"
      theme="dark" 
    >
      <v-card-text class="text-body-2 overflow-auto">
        <v-code-block 
          :code="rawFileContent"
          highlightjs
          lang="javascript"
          theme="stackoverflow-dark"
        />
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFlagStore } from '@/stores/flag'

const props = defineProps({
  flag: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  }
})

const flagStore = useFlagStore()

const flagComponent = computed(() => flagStore.getFlagComponent(props.flag))
const rawFileContent = (await import(`@/components/flags/${props.flag}.vue?raw`)).default
</script>