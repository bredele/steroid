/**
 * Module dependencies.
 */

var Read = require('stream').Readable
var through = require('through')


/**
 * Tagged template transforming string into
 * stream.
 *
 * @param {Array} arr
 * @api public
 */

module.exports = function(arr, ...args) {
  var stream = new Read
  var idx = 0
  var end = arr.length
  stream._read = function() {}
  function next() {
    var value = args[idx]
    if(value && value.on && value.pipe) {
      stream.push(arr[idx])
      return value.pipe(through(
        chunk => {
          stream.push(chunk)
        }, function() {
          this.emit('end')
          idx++
          next()
        }
      ))
    }
    if(value instanceof Array) value = value.join(' ')
    stream.push(arr[idx++] + (value || ''))
    if(idx !== end) next()
    else stream.push(null)
  }

  next()
  return stream
}
