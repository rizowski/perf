'use strict';

const expect = require('chai').expect;

const libs = require('../../src/libs');

describe('find', () => {
  const arr = [{ a: 6 }, { a: 3.5 }, { a: 'no0b' }, { a: false }];
  function findFunc (a){
    return a.a === 'no0b';
  }

  Object.keys(libs).forEach((lib) => {
    it(lib, () => {
      const result = libs[lib].find(arr, findFunc);
      expect(result).to.eql({ a: 'no0b' });
    });
  });
});
