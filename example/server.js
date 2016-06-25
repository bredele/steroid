
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
  res.writeHead(200, {"Content-Type": "text/html"});
  html`
  <section>
    <button class='${classes}'>
      hello <b>${name}</b>
    </button>
    <ul>
      ${classes.map(item => html`<li>item</li>`)}
    </ul>
    <article>${fs.createReadStream(__dirname + '/article.html')}</article>
  </section>`.pipe(res)
}).listen(8080)
