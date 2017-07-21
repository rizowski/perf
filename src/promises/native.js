
module.exports = {
  newPromise(func){
    return new Promise((resolve) => {
      return resolve(func(1));
    });
  }
};
