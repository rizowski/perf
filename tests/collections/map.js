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

suite.add('_.map', () =>{
  _.map(largerList, add1);
})
.add('_(arr).map', () =>{
  _.chain(largerList).map(add1).value()
})
.add('[].map', () =>{
  largerList.map(add1);
})
.on('cycle', function(event) {
  console.log(event.target.toString());
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.on('error', (e) =>{
  console.error(`${e.target} crashed.`);
  process.exit(1);
})
.run({ 'async': process.env.ASYNC || false });;
