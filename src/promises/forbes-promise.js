const ForbesPromise = require('promise');

module.exports = {
  newPromise(func){
    return new ForbesPromise((resolve) => {
      return resolve(func(1));
    });
  }
};
