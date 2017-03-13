'use strict';

const lodash = require('lodash');
const Benchmark = require('benchmark');
const R = require('ramda');
const under = require('underscore');
const lazy = require('lazy.js');
const suite = new Benchmark.Suite({ name: 'omit' });

let myLargeObject = {};

// Adding in array includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      var o = Object(this);
      var len = o.length >>> 0;
      if (len === 0) {
        return false;
      }
      var n = fromIndex | 0;
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
      while (k < len) {
        if (o[k] === searchElement) {
          return true;
        }
        k++;
      }
      return false;
    }
  });
}

function createRand(floor, roof){
  return Math.floor(Math.random() * roof) + floor;
}

function generateRandomArray(){
  const arr = [];
  for (let i = 0; i<10000; i++) {
    createRand(10000, 0);
  }
  return arr;
}

for (let i = 0; i<10000; i++) {
  myLargeObject[i] = 'hello';
}

const deleteProps = generateRandomArray();


module.exports = suite
// This is a lot faster only because it doesn't check for nested props.
// Lodash and underscore both offer the ability to ignore a.b.c prop
// being { a: { b: { c: { } } } }
.add('Custom (no nesting)', () =>{
  const keys = Object.keys(myLargeObject);
  let myNewObj = {};
  for(let i = 0; i < keys.length; i++){
    const oldKey = keys[i];
    const oldVal = myLargeObject[oldKey];
    if(!deleteProps.includes(oldKey)){
      myNewObj[oldKey] = oldVal;
    }
  }
  return myNewObj;
})
.add('lodash.omit', () =>{
  return lodash.omit(myLargeObject, deleteProps);
})
.add('underscore.omit', () =>{
  under.omit(myLargeObject, deleteProps);
})
.add('lazy.omit', () =>{
  lazy(myLargeObject).omit(deleteProps).value();
})
.add('ramda.omit', () =>{
  return R.omit(deleteProps, myLargeObject);
});
