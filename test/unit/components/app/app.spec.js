import Vue from 'vue'

import app from '../../../../src/js/components/app/app.vue'
import header from '../../../../src/js/components/header/header.vue'

describe('the app component', () => {

  it('should return the correct name', () => {
    expect(app.name).toBe('app')
  })

  it('should include the header component', () => {
    expect(app.components).toEqual({
      'vue-header': header
    })
  })

  it('should render correctly (header and view component should be available)', () => {
    var vm = new Vue(app).$mount()
    expect(vm.$el.querySelector('#vue-wrapper #vue-header')).not.toBe(null)
    expect(vm.$el.querySelector('#vue-wrapper #vue-view')).not.toBe(null)
  })
})
