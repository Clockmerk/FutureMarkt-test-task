import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserDataStore = defineStore('userData', () => {
  const userData = reactive({
    name: '',
    phone: '',
    submitedName: '',
    submitedPhone: ''
  })

  const getData = computed(() => {
    return userData
  })

  function submitData(values: { name: string; phone: string }) {
    userData.submitedName = values.name
    userData.submitedPhone = values.phone
  }

  function clearData() {
    userData.name = ''
    userData.phone = ''
  }

  return { userData, getData, submitData, clearData }
})
