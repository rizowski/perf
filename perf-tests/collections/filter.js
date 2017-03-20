const lodash = require('../../lib/lodash');
const Benchmark = require('benchmark');
const R = require('ramda');
const under = require('underscore');
const lazy = require('lazy.js');
const suite = new Benchmark.Suite({ name: 'filter' });

const util = require('../../utils');

const arr = util.createRandomArray();

function even(num){
  return num % 2 === 0;
}

module.exports = suite
.add('native', () =>{
  arr.filter(even);
})
.add('lodash', () =>{
  lodash.filter(arr, even);
})
.add('undescore', () =>{
  under.filter(arr, even);
})
.add('lazy', () =>{
  lazy(arr).filter(even).value();
})
.add('ramda', () =>{
  R.filter(even, arr);
})
