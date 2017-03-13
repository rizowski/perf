'use strict';

let _ = require('lodash');
let report = require('./reporting');

let tests = [
  // require('./tests/collections/map'),
  require('./tests/collections/for-each'),
  // require('./tests/objects/omit'),
  // require('./tests/collections/find'),
];

_.forEach(tests, t =>{
  t.on('cycle', function(event) {
    // console.log(event.target.toString());
  })
  .on('complete', function() {
    report.addResult(this);
    // console.log(`===== ${this.filter('fastest').map('name')} =====`);
  })
  .on('error', (e) =>{
    console.error(e.target.error.stack)
    process.exit(1);
  })
  .run({ 'async': process.env.ASYNC || false });
})
