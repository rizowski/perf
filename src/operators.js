const utils = require('../utils');

const min = 10000000;
const max = 100000000;

const firstRand = utils.createRandom(min, max);
const secondRand = utils.createRandom(min, max);

module.exports = {
  add(){
    return firstRand + secondRand;
  },
  subtract(){
    return firstRand - secondRand;
  },
  multiply(){
    return firstRand * secondRand;
  },
  divide(){
    return firstRand / secondRand;
  },
  mod(){
    return firstRand % secondRand;
  }
};
