
/**
 * Example dependencies
 */

var http = require("http")
var fs = require('fs')
var html = require('..')

/**
 * Stream html to http response
 */

http.createServer((req, res) => {
  let name = 'olivier'
  let classes = ['selected', 'button']
  let files = ['article1.html', 'article2.html']
  res.writeHead(200, {"Content-Type": "text/html"});
  html`
  <section>
    <button class='${classes}'>
      hello <b>${name}</b>
    </button>
    <ul>
      ${files.map(item => html`<li>${fs.createReadStream(__dirname + '/' + item )}</li>`)}
    </ul>
  </section>`.pipe(res)
}).listen(8080)
