'use strict'

function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let intersection = [];
  for (let object_a of collection_a) {
      if (object_b["value"].includes(object_a["key"])) {
        intersection.push(object_a["key"]);
      }
  }
  return intersection;
}
module.exports = collect_same_elements;