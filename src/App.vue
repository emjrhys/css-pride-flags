<template>
  <v-app>
    <router-view />
    <v-footer>
      <v-row>
        <v-col class="text-caption text-center text-disabled pb-12">
          <p>made by emma rhys 🏳️‍⚧️</p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>