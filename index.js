'use strict';

let _ = require('lodash');

let tests = [require('./tests/collections/map'),
require('./tests/collections/for-each')];

_.forEach(tests, t =>{
  t.on('cycle', function(event) {
    console.log(event.target.toString());
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .on('error', (e) =>{
    console.error(`${e.target} crashed.`);
    process.exit(1);
  })
  .run({ 'async': process.env.ASYNC || false });
})
