'use strict';

const score = require('underscore');

module.exports = {
  find(list, func){
    return score.find(list, func);
  }
};
