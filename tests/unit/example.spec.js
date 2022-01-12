import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/common/Container.vue'

describe('Container.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 's'
    const wrapper = shallowMount(HelloWorld, {})
    expect(wrapper.text()).toMatch(msg)
  })
})
