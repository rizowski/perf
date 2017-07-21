const libs = require('../../lib');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite({ name: 'reduce' });

const util = require('../../utils');

const arr = util.createRandomArray();

function toObject(curr, item){
  curr[item] = true;
  return curr;
}

Object.keys(libs)
  .forEach((libName) => {
    const lib = libs[libName];

    suite.add(libName, () => lib.reduce(arr, toObject, {}))
  });

module.exports = suite;
