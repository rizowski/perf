'use strict';

const R = require('ramda');

module.exports = {
  filter(list, func){

  },
  find(arr, funcOrThing){
    return R.find(funcOrThing, arr);
  },
  forEach(list, func){
  },
  reduce(list, func){
  },
  sort(list){
    return R.sort((a) => a,  list);
  },
  sortBy(list, func){
    return R.sortBy(func, list);
  },
  map(list, func){
  },
  omit(obj, arr){
  }

};
