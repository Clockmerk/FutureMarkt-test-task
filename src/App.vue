<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './layouts/TheHeader/TheHeader.vue'

// Использовал реализацию задних линий в блочном компоненте div. Задумка вышла, но пришлось велосипедить с margin и height в некоторых моментах.
</script>

<template>
  <TheHeader />
  <RouterView />
  <div class="lines">
    <div></div>
    <div></div>
  </div>
  <span class="bg"></span>
</template>

<style scoped></style>
