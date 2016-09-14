/**
 * Module dependencies.
 */

var concat = require('lineup-stream')


/**
 * Tagged template transforming string into
 * stream.
 *
 * @param {Array} arr
 * @api public
 */

module.exports = function(arr, ...args) {
  var cp = []
  arr.map((item, idx) => {
    var value = args[idx]
    cp.push(item)
    if(value) cp.push(value instanceof Array ? concat(...value) : transform(value))
  })
  return concat(...cp)
}


function transform(value) {
  if(typeof value === 'function') value = value()
  return value
}
