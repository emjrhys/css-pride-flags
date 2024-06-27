<template>
  <v-dialog fullscreen>
    <template #activator="{ props: activatorProps }">
      <v-hover v-slot="{ isHovering, props: hoverProps }">
        <v-card v-bind="mergeProps(hoverProps, activatorProps)" style="height: 10rem">
          <component :is="flagComponent" class="h-100 w-100" />
    
          <v-overlay 
            :model-value="isHovering"
            class="justify-center align-center"
            contained
          >
            <p class="text-h4 text-white font-weight-black" v-text="props.label" />
          </v-overlay>
        </v-card>
      </v-hover>
    </template>

    <template #default>
      <flag-profile :flag="props.flag" :label="props.label" />
    </template>
  </v-dialog>
</template>

<script setup type="ts">
import FlagProfile from '@/components/FlagProfile.vue'
import { computed, mergeProps } from 'vue'
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
</script>