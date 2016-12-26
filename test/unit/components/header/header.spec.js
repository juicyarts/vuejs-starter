import Vue from 'vue'
import header from '../../../../src/js/components/header/header.vue'

describe('the header component', () => {

  it('should return the navItems to use them in the view template', () => {
    expect(header.data().navItems).toBeArray()
  })

  it('should render correctly (brand image and navigation should be initialized)', () => {
    var vm = new Vue(header).$mount()
    // expect(vm.$el.querySelector('.nav-item:first-child').textContent).toEqual(header.data().navItems[0].name)
    expect(vm.$el.querySelector('.navbar-brand img').getAttribute('src')).toEqual('src/gfx/brand.svg')
  })

  it('should have a toggleCollapse function', () => {
    var vm = new Vue(header).$mount()
    expect(vm.toggleCollapse).toBeFunction()
  })
})
