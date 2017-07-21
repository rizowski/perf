const Benchmark = require('benchmark');

const libs = require('../../src/promises');
const suite = new Benchmark.Suite({ name: 'new Promise' });

function addOne(x){
  return x + 1;
}

Object.keys(libs)
  .forEach((libName) => {
    const lib = libs[libName];

    suite.add(libName, {
      defer: true,
      fn: (deferred) => {
        return lib.newPromise(addOne)
          .then(() => deferred.resolve())
          .catch(console.error);
      }
    });
  });

module.exports = suite;
