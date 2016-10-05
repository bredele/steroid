
/**
 * Example dependencies
 */

var http = require("http")
var fs = require('fs')
var html = require('..')
var promise = require('promises-a')

/**
 * Stream html to http response
 */

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  html`
  ${navigation}
  ${main}
  `.pipe(res)
}).listen(8080)


/**
 * Create navigation
 *
 * @param {Array} links
 * @return {Stream}
 * @api private
 */

function navigation() {
  return html`
  <ul>${async(['klara', 'olivier', 'ellie']).then(link)}</ul>
  `
}


/**
 * Create navigation
 *
 * @param {Array} data
 * @return {Stream}
 * @api private
 */

function link(data) {
  return data.map(item => html`<li><a href="#item">${item}</a></li>`)
}


/**
 * Create main content
 *
 * @return {Stream}
 * @api private
 */

function main() {
  return html`
  <main>
    ${fs.createReadStream(__dirname + '/content.html')}
  </main>
  `
}


/**
 * Return value after 500ms using promises.
 *
 * @param  {Any} value
 * @return {Promise}
 * @api private
 */


 function async(value, bool) {
   var def = promise()
   setTimeout(function() {
 	   if(!bool) def.fulfill(value)
     else def.reject('error')
   }, 10)
   return def.promise
 }
