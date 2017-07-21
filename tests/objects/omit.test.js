const { expect } = require('chai');
const libs = require('../../src/libs');

describe('omit', () => {
  const obj = {
    name: 'bob',
    age: 'too old',
    single: 'YES!!',
    location: {
      name: 'turkey ville',
      state: 'nowhere',
      zip: '999999'
    },
  };

  const remove = ['age', 'single'];

  Object.keys(libs).forEach((lib) => {
    it(lib, () => {
      const result = libs[lib].omit(obj, remove);

      expect(result).to.not.have.property('age');
      expect(result).to.not.have.property('single');
    });
  });
});
