'use strict';
var compute_average = require("../../../reduce/compute_average.js");
var calculate_average = function(collection) {
  let odd_subscript_arr = get_subscript_arr(collection, "odd");
  return compute_average(odd_subscript_arr);
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
module.exports = calculate_average;