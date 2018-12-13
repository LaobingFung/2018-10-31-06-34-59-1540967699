'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let intersection = [];
  for (let i = 0; i < collection_b.length; i++) {
    for (let j = 0; j < collection_a.length; j++) {
      if (collection_b[i] === collection_a[j]) {
        intersection.push(collection_b[i]);
      }
    }
  }
  return intersection;
}
module.exports = get_intersection;