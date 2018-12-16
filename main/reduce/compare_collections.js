'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  // let equal = true;
  let keys_a = Object.getOwnPropertyNames(collection_a);
  let keys_b = Object.getOwnPropertyNames(collection_b);
  for (let i = 0; i < keys_a.length; i++) {
    if (collection_a[keys_a[i]] !== collection_b[keys_b[i]]) {
      return false;
    }
  }
  return true;
}
module.exports = compare_collections;