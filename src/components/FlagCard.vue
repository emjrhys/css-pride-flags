<template>
  <v-dialog max-width="600">
    <template #activator="{ props: activatorProps }">
      <v-hover v-slot="{ isHovering, props: hoverProps }">
        <v-card v-bind="hoverProps" style="height: 10rem">
          <component :is="flagComponent" class="h-100 w-100" />
    
          <v-overlay 
            :model-value="isHovering"
            class="justify-center align-center"
            contained
            persistent
            no-click-animation
          >
            <div class="d-flex justify-center align-center flex-column">
              <p class="text-h4 text-white font-weight-black mb-1" v-text="props.label" />
              <v-btn v-bind="activatorProps">View code</v-btn>
            </div>
          </v-overlay>
        </v-card>
      </v-hover>
    </template>

    <template #default>
      <v-card theme="dark">
        <v-card-text class="text-body-2 overflow-auto">
          <code style="white-space: pre; line-height: 1.25rem">
            {{ rawFileContent }}
          </code>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup type="ts">
import * as Flags from '@/components/flags'
import { computed, mergeProps } from 'vue'

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

const flagComponent = computed(() => Flags[props.flag])
const rawFileContent = (await import(`@/components/flags/${props.flag}.vue?raw`)).default
</script>