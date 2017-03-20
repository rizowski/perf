const lodash = require('../../lib/lodash');
const Benchmark = require('benchmark');
const R = require('ramda');
const under = require('underscore')
const lazy = require('lazy.js');;
const suite = new Benchmark.Suite({ name: 'forEach' });

const largerList = [];
for (var i = 0; i<10000; i++) {
  largerList.push(i);
}

function sub1(element){
  return element - 1;
}

module.exports = suite
.add('native', () =>{
  largerList.forEach(sub1);
})
.add('lodash', () =>{
  lodash.forEach(largerList, sub1);
})
.add('ramda', () =>{
  R.forEach(sub1, largerList);
})
.add('lazy', () =>{
  lazy(largerList).each(sub1);
})
.add('underscore', () =>{
  under.each(largerList, sub1);
});
