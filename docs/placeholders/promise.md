## Promises

When a promise is used as a placeholder, Steroid will insert the value returned by the promise only once this promise has been fulfilled.

Here's a simple example without Steroid:

```js
var h1 = '<h1>Weather in Calgary is <span>'
fetch('/weather/yyc').then(data => {
  h1 += data + '</span></h1>'
  // return h1 to client
})
```

and with Steroid:

```js
steroid`<h1>Weather in Calgary is ${fetch('/weather/yyc')}</h1>`
```

One of the benefits of Steroid is that it is streaming the result to the client : chunks of data are sent as soon as possible. It does not buffer everything in memory or wait that the promise is resolved to start working hard.

Accepting promises as placeholder does not only make asynchronous calls easier but also allows you to compose DOM element with libraries using promises as their main interface.
