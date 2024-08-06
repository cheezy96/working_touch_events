import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'
import Vue3TouchEvents from 'vue3-touch-events'

const vuetify = createVuetify({
    components,
    directives
  })

const app = createApp(App).use(vuetify)

app.use(createPinia())
app.use(router)
app.use(Vue3TouchEvents)

app.mount('#app')
