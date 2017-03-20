const lodash = require('../../lib/lodash');
const Benchmark = require('benchmark');
const R = require('../../lib/ramda');
const under = require('underscore');
const lazy = require('lazy.js');
const suite = new Benchmark.Suite({ name: 'find' });

const util = require('../../utils');

const arr = util.createRandomArray();

module.exports = suite
.add('native', () => {
  arr.find(el => el === 8463);
})
.add('lodash', () =>{
  lodash.find(arr, el => el === 8463);
})
.add('underscore', () =>{
  under.find(arr, el => el === 8463);
})
.add('lazy', () =>{
  lazy(arr).find((el) => el === 8463);
})
.add('ramda', () =>{
  R.find((el) => el === 8463, arr);
});
