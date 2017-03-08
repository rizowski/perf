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

suite.add('_.forEach', () =>{
  _.forEach(largerList, sub1);
})
.add('[].forEach', () =>{
  largerList.forEach(sub1);
})
.on('cycle', function(event) {
  console.log(event.target.toString());
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.on('error', (e) =>{
  console.error(e.target.error.stack);
  process.exit(1);
})
.run({ 'async': process.env.ASYNC || false });
