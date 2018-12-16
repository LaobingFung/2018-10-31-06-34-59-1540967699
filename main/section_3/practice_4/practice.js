'use strict';
var count_same_element = require("../../section_2/practice_2/practice.js");

function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let collection_c = count_same_element(collection_a);
  let count_list_b = count_same_element(object_b.value);
  for (let count_item_b of count_list_b) {
    for (let count_item_c of collection_c) {
      if (count_item_b.key === count_item_c.key) {
        count_item_c.count -= Math.floor(count_item_c.count / 3);
      }
    }
  }
  return collection_c;
}
module.exports = create_updated_collection;