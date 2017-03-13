'use strict';

let _ = require('lodash');

let tests = [
  require('./tests/collections/map'),
  require('./tests/collections/for-each'),
  require('./tests/objects/omit')
];

_.forEach(tests, t =>{
  t.on('cycle', function(event) {
    console.log(event.target.toString());
  })
  .on('complete', function() {
    console.log(`===== ${this.filter('fastest').map('name')} =====`);
  })
  .on('error', (e) =>{
    console.error(e.target.error.stack)
    process.exit(1);
  })
  .run({ 'async': process.env.ASYNC || false });
})
