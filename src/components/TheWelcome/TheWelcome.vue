<script setup lang="ts">
import { ref } from 'vue'
import PercentItem from '../PercentItem/PercentItem.vue'
import QuantityItem from '../QuantityItem/QuantityItem.vue'
import ModalForm from '../ModalForm/ModalForm.vue'
import arrow from '@/assets/svg/arrow.svg'
import arrowWhite from '@/assets/svg/arrow-white.svg'
import mentor from '@/assets/images/mentor.png'

const modalForm = ref(false)
</script>

<template>
  <div class="welcome-text">
    <div class="info">
      <div class="title">
        <h1>
          СОЗДАЮ УСЛОВИЯ <br />
          ДЛЯ ВАШЕГО УСПЕХА
        </h1>
      </div>
      <div class="subtitle">
        <p>
          Когда ваше время и энергия лучше сфокусированы, стремление к новым <br />возможностям
          становится реальностью, ваш успех зависит от ваших действий
        </p>
      </div>

      <div class="buttons">
        <button @click="modalForm = true" class="btn-primary">
          <span>Записаться на консультацию</span>
          <div class="arrow"><object :data="arrow" type="image/svg+xml"></object></div>
        </button>
        <button class="btn-secondary">
          <span>Бесплатная консультация</span>
          <div class="arrow-white">
            <object :data="arrowWhite" type="image/svg+xml"></object>
          </div>
        </button>
      </div>
    </div>
    <div class="items">
      <QuantityItem />
      <PercentItem />
    </div>
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
