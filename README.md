# perf
Performance testing of various things

### .Each
```
[].forEach x 6,286 ops/sec ±1.63% (86 runs sampled)
lodash.forEach x 7,977 ops/sec ±2.08% (82 runs sampled)
ramda.forEach x 118,842 ops/sec ±1.95% (80 runs sampled)
lazy x 58,967 ops/sec ±1.53% (85 runs sampled)
underscore.forEach x 114,536 ops/sec ±4.43% (78 runs sampled)
```

### .map

```
[].map x 5,594 ops/sec ±1.26% (83 runs sampled)
lodash.map x 7,515 ops/sec ±1.48% (85 runs sampled)
lodash.chain(arr).map x 6,536 ops/sec ±2.66% (79 runs sampled)
underscore.map x 29,946 ops/sec ±1.86% (82 runs sampled)
lazy.map x 3,845 ops/sec ±1.62% (83 runs sampled)
ramda.map x 38,761 ops/sec ±1.70% (84 runs sampled)
```

### .omit
```
Custom (no nesting) x 532 ops/sec ±2.51% (79 runs sampled)
lodash.omit x 184 ops/sec ±2.79% (74 runs sampled)
underscore.omit x 268 ops/sec ±1.98% (80 runs sampled)
lazy.omit x 479 ops/sec ±1.72% (83 runs sampled)
ramda.omit x 298 ops/sec ±2.37% (69 runs sampled)
```

### .find

```
native.find x 13,993 ops/sec ±1.91% (81 runs sampled)
lodash.find x 1,205 ops/sec ±1.56% (85 runs sampled)
underscore.find x 1,173 ops/sec ±1.44% (84 runs sampled)
lazy.find x 16,246 ops/sec ±1.65% (84 runs sampled)
ramda.find x 31,175 ops/sec ±2.72% (83 runs sampled)
```
