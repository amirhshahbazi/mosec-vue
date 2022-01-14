import {mount} from "@vue/test-utils"
import SwitchButton from "@/components/base/SwitchButton.vue"

describe('SwitchButton.vue', () => {
    const props = {
        title: 'test switch button'
    }

    const makeWrapper = () => {
        return mount(SwitchButton, {
            propsData: props
        })
    }

    it('title matches props.title', () => {
        const wrapper = makeWrapper()
        expect(wrapper.text()).toMatch('test switch button')
    })

    it('initial state is false', () => {
        const wrapper = makeWrapper()
        expect(wrapper.vm.isActive).toBe(false)
    })

    it('state is changed to true after first click, and changed to false after the second click', () => {
        const wrapper = makeWrapper()

        const toggleButton = wrapper.find('.switch-button')

        toggleButton.trigger('click')
            .then(() => {
                expect(wrapper.vm.isActive).toBe(true)
            }).then(() => {
            toggleButton.trigger('click')
                .then(() => {
                    expect(wrapper.vm.isActive).toBe(false)
                })
        })

    })

    it('toggle method reverses the state of the button', () => {
        const wrapper = makeWrapper()
        wrapper.vm.toggle()
        expect(wrapper.vm.isActive).toBe(true)
        wrapper.vm.toggle()
        expect(wrapper.vm.isActive).toBe(false)
    })

    it('the button emits the value to parent after clicking', () => {
        const wrapper = makeWrapper()
        wrapper.find('.switch-button').trigger('click')
            .then(() => {
                expect(wrapper.emitted()).toHaveProperty('stateChange')
            })
    })
})
