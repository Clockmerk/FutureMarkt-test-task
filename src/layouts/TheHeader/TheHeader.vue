<script setup lang="ts">
import logo from '@/assets/svg/logo.svg'
import NavBar from '@/components/NavBar/NavBar.vue'
import NavModal from '@/components/NavModal/NavModal.vue'
import { ref } from 'vue'

const modalNav = ref(false)
</script>

<template>
  <header>
    <div class="logo">
      <object :data="logo" type="image/svg+xml"></object>
    </div>
    <nav>
      <ul>
        <NavBar />
      </ul>
    </nav>
    <div class="right-side">
      <button @click="modalNav = true"><img src="@/assets/svg/sidemenu.svg" alt="tel" /></button>
      <a href="tel:+73451233445" class="tel">
        <div class="tel-img"><img src="@/assets/svg/tel.svg" alt="tel" /></div>
        <span> 8-345-123-34-45</span>
      </a>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <NavModal v-if="modalNav" @close="modalNav = false" />
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
@import './TheHeader.module.scss';
</style>
