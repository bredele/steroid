/**
 * Test dependencies.
 */

var stream = require('..');
var through = require('through');
var test = require('tape');


test('should stream simple html element as string', (assert) => {
  stream`<button>hello world!</button>`
    .pipe(writer( result => assert.equal(result, '<button>hello world!</button>')));
});


/**
 * Create writable stream.
 */

function writer(cb) {
  var result = '';
  return through( chunk => {
    result += chunk;
  }, () => {
    cb(result);
  })
}
