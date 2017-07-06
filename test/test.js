/**
 * Test dependencies.
 */

var Readable = require('stream').Readable
var stream = require('..')
var through = require('through')
var test = require('tape')


test('should stream html element', (assert) => {
  assert.plan(1)
  stream`<button>hello world!</button>`
    .pipe(writer( result => assert.equal(result, '<button>hello world!</button>')))
})


test('should substitute string', (assert) => {
  assert.plan(1)
  var name = 'olivier'
  stream`<button>hello ${name}!</button>`
    .pipe(writer( result => assert.equal(result, '<button>hello olivier!</button>')))
})

test('should substitute number', (assert) => {
  assert.plan(1)
  var id = 0
  stream`<button>hello ${id}!</button>`
    .pipe(writer( result => assert.equal(result, '<button>hello 0!</button>')))
})

test('should substitute boolean', (assert) => {
  assert.plan(1)
  var bool = true
  stream`<button>Is it ${bool}?</button>`
    .pipe(writer( result => assert.equal(result, '<button>Is it true?</button>')))
})

test('should substitute undefined value with empty strings', (assert) => {
  assert.plan(1)
  var val = undefined
  stream`<button>${val}</button>`
    .pipe(writer( result => assert.equal(result, '<button></button>')))
})

test('should substitute multiple strings', (assert) => {
  assert.plan(1)
  var name = 'olivier'
  var friend = 'klara'
  stream`<button>hello ${name} and <span>${friend}</span></button>`
    .pipe(writer(result => assert.equal(result, '<button>hello olivier and <span>klara</span></button>')))
})

test('should substitute function', (assert) => {
  assert.plan(1)
  var name = function() {
    return 'olivier'
  }
  stream`<button>${name}</button>`
    .pipe(writer(result => assert.equal(result, '<button>olivier</button>')))
})

test('should substitute array', (assert) => {
  assert.plan(1)
  var arr = ['olivier', 'klara']
  stream`<button>hello ${arr}</button>`
    .pipe(writer( result => assert.equal(result, '<button>hello olivierklara</button>')))
})


test('should substitute stream', (assert) => {
  assert.plan(1);
  var name = 'olivier'
  var child = stream`<span>${name}!</span>`
  stream`<button>hello ${child}</button>`
    .pipe(writer(result => assert.equal(result, '<button>hello <span>olivier!</span></button>')))
})


test('should substitute multiple streams', (assert) => {
  assert.plan(1)
  var names = ['olivier', 'klara']
  stream`<ul>${names.map(item => stream`<li>${item}</li>`)}</ul>`
    .pipe(writer(result => assert.equal(result, '<ul><li>olivier</li><li>klara</li></ul>')))
})

test('should return a duplex stream', assert => {
  assert.plan(1)
  reader()
    .pipe(stream(data => {
      return stream`<li>${data}</li>`
    }))
    .pipe(writer(result => assert.equal(result, '<li>hello</li><li>world</li>')))
})


/**
 * Create readable stream.
 */

function reader () {
  var readable = new Readable
  readable._read = function () {}
  readable.push('hello')
  setTimeout(function () {
    readable.push('world')
    readable.push(null)
  }, 300)
  return readable
}


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
