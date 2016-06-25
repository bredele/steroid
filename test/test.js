/**
 * Test dependencies.
 */

var stream = require('..')
var through = require('through')
var test = require('tape')


test('should stream simple html element as string', (assert) => {
  assert.plan(1)
  stream`<button>hello world!</button>`
    .pipe(writer( result => assert.equal(result, '<button>hello world!</button>')))
})


test('should stream simple html element as string using interpolation', (assert) => {
  assert.plan(1);
  var name = 'olivier';
  stream`<button>hello ${name}!</button>`
    .pipe(writer( result => assert.equal(result, '<button>hello olivier!</button>')))
})

/**
 * Create writable stream.
 */

function writer(cb) {
  var result = ''
  return through( chunk => {
    result += chunk
  }, () => {
    cb(result)
  })
}
