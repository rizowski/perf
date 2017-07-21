
const { expect } = require('chai');

const libs = require('../../lib');

function createPerson(first, last){
  return {
    first,
    last,
  };
}

describe('reduce', () =>{
  const arr = [createPerson('bob', 'bill'), createPerson('jill', 'jall'), createPerson('charly', 'chilly')];
  function combine(arr, person){
    const name = `${ person.first } ${ person.last }`;

    arr.push({ name });
    return arr;
  }

  Object.keys(libs).forEach((lib) => {
    it(lib, () => {
      const result = libs[lib].reduce(arr, combine, []);

      expect(result[0].name).to.equal('bob bill');
      expect(result[1].name).to.equal('jill jall');
      expect(result[2].name).to.equal('charly chilly');
    });
  });
});
