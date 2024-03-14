<script setup lang="ts">
import { ref } from 'vue'
import PercentItem from '../PercentItem/PercentItem.vue'
import QuantityItem from '../QuantityItem/QuantityItem.vue'
import ModalForm from '../ModalForm/ModalForm.vue'

const modalForm = ref(false)
</script>

<template>
  <div class="info">
    <h1>Создаю условия для вашего успеха</h1>
    <p>
      Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится
      реальностью, ваш успех зависит от ваших действий
    </p>
    <div>
      <button @click="modalForm = true" class="btn-primary">Записаться на консультацию</button>
      <button class="btn-secondary">Бесплатная консультация</button>
    </div>
  </div>
  <div class="items">
    <QuantityItem />
    <PercentItem />
  </div>

  <Teleport to="body">
    <div v-if="modalForm" class="modal">
      <ModalForm @close="modalForm = false" />
    </div>
  </Teleport>
</template>

<style scoped>
@import './TheWelcome.module.scss';
</style>
