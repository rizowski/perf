const _ = require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const largerList = [];
for (var i = 0; i<10000; i++) {
  largerList.push(i);
}

function add1(element){
  return element + 1;
}

module.exports = suite.add('_.map', () =>{
  _.map(largerList, add1);
})
.add('_(arr).map', () =>{
  _.chain(largerList).map(add1).value()
})
.add('[].map', () =>{
  largerList.map(add1);
});
