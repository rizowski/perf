const Benchmark = require('benchmark');

const libs = require('../../src/conditionals');
const suite = new Benchmark.Suite({ name: 'Conditionals' });


Object.keys(libs)
  .forEach((libName) => {
    const func = libs[libName];

    suite.add(libName, () => func());
  });

module.exports = suite;
