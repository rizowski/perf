const { expect } = require('chai');

const libs = require('../../src/libs');

function createPerson(first, last){
  return {
    first,
    last,
  };
}

describe('map', () =>{
  const arr = [createPerson('bob', 'bill'), createPerson('jill', 'jall'), createPerson('charly', 'chilly')];
  function combine(person){
    const name = `${ person.first } ${ person.last }`;

    return { name };
  }

  Object.keys(libs).forEach((lib) => {
    it(lib, () => {
      const result = libs[lib].map(arr, combine, []);

      expect(result[0].name).to.equal('bob bill');
      expect(result[1].name).to.equal('jill jall');
      expect(result[2].name).to.equal('charly chilly');
    });
  });
});
