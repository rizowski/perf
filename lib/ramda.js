'use strict';

const R = require('ramda');

module.exports = {
  find(methodOrThing, arr) {
    return R.find(methodOrThing, arr);
  }
};
