<script setup lang="ts">
import PlayLIcon from '@bitrix24/b24icons-vue/outline/PlayLIcon'
import GitHubIcon from '@bitrix24/b24icons-vue/social/GitHubIcon'
import RocketIcon from '@bitrix24/b24icons-vue/main/RocketIcon'
import PaletteIcon from '@bitrix24/b24icons-vue/outline/PaletteIcon'
import TaskIcon from '@bitrix24/b24icons-vue/button/TaskIcon'
import AppsIcon from '@bitrix24/b24icons-vue/solid/AppsIcon'
import CodeIcon from '@bitrix24/b24icons-vue/common-service/CodeIcon'
import ShieldCheckedIcon from '@bitrix24/b24icons-vue/outline/ShieldCheckedIcon'
import ArrowRightLIcon from '@bitrix24/b24icons-vue/outline/ArrowRightLIcon'
</script>

<template>
  <div class="mt-[96px] py-[96px] sm:py-[128px] lg:py-[160px] flex flex-col items-start sm:items-center justify-center gap-[20px]">
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

  <div class="pt-[96px] sm:pt-[128px] lg:pt-[160px] flex flex-col items-center justify-center gap-[20px]">
    <ProseH2 class="sm:text-center text-3xl sm:text-6xl font-semibold mb-0">
      A full-stack foundation for modern Vue apps
    </ProseH2>

    <ProseP class="sm:text-center sm:text-3xl">
      Build on a robust starting point. This template provides everything you need to create production-ready applications with Bitrix24 UI's component system.
    </ProseP>

    <B24PageGrid class="mt-4">
      <B24PageCard
        v-for="(card, index) in [
          {
            icon: RocketIcon,
            title: 'Production-ready from day one',
            description: 'Pre-configured with TypeScript, ESLint, Tailwind CSS, and Vite. Focus on building features, not setting up tooling.'
          },
          {
            icon: PaletteIcon,
            title: 'Beautiful by default',
            description: 'Powered by Bitrix24 UI\'s design system with automatic dark mode, consistent spacing, and polished components that look great out of the box.',
            variant: 'tinted-accent-1'
          },
          {
            icon: TaskIcon,
            title: 'Lightning fast',
            description: 'Optimized with Vite\'s blazing fast HMR, automatic code splitting, and tree-shaking. Your users will love the speed.'
          },
          {
            icon: AppsIcon,
            title: '100+ components included',
            description: 'Access Bitrix24 UI\'s comprehensive component library. From forms to navigation, everything is accessible, responsive, and customizable.',
            variant: 'outline-success'
          },
          {
            icon: CodeIcon,
            title: 'Developer experience first',
            description: 'Auto-imports, hot module replacement, TypeScript support, and Vue DevTools integration. Write less boilerplate and ship more features.'
          },
          {
            icon: ShieldCheckedIcon,
            title: 'Built for scale',
            description: 'Modern Vue 3 architecture with Composition API, proper error handling, and security best practices built-in.',
            variant: 'outline-copilot'
          }
        ]"
        :key="index"
        v-bind="card"
      />
    </B24PageGrid>
  </div>

  <B24PageCard
    class="my-[96px]"
    variant="tinted-alt"
    title="Starting a new Vue project?"
    description="Join the community of developers building with Vue and Bitrix UI. Use the ready‑made starter template. Build and ship faster."
    :b24ui="{
      title: 'sm:text-5xl',
      description: 'sm:text-2xl'
    }"
  >
    <template #footer>
      <div class="flex flex-wrap items-start sm:items-center gap-4 mt-2">
        <B24Button
          label="Start building"
          to="https://bitrix24.github.io/b24ui/docs/getting-started/installation/vue/"
          target="_blank"
          color="air-boost"
        >
          <template #trailing>
            <ArrowRightLIcon class="size-6" />
          </template>
        </B24Button>

        <B24Link
          to="https://github.com/bitrix24/starter-b24ui-vue"
          target="_blank"
          is-action
        >
          View on GitHub
        </B24Link>
      </div>
    </template>
  </B24PageCard>
</template>
