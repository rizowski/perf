'use strict';

const lazy = require('lazy.js');

module.exports = {
  filter(list, func){
    return lazy(list).filter(func).value();
  },
  find(list, func){
    return lazy(list).find(func);
  },
  forEach(list, func){
    lazy(list).each(func);
  },
  reduce(list, func, obj){
    return lazy(list).reduce(func, obj);
  },
  sort(list, func){
    return lazy(list).sort(func).value();
  },
  sortBy(list, func){
    return lazy(list).sortBy(func).value();
  },
  map(list, func){
    return lazy(list).map(func).value();
  },
  omit(obj, arr){
    return lazy(obj).omit(arr).value();
  }
};
