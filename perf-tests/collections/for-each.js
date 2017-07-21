const Benchmark = require('benchmark');
const libs = require('../../src/libs');
const suite = new Benchmark.Suite({ name: 'forEach' });

const largerList = [];
for (var i = 0; i<10000; i++) {
  largerList.push(i);
}

function sub1(element){
  return element - 1;
}

Object.keys(libs)
  .forEach((libName) => {
    const lib = libs[libName];
    suite.add(libName, () => lib.forEach(largerList, sub1))
  });

module.exports = suite;
