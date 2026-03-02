import './assets/css/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import b24UiPlugin from '@bitrix24/b24ui-nuxt/vue-plugin'

import App from './App.vue'

const app = createApp(App)

const basePath = import.meta.env.BASE_URL || '/'
const router = createRouter({
  routes,
  history: createWebHistory(basePath)
})

app.use(router)
app.use(b24UiPlugin)

app.mount('#app')

if (import.meta.hot) {
  handleHotUpdate(router)
}

