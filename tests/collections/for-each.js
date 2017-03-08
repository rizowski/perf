const _ = require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const largerList = [];
for (var i = 0; i<10000; i++) {
  largerList.push(i);
}

function sub1(element){
  return element - 1;
}

module.exports = suite.add('_.forEach', () =>{
  _.forEach(largerList, sub1);
})
.add('[].forEach', () =>{
  largerList.forEach(sub1);
});
