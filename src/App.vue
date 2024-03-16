<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './layouts/TheHeader/TheHeader.vue'
</script>

<template>
  <div class="lines">
    <span></span>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <TheHeader />
  <RouterView />
</template>

<style scoped></style>
