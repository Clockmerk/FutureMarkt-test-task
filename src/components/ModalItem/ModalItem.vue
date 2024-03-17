<script setup lang="ts">
import { nextTick, onMounted, ref, unref, watch } from 'vue'
import cross from '@/assets/svg/cross.svg'
import ModalForm from '../ModalForm/ModalForm.vue'
import ModalSuccess from '../ModalSuccess/ModalSuccess.vue'
import { useUserDataStore } from '@/stores/userdata'
import { storeToRefs } from 'pinia'

const store = useUserDataStore()
const { getData } = storeToRefs(store)

watch(
  getData,
  (state) => {
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)

const close = ref()
onMounted(() => {
  nextTick(() => {
    const closeBtn = unref(close)
    if (closeBtn) {
      closeBtn.focus()
    }
  })
})

const $emit = defineEmits(['close'])
</script>

<template>
  <div class="modal-body">
    <div class="close">
      <button ref="close" @click="$emit('close')" @keydown.esc="$emit('close')">
        <img :src="cross" alt="cross" />
      </button>
    </div>

    <template v-if="!getData.submitedName">
      <ModalForm />
    </template>

    <template v-if="getData.submitedName">
      <ModalSuccess />
    </template>
  </div>
  <div class="modal-bg" @click="$emit('close')"></div>
</template>

<style scoped>
@import 'ModalItem.module.scss';
</style>
