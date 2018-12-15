'use strict'

function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let intersection = [];
  for (let element_a of collection_a) {
    if (object_b["value"].includes(element_a)) {
      intersection.push(element_a);
    }
  }
  return intersection;
}

module.exports = collect_same_elements;
