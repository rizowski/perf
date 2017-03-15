# Performance Benchmarks
Performance testing of various things

```js
====================== map ======================
Slow  lazy          4,262 ops/sec   88 samples
      native        5,861 ops/sec   82 samples
      lodash.chain  6,867 ops/sec   87 samples
      lodash.map    8,088 ops/sec   89 samples
      underscore    33,968 ops/sec  89 samples
Fast  ramda         43,196 ops/sec  91 samples

====================== forEach ======================
Slow  native      6,009 ops/sec    77 samples
      lodash      8,005 ops/sec    80 samples
      underscore  8,948 ops/sec    85 samples
      lazy        54,371 ops/sec   81 samples
Fast  ramda       106,156 ops/sec  73 samples

====================== omit ======================
Slow  lodash.omit          233 ops/sec  80 samples
      underscore.omit      276 ops/sec  71 samples
      ramda.omit           289 ops/sec  75 samples
      lazy.omit            442 ops/sec  63 samples
Fast  Custom (no nesting)  627 ops/sec  83 samples

====================== find ======================
Slow  lodash      1,052 ops/sec   78 samples
      underscore  1,180 ops/sec   81 samples
      native      12,031 ops/sec  82 samples
      lazy        13,590 ops/sec  78 samples
Fast  ramda       27,734 ops/sec  82 samples

====================== filter ======================
Slow  lazy       3,181 ops/sec  86 samples
      native     3,553 ops/sec  86 samples
      lodash     4,737 ops/sec  86 samples
      undescore  6,054 ops/sec  89 samples
Fast  ramda      9,993 ops/sec  85 samples

====================== reduce ======================
Slow  lazy       1,575 ops/sec  87 samples
      native     1,707 ops/sec  80 samples
      lodash     1,845 ops/sec  79 samples
      ramda      1,944 ops/sec  86 samples
Fast  undescore  2,103 ops/sec  88 samples

====================== sort ======================
Slow  lodash        0.52 ops/sec  6 samples
      lazy.sortBy   1.18 ops/sec  8 samples
      ramda.sortBy  220 ops/sec   82 samples
      ramda.sort    256 ops/sec   83 samples
      undescore     279 ops/sec   67 samples
      lazy.sort     283 ops/sec   82 samples
Fast  native        647 ops/sec   87 samples
```
