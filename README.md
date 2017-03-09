# perf
Performance testing of various things

### .Each
```
lodash.forEach x 8,878 ops/sec ±0.89% (89 runs sampled)
ramda.forEach x 136,012 ops/sec ±1.03% (88 runs sampled)
underscore.forEach x 138,130 ops/sec ±1.27% (86 runs sampled)
[].forEach x 6,781 ops/sec ±0.88% (88 runs sampled)
Fastest is underscore.forEach
```

### .map

```
lodash.map x 8,136 ops/sec ±1.63% (81 runs sampled)
lodash(arr).map x 7,445 ops/sec ±1.65% (84 runs sampled)
underscore.map x 34,728 ops/sec ±1.30% (85 runs sampled)
ramda.map x 44,249 ops/sec ±1.01% (87 runs sampled)
[].map x 6,095 ops/sec ±1.12% (86 runs sampled)
Fastest is ramda.map
```
