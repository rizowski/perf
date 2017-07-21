'use strict';

let underscore = require('underscore');
let report = require('./reporting');

let tests = [
  require('./perf-tests/collections/map'),
  require('./perf-tests/collections/for-each'),
  require('./perf-tests/objects/omit'),
  require('./perf-tests/collections/find'),
  require('./perf-tests/collections/filter'),
  require('./perf-tests/collections/reduce'),
  require('./perf-tests/collections/sort'),
  require('./perf-tests/collections/sort-by'),
];

underscore.forEach(tests, t =>{
  t.on('complete', function() {
    report.runReports(this);
  })
  .on('error', (e) =>{
    console.error(e.target.error.stack)
    process.exit(1);
  })
  .run({ 'async': process.env.ASYNC || false });
})
