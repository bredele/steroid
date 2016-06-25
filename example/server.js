
/**
 * Example dependencies
 */

var http = require("http")
var html = require('..')

/**
 * Stream html to http response
 */

http.createServer((req, res) => {
  let name = 'olivier'
  let classes = ['selected', 'button']
  html`<button class='${classes}'>
    hello <b>${name}</b>
  </button>`.pipe(res)
}).listen(8080)
