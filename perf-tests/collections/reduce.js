const lodash = require('../../lib/lodash');
const Benchmark = require('benchmark');
const R = require('ramda');
const under = require('underscore');
const lazy = require('lazy.js');
const suite = new Benchmark.Suite({ name: 'reduce' });

const util = require('../../utils');

const arr = util.createRandomArray();

function toObject(curr, item){
  curr[item] = true;
  return curr;
}

module.exports = suite
.add('native', () =>{
  arr.reduce(toObject, {});
})
.add('lodash', () =>{
  lodash.reduce(arr, toObject, {});
})
.add('undescore', () =>{
  under.reduce(arr, toObject, {});
})
.add('lazy', () =>{
  lazy(arr).reduce(toObject, {});
})
.add('ramda', () =>{
  R.reduce(toObject, {}, arr);
})
