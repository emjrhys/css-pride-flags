<template>
  <v-dialog activator="parent" fullscreen>
    <template #default="{ isActive: isProfileActive }">
      <div class="py-8 px-4 d-flex flex-column align-center">
        <div class="position-relative w-100" style="max-width: 600px">
          <v-card>
            <v-img height="200">
              <component :is="flagComponent" class="h-100 w-100"></component>
            </v-img>
            <v-card-title class="text-h4 mb-1">
              {{ props.label }} Pride Flag
            </v-card-title>
          </v-card>
          <v-card class="mt-4" theme="dark">
            <v-card-text class="text-body-2 overflow-auto">
              <v-code-block 
                :code="rawFileContent"
                highlightjs
                lang="javascript"
                theme="stackoverflow-dark"
              />
            </v-card-text>
          </v-card>
          <v-btn 
            class="position-absolute" 
            style="top: -16px; right: -16px" 
            icon="close" 
            @click="isProfileActive.value = false" 
          />
        </div>
      </div>
    </template>
  </v-dialog>
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