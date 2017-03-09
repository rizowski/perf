const _ = require('lodash');
const Benchmark = require('benchmark');
const R = require('ramda');
const under = require('underscore');
const suite = new Benchmark.Suite;

const largerList = [];
for (var i = 0; i<10000; i++) {
  largerList.push(i);
}

function sub1(element){
  return element - 1;
}

module.exports = suite.add('lodash.forEach', () =>{
  _.forEach(largerList, sub1);
})
.add('ramda.forEach', () =>{
  R.forEach(sub1, largerList);
})
.add('underscore.forEach', () =>{
  under.each(largerList, sub1);
})
.add('[].forEach', () =>{
  largerList.forEach(sub1);
});
