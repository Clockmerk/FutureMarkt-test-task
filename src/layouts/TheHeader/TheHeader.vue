<script setup lang="ts">
import logo from '@/assets/svg/logo.svg'

const links = new Map([
  ['Обо мне', '/'],
  ['Наставничество', '/'],
  ['Мероприятия', '/'],
  ['Кейсы', '/'],
  ['Отзывы', '/'],
  ['Контакты', '/contacts']
])
</script>

<template>
  <header>
    <div class="logo">
      <object :data="logo" type="image/svg+xml"></object>
    </div>
    <nav>
      <ul>
        <RouterLink v-for="link in links" :key="link[0]" :to="link[1]">{{ link[0] }}</RouterLink>
      </ul>
    </nav>
    <a href="tel:+73451233445" class="tel">
      <div class="tel-img"><img src="@/assets/svg/tel.svg" alt="tel" /></div>
      <span> 8-345-123-34-45</span>
    </a>
  </header>
</template>

<style scoped>
@import './TheHeader.module.scss';
</style>
