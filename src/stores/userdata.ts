import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserDataStore = defineStore('userData', () => {
  const piniaState = localStorage.getItem('piniaState')
  const userData = reactive(
    piniaState && typeof piniaState === 'string'
      ? JSON.parse(piniaState)
      : {
          name: '',
          phone: '',
          check: false,
          submitedName: '',
          submitedPhone: ''
        }
  )

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
    userData.check = false
  }

  return { getData, submitData, clearData }
})
