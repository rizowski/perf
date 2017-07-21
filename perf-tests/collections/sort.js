const Benchmark = require('benchmark');

const util = require('../../utils');
const libs = require('../../src/libs');

const suite = new Benchmark.Suite({ name: 'sort' });
const arr = util.createRandomArray();

Object.keys(libs)
  .forEach((libName) => {
    const lib = libs[libName];

    suite.add(libName, () => lib.sort(arr));
  });

module.exports = suite;
