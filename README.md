# Steroid

  > [Vomit](http://github.com/bredele/vomit) server side engine

Steroid is a powerful HTML-based templating engine that runs on Node.js and in the browser. It does all the heavy lifting for you and supports streaming, partials, asynchronous rendering (with promises and streams) and more.
[Learn more]() about Steroid and even [Try it Online]()!

[![Build Status](https://travis-ci.org/bredele/html-stream.svg?branch=master)](https://travis-ci.org/bredele/html-stream)

## Usage

No weird syntax or compilation. Steroid is pure HTML and JavaScript and a minute is enough to get your hands on it. 

```js
var html = require('steroid')
var country = 'France'

html`
  <article>
    <h2>Hello ${country}</h2>
    ${fetch('/api/weather?' + country).then(weather)}
  </article>
`.pipe(dest)

function weather(forecast) {
  return html`
  <div class="weather">
    Weather is ${forecast.result}
    <ul>forecast.cities.map(city => {
      return html`<li>${city}</li>`
    })</ul>
  </div>
  `
}
```

Even if Steroid works in your browser, we recommend you to use [vomit](http://github.com/bredele/vomit) to build rich applications in the front end. Vomit uses the same syntax than Steroid but leverage DOM instead of Streams.


## Installation

```shell
npm install -g steroid
```

## Question

For questions, support, bug reports and or feature requests please use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

Steroid is an open source project and would not exist without its community. If you want to participate please make sure to read the contributing guide before making a pull request. If you have any steroid-related project please let everyone know in our wiki.

## Licence

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
