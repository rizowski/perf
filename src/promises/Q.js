const Q = require('q');

module.exports = {
  newPromise(func){
    return Q.Promise((resolve) => {
      return resolve(func(1));
    });
  }
};
