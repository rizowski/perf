# Performance Benchmarks


### Tests

These tests have been ran and reported on Mac OSX v10.12.3 15 inch 26 GHz Intel Core i7

```js
====================== sortBy ======================
Slow  lodash      0.74 ops/sec   6 samples
      lazy        1.04 ops/sec   7 samples
      underscore  165 ops/sec    82 samples
      native      200 ops/sec    82 samples
Fast  rambda      5,605 ops/sec  59 samples


====================== sort ======================
Slow  rambda      2.09 ops/sec   10 samples
      lodash      88.89 ops/sec  56 samples
      native      149 ops/sec    71 samples
      underscore  161 ops/sec    79 samples
Fast  lazy        196 ops/sec    81 samples


====================== forEach ======================
Slow  native      1,684 ops/sec   76 samples
      lazy        9,098 ops/sec   35 samples
      lodash      9,300 ops/sec   73 samples
      rambda      80,668 ops/sec  58 samples
Fast  underscore  81,193 ops/sec  43 samples


====================== omit ======================
Slow  native      40.41 ops/sec  53 samples
      lodash      442 ops/sec    64 samples
      underscore  459 ops/sec    83 samples
      rambda      535 ops/sec    87 samples
Fast  lazy        645 ops/sec    81 samples


====================== map ======================
Slow  native      273 ops/sec     84 samples
      lazy        1,575 ops/sec   81 samples
      underscore  7,374 ops/sec   82 samples
      lodash      7,483 ops/sec   59 samples
Fast  rambda      44,020 ops/sec  66 samples


====================== find ======================
Slow  underscore  14,186 ops/sec  60 samples
      lazy        14,545 ops/sec  91 samples
      native      15,076 ops/sec  91 samples
      rambda      19,086 ops/sec  83 samples
Fast  lodash      19,783 ops/sec  53 samples


====================== filter ======================
Slow  native      381 ops/sec     85 samples
      lazy        2,049 ops/sec   77 samples
      lodash      5,023 ops/sec   66 samples
      underscore  6,545 ops/sec   75 samples
Fast  rambda      13,039 ops/sec  75 samples


====================== reduce ======================
Slow  native      557 ops/sec  85 samples
      lazy        739 ops/sec  88 samples
      lodash      850 ops/sec  88 samples
      underscore  887 ops/sec  87 samples
Fast  rambda      894 ops/sec  81 samples


====================== new Promise ======================
Slow  bluebird       0.31 ops/sec       65 samples
      Q              29,922 ops/sec     66 samples
      native         303,416 ops/sec    74 samples
      rsvp           1,128,774 ops/sec  81 samples
Fast  forbesPromise  1,534,114 ops/sec  79 samples

```
