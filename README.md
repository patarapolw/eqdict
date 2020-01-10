# eqdict

[![npm version](https://badge.fury.io/js/eqdict.svg)](https://badge.fury.io/js/eqdict)

A dictionary / Record / JavaScript object can be generated from a string with Equal (=) sign. For example,

- `'a=1 b="x y z"'` => `{ a: '1', b: 'x y z' }`

A base utility for [indent-utils](https://github.com/patarapolw/indent-utils) and [hyperpug](https://github.com/patarapolw/hyperpug)

## Usage

```typescript
import eqdict from 'eqdict'
console.log(eqdict('a=1 b="x y z"'))
```

## Usage on the browser

```html
<script src="https://unpkg.com/eqdict@:version/umd/index.min.js"></script>
<script>
console.log(eqdict('a=1 b="x y z"'))
</script>
```
