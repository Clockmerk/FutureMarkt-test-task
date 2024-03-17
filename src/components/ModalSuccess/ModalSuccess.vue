<script setup lang="ts">
import logo from '@/assets/svg/logo.svg'
</script>

<template>
  <h2>
    Спасибо <br />
    за заявку
  </h2>
  <h2>
    Я обязательно <br />свяжусь с вами<br />
    в ближайшее время.
  </h2>

  <div class="logo">
    <div><object :data="logo" type="image/svg+xml"></object></div>
  </div>
</template>

<style scoped>
@import './ModalSuccess.module.scss';
</style>
