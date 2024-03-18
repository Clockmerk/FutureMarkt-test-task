<script setup lang="ts">
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
  <RouterLink v-for="link in links" :key="link[0]" :to="link[1]">{{ link[0] }}</RouterLink>
</template>
