/**
 * Test dependencies.
 */

var stream = require('..')
var through = require('through')
var test = require('tape')


test('should stream html element', (assert) => {
  assert.plan(1)
  stream`<button>hello world!</button>`
    .pipe(writer( result => assert.equal(result, '<button>hello world!</button>')))
})


test('should substitute simple string', (assert) => {
  assert.plan(1)
  var name = 'olivier'
  stream`<button>hello ${name}!</button>`
    .pipe(writer( result => assert.equal(result, '<button>hello olivier!</button>')))
});

test('should substitute multiple strings', (assert) => {
  assert.plan(1)
  var name = 'olivier'
  var friend = 'klara'
  stream`<button>hello ${name} and <span>${friend}</span></button>`
    .pipe(writer(result => assert.equal(result, '<button>hello olivier and <span>klara</span></button>')))
})

test('should substitute array', (assert) => {
  assert.plan(1)
  var arr = ['olivier', 'klara']
  stream`<button>hello ${arr}</button>`
    .pipe(writer( result => assert.equal(result, '<button>hello olivier klara</button>')))
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
