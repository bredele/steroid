## Streams

Promises are not the only interface to deal with IO bounds. Streams are well-defined interfaces mainly used server side. As explained [before](/docs/getting-started.md) a Steroid template is a stream but it also accepts streams as placeholders:

```js
// read file using the module 'fs'
steroid`<p>${fs.createReadStream(__dirname + '/lorem.txt')}</p>`
```

result:

```js
<p>This is the content of the file lorem.txt</p>
```

  > Take a look at our [examples](/examples) for more use of streams.

The stream placeholder syntax is the same than everything else in Steroid. It opens the door to a multitude of libraries and modules out there using stream as their main interface.

## Event emitter

Because streams use underneath the Event Emitter pattern, Steroid makes possible to use event emitters as placeholder and insert the values returned by `data` events.

```js
var emitter = new Emitter()
steroid`<span>${emitter}</span>`

emitter.emit('data', 'hello ')
emitter.emit('data', 'world!')
```

result:

```html
<span>hello world!</span>
```
