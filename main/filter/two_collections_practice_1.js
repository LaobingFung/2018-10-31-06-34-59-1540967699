'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
  let intersection = new Array();
  for (let element_a of collection_a) {
    if (collection_b.includes(element_a)) {
      intersection.push(element_a);
    }
  }
  return intersection;
}
module.exports = choose_common_elements;