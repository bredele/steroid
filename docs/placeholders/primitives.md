# Primitives

All primitive types will be coerced into strings by Steroid:
  - String
  - Boolean
  - Number
  - others

## String

```js
var str = 'Nyan'
steroid`<span>${str} the cat!</span>`
```

result:

```html
<span>Nyan the cat!</span>
```

## Boolean

```js
var bool = true
steroid`<span>Is it ${bool} Steroid is awesome?</span>`
```
result:

```html
<span>Is it true Steroid is awesome?</span>
```

## Number

```js
var nb = 1
steroid`<span>Steroid has ${nb} dependency</span>`
```

```html
<span>Steroid has 1 dependency</span>
```
