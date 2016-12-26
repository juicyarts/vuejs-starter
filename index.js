var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder 
var serve = serveStatic('./', {'index': ['index.html', 'index.htm']})

// Create server 
var server = http.createServer(function onRequest (req, res) {
  
  serve(req, res, finalhandler(req, res))
})

console.log('server running at localhost:3000')
// Listen 
server.listen(process.env.PORT || 3000)
