const Benchmark = require('benchmark');

const util = require('../../utils');
const libs = require('../../lib');

const suite = new Benchmark.Suite({ name: 'sortBy' });
const arr = util.createRandomArray();

function comparison(a, b){
  return a - b;
}

Object.keys(libs)
  .forEach((libName) => {
    const lib = libs[libName];

    suite.add(libName, () => lib.sortBy(arr, comparison))
  });

module.exports = suite;
