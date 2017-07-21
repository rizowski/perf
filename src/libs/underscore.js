'use strict';

const score = require('underscore');

module.exports = {
  filter(list, func){
    return score.filter(list, func);
  },
  find(arr, func){
    return score.find(arr, func);
  },
  forEach(list, func){
    score.forEach(list, func);
  },
  reduce(list, func, obj){
    return score.reduce(list, func, obj);
  },
  sort(list){
    return score.sortBy(list);
  },
  sortBy(list, func){
    return score.sortBy(list, func);
  },
  map(list, func){
    return score.map(list, func)
  },
  omit(obj, arr){
    return score.omit(obj, arr);
  }
};
