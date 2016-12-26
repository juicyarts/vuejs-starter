import Vue from 'vue'
import home from '../../../../../src/js/components/routes/home/home.vue'

let mock = {
  title: 'Vuejs-Starter',
  description: 'This application is built with vue.js. It uses Bootstrap(v4-alpha), supports unit-testing vie Karma and Jasmine and e2e testing with nightwatch. <br>Linting for javascript and sass is available via npm commands.<br>'
}

let vm

describe('the Home route component', () => {

  it('should return objects for the view template', () => {
    expect(home.data()).toEqual(mock)
  })

  describe('rendered component', () => {
    beforeEach(() => {
      mock.description = mock.description.replace(/<\/?[^>]+(>|$)/g, '')
      vm = new Vue(home).$mount()
    })
    it('should render the title and description correctly', () => {
      expect(vm.$el.querySelector('.jumbotron .title').textContent).toEqual(mock.title)
      expect(vm.$el.querySelector('.jumbotron .lead.description').textContent).toEqual(mock.description)
    })
  })
})
