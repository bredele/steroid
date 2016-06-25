/**
 * Module dependencies.
 */

var Read = require('stream').Readable


/**
 * Tagged template transforming string into
 * stream.
 *
 * @param {Array} arr
 * @api public
 */

module.exports = function(arr, ...args) {
  var stream = new Read
  stream._read = function() {}
  arr.forEach((str, index) => {
    var value = args[index]
    if(value instanceof Array) value = value.join(' ')
    stream.push(str + (value || ''))
  })
  stream.push(null)
  return stream
}
