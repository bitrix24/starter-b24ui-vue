<script setup lang="ts">
import { computed } from 'vue'
import GitHubIcon from '@bitrix24/b24icons-vue/social/GitHubIcon'
import Bitrix24Icon from '@bitrix24/b24icons-vue/common-service/Bitrix24Icon'
import TelegramIcon from '@bitrix24/b24icons-vue/outline/TelegramIcon'

const tgLink = computed(() => {
  return (
    // eslint-disable-next-line no-undef
    typeof window !== 'undefined' && window.navigator?.language.includes('ru')
  )
      ? 'https://t.me/bitrix24apps'
      : 'https://t.me/b24_dev'
})
</script>

<template>
  <Suspense>
    <B24App>
      <B24DashboardGroup>
        <B24SidebarLayout
          :use-light-content="false"
          :b24ui="{
            headerWrapper: 'max-w-(--ui-container) mx-auto',
            containerWrapperInner: 'size-auto max-w-(--ui-container) mx-auto'
          }"
        >
          <template #navbar>
            <B24NavbarSection class="inline-flex">
              <RouterLink to="/">
                <AppLogo class="w-auto h-[40px] shrink-0" />
              </RouterLink>
            </B24NavbarSection>

            <B24NavbarSection>
              <TemplateMenu />
            </B24NavbarSection>

            <B24NavbarSpacer />

            <B24NavbarSection class="gap-1 sm:gap-3">
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
            </B24NavbarSection>
          </template>

          <RouterView />

          <template #content-bottom>
            <B24Separator :icon="Bitrix24Icon" />
            <div class="min-w-0 flex-1 max-w-(--ui-container) px-(--content-area-shift) mx-auto mb-4 flex flex-row flex-wrap items-center justify-between gap-4">
              <ProseP
                small
                accent="less"
                class="mb-0"
              >
                Built with Bitrix24 UI • &copy; {{ new Date().getFullYear() }}
              </ProseP>
            </div>
          </template>
        </B24SidebarLayout>
      </B24DashboardGroup>
    </B24App>
  </Suspense>
</template>
