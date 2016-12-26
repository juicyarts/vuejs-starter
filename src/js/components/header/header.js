import navItems from '../../config/navItems'

/**
 * The Header component holds the top level navigation
 * it can be fed by an navItems Object which dynamicaly generates navigation items
 * @namespace header
 */
export default {
  name: 'sms-header',
  data () {
    return {
      navItems: navItems
    }
  },
  methods: {
    toggleCollapse: function () {
      if (window.matchMedia('(max-width: 768px)').matches) {
        $('.navbar-toggler').click()
      }
    }
  }
}
