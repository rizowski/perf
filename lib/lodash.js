'use strict';

const _ = require('lodash');

module.exports = {
  filter(list, method){
    return _.filter(list, method);
  },
  find(list, method){
    return _.find(list, method);
  },
  forEach(list, method){
    return _.forEach(list, method);
  },
  reduce(list, method){
    return _.reduce(list, method);
  },
  sort(list, method){
    return _.sort(list, method);
  },
  map(list, method){
    return _.map(list, method);
  },
  omit(obj, arr){
    return _.omit(obj, arr);
  }
};
