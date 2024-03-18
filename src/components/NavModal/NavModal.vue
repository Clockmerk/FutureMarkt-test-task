<script setup lang="ts">
import NavBar from '../NavBar/NavBar.vue'
defineEmits(['close'])
//FIXME: переписать использование emit в ul
</script>

<template>
  <div class="nav-modal">
    <div class="close">
      <button @click="$emit('close')">
        <img src="@/assets/svg/cross.svg" alt="cross" />
      </button>
    </div>
    <ul @click="$emit('close')">
      <NavBar />
    </ul>
  </div>
</template>

<style scoped>
@import './NavModal.module.scss';
</style>
