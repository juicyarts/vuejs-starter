/**
 * The Home Route represents the welcome page
 * it doesnt have that much logic, it just represents an Oject with some contact definitions
 * @namespace home
 */
export default {
  name: 'sms-header',
  data () {
    return homeData
  }
}

let homeData = {
  title: 'Vuejs-Starter',
  description: 'This application is built with vue.js. It uses Bootstrap(v4-alpha), supports unit-testing vie Karma and Jasmine and e2e testing with nightwatch. <br>Linting for javascript and sass is available via npm commands.<br>'
}
