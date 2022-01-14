import { mount } from "@vue/test-utils"
import Toast from "@/components/base/Toast"

describe('Toast.vue', () => {

  const successProps = {
    content: 'success'
  }

  const errorProps = {
    content: 'error',
    type: 'error',
  }

  const makeSuccessToast = () => {
    return mount(Toast, {
      propsData: successProps
    })
  }

  const makeErrorToast = () => {
    return mount(Toast, {
      propsData: errorProps
    })
  }


  it('renders props.content when passed', () => {
    const wrapper = makeSuccessToast()
    expect(wrapper.text()).toMatch('success')
  })

  it('adds the error modifier class when passed', () => {
    const wrapper = makeErrorToast()
    expect(wrapper.classes().includes('toast--error')).toBeTruthy()
  })
})
