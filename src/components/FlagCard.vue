<template>
  <v-hover v-slot="{ isHovering, props: hoverProps }">
    <v-card v-bind="hoverProps" style="height: 10rem">
      <component :is="props.flag" class="h-100 w-100" />

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

<script setup type="ts">
const props = defineProps({
  flag: {
    required: true,
  },
  label: {
    type: String,
    required: true,
  }
})
</script>