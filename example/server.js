
/**
 * Example dependencies
 */

var http = require("http")
var html = require('..')

/**
 * Stream html to http response
 */

http.createServer((req, res) => {
  html`<button>hello</button>`.pipe(res)
}).listen(8080)
