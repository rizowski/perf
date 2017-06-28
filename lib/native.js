'use strict';

module.exports = {
  filter(list, func){
    return list.filter(func);
  },
  find(arr, func){
    return arr.find(func);
  },
  forEach(list, func){
    list.forEach(func);
  },
  reduce(list, func){
    return list.reduce(func);
  },
  sort(list){
    return list.sort();
  },
  sortBy(list, func){
    return list.sort(func);
  },
  map(list, func){
    return list.map(func);
  },
  omit(obj, arr){
    const keys = Object.keys(obj);
    let myNewObj = {};

    for (let i = 0; i < keys.length; i++) {
      const oldKey = keys[i];
      const oldVal = obj[oldKey];

      if(!arr.includes(oldKey)){
        myNewObj[oldKey] = oldVal;
      }
    }

    return myNewObj;
  }
}
