'use strict';

const util = {
  createRandom(roof, floor){
    return Math.floor(Math.random() * roof) + floor;
  },
  createRandomArray(max = 10000){
    const arr = [];
    for (let i = 0; i<max; i++) {
      arr.push(util.createRandom(max, 0));
    }
    return arr;
  }
};

module.exports = util
