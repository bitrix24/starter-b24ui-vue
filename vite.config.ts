import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueRouter from 'vue-router/vite'
import bitrix24UIPluginVite  from '@bitrix24/b24ui-nuxt/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueRouter({
      dts: 'src/route-map.d.ts'
    }),
    vue(),
    bitrix24UIPluginVite ({
      colorMode: true,
      colorModeInitialValue: 'light',
      colorModeTypeLight: 'light',
      colorModeStorageKey: 'bitrix24-starter-b24ui-vue'
    })
  ]
})
