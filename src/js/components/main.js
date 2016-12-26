/* eslint no-unused-vars:0 */
// import vue vendor
import Vue from 'vue'
import VueRouter from 'vue-router'

// intialiize plugins
Vue.use(VueRouter)

// import Core Component
import App from './app/app.vue'

// import route components
import Home from './routes/home/home.vue'

/**
 * Main routes of the appliaction
 * The followsing routes are available
 * * /
 *  * home/welcome route
 * @namespace main.router
 */
const routes = [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      component: Home
    }
  ]
}]

// assign defined routes to router Instance
const router = new VueRouter({routes})

/**
 * Main Application Component
 * includes Router configuration and bootstraps appliaction
 * @namespace main
 */
const app = new Vue({router}).$mount('#app')
