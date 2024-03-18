<script setup lang="ts">
import { ref } from 'vue'

const currentDate = new Date()
const year = currentDate.getFullYear()
const month = ('0' + (currentDate.getMonth() + 1)).slice(-2)
const day = ('0' + currentDate.getUTCDate()).slice(-2)
const quantity = ref((day + month + year).split('').reduce((a, b) => ~~a + ~~b, 0))
</script>

<template>
  <div>
    <p>{{ quantity }}+</p>
    <p class="main-p">
      техник для <br />
      достижения целей
    </p>
    <p class="second-p">техник</p>
  </div>
</template>
