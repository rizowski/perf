const Benchmark = require('benchmark');
const libs = require('../../lib');

const suite = new Benchmark.Suite({ name: 'filter' });

const util = require('../../utils');

const arr = util.createRandomArray();

function even(num){
  return num % 2 === 0;
}

Object.keys(libs)
  .forEach((libName) => {
    const lib = libs[libName];
    suite.add(libName, () => lib.filter(arr, even));
  });

module.exports = suite;
