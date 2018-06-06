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
JSON short non escaped x 2,884,878 ops/sec ±2.25% (95 runs sampled)
this short non escaped x 13,082,026 ops/sec ±1.47% (93 runs sampled)
JSON short full escape 1 x 2,768,607 ops/sec ±1.85% (86 runs sampled)
this short full escape 1 x 3,232,099 ops/sec ±2.39% (90 runs sampled)
JSON short full escape 2 x 2,834,774 ops/sec ±1.97% (90 runs sampled)
this short full escape 2 x 3,523,461 ops/sec ±2.18% (91 runs sampled)
JSON short minimal escape x 2,720,557 ops/sec ±2.80% (89 runs sampled)
this short minimal escape x 3,498,311 ops/sec ±2.38% (91 runs sampled)
JSON longer non escape x 2,227,777 ops/sec ±2.88% (87 runs sampled)
this longer non escape x 7,197,187 ops/sec ±1.22% (95 runs sampled)
JSON longer full escape x 2,228,338 ops/sec ±1.06% (91 runs sampled)
this longer full escape x 2,130,231 ops/sec ±2.14% (90 runs sampled)
JSON longer minimal escape x 2,408,445 ops/sec ±3.36% (93 runs sampled)
this longer minimal escape x 2,006,347 ops/sec ±1.89% (90 runs sampled)

```

The benchmarks ran on Node.js 10.2.1 using a Lenovo T450s with an i7-5600u.
The "longer" benchmarks are worst case benchmarks.

[`JSON.stringify()`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
