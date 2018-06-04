# JSON-escape

Fast JSON string escaping in JS.

It is faster to escape small JSON strings manually than using native
[`JSON.stringify()`].

The main focus is a very fast check for strings that do not need any escaping
while also improving escaping itself or at least not to go below JSON.stringify.

## Benchmarks

Running the benchmarks (`npm run benchmark`) show the benefits:

> node ./benchmark

```md
JSON short non escaped x 2,853,055 ops/sec ±2.26% (86 runs sampled)
this short non escaped x 12,957,312 ops/sec ±1.77% (92 runs sampled)
JSON short full escape 1 x 2,754,912 ops/sec ±2.51% (89 runs sampled)
this short full escape 1 x 3,362,490 ops/sec ±2.07% (92 runs sampled)
JSON short full escape 2 x 2,821,790 ops/sec ±1.99% (90 runs sampled)
this short full escape 2 x 3,729,729 ops/sec ±2.86% (91 runs sampled)
JSON short minimal escape x 2,812,589 ops/sec ±1.99% (90 runs sampled)
this short minimal escape x 3,723,963 ops/sec ±2.73% (90 runs sampled)
JSON longer non escape x 2,213,878 ops/sec ±3.34% (87 runs sampled)
this longer non escape x 7,291,612 ops/sec ±1.55% (93 runs sampled)
JSON longer full escape x 2,257,123 ops/sec ±1.58% (92 runs sampled)
this longer full escape x 2,091,242 ops/sec ±1.91% (92 runs sampled)
JSON longer minimal escape x 2,439,584 ops/sec ±1.75% (88 runs sampled)
this longer minimal escape x 2,063,352 ops/sec ±1.75% (91 runs sampled)
```

The benchmarks ran on Node.js 10.2.1 using a Lenovo T450s with an i7-5600u.
The "longer" benchmarks are worst case benchmarks.

[`JSON.stringify()`][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify]
