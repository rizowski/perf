const lodash = require('lodash');
const Benchmark = require('benchmark');
const R = require('ramda');
const under = require('underscore');
const lazy = require('lazy.js');
const suite = new Benchmark.Suite({ name: 'sort' });

const util = require('../../utils');

const arr = util.createRandomArray();

function comparison(a, b){
  return a - b;
}

module.exports = suite
.add('native', () =>{
  arr.sort(comparison);
})
.add('lodash', () =>{
  lodash.sortBy(arr, comparison);
})
.add('undescore', () =>{
  under.sortBy(arr, comparison);
})
.add('lazy.sortBy', () =>{
  lazy(arr).sortBy(comparison).value();
})
.add('lazy.sort', () =>{
  lazy(arr).sort().value();
})
.add('ramda.sortBy', () =>{
  R.sortBy(function(a){
    return a;
  }, arr);
})
.add('ramda.sort', () =>{
  R.sort(comparison, arr);
});
