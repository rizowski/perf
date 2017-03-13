const lodash = require('lodash');
const Benchmark = require('benchmark');
const R = require('ramda');
const under = require('underscore');
const suite = new Benchmark.Suite;

const util = require('../../utils');

const arr = util.createRandomArray();

module.exports = suite
.add('native.find', () => {
  arr.find(el => el === 8463);
})
.add('lodash.find', () =>{
  lodash.find(arr, 8463);
})
.add('underscore.find', () =>{
  under.find(arr, 8463);
})
.add('ramda.find', () =>{
  R.find((el) => el === 8463)(arr);
});
