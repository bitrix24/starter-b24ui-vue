import './assets/css/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import b24UiPlugin from '@bitrix24/b24ui-nuxt/vue-plugin'

import App from './App.vue'

const app = createApp(App)

app.use(createRouter({
  routes: [{ path: '/', component: () => import('./pages/index.vue') }],
  history: createWebHistory()
}))

app.use(b24UiPlugin)

app.mount('#app')
