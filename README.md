# perf
Performance testing of various things

================ map ================
Fastest: ramda.map | 53,469 ops/sec | 90 samples
Slowest: [].map | 4,275 ops/sec | 72 samples


================ forEach ================
Fastest: underscore.forEach | 154,175 ops/sec | 84 samples
Slowest: [].forEach | 7,238 ops/sec | 84 samples


================ omit ================
Fastest: Custom (no nesting) | 789 ops/sec | 89 samples
Slowest: lodash.omit | 287 ops/sec | 84 samples


================ find ================
Fastest: ramda.find | 21,569 ops/sec | 67 samples
Slowest: lodash.find | 860 ops/sec | 70 samples


================ filter ================
Fastest: ramda | 5,439 ops/sec | 68 samples
Slowest: lazy | 1,738 ops/sec | 70 samples

================ reduce ================
Fastest: undescore | 2,493 ops/sec | 88 samples
Slowest: ramda | 1,320 ops/sec | 52 samples
