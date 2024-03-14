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
  <div class="close">
    <button @click="$emit('close')">X</button>
  </div>
  <div>
    <form class="form" @submit.prevent="sumbitForm">
      <input type="text" v-model="getData.name" placeholder="ИМЯ" />
      <input type="text" v-model="getData.phone" placeholder="ТЕЛЕФОН" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style scoped>
@import 'ModalForm.module.scss';
</style>
