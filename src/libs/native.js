'use strict';

// Adding in array includes
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// if (!Array.prototype.includes) {
//   Object.defineProperty(Array.prototype, 'includes', {
//     value: function(searchElement, fromIndex) {
//       if (this == null) {
//         throw new TypeError('"this" is null or not defined');
//       }
//       var o = Object(this);
//       var len = o.length >>> 0;
//       if (len === 0) {
//         return false;
//       }
//       var n = fromIndex | 0;
//       var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
//       while (k < len) {
//         if (o[k] === searchElement) {
//           return true;
//         }
//         k++;
//       }
//       return false;
//     }
//   });
// }

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
  reduce(list, func, obj){
    return list.reduce(func, obj);
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
    // es2015
    return Object.keys(obj)
      .filter((key) => arr.indexOf(key) < 0)
      .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    // es2016
    // return Object.entries(obj)
    //   .filter(([key]) => !arr.includes(key))
    //   .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
  }
}
