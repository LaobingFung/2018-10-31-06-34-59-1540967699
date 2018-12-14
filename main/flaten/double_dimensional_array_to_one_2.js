'use strict';
var double_to_one_repeat = require("../flaten/double_dimensional_array_to_one_1.js");
function double_to_one(collection) {
  //在这里写入代码
  let one_dimen_arr = double_to_one_repeat(collection);
  let one_dimen_arr_no_repeat = choose_no_repeat_number(one_dimen_arr);
  return one_dimen_arr_no_repeat;
}

function choose_no_repeat_number(collection) {
  let no_repeat_collection = [];
  for (let element of collection) {
    if (!no_repeat_collection.includes(element)) {
      no_repeat_collection.push(element);
    }
  }
  return no_repeat_collection;
}
module.exports = double_to_one;