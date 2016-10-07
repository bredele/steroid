# Array

When an array is used as a placeholder, Steroid will concatenate and insert the values of every item into this array.

```js
var arr = ['hello ', ' world!']
steroid`<button>${arr}</button>`
```

result:

```html
<button>Hello world!</button>
```

Arrays are especially useful to create lists.

```js
var rainbow = ['red', 'orange', 'yellow']
steroid`<ul>${rainbow.map(color => steroid`<li>${color}</li>`)}</ul>`
```

result:

```html
<ul>
  <li>red</li>
  <li>orange</li>
  <li>yellow</li>    
</ul>
```
