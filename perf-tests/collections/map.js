const Benchmark = require('benchmark');

const libs = require('../../src/libs');
const suite = new Benchmark.Suite({ name: 'map' });

const largerList = [];

for (var i = 0; i<10000; i++) {
  largerList.push(i);
}

function add1(element){
  return element * element;
}

Object.keys(libs)
  .forEach((libName) => {
    const lib = libs[libName];

    suite.add(libName, () => lib.map(largerList, add1))
  });

module.exports = suite;
