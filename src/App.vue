<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './layouts/TheHeader/TheHeader.vue'
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
