'use strict';
var choose_no_common_elements = require("../../filter/two_collections_practice_2.js");
var choose_even = require("../../filter/choose_even.js");

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  let even_arr = choose_even(collection);
  let odd_arr = choose_no_common_elements(collection, even_arr);
  let map_arr = odd_arr.map(function(cur_value) {
    return cur_value * 3 + 2;
  })
  return  map_arr;
}
module.exports = hybrid_operation_to_uneven;