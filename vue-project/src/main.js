import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import router from '../src/roter'
import SidebarPlugin from '../store/plugins/mainPlagin'


createApp(App).mount('#app')

const app = createApp(App)

app.use(router)

app.use(SidebarPlugin)

