const { expect } = require('chai');
const libs = require('../../src/promises');

describe('promises', () => {
  describe(`new Promise`, () => {
    Object.keys(libs)
      .forEach((libName) => {
        const lib = libs[libName];

        it(`${ libName }`, () => {
          return lib.newPromise(function(num){
            expect(num).to.equal(1);
            return 2;
          })
          .then((result) => {
            expect(result).to.equal(2);
          });
        });
      });
    });
});
