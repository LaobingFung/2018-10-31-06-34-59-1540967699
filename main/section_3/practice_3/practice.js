'use strict';
var countSameElement = require("../../section_2/practice_2/practice.js");

function create_updated_collection(collection_a, object_b) {
  let collectionC = countSameElement(collection_a);
  return collectionC.map(function(curObj, curIndex, arr) {
    if(this.includes(curObj.key)) {
      return {key: curObj.key, count: curObj.count - Math.floor(curObj.count / 3)};
    }
    return {key: curObj.key, count: curObj.count};
  }, object_b.value)
}
module.exports = create_updated_collection;

// function create_updated_collection(collection_a, object_b) {
//   //在这里写入代码
//   let collection_c = countSameElement(collection_a);
//   let count_list_b = countSameElement(object_b.value);
//   for (let count_item_b of count_list_b) {
//     for (let count_item_c of collection_c) {
//       if (count_item_b.key === count_item_c.key) {
//         count_item_c.count -= Math.floor(count_item_c.count / 3);
//       }
//     }
//   }
//   return collection_c;
// }