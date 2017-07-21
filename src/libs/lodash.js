'use strict';

const _ = require('lodash');

module.exports = {
  filter(list, func){
    return _.filter(list, func);
  },
  find(list, func){
    return _.find(list, func);
  },
  forEach(list, func){
    return _.forEach(list, func);
  },
  reduce(list, func, obj){
    return _.reduce(list, func, obj);
  },
  sort(list){
    return _.sortBy(list);
  },
  sortBy(list, func){
    return _.sortBy(list, func);
  },
  map(list, func){
    return _.map(list, func);
  },
  omit(obj, arr){
    return _.omit(obj, arr);
  }
};
