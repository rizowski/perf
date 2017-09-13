const Benchmark = require('benchmark');

const ops = require('../../src/operators');
const suite = new Benchmark.Suite({ name: 'Operators' });


Object.keys(ops)
  .forEach((operatorName) => {
    const func = ops[operatorName];

    suite.add(operatorName, () => func());
  });

module.exports = suite;
