describe('vuejs-starter', function () {
  describe('general', function () {
    it('should have the right page title', (client) => {
      client
        .url('http://localhost:3000')
        .waitForElementVisible('body', 1000)
        .assert.title('vuejs-starter')
        .end()
    })
  })
})
