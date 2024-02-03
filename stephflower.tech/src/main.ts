import { createApp } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'

import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(Vue3DraggableResizable)
app.mount('#app')
