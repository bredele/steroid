# html-stream

Stream HTML in server side and front end using [template strings](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings).

[![Build Status](https://travis-ci.org/bredele/html-stream.svg?branch=master)](https://travis-ci.org/bredele/html-stream)
## Usage

```js
var html = require('html-stream')
var arr = ['olivier', 'klara']

html`
  <section>
    <ul>
      ${arr.map(item => html`<li>${item}</li>`)}
    </ul>
    <footer>${fs.createReadStream(__dirname + '/footer.html')}</footer>
  </section>
`.pipe(dest)
```

This module allows to substitute primitives, functions, promises and streams in your HTML. Composing and returning HTML on server side has never been so easy!

[see examples](https://github.com/bredele/html-stream/tree/master/example)

## Motivations

We've been taught that using template engines to separate concerns is of utmost importance when building a scalable and maintainable web applications. When it is true in principle, templates most of the time address the same concern than the display logic and encourage a poor separation of concerns.

  > I believe that separation of concerns is achieved by encapsulating a section of code with a well-defined interface which can easily be reused like **streams**.

Using streams to define a proper template engine allows you to snap together templates and modules like lego bricks.

Most templates out there have different level of abstraction. They can be new languages and limit the developers by their non-programming nature. As a web developer you know JavaScript and you should not have to learn a new language especially in an era where WEB evolves so fast.

  > Using **template strings** you can create templates in JavaScript with the flexibility it is known for.

If HTML depends on JavaScript, template and display logic should be one unit and separation of concerns should be achieved by your architecture.

## Contribution

For questions, feedback, bug reports and or feature requests please use the issue list of this repo.

[![NPM](https://nodei.co/npm/html-stream.png)](https://nodei.co/npm/html-stream/)

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
