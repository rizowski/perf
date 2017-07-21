const Bluebird = require('bluebird');

module.exports = {
  newPromise(func){
    return new Bluebird((resolve) => {
      return resolve(func(1));
    });
  }
};
