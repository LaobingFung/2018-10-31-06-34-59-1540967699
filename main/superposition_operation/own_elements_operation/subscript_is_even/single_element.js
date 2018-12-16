'use strict';

var single_element = function(collection) {
  let odd_subscript_arr = get_subscript_arr(collection, "odd");
  let single_arr = odd_subscript_arr.filter(function(cur_value, cur_i, arr) {
    return arr.indexOf(cur_value) === arr.lastIndexOf(cur_value);
  })
  return single_arr;
}

function get_subscript_arr(collection, script_type) {
  if (script_type === "even") {
    return collection.filter(function(cur_value, cur_i, arr) {
      return cur_i % 2 === 0;
    })
  } else if (script_type === "odd") {
    return collection.filter(function(cur_value, cur_i, arr) {
      return cur_i % 2 === 1;
    })
  }
}
module.exports = single_element;