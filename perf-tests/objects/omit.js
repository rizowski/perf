'use strict';

const Benchmark = require('benchmark');
const libs = require('../../src/libs');
const suite = new Benchmark.Suite({ name: 'omit' });

let myLargeObject = {};

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

Object.keys(libs)
  .forEach((libName) => {
    const lib = libs[libName];

    suite.add(libName, () => lib.omit(myLargeObject, deleteProps));
  });


module.exports = suite;
