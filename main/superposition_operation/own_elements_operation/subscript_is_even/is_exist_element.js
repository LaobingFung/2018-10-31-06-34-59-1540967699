'use strict';

var is_exist_element = function(collection, element) {
  let even_subscript_arr = get_subscript_arr(collection, "even");
  return even_subscript_arr.includes(element);
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
module.exports = is_exist_element;