import './assets/main.css'
import './plugins/axios.js';
import Menu from "vue-material-design-icons/Menu.vue";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')