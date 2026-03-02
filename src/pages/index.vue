<script setup lang="ts">
import RocketIcon from '@bitrix24/b24icons-vue/main/RocketIcon'
import PaletteIcon from '@bitrix24/b24icons-vue/outline/PaletteIcon'
import TaskIcon from '@bitrix24/b24icons-vue/button/TaskIcon'
import AppsIcon from '@bitrix24/b24icons-vue/solid/AppsIcon'
import CodeIcon from '@bitrix24/b24icons-vue/common-service/CodeIcon'
import ShieldCheckedIcon from '@bitrix24/b24icons-vue/outline/ShieldCheckedIcon'
import ArrowRightLIcon from '@bitrix24/b24icons-vue/outline/ArrowRightLIcon'
</script>

<template>
  <div>
    <PageHero />

    <B24PageSection
      id="features"
      title="A full-stack foundation for modern Vue apps"
      description="Build on a robust starting point. This template provides everything you need to create production-ready applications with Bitrix24 UI's component system."
      :features="[
        {
          icon: RocketIcon,
          title: 'Production-ready from day one',
          description: 'Pre-configured with TypeScript, ESLint, Tailwind CSS, and Vite. Focus on building features, not setting up tooling.'
        },
        {
          icon: PaletteIcon,
          title: 'Beautiful by default',
          description: 'Powered by Bitrix24 UI\'s design system with automatic dark mode, consistent spacing, and polished components that look great out of the box.',
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
        }
      ]"
    />

    <B24PageSection>
      <B24PageCard
        title="Starting a new Vue project?"
        description="Join the community of developers building with Vue and Bitrix24 UI. Use the ready‑made starter template. Build and ship faster."
        variant="tinted-alt"
        :b24ui="{
          title: 'sm:text-5xl',
          description: 'sm:text-2xl'
        }"
      >
        <template #footer>
          <div class="flex flex-wrap items-center gap-4 mt-2">
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
    </B24PageSection>
  </div>
</template>
