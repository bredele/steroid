Let's start with a quick 5 minutes tutorial of Steroid features.

## Hello World

Let's create a simple web server returning a hello world string using [expressjs]http://expressjs.com/() and Steroid. We created the repo [steroid-gettingstarted](https://github.com/bredele/steroid-gettingstarted)) with everything you need to follow this tutorial. Please type in your terminal:

```shell
# install steroid and express
$ git clone https://github.com/bredele/steroid-gettingstarted.git

# open and install example
$ cd steroid-gettingstarted
$ npm install
```

You've now installed this tutorial dependencies. It is time to see what Steroid is capable of. Open the file called `index.js` and paste the following content:


```js
var server = require('express')()
var steroid = require('steroid')


server.use('*', (req, res) => {
  steroid`<h1>Hello World!</h1>`.pipe(res)
})

server.listen(8000)
```

Type `npm start` in your terminal and open http://localhost:8000 in your browser.

  > if you like to see and understand by yourself, you will find all examples in the file called `server.js`


Returning some HTML is a simple as that.

## Placeholders

Steroid makes possible to substitute what is between `${}` with any kind of valid JavaScript expression. Let's make our example a little bit more configurable and read the content from a file:


```js
var fs = require('fs')
var server = require('express')()
var steroid = require('steroid')


server.use('*', (req, res) => {
  var name = 'World'
  steroid`
    <h1>Hello ${name}!</h1>
    <p>${fs.createReadStream(__dirname + '/lorem.txt')}</p>
  `.pipe(res)
})

server.listen(8000)
```

Expressions between `${}` are called Steroid [Placeholders](/docs/placeholders). Placeholders are expressions made of primitives (strings, numbers, booleans, etc), arrays, objects, promises or even streams.

## Composition

Functions can also be used as placeholders making easy to decompose templates and thus reducing the complexity of your code. Let's decompose our previous example a bit:

```js
var fs = require('fs')
var server = require('express')()
var steroid = require('steroid')


server.use('*', (req, res) => {
  var name = 'World'
  steroid`
    <h1>Hello ${name}!</h1>
    ${article}
  `.pipe(res)
})


function article() {
  var authors = ['Olivier', 'Klara']
  return steroid`
    <p>${fs.createReadStream(__dirname + '/lorem.txt')}</p>
    <ul>
      ${authors.map(author => steroid`<li>${author}</li>`)}
    </ul>
  `
}

server.listen(8000)
```

When a function is used as a placeholder, Steroid will execute that function and substitute the value returned.

The 5 minutes are now gone! We hope you got a gist of what Steroid is capable to do and how easy it is to learn.

## Note

Have you noticed the `.pipe` after the steroid template? It is because Steroid returns a Stream and not a String. Most template engines out there buffer up the entire content of a template into memory before sending anything to the client. Without talking about memory issues, this is poor user experience because users will have to wait for the whole page to be buffered before receiving any content. By using streams, Steroid will server to clients one chunk of HTML at a time immediately as they are received. This is especially useful when dealing with IO bounds.
