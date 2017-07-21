'use strict';

const R = require('ramda');

module.exports = {
  filter(list, func){
    return R.filter(func, list);
  },
  find(arr, funcOrThing){
    return R.find(funcOrThing, arr);
  },
  forEach(list, func){
    R.forEach(func, list);
  },
  reduce(list, func, obj){
    return R.reduce(func, obj, list);
  },
  sort(list){
    return R.sort((a) => a,  list);
  },
  sortBy(list, func){
    return R.sortBy(func, list);
  },
  map(list, func){
    return R.map(func, list);
  },
  omit(obj, arr){
    return R.omit(arr, obj);
  }

};
