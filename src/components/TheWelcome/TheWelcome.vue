<script setup lang="ts">
import { ref } from 'vue'
import PercentItem from '../PercentItem/PercentItem.vue'
import QuantityItem from '../QuantityItem/QuantityItem.vue'
import ModalItem from '../ModalItem/ModalItem.vue'
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
          ДЛЯ ВАШЕГО <br class="line-break-title" />
          УСПЕХА
        </h1>
      </div>
      <div class="subtitle">
        <p class="main-p">
          Когда ваше время и энергия лучше сфокусированы, стремление к новым <br />возможностям
          становится реальностью, ваш успех зависит <br class="line-break" />
          от ваших действий
        </p>
        <p class="second-p">
          Ваш успех зависит от ваших <br />
          действий
        </p>
      </div>

      <div class="buttons">
        <button @click="modalForm = true" class="btn-primary">
          <div class="btn-text">
            <span class="span-main">Записаться на консультацию</span>
            <span class="span-second">Записаться</span>
          </div>

          <div class="arrow"><img :src="arrow" alt="arrow" /></div>
        </button>
        <button @click="modalForm = true" class="btn-secondary">
          <div class="btn-text">
            <span class="span-main">Бесплатная консультация</span>
            <span class="span-second">Заказать звонок</span>
          </div>
          <div class="arrow-white">
            <img :src="arrowWhite" alt="arrow" />
          </div>
        </button>
      </div>
    </div>
    <div class="items">
      <QuantityItem />
      <PercentItem />
    </div>
  </div>

  <div class="mentor">
    <img :src="mentor" alt="mentor" />
  </div>

  <Teleport to="body">
    <Transition name="modal-form">
      <div v-if="modalForm" class="modal">
        <ModalItem @close="modalForm = false" />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
@import './TheWelcome.module.scss';
</style>
