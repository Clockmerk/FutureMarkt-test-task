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
  <header>
    <div><p>ALEX. SHEVTSOV</p></div>
    <nav>
      <ul>
        <RouterLink v-for="link in links" :key="link[0]" :to="link[1]">{{ link[0] }}</RouterLink>
      </ul>
    </nav>
    <div>
      <button>Tel</button>
      <span> 8-345-123-34-45</span>
    </div>
  </header>
</template>

<style scoped>
@import './TheHeader.module.scss';
</style>
