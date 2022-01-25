import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import LoanSlider from '@/components/LoanSlider.vue'

describe('App.vue', () => {
  it('LoanSlider Component existed', () => {
    const wrapper = mount(App)
    const slider = wrapper.findComponent(LoanSlider)
    expect(slider.exists()).toBeTruthy()
  })
})
