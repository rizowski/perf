'use strict';

const util = {
  createRandom(roof, floor){
    return Math.floor(Math.random() * roof) + floor;
  },
  createRandomArray(){
    const arr = [];
    for (let i = 0; i<10000; i++) {
      arr.push(util.createRandom(10000, 0));
    }
    return arr;
  }
};

module.exports = util
