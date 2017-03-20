'use strict';

const expect = require('chai').expect;

const lodash = require('../../lib/lodash');
const ramda = require('../../lib/ramda');
const score = require('../../lib/underscore');

describe('find', () => {
  const arr = [{ a: 6 }, { a: 3.5 }, { a: 'no0b' }, { a: false }];
  function findFunc (a){
    return a.a === 'no0b';
  }

  it('lodash', () => {
    const result = lodash.find(arr, findFunc);
    expect(result).to.eql({ a: 'no0b' });
  });

  it('ramda', () => {
    const result = ramda.find(findFunc, arr);
    expect(result).to.eql({ a: 'no0b' });
  });

  it('underscore', () =>{
    const result = score.find(arr, findFunc);
    expect(result).to.eql({ a: 'no0b' });
  });
});
