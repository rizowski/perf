
const { expect } = require('chai');
const libs = require('../../src/libs');
const utils = require('../../utils');

describe('sorting', () => {
  const arr = utils.createRandomArray(10);
  function comparison(a, b) {
    return a - b;
  }

  function ensureOrder(results){
    let prev = -3;

    results.forEach((num) => {
      expect(num).to.satisfy((n) => {
        return n <= num;
      });

      prev = num;
    });
  }

  describe('sort', () => {
    Object.keys(libs).forEach((lib) => {
      it(lib, () => {
        const results = libs[lib].sort(arr);

        ensureOrder(results);
      });
    });
  });

  describe('sortBy', () => {
    Object.keys(libs).forEach((lib) => {
      it(lib, () => {
        const results = libs[lib].sortBy(arr, comparison);

        ensureOrder(results);
      });
    });
  });
});
