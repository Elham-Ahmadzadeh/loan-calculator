import { mount,shallowMount } from '@vue/test-utils'
import LoanSlider from '@/components/LoanSlider.vue'
describe('LoanSlider.vue', () => {
  let wrapper
  const min = 20000
  const type = 'range'
  beforeEach(() => {
    wrapper = shallowMount(LoanSlider,{
     propsData: {min, type}
    })
  })
    afterEach(() => {
      wrapper.destroy()
    })
  it('renders LoanAmount in h3', () => {
    const header = wrapper.find('h3')
    const loanMessage = '100000 SEK'
    expect(header.text()).toMatch(loanMessage)
  })
  it('min value exists', () => {
    const input = wrapper.find('input[type="range"]')
    expect (parseInt( input.attributes('min'))).toBeGreaterThanOrEqual(min)
  })
  it('button exists', () => {
     expect (async (warpper) => await  wrapper.find('button').trigger('click'))
  })
})

