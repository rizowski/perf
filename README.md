# Performance Benchmarks


### Tests

These tests have been ran and reported on Mac OSX v10.12.3 15 inch 26 GHz Intel Core i7

```js
====================== filter ======================
Fast  rambda      13,988 ops/sec  88 samples
      underscore  6,907 ops/sec   89 samples
      lazy        5,630 ops/sec   87 samples
      lodash      5,550 ops/sec   89 samples
Slow  native      420 ops/sec     86 samples


====================== find ======================
Fast  rambda      20,995 ops/sec  90 samples
      lodash      12,961 ops/sec  83 samples
      native      12,711 ops/sec  83 samples
      underscore  12,395 ops/sec  88 samples
Slow  lazy        12,156 ops/sec  81 samples


====================== forEach ======================
Fast  rambda      114,852 ops/sec  84 samples
      lazy        31,968 ops/sec   87 samples
      underscore  9,197 ops/sec    83 samples
      lodash      7,215 ops/sec    86 samples
Slow  native      1,778 ops/sec    87 samples


====================== map ======================
Fast  rambda      46,314 ops/sec  82 samples
      lodash      7,950 ops/sec   86 samples
      underscore  7,330 ops/sec   83 samples
      lazy        3,995 ops/sec   85 samples
Slow  native      273 ops/sec     79 samples


====================== reduce ======================
Fast  underscore  1,870 ops/sec  84 samples
      rambda      944 ops/sec    84 samples
      lodash      919 ops/sec    87 samples
      lazy        917 ops/sec    85 samples
Slow  native      543 ops/sec    83 samples


====================== sortBy ======================
Fast  rambda      7,730 ops/sec  86 samples
      native      440 ops/sec    79 samples
      underscore  314 ops/sec    79 samples
      lazy        2.65 ops/sec   11 samples
Slow  lodash      0.76 ops/sec   7 samples


====================== sort ======================
Fast  lazy        385 ops/sec   82 samples
      underscore  307 ops/sec   79 samples
      native      218 ops/sec   76 samples
      lodash      115 ops/sec   68 samples
Slow  rambda      3.52 ops/sec  13 samples


====================== omit ======================
Fast  lazy        627 ops/sec    81 samples
      rambda      539 ops/sec    83 samples
      lodash      448 ops/sec    82 samples
      underscore  446 ops/sec    79 samples
Slow  native      42.18 ops/sec  55 samples


====================== new Promise ======================
Fast  forbesPromise  1,519,836 ops/sec  81 samples
      bluebird       1,229,088 ops/sec  78 samples
      rsvp           952,816 ops/sec    80 samples
      native         243,218 ops/sec    79 samples
Slow  Q              27,364 ops/sec     67 samples

```
