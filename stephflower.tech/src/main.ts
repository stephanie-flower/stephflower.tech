import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3DraggableResizable from 'vue3-draggable-resizable'

import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(Vue3DraggableResizable)
app.mount('#app')
