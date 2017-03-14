'use strict';

let _ = require('lodash');
let report = require('./reporting');

let tests = [
  require('./tests/collections/map'),
  require('./tests/collections/for-each'),
  require('./tests/objects/omit'),
  require('./tests/collections/find'),
  require('./tests/collections/filter'),
  require('./tests/collections/reduce'),
  require('./tests/collections/sort'),
];

_.forEach(tests, t =>{
  t.on('complete', function() {
    report.runReports(this);
  })
  .on('error', (e) =>{
    console.error(e.target.error.stack)
    process.exit(1);
  })
  .run({ 'async': process.env.ASYNC || false });
})
