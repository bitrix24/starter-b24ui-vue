<template>
  <B24DropdownMenu
    :modal="false"
    :items="[
      {
        label: 'Starter',
        to: 'https://bitrix24.github.io/starter-b24ui-vue/',
        checked: true,
        type: 'checkbox'
      },
      {
        label: 'Dashboard',
        to: 'https://bitrix24.github.io/b24ui/docs/components/sidebar-layout/',
        disabled: true,
        slot: 'dashboard'
      },
      {
        type: 'separator'
      },
      {
        label: 'B24 Ui',
        to: 'https://bitrix24.github.io/b24ui/',
        target: '_blank'
      },
      {
        label: 'B24 Js Sdk',
        to: 'https://bitrix24.github.io/b24jssdk/',
        target: '_blank'
      },
      {
        label: 'B24 Icons',
        to: 'https://bitrix24.github.io/b24icons/',
        target: '_blank'
      }
    ]"
    :content="{ align: 'start', side: 'bottom', sideOffset: 4 }"
    :b24ui="{ content: 'w-[200px]', viewport: 'w-[200px]' }"
  >
    <B24Button
      label="Starter"
      use-dropdown
      class="truncate"
    />

    <template #dashboard-trailing>
      <B24Badge size="xs">
        Soon
      </B24Badge>
    </template>
  </B24DropdownMenu>
</template>
