'use strict';

const score = require('underscore');

module.exports = {
  filter(list, func){
  },
  find(arr, func){
    return score.find(arr, func);
  },
  forEach(list, func){
  },
  reduce(list, func){
  },
  sort(list){
    return score.sortBy(list);
  },
  sortBy(list, func){
    return score.sortBy(list, func);
  },
  map(list, func){
  },
  omit(obj, arr){
  }
};
