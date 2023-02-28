# JSON-escape

Fast JSON string escaping in JS. The purpose is to have a very fast check for
strings that do not need escaping while not being much slower than
[`JSON.stringify()`] in case the input requires escaping.

## escapeString(string)

* string {string}
* Returns {string}

```js
const escapeString = require('fast-json-escape')

const input = 'Hello\r\nWorld\t!'

escapeString(input)
// '"Hello\\r\\nWorld\\t!"'
JSON.stringify(input)
// '"Hello\\r\\nWorld\\t!"'
```

## Benchmarks

Running the benchmarks (`npm run benchmark`) show the benefits:

> node ./benchmark

```md
JSON short non escaped x 5,301,888 ops/sec ±2.78% (85 runs sampled)
this short non escaped x 11,970,051 ops/sec ±1.85% (89 runs sampled)
JSON short full escape 1 x 5,372,215 ops/sec ±2.62% (87 runs sampled)
this short full escape 1 x 4,486,695 ops/sec ±3.49% (88 runs sampled)
JSON short full escape 2 x 5,071,447 ops/sec ±3.86% (86 runs sampled)
this short full escape 2 x 4,244,429 ops/sec ±3.63% (87 runs sampled)
JSON short minimal escape x 5,206,647 ops/sec ±3.43% (87 runs sampled)
this short minimal escape x 4,452,424 ops/sec ±2.78% (90 runs sampled)
JSON longer non escape x 604,108 ops/sec ±2.32% (90 runs sampled)
this longer non escape x 910,685 ops/sec ±3.12% (92 runs sampled)
JSON longer full escape x 566,829 ops/sec ±2.07% (90 runs sampled)
this longer full escape x 554,156 ops/sec ±1.01% (91 runs sampled)
JSON longer minimal escape x 666,831 ops/sec ±1.61% (89 runs sampled)
this longer minimal escape x 606,863 ops/sec ±1.76% (90 runs sampled)
```

The benchmarks ran on Node.js 18.14.0 using a Dell Precision 5540, i7-9850H CPU
@ 2.60GHz. The "longer" benchmarks are worst case benchmarks.

[`JSON.stringify()`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
