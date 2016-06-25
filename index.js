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
  arr.forEach((item, idx) => {
    var value = args[idx]
    cp.push(item)
    if(value) cp.push(value instanceof Array ? concat(...value) : value)
  })
  return concat(...cp)
}
