const lodash = require('lodash');
const Benchmark = require('benchmark');
const R = require('ramda');
const under = require('underscore');
const lazy = require('lazy.js');
const suite = new Benchmark.Suite({ name: 'map' });

const largerList = [];
for (var i = 0; i<10000; i++) {
  largerList.push(i);
}

function add1(element){
  return element + 1;
}

module.exports = suite
.add('native', () =>{
  largerList.map(add1);
})
.add('lodash.map', () =>{
  lodash.map(largerList, add1);
})
.add('lodash.chain', () =>{
  lodash.chain(largerList).map(add1).value()
})
.add('underscore', () =>{
  under.map(largerList, add1);
})
.add('lazy', () =>{
  lazy(largerList).map(add1).value();
})
.add('ramda', () =>{
  R.map(add1, largerList);
});
