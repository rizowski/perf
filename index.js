'use strict';

let underscore = require('underscore');
let report = require('./reporting');

let tests = underscore.flatten([
  // require('./perf-tests/collections'),
  // require('./perf-tests/objects'),
  require('./perf-tests/naturals/new-promise'),
  // require('./perf-tests/naturals/conditionals')
  // require('./perf-tests/naturals/operators')
]);

underscore.forEach(tests, t => {
  t.on('complete', function() {
    report.runReports(this);
  })
    .on('error', e => {
      console.error(e.target.error.stack);
      process.exit(1);
    })
    .run({ async: process.env.ASYNC || false });
});
