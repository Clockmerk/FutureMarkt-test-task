import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import VueTheMask from 'vue-the-mask'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app
  .use(VueQueryPlugin)
  .use(createPinia())
  .use(router)
  .use(VueTheMask as any)
//FIXME: исправить проблему типа для VueTheMask
app.mount('#app')
