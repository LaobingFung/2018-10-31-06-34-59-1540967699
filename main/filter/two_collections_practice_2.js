'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  let sub_a_except_b = new Array();
  for (let element_a of collection_a) {
    if (!collection_b.includes(element_a)) {
      sub_a_except_b.push(element_a);
    }
  }
  return sub_a_except_b;
}
module.exports = choose_no_common_elements;