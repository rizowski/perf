# perf
Performance testing of various things

#### ================ map ================

 - lazy.map | 3,762 ops/sec | 84 samples
 - [].map | 5,647 ops/sec | 78 samples
 - lodash.chain(arr).map | 6,258 ops/sec | 83 samples
 - lodash.map | 7,583 ops/sec | 86 samples
 - underscore.map | 31,491 ops/sec | 85 samples
 - ramda.map | 39,682 ops/sec | 79 samples

 - Fastest: ramda.map | 39,682 ops/sec | 79 samples
 - Slowest: lazy.map | 3,762 ops/sec | 84 samples


#### ================ forEach ================

 - [].forEach | 6,206 ops/sec | 81 samples
 - lodash.forEach | 8,124 ops/sec | 85 samples
 - lazy | 60,244 ops/sec | 91 samples
 - ramda.forEach | 127,254 ops/sec | 87 samples
 - underscore.forEach | 128,317 ops/sec | 85 samples

 - Fastest: underscore.forEach | 128,317 ops/sec | 85 samples
 - Slowest: [].forEach | 6,206 ops/sec | 81 samples


#### ================ omit ================

 - lodash.omit | 232 ops/sec | 81 samples
 - underscore.omit | 248 ops/sec | 70 samples
 - ramda.omit | 303 ops/sec | 79 samples
 - lazy.omit | 502 ops/sec | 79 samples
 - Custom (no nesting) | 633 ops/sec | 86 samples

 - Fastest: Custom (no nesting) | 633 ops/sec | 86 samples
 - Slowest: lodash.omit | 232 ops/sec | 81 samples


#### ================ find ================

 - lodash.find | 1,180 ops/sec | 82 samples
 - underscore.find | 1,299 ops/sec | 82 samples
 - native.find | 9,667 ops/sec | 79 samples
 - lazy.find | 11,483 ops/sec | 86 samples
 - ramda.find | 19,575 ops/sec | 79 samples


 - Fastest: ramda.find | 19,575 ops/sec | 79 samples
 - Slowest: lodash.find | 1,180 ops/sec | 82 samples


#### ================ filter ================

 - lazy | 2,895 ops/sec | 77 samples
 - native | 3,649 ops/sec | 85 samples
 - lodash | 4,792 ops/sec | 87 samples
 - undescore | 5,912 ops/sec | 85 samples
 - ramda | 10,298 ops/sec | 80 samples

 - Fastest: ramda | 10,298 ops/sec | 80 samples
 - Slowest: lazy | 2,895 ops/sec | 77 samples


#### ================ reduce ================

 - native | 1,628 ops/sec | 80 samples
 - lazy | 1,670 ops/sec | 86 samples
 - lodash | 1,683 ops/sec | 78 samples
 - undescore | 1,975 ops/sec | 80 samples
 - ramda | 1,988 ops/sec | 84 samples

 - Fastest: ramda | 1,988 ops/sec | 84 samples
 - Slowest: native | 1,628 ops/sec | 80 samples

#### ================ sort ================
 - lodash | 0.60 ops/sec | 6 samples
 - lazy.sortBy | 1.09 ops/sec | 7 samples
 - ramda.sort | 215 ops/sec | 76 samples
 - lazy.sort | 229 ops/sec | 77 samples
 - undescore | 235 ops/sec | 59 samples
 - native | 654 ops/sec | 83 samples
 - ramda.sortBy | 5,358 ops/sec | 82 samples

 - Fastest: ramda.sortBy | 5,358 ops/sec | 82 samples
 - Slowest: lodash | 0.60 ops/sec | 6 samples
