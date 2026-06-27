import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppLogo from './AppLogo.vue'

describe('AppLogo', () => {
  it('mounts and renders an svg icon', () => {
    const wrapper = mount(AppLogo)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
  })
})
