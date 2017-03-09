const _ = require('lodash');
const Benchmark = require('benchmark');
const R = require('ramda');
const under = require('underscore');
const suite = new Benchmark.Suite;

const largerList = [];
for (var i = 0; i<10000; i++) {
  largerList.push(i);
}

function add1(element){
  return element + 1;
}

module.exports = suite.add('lodash.map', () =>{
  _.map(largerList, add1);
})
.add('lodash(arr).map', () =>{
  _.chain(largerList).map(add1).value()
})
.add('underscore.map', () =>{
  under.map(largerList, add1);
})
.add('ramda.map', () =>{
  R.map(add1, largerList);
})
.add('[].map', () =>{
  largerList.map(add1);
});
