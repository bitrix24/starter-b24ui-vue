<script setup lang="ts">
import PlayLIcon from '@bitrix24/b24icons-vue/outline/PlayLIcon'
import GitHubIcon from '@bitrix24/b24icons-vue/social/GitHubIcon'
</script>

<template>
  <div class="px-[22px] lg:px-8 py-[96px] sm:py-[128px] lg:py-[160px] flex flex-col items-start sm:items-center justify-center gap-[20px]">
    <ProseH1 class="sm:text-center text-5xl sm:text-8xl font-bold mb-0">
      Vue Starter Template
    </ProseH1>

    <ProseP class="sm:text-center sm:text-4xl">
      A production-ready starter template powered by Bitrix24 UI. Go from idea to app in minutes.
    </ProseP>

    <div class="mt-2 flex flex-wrap items-start sm:items-center gap-4">
      <B24Button
        label="Get started"
        to="https://bitrix24.github.io/b24ui/docs/getting-started/installation/vue/"
        target="_blank"
        color="air-secondary-accent-2"
        :icon="PlayLIcon"
        size="xl"
      />

      <B24Button
        label="Use this template"
        to="https://github.com/bitrix24/starter-b24ui-vue"
        target="_blank"
        color="air-secondary-accent"
        :icon="GitHubIcon"
        size="xl"
        class="[--ui-btn-icon-space:10px]"
      />
    </div>
  </div>
</template>
