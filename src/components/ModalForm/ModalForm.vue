<script setup lang="ts">
import { useUserDataStore } from '@/stores/userdata'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

defineEmits(['close'])

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
  submitData(getData.value)
  clearData()
}
</script>

<template>
  <div class="modal-body">
    <div class="close">
      <button @click="$emit('close')">X</button>
    </div>
    <h2>
      Закажите <br />
      обратный звонок
    </h2>
    <div>
      <form class="form" @submit.prevent="sumbitForm">
        <div>
          <input type="text" v-model="getData.name" placeholder="ИМЯ" />
          <input type="text" v-model="getData.phone" placeholder="ТЕЛЕФОН" />
        </div>
        <div>
          <input type="checkbox" v-model="getData.check" id="check" />
          <label for="check"
            >Согласен на сохранение и обработку <br />
            персональных данных
          </label>
        </div>
        <button type="submit">Заказать обратный звонок</button>
      </form>
    </div>
  </div>
  <div class="modal-bg"></div>
</template>

<style scoped>
@import 'ModalForm.module.scss';
</style>
