'use strict';

const expect = require('chai').expect;

const libs = require('../../lib');

describe('filter', () => {
  const arr = [{ a: 6 }, { a: 3.5 }, { a: 'no0b' }, { a: false }];
  function filterFunc (a){
    return typeof a.a === 'number';
  }

  Object.keys(libs).forEach((lib) => {
    it(lib, () => {
      const result = libs[lib].filter(arr, filterFunc);
      expect(result).to.be.an('array');
      expect(result.length).to.equal(2);
      expect(result).to.eql([{ a: 6 }, { a: 3.5 }]);
    });
  });
});
