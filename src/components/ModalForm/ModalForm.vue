<script setup lang="ts">
import { ref, watch } from 'vue'
import arrowWhite from '@/assets/svg/arrow-white.svg'
import { useUserDataStore } from '@/stores/userdata'
import { storeToRefs } from 'pinia'
import { schema } from '@/lib/yup'

const store = useUserDataStore()
const { getData } = storeToRefs(store)
const { submitData, clearData } = store

watch(
  getData,
  (state) => {
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)

const sumbitForm = () => {
  try {
    schema.validateSync(getData.value)
    submitData({ name: getData.value.name, phone: getData.value.phone })
    clearData()
  } catch (error) {
    errorMessage.value = (error as Error).message
  }
}

const errorMessage = ref('')
</script>

<template>
  <h2>
    Закажите <br />
    обратный звонок
  </h2>
  <template v-if="errorMessage">
    <div class="error">
      <p>{{ errorMessage }}</p>
    </div>
  </template>
  <div>
    <form class="form" @submit.prevent="sumbitForm" novalidate>
      <div class="inputs">
        <input type="text" name="name" v-model="getData.name" placeholder="ИМЯ" autocomplete="on" />
        <input
          type="tel"
          name="phone"
          v-model="getData.phone"
          v-mask="'+7##########'"
          placeholder="ТЕЛЕФОН"
          autocomplete="on"
        />
      </div>
      <div class="checkbox">
        <input type="checkbox" v-model="getData.check" id="check" />
        <label for="check"
          >Согласен на сохранение и обработку <br />
          персональных данных
        </label>
      </div>
      <button class="btn">
        <span>Заказать обратный звонок</span>
        <div class="arrow-white">
          <object :data="arrowWhite" type="image/svg+xml"></object>
        </div>
      </button>
    </form>
  </div>
</template>

<style scoped>
@import './ModalForm.module.scss';
</style>
