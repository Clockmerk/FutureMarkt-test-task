<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

const { data } = useQuery({
  queryKey: ['percent'],
  queryFn: async () => (await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')).data
})
</script>

<template>
  <div>
    <p v-if="!data">100+%</p>
    <p v-if="data">{{ Math.round(data.Valute.GBP.Value) }}%</p>
    <p class="main-p">
      увеличение личной <br />
      продуктивности
    </p>
    <p class="second-p">продуктивности</p>
  </div>
</template>
