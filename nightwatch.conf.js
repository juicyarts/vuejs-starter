var path = require('path')
var jar = require('selenium-server-standalone-jar');
var chromedriver = require('chromedriver');

module.exports = (function (settings) {
  settings.selenium.server_path = jar.path
  settings.selenium.cli_args['webdriver.chrome.driver'] = chromedriver.path
  return settings
})(require('./nightwatch.json'))
