'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  let sub_a_divisible_by_b = new Array();
  for (let element_a of collection_a) {
    for (let element_b of collection_b) {
      if ((element_a % element_b === 0) && !sub_a_divisible_by_b.includes(element_a)) {
        sub_a_divisible_by_b.push(element_a);
      }
    }
  }
  return sub_a_divisible_by_b;
}
module.exports = choose_divisible_integer;