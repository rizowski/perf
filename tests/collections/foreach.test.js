'use strict';

const expect = require('chai').expect;

const libs = require('../../src/libs');

describe('forEach', () => {
  const arr = [{ a: 6 }, { a: 3.5 }, { a: 'no0b' }, { a: false }];
  let count = null;

  function eachFunction (){
    count++;
  }

  beforeEach(() => {
    count = 0;
  });

  Object.keys(libs).forEach((lib) => {
    it(lib, () => {
      const result = libs[lib].forEach(arr, eachFunction);

      expect(count).to.equal(arr.length);
    });
  });
});
