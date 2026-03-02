<script setup lang="ts">
import { computed } from 'vue'
import GitHubIcon from '@bitrix24/b24icons-vue/social/GitHubIcon'
import Bitrix24Icon from '@bitrix24/b24icons-vue/common-service/Bitrix24Icon'
import TelegramIcon from '@bitrix24/b24icons-vue/outline/TelegramIcon'

const tgLink = computed(() => {
  return (
    typeof window !== 'undefined' && window.navigator?.language.includes('ru')
  )
      ? 'https://t.me/bitrix24apps'
      : 'https://t.me/b24_dev'
})
</script>

<template>
  <Suspense>
    <B24App>
      <B24Header>
        <template #left>
          <RouterLink to="/">
            <AppLogo class="w-auto h-[40px] shrink-0" />
          </RouterLink>

          <TemplateMenu />
        </template>

        <template #right>
          <B24ColorModeButton :content="{ align: 'end', side: 'bottom' }" />

          <B24Button
            :to="tgLink"
            target="_blank"
            aria-label="Telegram"
            color="air-tertiary-no-accent"
            :icon="TelegramIcon"
            size="sm"
          />
          <B24Button
            to="https://github.com/bitrix24/starter-b24ui-vue"
            target="_blank"
            aria-label="GitHub"
            color="air-tertiary-no-accent"
            :icon="GitHubIcon"
            size="sm"
          />
        </template>
      </B24Header>

      <B24Main>
        <RouterView />
      </B24Main>

      <B24Separator :icon="Bitrix24Icon" />

      <B24Footer>
        <template #left>
          <ProseP
            small
            accent="less"
            class="mb-0"
          >
            Built with Bitrix24 UI • &copy; {{ new Date().getFullYear() }}
          </ProseP>
        </template>
      </B24Footer>
    </B24App>
  </Suspense>
</template>
