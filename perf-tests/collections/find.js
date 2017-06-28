'use strict';

const Benchmark = require('benchmark');

const util = require('../../utils');
const libs = require('../../lib');

const suite = new Benchmark.Suite({ name: 'find' });

const arr = util.createRandomArray();

Object.keys(libs)
  .forEach((libName) => {
    const lib = libs[libName];
    suite.add(libName, () => lib.find(arr, el => el === 8463))
  });

module.exports = suite;
