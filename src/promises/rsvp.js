const rsvp = require('rsvp');

module.exports = {
  newPromise(func){
    return new rsvp.Promise((resolve) => {
      return resolve(func(1));
    });
  }
};
