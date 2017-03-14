# Performance Benchmarks
Performance testing of various things

```js
====================== map ======================
Slow  lazy          4,059 ops/sec   87 samples
      native        5,276 ops/sec   82 samples
      lodash.chain  6,263 ops/sec   83 samples
      lodash.map    7,199 ops/sec   82 samples
      underscore    32,412 ops/sec  88 samples
Fast  ramda         41,030 ops/sec  89 samples

====================== forEach ======================
Slow  native      6,745 ops/sec    87 samples
      lodash      8,349 ops/sec    86 samples
      underscore  9,372 ops/sec    86 samples
      lazy        59,800 ops/sec   86 samples
Fast  ramda       128,332 ops/sec  87 samples

====================== omit ======================
Slow  lodash.omit          234 ops/sec  81 samples
      underscore.omit      293 ops/sec  83 samples
      ramda.omit           329 ops/sec  76 samples
      lazy.omit            543 ops/sec  78 samples
Fast  Custom (no nesting)  610 ops/sec  85 samples

====================== find ======================
Slow  lodash      1,325 ops/sec   87 samples
      underscore  1,378 ops/sec   88 samples
      native      15,969 ops/sec  88 samples
      lazy        18,526 ops/sec  85 samples
Fast  ramda       32,700 ops/sec  86 samples

====================== filter ======================
Slow  lazy       3,233 ops/sec   86 samples
      native     3,934 ops/sec   86 samples
      lodash     4,976 ops/sec   86 samples
      undescore  6,208 ops/sec   90 samples
Fast  ramda      10,306 ops/sec  88 samples

====================== reduce ======================
Slow  lazy       1,722 ops/sec  87 samples
      native     1,897 ops/sec  87 samples
      lodash     2,113 ops/sec  83 samples
      ramda      2,199 ops/sec  86 samples
Fast  undescore  2,483 ops/sec  85 samples

====================== sort ======================
Slow  lodash        0.67 ops/sec   6 samples
      lazy.sortBy   1.44 ops/sec   8 samples
      ramda.sort    222 ops/sec    81 samples
      lazy.sort     254 ops/sec    78 samples
      undescore     268 ops/sec    63 samples
      native        675 ops/sec    86 samples
Fast  ramda.sortBy  4,674 ops/sec  81 samples
```
